---
layout: default
title: Installation
nav_order: 2
permalink: /installation
---

# Installation
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Ship with docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

**Latest release image**

[![Latest release image](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

    mayswind/ezbookkeeping:latest

**Release image with specific version**

    mayswind/ezbookkeeping:{version}  

**Latest snapshot image**

    mayswind/ezbookkeeping:latest-snapshot

### Run docker image

Example:

    $ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping

After executing this command, ezBookkeeping will use the default configuration to run in backend, and listen on port `8080`. 

The default paths in container:

* **Configuration File**: `/ezbookkeeping/conf/ezbookkeeping.ini`
* **Database File (for `sqlite3` database)**: `/ezbookkeeping/data/ezbookkeeping.db`
* **Log File**: `/ezbookkeeping/log/ezbookkeeping.log`
* **Object Storage Root Path (for `local_filesystem` object storage)**: `/ezbookkeeping/storage/`

### Store data persistently

The default database type is `sqlite3`, and the database file is stored in `/ezbookkeeping/data/ezbookkeeping.db` in container.  
If you want to continue to use `sqlite3` as database and store these data persistently, you can use Docker persistent volume or mount a host path to container.  
In addition, the default object storage uses the local file system, and the default path is `/ezbookkeeping/storage/`. If you use the local file system to store object data (e.g. pictures uploaded by users), you also need to use Docker persistent volume or mount a host path to container.  

#### Run container with persistent volume

    # Create persistend volume
    $ docker volume create ezbookkeeping-data
    $ docker volume create ezbookkeeping-storage

    # Run container with persistent volume
    $ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data -v ezbookkeeping-storage:/ezbookkeeping/storage mayswind/ezbookkeeping

#### Run container with mounting host path

    # Create data directory and modify UID/GID in host
    $ mkdir -p /var/lib/ezbookkeeping/data
    $ mkdir -p /var/lib/ezbookkeeping/storage
    $ chown 1000:1000 /var/lib/ezbookkeeping/data
    $ chown 1000:1000 /var/lib/ezbookkeeping/storage

    # Run container with mounting host path
    $ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping/data:/ezbookkeeping/data -v /var/lib/ezbookkeeping/storage:/ezbookkeeping/storage mayswind/ezbookkeeping

The user id (UID) and group id (GID) used for running ezBookkeeping is both `1000`, so you should make sure the directories ezBookkeeping use can be read or write by UID/GID `1000` when you want to change directories or mount volumes.

### Customize configuration

If you want to replace the configuration file, you can mount the custom configuration file to `/ezbookkeeping/conf/ezbookkeeping.ini`, or change the configuration path by environment variable `EBK_CONF_PATH`.

If you just want to modify some options, you can just use environment variable to set these value.
All options in the configuration file can be overridden using environment variables with the following name: `EBK_{SECTION_NAME}_{OPTION_NAME}`. In addition, ezBookkeeping supports loading specific configuration values from designated files via environment variables. For more details, see [Configuration](/configuration).

**ATTENTION**:  
Before you deploy to production, you must generate a random string and set it to `secret_key` to keep your user data safe. You can get a random secret key by executing `ezbookkeeping security gen-secret-key`.

In addition, you also need to set the `domain` in the settings to the domain name you actually access, otherwise the url in the email, as well as the user avatar, transaction picture and other url will be incorrect. If the protocol or port you actually access is different from the ezBookkeping configuration, you also need to modify `root_url` to the actual access address (for example, using Nginx as the reverse proxy).

For more information, please visit [Configuration](/configuration).

### Use docker-compose

A full production deployment example (using `mysql` as database):

```
version: "2"
services:
  ezbookkeeping:
    image: mayswind/ezbookkeeping
    container_name: ezbookkeeping
    hostname: "ezbookkeeping"
    ports:
      - "8080:8080"
    environment:
      - "EBK_SERVER_DOMAIN=ezbookkeeping.yourdomain"
      - "EBK_SERVER_ENABLE_GZIP=true"
      - "EBK_DATABASE_TYPE=mysql"
      - "EBK_DATABASE_HOST=mysql:3306"
      - "EBK_DATABASE_NAME=ezbookkeeping"
      - "EBK_DATABASE_USER=ezbookkeeping"
      - "EBK_DATABASE_PASSWD=ezbookkeeping"
      - "EBK_LOG_MODE=file"
      - "EBK_SECURITY_SECRET_KEY=its_should_be_a_random_string"
    volumes:
      - "/etc/localtime:/etc/localtime:ro"
      - "/var/lib/ezbookkeeping/storage:/ezbookkeeping/storage" # make sure the UID:GID is 1000:1000
      - "/var/log/ezbookkeeping:/ezbookkeeping/log" # make sure the UID:GID is 1000:1000
```

If you're interested, you can take a look at the [docker-compose file](demo/docker-compose.yml) and [nginx configuration file](demo/ezbookkeeping.demo.conf) behind [https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net).

### Installing with 1Panel

> For 1Panel installation instructions, see [https://1panel.cn/docs/v2/installation/online_installation/](https://1panel.cn/docs/v2/installation/online_installation/).

#### Installing ezBookkeeping

Log in to 1Panel, go to the "App Store:", search for "ezBookkeeping", and click "Install".

![How to install ezBookkeeping in 1Panel](images/how_to_install_ezBookkeeping_in_1Panel.png)

> During installation, configure the following parameters according to your needs:
>
> * "Version": Choose the latest stable version
> * "HTTP Port": Default is `8080`, can be changed if needed
> * "Advanced Settings": Optionally enable "External Port Access"
>
> You can complete the installation using the "default configuration", or adjust it as required.

![How to fill in parameters when installing ezBookkeeping in 1Panel](images/how_to_fill_in_parameters_when_installing_ezBookkeeping_in_1Panel.png)

The ezBookkeeping instance installed via 1Panel uses `sqlite3` as its database and is fully configured through the `ezbookkeeping.ini` configuration file.

The configuration file is located in the `conf` folder within the application’s installation directory.
For more information, please visit the [Configuration](/configuration) page.

#### Using ezBookkeeping

After installation, go to the "Installed Apps" page and click "Open" to access the ezBookkeeping "WebUI".

> Before using, it is recommended to set the "default access address" in the "Panel Settings" page.

## Kubernetes Deployment



secret.yaml:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: ebk-secret
type: Opaque
data:
  # echo -n "secret-value" | base64
  POSTGRES_PASSWORD: XXX
  EBK_SECURITY_SECRET_KEY: XXX
```

pg.yaml:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: "pg-data-pv"
  labels:
    pv-for: "pg-data"
spec:
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - "my-server-hostname"
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  local:
    path: "/mnt/pg-data"  # change to your actual path

---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: "pg"
spec:
  serviceName: "pg"
  replicas: 1
  selector:
    matchLabels:
      app: "pg"
  template:
    metadata:
      labels:
        app: "pg"
    spec:
      nodeSelector:
        kubernetes.io/hostname: "my-server-hostname"
      containers:
        - name: postgres
          image: postgres:18
          env:
          - name: POSTGRES_USER
            value: "ezbookkeeping"
          - name: POSTGRES_DB
            value: "ezbookkeeping"
          - name: POSTGRES_PASSWORD
            valueFrom:
              secretKeyRef:
                name: "ebk-secret"
                key: POSTGRES_PASSWORD
          ports:
          - containerPort: 5432
          volumeMounts:
          - mountPath: /var/lib/postgresql
            name: "pg-data"
          resources:
            requests:
              memory: "250Mi"
              cpu: "100m"
            limits:
              memory: "2Gi"
              cpu: "2"
  volumeClaimTemplates:
    - metadata:
        name: "pg-data"
      spec:
        storageClassName: local-storage
        selector:
          matchLabels:
            pv-for: "pg-data"
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 10Gi

---
apiVersion: v1
kind: Service
metadata:
  name: "pg" 
spec:
  clusterIP: None    
  selector:
    app: "pg"
  ports:
    - port: 5432
      targetPort: 5432

```

ebk.yaml:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: "ebk-storage-pv"
  labels:
    pv-for: "ebk-storage"
spec:
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - "my-server-hostname"
  capacity:
    storage: 9Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  local:
    path: "/mnt/ebk-storage"  # change to your actual path

---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: "ebk-logs-pv"
  labels:
    pv-for: "ebk-logs"
spec:
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - "my-server-hostname"
  capacity:
    storage: 9Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  local:
    path: "/mnt/ebk-logs"  # change to your actual path

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: "ebk-storage-pvc"
  labels:
    app: "ebk"
spec:
  storageClassName: local-storage
  selector:
    matchLabels:
      pv-for: "ebk-storage"
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 9Gi

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: "ebk-logs-pvc"
  labels:
    app: "ebk"
spec:
  storageClassName: local-storage
  selector:
    matchLabels:
      pv-for: "ebk-logs"
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 9Gi

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: "ebk"
  labels:
    app: "ebk"
spec:
  selector:
    matchLabels:
      app: "ebk"
      tier: frontend
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: "ebk"
        tier: frontend
    spec:
      nodeSelector:
        kubernetes.io/hostname: "my-server-hostname"
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000
      containers:
      - image: "mayswind/ezbookkeeping:1.2.0" # perform updates manually by changing the image tag
        name: "ebk"
        env:
        - name: EBK_SECURITY_SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: "ebk-secret"
              key: EBK_SECURITY_SECRET_KEY
        - name: EBK_SERVER_PROTOCOL
          value: "http"
        - name: EBK_SERVER_DOMAIN
          value: "ebk.my-domain.com"
        - name: EBK_SERVER_ENABLE_GZIP
          value: "true"
        - name: EBK_DATABASE_TYPE
          value: "postgres"
        - name: EBK_DATABASE_HOST
          value: "ebk-pg:5432"
        - name: EBK_DATABASE_NAME
          value: "ezbookkeeping"
        - name: EBK_DATABASE_USER
          value: "ezbookkeeping"
        - name: EBK_DATABASE_PASSWD
          valueFrom:
            secretKeyRef:
              name: "ebk-secret"
              key: POSTGRES_PASSWORD
        - name: EBK_LOG_MODE
          value: "file"
        - name: EBK_USER_ENABLE_REGISTER
          value: "true"  # or "false" to disable user registration after first admin user created
        ports:
        - containerPort: 8080
          name: ezbookkeeping
        volumeMounts:
        - mountPath: "/ezbookkeeping/storage"
          name: "ebk-storage"
        - mountPath: "/ezbookkeeping/log"
          name: "ebk-logs"
      volumes:
        - name: "ebk-storage"
          persistentVolumeClaim:
            claimName: "ebk-storage-pvc"
        - name: "ebk-logs"
          persistentVolumeClaim:
            claimName: "ebk-logs-pvc"


---
apiVersion: v1
kind: Service
metadata:
  name: "ebk"
  labels:
    app: "ebk"
spec:
  clusterIP: None
  ports:
    - port: 8080
  selector:
    app: "ebk"
    tier: frontend
```

ingress.yaml:

```yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: "ebk-ingress"
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-cluster
    nginx.ingress.kubernetes.io/limit-rps: "25"
    nginx.ingress.kubernetes.io/proxy-buffer-size: "16k"
spec:
  ingressClassName: nginx
  rules:
  - host: "ebk.my-domain.com"
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: "ebk"
            port:
              number: 8080
  tls:
  - hosts:
    - "ebk.my-domain.com"
    secretName: "ebk-tls-secret"
```

### Apply manifests

```bash
kubectl apply -f secret.yaml -n "my-namespace"
kubectl apply -f pg.yaml -n "my-namespace"
kubectl apply -f ebk.yaml -n "my-namespace"
kubectl apply -f ingress.yaml -n "my-namespace"
```


## Install from binary
Latest release: 

[![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

Download and extract the package, and execute the following command:

    $ ./ezbookkeeping server run

After executing this command, ezBookkeeping will startup with the default configuration, and listen on port `8080`. If you want to modify configurations, you can use `--conf-path` parameter to specify a custom configuration path or you can modify `conf/config.ini` file directly. For more information, please visit [Configuration](/configuration).

If you have `systemd` and you want to use `systemd` to manage ezBookkeeping, you can create a service unit configuration in `/lib/systemd/system` (Debian/Ubuntu) or `/usr/lib/systemd/system` (CentOS). For example, you can download the [Sample Configuration](https://github.com/mayswind/ezbookkeeping/blob/main/etc/systemd/ezbookkeeping.service) to `/lib/systemd/system/ezbookkeeping.service`, and create a user and a group named `ezbookkeeping`, and modify the path in the configuration according to the actual path.

Then you can start ezBookkeeping by following command:

    $ systemctl start ezbookkeeping

And make ezBookkeeping automatically starts on boot:

    $ systemctl enable ezbookkeeping

## Reverse proxy configuration
If you want to use Nginx as the reverse proxy, you can refer to the following configuration. For more information about Nginx, please refer to [Nginx documentation](https://nginx.org/en/docs/).

### ezBookkeeping in the ROOT path of domain

```
upstream ezbookkeeping-upstream {
    server 127.0.0.1:8080;
}

server {
    listen 80;
    listen [::]:80;
    server_name ezbookkeeping.yourdomain;

    return 301 https://$server_name$request_uri;
}

server {
    listen 443      ssl;
    listen [::]:443 ssl;
    server_name ezbookkeeping.yourdomain;

    location / {
        proxy_pass http://ezbookkeeping-upstream;

        proxy_redirect   off;
        proxy_set_header Host            $host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Real-Port     $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

### ezBookkeeping in the sub path of domain (e.g. `/ezbookkeeping`)

```
upstream ezbookkeeping-upstream {
    server 127.0.0.1:8080;
}

server {
    listen 80;
    listen [::]:80;
    server_name yourdomain;

    location /ezbookkeeping {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443      ssl;
    listen [::]:443 ssl;
    server_name yourdomain;

    location = /ezbookkeeping {
        return 301 /ezbookkeeping/;
    }

    location ~ ^/ezbookkeeping/(desktop|mobile)/$ {
        return 301 /ezbookkeeping/$1;
    }

    location /ezbookkeeping/ {
        rewrite ^/ezbookkeeping/(.*) /$1 break;
        proxy_pass http://ezbookkeeping-upstream;

        proxy_redirect   off;
        proxy_set_header Host            $host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Real-Port     $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

In addition, if you want to access ezBookkeeping via sub path, you also need to set the `root_url` option in the [configuration](/configuration), for example, it needs to be set to `https://%(domain)s:{your_nginx_port}/ezbookkeeping/`.
