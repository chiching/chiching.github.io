"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["7387"],{250:function(e,d,n){n.r(d),n.d(d,{default:function(){return i}});var r=n(5893),s=n(65);function a(e){let d=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"ldap",children:["LDAP",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#ldap",children:"#"})]}),"\n",(0,r.jsxs)(d.p,{children:["ldap location is ",(0,r.jsx)(d.code,{children:"/opt/bitnami/openldap/sbin"})]}),"\n",(0,r.jsx)(d.p,{children:"ldapsearch -Q -LLL -H ldap://10.230.168.174:1389 -b cn=config dn"}),"\n",(0,r.jsx)(d.p,{children:'ldapsearch -Q -LLL -x -D "cn=admin,dc=<ORG_NAME>,dc=com" -W -H ldap://127.0.0.1:1389 -b cn=config dn'}),"\n",(0,r.jsx)(d.p,{children:'ldapsearch -Q -x -D "cn=admin,dc=<ORG_NAME>,dc=com" -W -H ldap://127.0.0.1:1389 -b cn=config "(objectClass=olcPPolicyConfig)"'}),"\n",(0,r.jsxs)(d.h2,{id:"generate-pasword",children:["generate pasword",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#generate-pasword",children:"#"})]}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:" slappasswd -h {SSHA}"})}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{children:"$ slappasswd -h {SSHA}\r\nNew password: \r\nRe-enter new password: \r\n{SSHA}AOiyv/rjQAJ/wHt898OniGxcOxeuBDgp\r\n\r\n{SSHA}5ikfplTgTRJY4yySG6x0YDbLgtGAHD2J\n"})}),"\n",(0,r.jsxs)(d.h2,{id:"modify-user-password",children:["modify user password",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-user-password",children:"#"})]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{children:"dn: uid=test3,ou=users,dc=<ORG_NAME>,dc=com\r\nchangetype: modify\r\nreplace: userPassword\r\nuserPassword: {SSHA}AOiyv/rjQAJ/wHt898OniGxcOxeuBDgp\n"})}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.code,{children:'ldapmodify -x -D "cn=admin,dc=<ORG_NAME>,dc=com" -W -H ldap://127.0.0.1:1389 -f /bitnami/openldap/test3.ldif'})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:d}=Object.assign({},(0,s.ah)(),e.components);return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let i=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["notes%2F03-Databases%20%26%20Data%20Storage%2Fldap.md"]={toc:[{text:"generate pasword",id:"generate-pasword",depth:2},{text:"modify user password",id:"modify-user-password",depth:2}],title:"LDAP",frontmatter:{}}}}]);