---
title: "Reverse proxy configuration"
---

# Reverse proxy configuration

If you want to use Nginx as the reverse proxy, you can refer to the following configuration. For more information about Nginx, please refer to [Nginx documentation](https://nginx.org/en/docs/).

## ezBookkeeping in the ROOT path of domain

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

## ezBookkeeping in the sub path of domain (e.g. `/ezbookkeeping`)

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

In addition, if you want to access ezBookkeeping via sub path, you also need to set the `root_url` option in the [configuration](/configuration/), for example, it needs to be set to `https://%(domain)s:{your_nginx_port}/ezbookkeeping/`.
