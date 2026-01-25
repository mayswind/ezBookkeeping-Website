---
title: "在 Kubernetes 上运行"
---

# 在 Kubernetes 上运行

对于在 Kubernetes 上的生产环境部署，ezBookkeeping 可以参考以下清单文件进行部署。该示例包含了以下可用于生产环境的设置：
- 部署 ezBookkeeping，并使用持久化存储保存 SQLite 数据库（为简化起见，示例中使用的是 SQLite。但对于生产环境部署，请使用 MySQL 或 PostgreSQL）与用户上传内容
- 配置支持 TLS/HTTPS 的 Ingress

在应用这些 Manifest 文件之前，请确保：
- 创建命名空间 `ezbookkeeping`
- 在 `secret.yaml` 中为密钥生成安全的内容
- 将示例中的 `ezbookkeeping.yourdomain` 替换为您实际的域名
- 确保您的集群中已经安装 Nginx Ingress Controller
- 确保您的集群中已经安装 cert-manager，并配置了 ClusterIssuer（示例中使用 `letsencrypt-cluster`）以自动签发 TLS 证书
- 将示例中的 `my-storage-class` 替换为您的集群实际使用的 StorageClass 名称（如 `longhorn`, `nfs-client`, `ceph-rbd`, `local-storage` 或云服务厂商默认的 StorageClass）

## Kubernetes 清单文件

### secret.yaml

该文件用于存储敏感信息，包括 ezBookkeeping 的会话加密密钥。

```yaml:line-numbers
apiVersion: v1
kind: Secret
metadata:
  name: ezbookkeeping-secret
type: Opaque
data:
  # 需要设置为一个随机字符串，随机字符串可以使用 ezBookkeeping 命令行工具 "ezbookkeeping security gen-secret-key" 或 "openssl rand -base64 32" 生成
  EBK_SECURITY_SECRET_KEY: XXX
```

### ezbookkeeping.yaml

ezBookkeeping 应用的部署配置。

```yaml:line-numbers
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: "ezbookkeeping-data-pvc"
  labels:
    app: "ezbookkeeping"
spec:
  storageClassName: my-storage-class
  selector:
    matchLabels:
      pv-for: "ezbookkeeping-data"
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 9Gi

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: "ezbookkeeping-storage-pvc"
  labels:
    app: "ezbookkeeping"
spec:
  storageClassName: my-storage-class
  selector:
    matchLabels:
      pv-for: "ezbookkeeping-storage"
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 9Gi

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: "ezbookkeeping"
  labels:
    app: "ezbookkeeping"
spec:
  selector:
    matchLabels:
      app: "ezbookkeeping"
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: "ezbookkeeping"
    spec:
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000
      containers:
      - image: "mayswind/ezbookkeeping:latest" # 你可以在这里指定具体的版本号（例如 1.2.0）手动控制升级
        imagePullPolicy: Always # 使用 "latest" 标签时需保持始终拉取镜像，使用具体版本号时可以使用 "IfNotPresent"
        name: "ezbookkeeping"
        env:
        - name: EBK_SECURITY_SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: "ezbookkeeping-secret"
              key: EBK_SECURITY_SECRET_KEY
        - name: EBK_SERVER_PROTOCOL
          value: "http"  # Ingress 处理 HTTPS 卸载
        - name: EBK_SERVER_DOMAIN
          value: "ezbookkeeping.yourdomain"
        - name: EBK_SERVER_ENABLE_GZIP
          value: "true"
        - name: EBK_LOG_MODE
          value: "console" # 日志通过 Kubernetes 的 stdout/stderr 收集，可通过 "kubectl logs" 查看
        ports:
        - containerPort: 8080
          name: ezbookkeeping
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "1Gi"
            cpu: "2"
        volumeMounts:
        - mountPath: "/ezbookkeeping/data" # SQLite 数据库存储
          name: "ezbookkeeping-data"
        - mountPath: "/ezbookkeeping/storage" # 用户上传文件存储
          name: "ezbookkeeping-storage"
      volumes:
        - name: "ezbookkeeping-data"
          persistentVolumeClaim:
            claimName: "ezbookkeeping-data-pvc"
        - name: "ezbookkeeping-storage"
          persistentVolumeClaim:
            claimName: "ezbookkeeping-storage-pvc"

---
apiVersion: v1
kind: Service
metadata:
  name: "ezbookkeeping"
  labels:
    app: "ezbookkeeping"
spec:
  clusterIP: None
  ports:
    - port: 8080
  selector:
    app: "ezbookkeeping"
```

### ingress.yaml

Ingress 配置用于处理外部的 HTTPS 请求，并由 cert-manager 自动签发 TLS 证书。

```yaml:line-numbers
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: "ezbookkeeping-ingress"
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-cluster
    nginx.ingress.kubernetes.io/limit-rps: "25"
    nginx.ingress.kubernetes.io/proxy-buffer-size: "16k"
spec:
  ingressClassName: nginx
  rules:
  - host: "ezbookkeeping.yourdomain"
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: "ezbookkeeping"
            port:
              number: 8080
  tls:
  - hosts:
    - "ezbookkeeping.yourdomain"
    secretName: "ezbookkeeping-tls-secret"
```

## 部署应用

```shell
kubectl apply -f secret.yaml -n "ezbookkeeping"
kubectl apply -f ezbookkeeping.yaml -n "ezbookkeeping"
kubectl apply -f ingress.yaml -n "ezbookkeeping"
```
