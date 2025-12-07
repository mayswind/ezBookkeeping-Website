---
title: "反向代理的配置"
---

# 反向代理的配置

如果你想使用 Nginx 作为反向代理，你可以参考下列的配置，更多 Nginx 的信息请参考 [Nginx 官方文档](https://nginx.org/en/docs/)。

## ezBookkeeping 在域名的根路径

```text:line-numbers
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

## ezBookkeeping 在域名的子路径（例如 `/ezbookkeeping`）

```text:line-numbers
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

此外，如果你想通过子路径访问 ezBookkeeping，你还需要在 [配置](/zh_Hans/configuration/) 中设置 `root_url` 选项，例如上述需要设置为 `https://%(domain)s:{your_nginx_port}/ezbookkeeping/`。
