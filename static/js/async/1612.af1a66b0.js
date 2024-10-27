"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["1612"],{3594:function(r,n,e){e.r(n),e.d(n,{default:function(){return p}});var s=e(5893),a=e(65);function t(r){let n=Object.assign({pre:"pre",code:"code",h1:"h1",a:"a"},(0,a.ah)(),r.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"version: '3'\r\n\r\nnetworks:\r\n  openldap:\r\n    external: true\r\n\r\nservices:\r\n  ssp:\r\n    container_name: ssp\r\n    image: ltbproject/self-service-password:1.5\r\n    restart: always\r\n    ports:\r\n      - '3389:80'\r\n    volumes:\r\n      - /etc/localtime:/etc/localtime\r\n      - ./ssp.conf.php:/var/www/conf/config.inc.local.php\r\n    networks:\r\n      - openldap\r\n    deploy:\r\n      resources:\r\n        limits:\r\n           memory: 1G\r\n        reservations:\r\n           memory: 512M\r\n\n"})}),"\n",(0,s.jsxs)(n.h1,{id:"sspconfphp",children:["ssp.conf.php",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sspconfphp",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<?php\r\n$login_forbidden_chars = "*()&|";\r\n$keyphrase = "ldap.secret.domain.com";\r\n$debug = true;\r\n$ldap_starttls = false;\r\n$ldap_url = "ldap://openldap:1389";\r\n$ldap_binddn = "cn=admin,dc=<ORG_NAME>,dc=com";\r\n$ldap_bindpw = "<PASSWORD>";\r\n$ldap_base = "ou=users,dc=<ORG_NAME>,dc=com";\r\n$ldap_login_attribute = "uid";\r\n$ldap_fullname_attribute = "cn";\r\n$ldap_filter = "(&(objectClass=person)($ldap_login_attribute={login}))";\r\n$who_change_password = "manager";\r\n// $mail_sendmailpath = \'/usr/sbin/sendmail\';\r\n$mail_from = "yanfatest@domain.com";\r\n$mail_from_name = "Self Service Password";\r\n$mail_protocol = \'smtp\';\r\n$mail_smtp_debug = 1;\r\n//$mail_debug_format = \'html\';\r\n$mail_smtp_host = \'smtp.qiye.aliyun.com\';\r\n// $mail_smtp_host = \'smtp.mxhichina.com\';\r\n$mail_smtp_auth = true;\r\n$mail_smtp_user = \'yanfatest@domain.com\';\r\n$mail_smtp_pass = \'test@123456\';\r\n$mail_smtp_port = 465;\r\n$mail_smtp_timeout = 30;\r\n$mail_smtp_keepalive = false;\r\n$mail_smtp_secure = \'ssl\';\r\n$mail_smtp_autotls = false;\r\n$mail_smtp_options = array();\r\n$mail_contenttype = \'text/html\';\r\n$mail_wordwrap = 0;\r\n$mail_charset = \'utf-8\';\r\n$mail_priority = 3;\r\n$use_questions = false;\r\n$use_sms = false;\r\n?>\r\n\n'})})]})}function l(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),r.components);return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(t,{...r})}):t(r)}let p=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["notes%2F03-Databases%20%26%20Data%20Storage%2Fopenldap%2Fssp.md"]={toc:[],title:"ssp.conf.php",frontmatter:{}}}}]);