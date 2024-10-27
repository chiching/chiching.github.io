"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["8949"],{1255:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(5893),i=n(65);function a(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",h4:"h4",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"401-performance",children:["401 performance",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#401-performance",children:"#"})]}),"\n",(0,t.jsxs)(r.h2,{id:"gdb",children:["GDB",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#gdb",children:"#"})]}),"\n",(0,t.jsxs)(r.h3,{id:"install",children:["install",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Ubuntu:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"sudo apt-get install gdb python2.7-dbg \n"})}),"\n",(0,t.jsx)(r.p,{children:"Centos*:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"sudo yum install yum-utils\r\nsudo debuginfo-install glibc\r\nsudo yum install gdb python-debuginfo\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"debug",children:["debug",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#debug",children:"#"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"If the process is already running, you can attach to it provided you know the process ID.\r\n$ gdb python <pid of running process>\n"})}),"\n",(0,t.jsx)(r.p,{children:"Getting a Python Stack Trace\r\npy-bt"}),"\n",(0,t.jsxs)(r.h4,{id:"get-a-core-file",children:["get a core file",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#get-a-core-file",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"gdb -p 7458"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"generate-core-file"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"examin-a-core-file",children:["examin a core file",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#examin-a-core-file",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://wiki.python.org/moin/DebuggingWithGdb",target:"_blank",rel:"noopener noreferrer",children:"https://wiki.python.org/moin/DebuggingWithGdb"})}),"\n",(0,t.jsxs)(r.h2,{id:"other",children:["other",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#other",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"pip install pyrasite  # not latest version"}),"\n",(0,t.jsxs)(r.p,{children:["pip install git+",(0,t.jsx)(r.a,{href:"https://github.com/lmacken/pyrasite.git",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/lmacken/pyrasite.git"}),"\r\nexport PYRASITE_IPC_TIMEOUT=1800"]}),"\n",(0,t.jsx)(r.p,{children:"pyrasite-shell "}),"\n",(0,t.jsx)(r.p,{children:"pip install cython\r\npip install meliae\r\npip install urwid\r\npyrasite-memory-viewer 9806"}),"\n",(0,t.jsx)(r.p,{children:"pip install psutil\r\nimport psutil, os\r\npsutil.Process(os.getpid()).memory_info().rss"}),"\n",(0,t.jsx)(r.p,{children:"pip install guppy\r\nfrom guppy import hpy\r\nh = hpy()\r\nh.heap()\r\nh.iso(1,[],{})"}),"\n",(0,t.jsx)(r.p,{children:"byrcs = h.heap().byrcs;\r\nbyrcs[0].byid"}),"\n",(0,t.jsx)(r.p,{children:"pip install graphviz\r\npip install objgraph\r\nimport objgraph\r\nobjgraph.show_growth()\r\nobjgraph.show_most_common_types(limit=20)"}),"\n",(0,t.jsx)(r.p,{children:"无法回收的对象\r\nimport gc\r\ngc.collect() # first run gc, find out uncollectable object and put them in gc.garbage\r\n# output number of object collected\r\ngc.garbage  # print all uncollectable objects\r\n[]                # empty"}),"\n",(0,t.jsx)(r.p,{children:"1、在需要dump内存的地方，写上以下代码即可：\r\nfrom meliae import scanner\r\nscanner.dump_all_objects('/opt/log/dump.txt')\r\n这样，我们就可以把当前的内存Objects都导出到了dump.txt。\r\n2、然后再进行分析：\r\nfrom meliae import loader\r\nom = loader.load('/opt/log/dump.txt')     #加载dump文件\r\n#om.compute_parents()                             #计算各Objects的引用关系\r\n#om.collapse_instance_dicts()                     #去掉各对象Instance的_dict_属性\r\nprint om.summarize()                                 #分析内存占用情况"}),"\n",(0,t.jsx)(r.p,{children:"#得到所有的OracleDB对象\r\np = om.get_all('OracleDB')\r\n#查看第一个对象\r\np[0]\r\n#可以查看该对象的所有引用\r\np[0].c\r\n#查看谁引用了这个对象\r\np[0].p"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}let l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["notes%2F02-Software%20Development%2Fpython%2F401performance.md"]={toc:[{text:"GDB",id:"gdb",depth:2},{text:"install",id:"install",depth:3},{text:"debug",id:"debug",depth:3},{text:"get a core file",id:"get-a-core-file",depth:4},{text:"examin a core file",id:"examin-a-core-file",depth:4},{text:"other",id:"other",depth:2}],title:"401 performance",frontmatter:{}}}}]);