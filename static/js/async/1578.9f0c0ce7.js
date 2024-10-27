"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["1578"],{3557:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var s=n(5893),t=n(65);function o(e){let r=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"privoxy",children:["privoxy",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#privoxy",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.cnblogs.com/liuxuzzz/p/5329536.html",target:"_blank",rel:"noopener noreferrer",children:"systemd 开机无法启动privoxy"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[Unit]\r\nDescription=Privacy enhancing HTTP Proxy\r\nDocumentation=man:privoxy(8) https://www.privoxy.org/user-manual/\r\nAfter=network.target\r\n\r\n[Service]\r\nEnvironment=PIDFILE=/run/privoxy.pid\r\nEnvironment=OWNER=privoxy\r\nEnvironment=CONFIGFILE=/etc/privoxy/config\r\nType=simple\r\nPIDFile=/run/privoxy.pid\r\nExecStart=/usr/sbin/privoxy  --no-daemon  --pidfile $PIDFILE --user $OWNER $CONFIGFILE\r\nExecStopPost=/bin/rm -f $PIDFILE\r\nSuccessExitStatus=15\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"setting-up-proxy",children:["Setting up proxy",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-up-proxy",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"This is only required for the places where is not able to access google service, otherwise please ignore this part."}),"\n",(0,s.jsx)(r.p,{children:"Firstly you have to set up an socks proxy server which is able to access google service. If you don't' have a server available, Please try to find some free socks server. Then you only need to set up a client."}),"\n",(0,s.jsx)(r.p,{children:"For the client. there are shadowsocks for socks proxy and privoxy for http proxy."}),"\n",(0,s.jsx)(r.p,{children:"download shadowsocks and move it to /usr/local/bin, then start socks proxy:"}),"\n",(0,s.jsx)(r.p,{children:"shadowsocks2-linux -c=ss://METHOD:PASSWORD@IPADDRESS:PORT -verbose -socks 0.0.0.0:1080"}),"\n",(0,s.jsx)(r.p,{children:"e.g. shadowsocks2-linux -c=ss://aes-256-gcm:ntdtv.com%20123abc@45.147.201.142:1000 -verbose -socks 0.0.0.0:1080"}),"\n",(0,s.jsx)(r.p,{children:"sudo apt-get install privoxy"}),"\n",(0,s.jsx)(r.p,{children:"sudo vim /etc/privoxy/config"}),"\n",(0,s.jsx)(r.p,{children:"make sure these two lines are no commented.  if socks server is not on the same server, please change the 127.0.0.1 to server IP."}),"\n",(0,s.jsx)(r.p,{children:"forward-socks5 / 127.0.0.1:1080 ."}),"\n",(0,s.jsx)(r.p,{children:"listen-address 0.0.0.0:8118"}),"\n",(0,s.jsx)(r.p,{children:"Then restart privoxy"}),"\n",(0,s.jsx)(r.p,{children:"sudo systemctl restart privoxy"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["notes%2F05-Networking%20%26%20Security%2FGFW%2F1.privoxy.md"]={toc:[{text:"Setting up proxy",id:"setting-up-proxy",depth:2}],title:"privoxy",frontmatter:{}}}}]);