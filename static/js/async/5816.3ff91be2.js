"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["5816"],{2514:function(r,e,n){n.r(e),n.d(e,{default:function(){return c}});var t=n(5893),s=n(65);function a(r){let e=Object.assign({p:"p"},(0,s.ah)(),r.components);return(0,t.jsx)(e.p,{children:'version: \'3\'\r\nservices:\r\nmysql:\r\nrestart: always\r\nprivileged: true\r\nimage: mysql:8.0\r\ncontainer_name: mysql\r\nvolumes:\r\n- ./data:/var/lib/mysql\r\n- ./conf:/etc/mysql/conf.d\r\n- ./logs:/logs\r\ncommand:\r\n--character-set-server=utf8mb4\r\n--collation-server=utf8mb4_general_ci\r\n--explicit_defaults_for_timestamp=true\r\nenvironment:\r\nMYSQL_ROOT_PASSWORD: "<ORG_NAME>#2023"\r\nMYSQL_USER: "<ORG_NAME>_admin"\r\nMYSQL_PASSWORD: "<ORG_NAME>#2023"\r\nMYSQL_INITDB_SKIP_TZINFO: "Asia/Shanghai"\r\nports:\r\n- 3306:3306'})}function o(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),r.components);return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(a,{...r})}):a(r)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["notes%2F03-Databases%20%26%20Data%20Storage%2Fmysql%2Fdocker-compose.md"]={toc:[],title:"",frontmatter:{}}}}]);