"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["8894"],{9378:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var t=n(5893),s=n(65);function i(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code",p:"p"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"registry",children:["registry",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#registry",children:"#"})]}),"\n",(0,t.jsxs)(r.h2,{id:"docker-compose-file",children:["docker compose file",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#docker-compose-file",children:"#"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'version: "3"\n\nservices:\n  registry:\n    container_name: registry\n    image: registry:2\n    ports:\n      - 5000:5000\n    volumes:\n      - .:/etc/docker/registry\n      - ./data:/var/lib/registry\n\n'})}),"\n",(0,t.jsxs)(r.h2,{id:"config-file",children:["config file",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#config-file",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"onfig.yml, this file map to /etc/docker/registry/config.yml in container."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"version: 0.1\nlog:\n  accesslog:\n    disabled: true\n  level: debug\n  formatter: text\n  fields:\n    service: registry\n    environment: staging\nstorage:\n  delete:\n    enabled: true\n  cache:\n    blobdescriptor: inmemory\n  filesystem:\n    rootdirectory: /var/lib/registry\nauth:\n  htpasswd:\n    realm: basic-realm\n    path: /etc/docker/registry/auth/nginx.htpasswd\nhttp:\n  addr: :5000\n  host: http://192.168.70.44:5000\n  headers:\n    X-Content-Type-Options: [nosniff]\n  http2:\n    disabled: false\n  # tls:\n  #   certificate: /etc/docker/registry/ssl/docker.domain.com.crt\n  #   key: /etc/docker/registry/ssl/docker.domain.com.key\nhealth:\n  storagedriver:\n    enabled: true\n    interval: 10s\nthreshold: 3\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"generate-account",children:["generate account",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#generate-account",children:"#"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:" mkdir auth\n\n docker run --rm \\\n    --entrypoint htpasswd \\\n    httpd:alpine \\\n    -Bbn admin User_2023 > auth/nginx.htpasswd\n\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"error--http-server-gave-http-response-to-https-client",children:["Error  http: server gave HTTP response to HTTPS client",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#error--http-server-gave-http-response-to-https-client",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["edit file ",(0,t.jsx)(r.code,{children:"/etc/docker/daemon.json"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{ \n  "insecure-registries":["192.168.70.44:5000"] \n}\n'})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["notes%2F01-Cloud%20Computing%2FDocker%2Fregistry.md"]={toc:[{text:"docker compose file",id:"docker-compose-file",depth:2},{text:"config file",id:"config-file",depth:2},{text:"generate account",id:"generate-account",depth:2},{text:"Error  http: server gave HTTP response to HTTPS client",id:"error--http-server-gave-http-response-to-https-client",depth:2}],title:"registry",frontmatter:{}}}}]);