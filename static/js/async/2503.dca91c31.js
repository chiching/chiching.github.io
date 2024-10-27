"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["2503"],{9133:function(e,s,r){r.r(s),r.d(s,{default:function(){return d}});var n=r(5893),a=r(65);function o(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",em:"em"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"permission-related-operations",children:["permission related operations",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#permission-related-operations",children:"#"})]}),"\n",(0,n.jsxs)(s.h2,{id:"change-password",children:["change password",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#change-password",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"    SELECT user,host,authentication_string FROM mysql.user;\r\n\r\n    mysql -u root --password\r\n    ALTER USER USER() IDENTIFIED BY 'User_2022_root';\r\n    ALTER USER 'User'@'%' IDENTIFIED BY 'User_2022';\r\n    ALTER USER 'User'@'%' IDENTIFIED WITH mysql_native_password BY 'User_2022';\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"uninstall-plugin-validate_password",children:["uninstall plugin validate_password",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#uninstall-plugin-validate_password",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"    uninstall plugin validate_password;\r\n    SET PASSWORD FOR 'root'@'localhost' = PASSWORD('Passw0rd!');\r\n\r\n    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'Passw0rd!' WITH GRANT OPTION;\r\n    FLUSH PRIVILEGES;\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"clear-root-password-in-safe-mode",children:["clear root password in safe mode",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#clear-root-password-in-safe-mode",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"    sudo service mysql stop\r\n    sudo mysqld_safe --skip-grant-tables --skip-syslog --skip-networking\r\n    then run mysql in a new terminal\r\n    mysql -u root\r\n    and run the following query, after changing the password\r\n    UPDATE mysql.user SET Password=PASSWORD('password') WHERE User='root';\r\n    FLUSH PRIVILEGES;\r\n    quit the mysql safe mode and start mysql service by\r\n    sudo service mysql start\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"http://stackoverflow.com/questions/10895163/how-to-find-out-the-mysql-root-password",target:"_blank",rel:"noopener noreferrer",children:"ref from "})}),"\n",(0,n.jsxs)(s.h2,{id:"allow-remove-connection",children:["allow remove connection",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-remove-connection",children:"#"})]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Comment the bind address from the file /etc/mysql/my.cnf\r\n#bind-address  = 127.0.0.1"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["GRANT ALL PRIVILEGES ON ",(0,n.jsx)(s.em,{children:"."})," TO 'root'@'%' IDENTIFIED BY 'Ikglobal.com2018' WITH GRANT OPTION;"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"mysqldump -udbuser -pdbpass  devdb > mydb.sql"}),"\n",(0,n.jsx)(s.p,{children:"CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';"})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}let d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["notes%2F03-Databases%20%26%20Data%20Storage%2Fmysql%2Fpermissions.md"]={toc:[{text:"change password",id:"change-password",depth:2},{text:"uninstall plugin validate_password",id:"uninstall-plugin-validate_password",depth:2},{text:"clear root password in safe mode",id:"clear-root-password-in-safe-mode",depth:2},{text:"allow remove connection",id:"allow-remove-connection",depth:2}],title:"permission related operations",frontmatter:{}}}}]);