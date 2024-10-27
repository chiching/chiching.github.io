"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["9597"],{9468:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var l=r(5893),s=r(65);function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",code:"code",p:"p"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"install",children:["install",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["install ",(0,l.jsx)(n.code,{children:"wget https://www.python.org/ftp/python/3.10.12/Python-3.10.12.tar.xz"})]}),"\n",(0,l.jsx)(n.li,{children:"tar -xf Python-3.10.12.tar.xz"}),"\n",(0,l.jsx)(n.li,{children:"./configure --prefix=/opt/python3.10.12"}),"\n",(0,l.jsx)(n.li,{children:"make && make install"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sudo yum install libffi-devel "})," to support ctypes"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sudo yum install openmpi-devel"})," to support mpi\r\nfor error * _configtest.c:2:10: fatal error: mpi.h: No such file or directory *\r\n`export C_INCLUDE_PATH=/usr/include/openmpi-x86_64/:$C_INCLUDE_PATH``"]}),"\n",(0,l.jsxs)(n.p,{children:["for * error: Cannot link MPI programs. Check your configuration!!! *\r\n",(0,l.jsx)(n.code,{children:"env MPICC=/usr/lib64/openmpi/bin/mpicc python -m pip install --no-cache-dir mpi4py"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sudo yum -y install bzip2 bzip2-devel"})," to support ",(0,l.jsx)(n.code,{children:"No module named ‘_bz2’"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sudo yum install xz-devel python-backports-lzma -y"})," to support ",(0,l.jsx)(n.code,{children:"ModuleNotFoundError: No module named '_lzma'"})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}let i=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["notes%2F02-Software%20Development%2Fpython%2Finstall.md"]={toc:[],title:"install",frontmatter:{}}}}]);