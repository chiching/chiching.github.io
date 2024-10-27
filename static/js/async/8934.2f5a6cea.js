"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["8934"],{6305:function(e,r,i){i.r(r),i.d(r,{default:function(){return d}});var n=i(5893),a=i(65);function s(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"general",children:["General",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#general",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"export ALL_PROXY=socks5://10.2.3.33:1080\r\nset ALL_PROXY=socks5://127.0.0.1:1080"}),"\n",(0,n.jsxs)(r.h2,{id:"partition",children:["partition",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#partition",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"/boot     1g\r\n/boot/efi  500m\r\n/home\r\nswap     物理内存两倍\r\n/"}),"\n",(0,n.jsxs)(r.h2,{id:"kvm",children:["kvm",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#kvm",children:"#"})]}),"\n",(0,n.jsxs)(r.h3,{id:"check-if-cpu-suport-it",children:["check if cpu suport it.",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#check-if-cpu-suport-it",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"egrep -c '(svm|vmx)' /proc/cpuinfo"}),"\n",(0,n.jsx)(r.p,{children:"it should > 0"}),"\n",(0,n.jsxs)(r.h3,{id:"install-kvm",children:["install kvm",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#install-kvm",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"sudo apt update"}),"\n",(0,n.jsx)(r.li,{children:"sudo apt install  virt-manager"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Add your user to the kvm and libvirt groups:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"sudo usermod -aG kvm $USER\r\nsudo usermod -aG libvirt $USER\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"manage",children:["manage",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#manage",children:"#"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"virsh list"}),"\n",(0,n.jsx)(r.li,{children:"virt-manager"}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"vs-code-desktop",children:["vs code desktop",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vs-code-desktop",children:"#"})]}),"\n",(0,n.jsxs)(r.h3,{id:"go-to",children:["go to",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#go-to",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"/usr/share/applications\r\n~/.local/share/applications/code.desktop"}),"\n",(0,n.jsxs)(r.h3,{id:"create-a-file",children:["create a file",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#create-a-file",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:" [Desktop Entry] Name=Visual Studio Code Exec=/home/chiching/apps/VSCode-linux-x64/code Icon=/home/chiching/apps/VSCode-linux-x64/resources/app/resources/linux/code.png Type=Application Categories=Utility;TextEditor;Development;IDE; MimeType=text/plain; Terminal=false "})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["notes%2F01-Cloud%20Computing%2FLinux%2Fgeneral.md"]={toc:[{text:"partition",id:"partition",depth:2},{text:"kvm",id:"kvm",depth:2},{text:"check if cpu suport it.",id:"check-if-cpu-suport-it",depth:3},{text:"install kvm",id:"install-kvm",depth:3},{text:"manage",id:"manage",depth:3},{text:"vs code desktop",id:"vs-code-desktop",depth:2},{text:"go to",id:"go-to",depth:3},{text:"create a file",id:"create-a-file",depth:3}],title:"General",frontmatter:{}}}}]);