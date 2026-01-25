---
title: "Run on Kubernetes"
---

# Run on Kubernetes

For production deployments in Kubernetes, ezBookkeeping can be deployed referring to the following manifests. This example demonstrates a production-ready setup with:
- ezBookkeeping deployment with persistent storages for SQLite database (For simplicity, the example uses SQLite. But for production deployments, please use MySQL or PostgreSQL instead) and user uploads
- Ingress configuration with TLS/HTTPS support

Before applying these manifests, make sure to:
- Create a namespace `ezbookkeeping`
- Generate secure values for secrets in `secret.yaml`
- Update `ezbookkeeping.yourdomain` with your actual domain name
- Ensure you have Nginx Ingress Controller installed in your cluster
- Ensure you have cert-manager installed with a configured ClusterIssuer (`letsencrypt-cluster` in this example) for automatic TLS certificate provisioning
- Replace `my-storage-class` with the StorageClass name you use in your cluster (e.g., `longhorn`, `nfs-client`, `ceph-rbd`, `local-storage`, or your cloud provider's default storage class)

## Kubernetes Manifests

### secret.yaml

Contains sensitive data including ezBookkeeping's secret key for session encryption.

```yaml:line-numbers
apiVersion: v1
kind: Secret
metadata:
  name: ezbookkeeping-secret
type: Opaque
data:
  # Set this to a random string. You can generate one using the ezBookkeeping CLI command "ezbookkeeping security gen-secret-key" or "openssl rand -base64 32"
  EBK_SECURITY_SECRET_KEY: XXX
```

### ezbookkeeping.yaml

ezBookkeeping application Deployment.

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
      - image: "mayswind/ezbookkeeping:latest" # you can set specific version here (e.g. 1.2.0) for manual update control
        imagePullPolicy: Always # Required for "latest" tag to ensure fresh image pulls. Use "IfNotPresent" for specific versions
        name: "ezbookkeeping"
        env:
        - name: EBK_SECURITY_SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: "ezbookkeeping-secret"
              key: EBK_SECURITY_SECRET_KEY
        - name: EBK_SERVER_PROTOCOL
          value: "http"  # Ingress will handle HTTPS termination
        - name: EBK_SERVER_DOMAIN
          value: "ezbookkeeping.yourdomain"
        - name: EBK_SERVER_ENABLE_GZIP
          value: "true"
        - name: EBK_LOG_MODE
          value: "console" # Logs are collected from stdout/stderr in Kubernetes and can be accessed via "kubectl logs"
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
        - mountPath: "/ezbookkeeping/data" # SQLite database storage
          name: "ezbookkeeping-data"
        - mountPath: "/ezbookkeeping/storage" # User uploads storage
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

Ingress configuration for external HTTPS access with automatic TLS certificate provisioning via cert-manager.

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

## Apply manifests

```shell
kubectl apply -f secret.yaml -n "ezbookkeeping"
kubectl apply -f ezbookkeeping.yaml -n "ezbookkeeping"
kubectl apply -f ingress.yaml -n "ezbookkeeping"
```
