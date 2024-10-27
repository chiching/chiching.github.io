"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["6751"],{9757:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var t=r(5893),a=r(65);function o(n){let e=Object.assign({pre:"pre",code:"code"},(0,a.ah)(),n.components);return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"version: '3'\r\n\r\nnetworks:\r\n  openldap:\r\n    external: true\r\n\r\nservices:\r\n  lam:\r\n    image: ldapaccountmanager/lam:8.1\r\n    ports:\r\n      - '2389:80'\r\n    environment:\r\n      - LAM_SKIP_PRECONFIGURE:true\r\n      - LDAP_SERVER=ldap://openldap:1389\r\n      - LDAP_DOMAIN=domain.com\r\n      - LAM_PASSWORD=<PASSWORD>@lam\r\n    networks:\r\n      - openldap\n"})})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}let p=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["notes%2F03-Databases%20%26%20Data%20Storage%2Fopenldap%2Flam.md"]={toc:[],title:"",frontmatter:{}}}}]);