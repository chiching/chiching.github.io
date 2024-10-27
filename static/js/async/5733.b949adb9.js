"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["5733"],{9320:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var d=n(5893),a=n(65);function h(e){let r=Object.assign({h1:"h1",a:"a",p:"p"},(0,a.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"shortcut",children:["shortcut",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#shortcut",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"动词\r\n动词代表了我们打算对文本进行什么样的操作。例如：\r\n• d 表示删除（delete）\r\n• r 表示替换（replace）\r\n• c 表示修改（change）\r\n• y 表示复制（yank）\r\n• v 表示选取（visual select）\r\n名词\r\n名词代表了我们即将处理的文本。Vim 中有一个专门的术语叫做文本对象（text object），下面是一些文本对象的示例：\r\n• w 表示一个单词（word）\r\n• s 表示一个句子（sentence）\r\n• p 表示一个段落（paragraph）\r\n• t 表示一个 HTML 标签（tag）\r\n• 引号或者各种括号所包含的文本称作一个文本块。\r\n介词\r\n介词界定了待编辑文本的范围或者位置。例如：\r\n• i 表示“在...之内”（inside）\r\n• a 表示“环绕...”（around）\r\n• t 表示“到...位置前”（to）\r\n• f 表示“到...位置上”（forward）\r\n下面是几个有关范围的示意图，你们感受一下："}),"\n",(0,d.jsx)(r.p,{children:"Prepositions\r\n组词为句\r\n有了这些基本的语言元素，我们就可以着手构造一些简单的命令了。文本编辑命令的基本语法如下：\r\n动词 介词 名词\r\n下面是一些例子（如果熟悉了上面的概念，你将会看到这些例子非常容易理解），请亲自在 Vim 中试验一番。"}),"\n",(0,d.jsxs)(r.h1,{id:"删除一个段落-delete-inside-paragraph",children:["删除一个段落: delete inside paragraph",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#删除一个段落-delete-inside-paragraph",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"dip"}),"\n",(0,d.jsxs)(r.h1,{id:"选取一个句子-visual-select-inside-sentence",children:["选取一个句子: visual select inside sentence",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#选取一个句子-visual-select-inside-sentence",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"vis"}),"\n",(0,d.jsxs)(r.h1,{id:"修改一个单词-change-inside-word",children:["修改一个单词: change inside word",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#修改一个单词-change-inside-word",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"ciw"}),"\n",(0,d.jsxs)(r.h1,{id:"修改一个单词-change-around-word",children:["修改一个单词: change around word",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#修改一个单词-change-around-word",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"caw"}),"\n",(0,d.jsxs)(r.h1,{id:"删除文本直到字符x不包括字符x-delete-to-x",children:["删除文本直到字符“x”（不包括字符“x”）: delete to x",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#删除文本直到字符x不包括字符x-delete-to-x",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"dtx"}),"\n",(0,d.jsxs)(r.h1,{id:"删除文本直到字符x包括字符x-delete-forward-x",children:["删除文本直到字符“x”（包括字符“x”）: delete forward x",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#删除文本直到字符x包括字符x-delete-forward-x",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"dfx\r\n数词\r\n数词指定了待编辑文本对象的数量，从这个角度而言，数词也可以看作是一种介词。引入数词之后，文本编辑命令的语法就升级成了下面这样：\r\n动词 介词/数词 名词\r\n下面是几个例子："}),"\n",(0,d.jsxs)(r.h1,{id:"修改三个单词change-three-words",children:["修改三个单词：change three words",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#修改三个单词change-three-words",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"c3w"}),"\n",(0,d.jsxs)(r.h1,{id:"删除两个单词delete-two-words",children:["删除两个单词：delete two words",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#删除两个单词delete-two-words",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"d2w\r\n另外，数词也可以修饰动词，表示将操作执行 n 次。于是，我们又有了下面的语法：\r\n数词 动词 名词\r\n请看示例："}),"\n",(0,d.jsxs)(r.h1,{id:"两次删除单词等价于删除两个单词-twice-delete-word",children:["两次删除单词（等价于删除两个单词）: twice delete word",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#两次删除单词等价于删除两个单词-twice-delete-word",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"2dw"}),"\n",(0,d.jsxs)(r.h1,{id:"三次删除字符等价于删除三个字符three-times-delete-character",children:["三次删除字符（等价于删除三个字符）：three times delete character",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#三次删除字符等价于删除三个字符three-times-delete-character",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"3x\r\n怎么样，是不是很容易理解？"}),"\n",(0,d.jsxs)(r.p,{children:["From ",(0,d.jsx)(r.a,{href:"http://www.jianshu.com/p/a361ce8c97bc",target:"_blank",rel:"noopener noreferrer",children:"http://www.jianshu.com/p/a361ce8c97bc"})]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}let i=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["notes%2F02-Software%20Development%2Ftool%2F53-vim%2Fshortcut.md"]={toc:[],title:"三次删除字符（等价于删除三个字符）：three times delete character",frontmatter:{}}}}]);