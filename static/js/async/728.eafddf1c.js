"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["728"],{3195:function(n,r,t){t.r(r),t.d(r,{default:function(){return a}});var e=t(5893),s=t(65);function i(n){let r=Object.assign({p:"p"},(0,s.ah)(),n.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.p,{children:"docker run -it -v /home/chiching/projects/spire/sensor:/app --name rust2 a47 /bin/bash"}),"\n",(0,e.jsx)(r.p,{children:"apt -y update && apt -y install mingw-w64"}),"\n",(0,e.jsx)(r.p,{children:"rustup target add x86_64-pc-windows-gnu"}),"\n",(0,e.jsx)(r.p,{children:"rustup target add i686-pc-windows-gnu  // rustup target list"}),"\n",(0,e.jsx)(r.p,{children:"cargo build --release --target i686-pc-windows-gnu"}),"\n",(0,e.jsx)(r.p,{children:"rustup toolchain install stable-gnu  // maybe"}),"\n",(0,e.jsx)(r.p,{children:"cat .cargo/config.toml   // add this file in current working project."}),"\n",(0,e.jsx)(r.p,{children:'[target.x86_64-pc-windows-gnu]\r\nlinker = "/usr/bin/x86_64-w64-mingw32-gcc"'}),"\n",(0,e.jsx)(r.p,{children:'[target.i686-pc-windows-gnu]\r\nlinker = "/usr/bin/i686-w64-mingw32-gcc"\r\nar = "/usr/i686-w64-mingw32/bin/ar"\r\nrustflags = "-C panic=abort"'})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),n.components);return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(i,{...n})}):i(n)}let a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["notes%2F02-Software%20Development%2Frust%2Fbuild_windows.md"]={toc:[],title:"",frontmatter:{}}}}]);