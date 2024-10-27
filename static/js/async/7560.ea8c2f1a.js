"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["7560"],{2234:function(n,e,r){r.r(e),r.d(e,{default:function(){return s}});var i=r(5893),p=r(65);function t(n){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre"},(0,p.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"memo",children:["memo",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#memo",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"export LD_LIBRARY_PATH=/home/ddos/vpp/build-root/install-vpp-native/vpp/lib64"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"cd /home/ddos/vpp/build-root/build-vpp-native/vpp/vpp-api/python/build/lib/"})}),"\n",(0,i.jsxs)(e.h1,{id:"get-interface",children:["get interface",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#get-interface",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    #!/usr/bin/env python\r\n     \r\n    from __future__ import print_function\r\n     \r\n    import os\r\n    import fnmatch\r\n     \r\n    from vpp_papi import VPP \r\n     \r\n     \r\n    vpp_json_dir = '/home/ddos/vpp/build-root/install-vpp-native/vpp/share/vpp/api/core'\r\n     \r\n    jsonfiles = []\r\n    for root, dirnames, filenames in os.walk(vpp_json_dir):\r\n        for filename in fnmatch.filter(filenames, '*.api.json'):\r\n            jsonfiles.append(os.path.join(vpp_json_dir, filename))\r\n     \r\n    if not jsonfiles:\r\n        print('Error: no json api files found')\r\n        exit(-1)\r\n     \r\n    vpp = VPP(jsonfiles)\r\n     \r\n    r = vpp.connect(\"test_papi\")\r\n    print(r)\r\n     \r\n    for intf in vpp.api.sw_interface_dump():\r\n        print(intf.interface_name.decode())\r\n     \r\n    exit(vpp.disconnect())\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,p.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}let s=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["notes%2F05-Networking%20%26%20Security%2Fvpp%2Fmemo.md"]={toc:[],title:"get interface",frontmatter:{}}}}]);