"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["8057"],{2793:function(e,n,r){r.r(n),r.d(n,{default:function(){return t}});var a=r(5893),d=r(65);function o(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code",p:"p",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"hadoop",children:["Hadoop",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hadoop",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"plan",children:["plan",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plan",children:"#"})]}),"\n",(0,a.jsxs)(n.table,{children:["\n",(0,a.jsxs)(n.thead,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.th,{children:"node"}),"\n",(0,a.jsx)(n.th,{children:"hostname"}),"\n",(0,a.jsx)(n.th,{children:"IP"}),"\n",(0,a.jsx)(n.th,{children:"components"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.tbody,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"node1"}),"\n",(0,a.jsx)(n.td,{children:"nn.rm"}),"\n",(0,a.jsx)(n.td,{children:"10.230.168.208"}),"\n",(0,a.jsx)(n.td,{children:"namenode, datanode, resourcemanager, nodemanger"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"node2"}),"\n",(0,a.jsx)(n.td,{children:"dn.nm1"}),"\n",(0,a.jsx)(n.td,{children:"10.230.168.210"}),"\n",(0,a.jsx)(n.td,{children:"secondnamenanager, datanode, nodemanager"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"node3"}),"\n",(0,a.jsx)(n.td,{children:"dn.nm2"}),"\n",(0,a.jsx)(n.td,{children:"10.230.168.231"}),"\n",(0,a.jsx)(n.td,{children:"datanode，nodemanager"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"host",children:["host",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#host",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat | sudo tee /etc/hosts <<EOF\r\n10.230.168.208 nn.rm\r\n10.230.168.210 dn.nm1\r\n10.230.168.231 dn.nm2\r\nEOF\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"java",children:["java",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#java",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"copy jdk files to /opt/apps/jdk"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat | sudo tee -a /etc/profile <<EOF\r\n# for java\r\nexport JAVA_HOME=/opt/apps/jdk\r\nexport PATH=\\$PATH:\\$JAVA_HOME/bin\r\nexport CLASSPATH=.:\\$JAVA_HOME/lib/dt.jar:\\$JAVA_HOME/lib/tools.jar\r\nEOF\r\n\r\nsource /etc/profile\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"hadoop-1",children:["hadoop",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hadoop-1",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"install-and-config",children:["install and config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-and-config",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"files",children:["files",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#files",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"copy hadoop files to /opt/apps/hadoop"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cat | sudo tee -a /etc/profile <<EOF\r\n# for hadoop\r\nexport HADOOP_HOME=/opt/apps/hadoop\r\nexport PATH=\\$PATH:\\$HADOOP_HOME/bin:\\$HADOOP_HOME/sbin\r\nEOF\r\n\r\nsource /etc/profile\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-hadoop-envsh",children:["config of hadoop-env.sh",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-hadoop-envsh",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/hadoop-env.sh"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"export JAVA_HOME=$JAVA_HOME\r\nexport HDFS_NAMENODE_USER=root\r\nexport HDFS_DATANODE_USER=root\r\nexport HDFS_SECONDARYNAMENODE_USER=root\r\nexport YARN_RESOURCEMANAGER_USER=root\r\nexport YARN_NODEMANAGER_USER=root\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-core-sitexml",children:["config of core-site.xml",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-core-sitexml",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/core-site.xml"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- 设置默认使用的文件系统 Hadoop支持file、HDFS、GFS、ali|Amazon云等文件系统 --\x3e\r\n<property>\r\n<name>fs.defaultFS</name>\r\n<value>hdfs://nn.rm:8020</value>\r\n</property>\r\n\x3c!-- 设置Hadoop本地保存数据路径 --\x3e\r\n<property>\r\n<name>hadoop.tmp.dir</name>\r\n<value>/opt/data/hadoop</value>\r\n</property>\r\n\x3c!-- 设置HDFS web UI用户身份 --\x3e\r\n<property>\r\n<name>hadoop.http.staticuser.user</name>\r\n<value>root</value>\r\n</property>\r\n\x3c!-- 整合hive 用户代理设置 --\x3e\r\n<property>\r\n<name>hadoop.proxyuser.root.hosts</name>\r\n<value>*</value>\r\n</property>\r\n<property>\r\n<name>hadoop.proxyuser.root.groups</name>\r\n<value>*</value>\r\n</property>\r\n\x3c!-- 垃圾桶文件保存时间 --\x3e\r\n<property>\r\n<name>fs.trash.interval</name>\r\n<value>1440</value>\r\n</property>\r\n\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-hdfs-sitexml",children:["config of hdfs-site.xml",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-hdfs-sitexml",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/hdfs-site.xml"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- 设置SNN进程运行机器位置信息 --\x3e\r\n<property>\r\n<name>dfs.namenode.secondary.http-address</name>\r\n<value>dn.nm1:9868</value>\r\n</property>\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-mapred-sitexml",children:["config of mapred-site.xml",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-mapred-sitexml",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/mapred-site.xml"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- 设置MR程序默认运行模式： yarn集群模式 local本地模式 --\x3e\r\n<property>\r\n<name>mapreduce.framework.name</name>\r\n<value>yarn</value>\r\n</property>\r\n\x3c!-- MR程序历史服务器端地址 --\x3e\r\n<property>\r\n<name>mapreduce.jobhistory.address</name>\r\n<value>nn.rm:10020</value>\r\n</property>\r\n\x3c!-- 历史服务器web端地址 --\x3e\r\n<property>\r\n<name>mapreduce.jobhistory.webapp.address</name>\r\n<value>nn.rm:19888</value>\r\n</property>\r\n<property>\r\n<name>yarn.app.mapreduce.am.env</name>\r\n<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>\r\n</property>\r\n<property>\r\n<name>mapreduce.map.env</name>\r\n<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>\r\n</property>\r\n<property>\r\n<name>mapreduce.reduce.env</name>\r\n<value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>\r\n</property>\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-yarn-sitexml",children:["config of yarn-site.xml",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-yarn-sitexml",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/yarn-site.xml"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- 设置YARN集群主角色运行机器位置 --\x3e\r\n<property>\r\n<name>yarn.resourcemanager.hostname</name>\r\n<value>nn.rm</value>\r\n</property>\r\n<property>\r\n<name>yarn.nodemanager.aux-services</name>\r\n<value>mapreduce_shuffle</value>\r\n</property>\r\n\x3c!-- 是否将对容器实施物理内存限制 --\x3e\r\n<property>\r\n<name>yarn.nodemanager.pmem-check-enabled</name>\r\n<value>false</value>\r\n</property>\r\n\x3c!-- 是否将对容器实施虚拟内存限制。 --\x3e\r\n<property>\r\n<name>yarn.nodemanager.vmem-check-enabled</name>\r\n<value>false</value>\r\n</property>\r\n\x3c!-- 开启日志聚集 --\x3e\r\n<property>\r\n<name>yarn.log-aggregation-enable</name>\r\n<value>true</value>\r\n</property>\r\n\x3c!-- 设置yarn历史服务器地址 --\x3e\r\n<property>\r\n<name>yarn.log.server.url</name>\r\n<value>http://nn.rm:19888/jobhistory/logs</value>\r\n</property>\r\n\x3c!-- 保存的时间7天 --\x3e\r\n<property>\r\n<name>yarn.log-aggregation.retain-seconds</name>\r\n<value>604800</value>\r\n</property>\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"config-of-workers",children:["config of workers",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-of-workers",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["add the content to file ",(0,a.jsx)(n.code,{children:"/opt/apps/hadoop/etc/hadoop/workers"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"nn.rm\r\ndn.nm1\r\ndn.nm2\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"format",children:["format",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#format",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"hdfs namenode -format"})}),"\n",(0,a.jsxs)(n.h3,{id:"start-up",children:["start up",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#start-up",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"start-commands",children:["start commands",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#start-commands",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["hdfs ",(0,a.jsx)(n.code,{children:"hdfs --daemon start|stop namenode|datanode|secondarynamenode"})]}),"\n",(0,a.jsxs)(n.li,{children:["yarn ",(0,a.jsx)(n.code,{children:"yarn --daemon start|stop resourcemanager|nodemanager"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"check-the-porcess",children:["check the porcess",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#check-the-porcess",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"run jps to check roles on chech node."}),"\n",(0,a.jsxs)(n.h4,{id:"web-ui",children:["web UI",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-ui",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["hdfs cluster ",(0,a.jsx)(n.code,{children:"http://nn.rm:9870"})]}),"\n",(0,a.jsxs)(n.li,{children:["yarn cluster ",(0,a.jsx)(n.code,{children:"http://nn.rm:8088"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"check-files",children:["check files",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#check-files",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["list file ",(0,a.jsx)(n.code,{children:"hadoop fs -ls /"})]}),"\n",(0,a.jsxs)(n.li,{children:["mkdir ",(0,a.jsx)(n.code,{children:"hadoop fs -mkdir /test"})]}),"\n",(0,a.jsxs)(n.li,{children:["upload file ",(0,a.jsx)(n.code,{children:"hadoop fs -put readme.md /test"})]}),"\n"]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}let t=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["notes%2F06-Big%20Data%2Fhadoop.md"]={toc:[{text:"plan",id:"plan",depth:2},{text:"host",id:"host",depth:2},{text:"java",id:"java",depth:2},{text:"hadoop",id:"hadoop-1",depth:2},{text:"install and config",id:"install-and-config",depth:3},{text:"files",id:"files",depth:4},{text:"config of hadoop-env.sh",id:"config-of-hadoop-envsh",depth:4},{text:"config of core-site.xml",id:"config-of-core-sitexml",depth:4},{text:"config of hdfs-site.xml",id:"config-of-hdfs-sitexml",depth:4},{text:"config of mapred-site.xml",id:"config-of-mapred-sitexml",depth:4},{text:"config of yarn-site.xml",id:"config-of-yarn-sitexml",depth:4},{text:"config of workers",id:"config-of-workers",depth:4},{text:"format",id:"format",depth:4},{text:"start up",id:"start-up",depth:3},{text:"start commands",id:"start-commands",depth:4},{text:"check the porcess",id:"check-the-porcess",depth:4},{text:"web UI",id:"web-ui",depth:4},{text:"check files",id:"check-files",depth:4}],title:"Hadoop",frontmatter:{}}}}]);