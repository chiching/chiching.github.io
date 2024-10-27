"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["7842"],{4546:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var r=n(5893),s=n(65);function t(e){let a=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",code:"code",pre:"pre",em:"em"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.h1,{id:"rabbitmq",children:["rabbitmq",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#rabbitmq",children:"#"})]}),"\n",(0,r.jsxs)(a.h2,{id:"install-on-machine",children:["install on machine",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#install-on-machine",children:"#"})]}),"\n",(0,r.jsxs)(a.h3,{id:"install-erlang-from-an-apt-repository-on-bintray",children:["Install Erlang from an Apt Repository on Bintray",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#install-erlang-from-an-apt-repository-on-bintray",children:"#"})]}),"\n",(0,r.jsxs)(a.h4,{id:"add-repository-signing-key",children:["Add Repository Signing Key",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#add-repository-signing-key",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"curl -fsSL https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo apt-key add -"})}),"\n",(0,r.jsxs)(a.h4,{id:"enable-apt-https-transport",children:["Enable apt HTTPS Transport",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-apt-https-transport",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"sudo apt-get install apt-transport-https"})}),"\n",(0,r.jsxs)(a.h4,{id:"add-a-source-list-file",children:["Add a Source List File",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-source-list-file",children:"#"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"sudo vim /etc/apt/sources.list.d/bintray.erlang.list"}),"\r\n",(0,r.jsx)(a.code,{children:" deb https://dl.bintray.com/rabbitmq-erlang/debian focal erlang-23.x"})]}),"\n",(0,r.jsxs)(a.h4,{id:"install-erlang-packages",children:["Install Erlang Packages",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#install-erlang-packages",children:"#"})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"sudo apt-get update -y\r\n\r\n# This is recommended. Metapackages such as erlang and erlang-nox must only be used\r\n# with apt version pinning. They do not pin their dependency versions.\r\nsudo apt-get install -y erlang-base \\\r\n                        erlang-asn1 erlang-crypto erlang-eldap erlang-ftp erlang-inets \\\r\n                        erlang-mnesia erlang-os-mon erlang-parsetools erlang-public-key \\\r\n                        erlang-runtime-tools erlang-snmp erlang-ssl \\\r\n                        erlang-syntax-tools erlang-tftp erlang-tools erlang-xmerl\n"})}),"\n",(0,r.jsxs)(a.h3,{id:"using-rabbitmq-apt-repository-on-bintray",children:["Using RabbitMQ Apt Repository on Bintray",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rabbitmq-apt-repository-on-bintray",children:"#"})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:'#!/bin/sh\r\n\r\n## If sudo is not available on the system,\r\n## uncomment the line below to install it\r\n# apt-get install -y sudo\r\n\r\nsudo apt-get update -y\r\n\r\n## Install prerequisites\r\nsudo apt-get install curl gnupg -y\r\n\r\n## Install RabbitMQ signing key\r\ncurl -fsSL https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo apt-key add -\r\n\r\n## Install apt HTTPS transport\r\nsudo apt-get install apt-transport-https\r\n\r\n## Add Bintray repositories that provision latest RabbitMQ and Erlang 23.x releases\r\nsudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list <<EOF\r\n## Installs the latest Erlang 23.x release.\r\n## Change component to "erlang-22.x" to install the latest 22.x version.\r\n## "bionic" as distribution name should work for any later Ubuntu or Debian release.\r\n## See the release to distribution mapping table in RabbitMQ doc guides to learn more.\r\ndeb https://dl.bintray.com/rabbitmq-erlang/debian bionic erlang\r\n## Installs latest RabbitMQ release\r\ndeb https://dl.bintray.com/rabbitmq/debian focal main\r\nEOF\r\n\r\n## Update package indices\r\nsudo apt-get update -y\r\n\r\n## Install rabbitmq-server and its dependencies\r\nsudo apt-get install rabbitmq-server -y --fix-missing\n'})}),"\n",(0,r.jsxs)(a.h2,{id:"start-a-container-instance",children:["start a container instance",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#start-a-container-instance",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"docker run -d --hostname my-rabbit -p 15672:15672  -p 5672:5672  rabbitmq:3.8.0"})}),"\n",(0,r.jsxs)(a.h2,{id:"start-management-plugins",children:["start management plugins",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#start-management-plugins",children:"#"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"rabbitmq-plugins enable rabbitmq_management"}),"\r\n",(0,r.jsx)(a.code,{children:"rabbitmq-plugins enable rabbitmq_mqtt"})]}),"\n",(0,r.jsxs)(a.h2,{id:"access-the-interface",children:["access the interface",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#access-the-interface",children:"#"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"http://hostname:15672",target:"_blank",rel:"noopener noreferrer",children:"http://hostname:15672"}),"   guest   guest"]}),"\n",(0,r.jsxs)(a.h2,{id:"remote-access",children:["remote access",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#remote-access",children:"#"})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"vim /etc/rabbitmq/rabbitmq.conf\r\nloopback_users = none\n"})}),"\n",(0,r.jsxs)(a.h2,{id:"common-cmd",children:["common cmd",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#common-cmd",children:"#"})]}),"\n",(0,r.jsxs)(a.h1,{id:"查看当前所有用户",children:["查看当前所有用户",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#查看当前所有用户",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl list_users"}),"\n",(0,r.jsxs)(a.h1,{id:"查看默认guest用户的权限",children:["查看默认guest用户的权限",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#查看默认guest用户的权限",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl list_user_permissions guest"}),"\n",(0,r.jsxs)(a.h1,{id:"由于rabbitmq默认的账号用户名和密码都是guest为了安全起见-先删掉默认用户",children:["由于RabbitMQ默认的账号用户名和密码都是guest。为了安全起见, 先删掉默认用户",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#由于rabbitmq默认的账号用户名和密码都是guest为了安全起见-先删掉默认用户",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl delete_user guest"}),"\n",(0,r.jsxs)(a.h1,{id:"添加新用户",children:["添加新用户",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#添加新用户",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl add_user username password"}),"\n",(0,r.jsxs)(a.h1,{id:"设置用户tag",children:["设置用户tag",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#设置用户tag",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl set_user_tags username administrator"}),"\n",(0,r.jsxs)(a.h1,{id:"赋予用户默认vhost的全部操作权限",children:["赋予用户默认vhost的全部操作权限",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#赋予用户默认vhost的全部操作权限",children:"#"})]}),"\n",(0,r.jsxs)(a.p,{children:['$ sudo rabbitmqctl set_permissions -p / username ".',(0,r.jsx)(a.em,{children:'" ".'}),'" ".*"']}),"\n",(0,r.jsxs)(a.h1,{id:"查看用户的权限",children:["查看用户的权限",(0,r.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#查看用户的权限",children:"#"})]}),"\n",(0,r.jsx)(a.p,{children:"$ sudo rabbitmqctl list_user_permissions username"}),"\n",(0,r.jsx)(a.p,{children:"sudo rabbitmqctl purge_queue queue_name"}),"\n",(0,r.jsx)(a.p,{children:"sudo rabbitmqctl status | grep rabbit"}),"\n",(0,r.jsx)(a.p,{children:"首先定位到 rabbitMQ 安装目录的sbin 目录下。打开cmd窗口。\r\n关闭应用的命令为： sudo rabbitmqctl stop_app && sudo rabbitmqctl reset && sudo rabbitmqctl start_app\r\n清除的命令为： rabbitmqctl reset\r\n重新启动命令为： rabbitmqctl start_app"}),"\n",(0,r.jsx)(a.p,{children:"sudo rabbitmqadmin purge queue name=retrieve_system_data"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["notes%2F02-Software%20Development%2Fmiddlewares%2Frabbitmq.md"]={toc:[{text:"install on machine",id:"install-on-machine",depth:2},{text:"Install Erlang from an Apt Repository on Bintray",id:"install-erlang-from-an-apt-repository-on-bintray",depth:3},{text:"Add Repository Signing Key",id:"add-repository-signing-key",depth:4},{text:"Enable apt HTTPS Transport",id:"enable-apt-https-transport",depth:4},{text:"Add a Source List File",id:"add-a-source-list-file",depth:4},{text:"Install Erlang Packages",id:"install-erlang-packages",depth:4},{text:"Using RabbitMQ Apt Repository on Bintray",id:"using-rabbitmq-apt-repository-on-bintray",depth:3},{text:"start a container instance",id:"start-a-container-instance",depth:2},{text:"start management plugins",id:"start-management-plugins",depth:2},{text:"access the interface",id:"access-the-interface",depth:2},{text:"remote access",id:"remote-access",depth:2},{text:"common cmd",id:"common-cmd",depth:2}],title:"查看用户的权限",frontmatter:{}}}}]);