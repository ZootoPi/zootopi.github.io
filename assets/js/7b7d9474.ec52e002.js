"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[303],{5490:function(t,n,i){i.r(n),i.d(n,{frontMatter:function(){return h},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var e=i(7462),o=i(3366),c=(i(7294),i(3905)),r=["components"],h={sidebar_label:"B\xe0i 0: Jupyter"},a="B\xe0i 0: L\xe0m quen v\u1edbi Jupyter",u={unversionedId:"python/jupyter",id:"python/jupyter",isDocsHomePage:!1,title:"B\xe0i 0: L\xe0m quen v\u1edbi Jupyter",description:"I. Gi\u1edbi thi\u1ec7u",source:"@site/../docs/tutorial/python/02.jupyter.md",sourceDirName:"python",slug:"/python/jupyter",permalink:"/tutorial/python/jupyter",version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"B\xe0i 0: Jupyter"},sidebar:"tutorialSidebar",previous:{title:"B\xe0i 0: Anaconda",permalink:"/tutorial/python/anaconda"},next:{title:"B\xe0i 1: H\u01b0\u1edbng d\u1eabn c\xe0i \u0111\u1eb7t",permalink:"/tutorial/python/install"}},p=[{value:"I. Gi\u1edbi thi\u1ec7u",id:"i-gi\u1edbi-thi\u1ec7u",children:[{value:"1. Jupyter",id:"1-jupyter",children:[]},{value:"2. Jupyter Notebook",id:"2-jupyter-notebook",children:[]},{value:"3. Jupyter Lab",id:"3-jupyter-lab",children:[]}]},{value:"II. C\xe0i \u0111\u1eb7t",id:"ii-c\xe0i-\u0111\u1eb7t",children:[]}],l={toc:p};function g(t){var n=t.components,h=(0,o.Z)(t,r);return(0,c.kt)("wrapper",(0,e.Z)({},l,h,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"b\xe0i-0-l\xe0m-quen-v\u1edbi-jupyter"},"B\xe0i 0: L\xe0m quen v\u1edbi Jupyter"),(0,c.kt)("h2",{id:"i-gi\u1edbi-thi\u1ec7u"},"I. Gi\u1edbi thi\u1ec7u"),(0,c.kt)("p",null,"Trong b\xe0i vi\u1ebft tr\u01b0\u1edbc, ZootoPi \u0111\xe3 gi\u1edbi thi\u1ec7u v\u1ec1 Anaconda, m\u1ed9t m\xe3 ngu\u1ed3n m\u1edf gi\xfap ta t\u1ea1o ra nh\u1eefng m\xf4i tr\u01b0\u1eddng \u1ea3o v\u1edbi tr\xecnh qu\u1ea3n l\xed g\xf3i conda ti\u1ec7n l\u1ee3i cho vi\u1ec7c truy xu\u1ea5t v\xe0 c\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n b\xean trong. Sau khi c\xf3 m\xf4i tr\u01b0\u1eddng r\u1ed3i, ta s\u1ebd c\u1ea7n c\xf3 c\xf4ng c\u1ee5 \u0111\u1ec3 vi\u1ebft, ch\u1ea1y m\xe3 ngu\u1ed3n c\u0169ng nh\u01b0 g\u1ee1 l\u1ed7i ch\u01b0\u01a1ng tr\xecnh. V\xe0 trong b\xe0i vi\u1ebft n\xe0y, ZootoPi xin gi\u1edbi thi\u1ec7u h\u1ecd nh\xe0 Jupyter v\u1edbi Jupyter Notebook v\xe0 Jupyter Lab."),(0,c.kt)("h3",{id:"1-jupyter"},"1. Jupyter"),(0,c.kt)("p",null,"Jupyter l\xe0 m\u1ed9t n\u1ec1n t\u1ea3ng t\xednh to\xe1n khoa h\u1ecdc m\xe3 ngu\u1ed3n m\u1edf, v\u1edbi kh\u1ea3 n\u0103ng n\u1ed5i b\u1eadt cho ph\xe9p t\u01b0\u01a1ng t\xe1c tr\u1ef1c ti\u1ebfp v\u1edbi t\u1eebng d\xf2ng code, h\u1ed7 tr\u1ee3 h\u01a1n 40 ng\xf4n ng\u1eef l\u1eadp tr\xecnh, trong \u0111\xf3 t\u1eadp trung v\xe0o 3 ng\xf4n ng\u1eef l\xe0 Julia, Python v\xe0 R. C\xe1i t\xean Jupyter b\u1eaft ngu\u1ed3n t\u1eeb c\xe1ch ch\u01a1i ch\u1eef k\u1ebft h\u1ee3p t\u1eeb 3 ng\xf4n ng\u1eef l\u1eadp tr\xecnh ",(0,c.kt)("strong",{parentName:"p"},"Ju"),"lia, ",(0,c.kt)("strong",{parentName:"p"},"Pyt"),"hon, v\xe0 ",(0,c.kt)("strong",{parentName:"p"},"R")," ( ",(0,c.kt)("inlineCode",{parentName:"p"},"Jupyter = Julia + Python + R"),"). B\xean c\u1ea1nh \u0111\xf3, Jupyter c\u0169ng l\xe0 m\u1ed9t c\xf4ng c\u1ee5 ho\xe0n to\xe0n mi\u1ec5n ph\xed, \u0111\u01b0\u1ee3c t\u1ea1o ra v\u1edbi m\u1ee5c \u0111\xedch nh\u1eafm \u0111\u1ebfn khoa h\u1ecdc d\u1eef li\u1ec7u v\xe0 gi\xe1o d\u1ee5c, gi\xfap m\u1ecdi ng\u01b0\u1eddi c\xf9ng h\u1ecdc l\u1eadp tr\xecnh d\u1ec5 d\xe0ng h\u01a1n (c\u1ee5 th\u1ec3 \u1edf \u0111\xe2y l\xe0 Python). Jupyter c\xf3 t\xednh t\u01b0\u01a1ng t\xe1c n\xean c\xf3 th\u1ec3 s\u1eed d\u1ee5ng l\xe0m m\xf4i tr\u01b0\u1eddng ch\u1ea1y th\u1eed v\xe0 gi\u1ea3ng d\u1ea1y."),(0,c.kt)("h3",{id:"2-jupyter-notebook"},"2. Jupyter Notebook"),(0,c.kt)("p",null,"Jupyter Notebook (tr\u01b0\u1edbc 2014 \u0111\u01b0\u1ee3c bi\u1ebft v\u1edbi c\xe1i t\xean IPython Notebook) l\xe0 m\u1ed9t \u1ee9ng d\u1ee5ng m\xe3 ngu\u1ed3n m\u1edf cho ph\xe9p ta \u0111\u01b0a c\u1ea3 m\xe3 ngu\u1ed3n Python v\xe0 c\xe1c th\xe0nh ph\u1ea7n v\u0103n b\u1ea3n ph\u1ee9c t\u1ea1p nh\u01b0 h\xecnh \u1ea3nh, c\xf4ng th\u1ee9c, video, bi\u1ec3u th\u1ee9c... v\xe0o trong c\xf9ng m\u1ed9t file gi\xfap cho vi\u1ec7c tr\xecnh b\xe0y tr\u1edf l\xean d\u1ec5 hi\u1ec3u, gi\u1ed1ng nh\u01b0 m\u1ed9t file tr\xecnh chi\u1ebfu nh\u01b0ng l\u1ea1i c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n ch\u1ea1y code t\u01b0\u01a1ng t\xe1c tr\xean \u0111\xf3, c\u1ed1t l\xf5i c\u1ee7a vi\u1ec7c n\xe0y ch\xednh l\xe0 Markdown. \u0110i\u1ec1u n\xe0y gi\xfap cho Jupyter Notebook \u0111\u01b0\u1ee3c \u01b0a chu\u1ed9ng trong vi\u1ec7c ph\xe2n t\xedch d\u1eef li\u1ec7u, tr\u1ef1c quan h\xf3a d\u1eef, x\u1eed l\xfd v\xe0 x\xe2y d\u1ef1ng m\xf4 h\xecnh tr\xean d\u1eef li\u1ec7u v.v."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"alt",src:i(4272).Z})),(0,c.kt)("h3",{id:"3-jupyter-lab"},"3. Jupyter Lab"),(0,c.kt)("p",null,"JupyterLab l\xe0 m\xf4i tr\u01b0\u1eddng ph\xe1t tri\u1ec3n t\u01b0\u01a1ng t\xe1c d\u1ef1a tr\xean web d\xe0nh cho notebook, m\xe3 v\xe0 d\u1eef li\u1ec7u c\u1ee7a Jupyter. N\xf3 c\xf3 c\u1ea5u tr\xfac m\xf4-\u0111un gi\xfap ta c\xf3 th\u1ec3 vi\u1ebft c\xe1c plugin b\u1ed5 sung c\xe1c th\xe0nh ph\u1ea7n m\u1edbi, t\xedch h\u1ee3p v\u1edbi c\xe1c th\xe0nh ph\u1ea7n hi\u1ec7n c\xf3, v\xe0 m\u1edf m\u1ed9t s\u1ed1 notebook ho\u1eb7c t\u1ec7p (v\xed d\u1ee5: HTML, Markdowns, v.v.) d\u01b0\u1edbi d\u1ea1ng c\xe1c tab trong c\xf9ng m\u1ed9t c\u1eeda s\u1ed5 c\u0169ng nh\u01b0 cung c\u1ea5p nhi\u1ec1u tr\u1ea3i nghi\u1ec7m gi\u1ed1ng nh\u01b0 khi l\xe0m vi\u1ec7c v\u1edbi c\xe1c IDE. \u0110i\u1ec3m c\u1ed9ng c\u1ee7a JupyterLab l\xe0 s\u1eed linh ho\u1ea1t, cho ph\xe9p c\u1ea5u h\xecnh v\xe0 s\u1eafp x\u1ebfp giao di\u1ec7n ng\u01b0\u1eddi d\xf9ng \u0111\u1ec3 h\u1ed7 tr\u1ee3 c\xe1c quy tr\xecnh trong khoa h\u1ecdc d\u1eef li\u1ec7u, m\xe1y t\xednh khoa h\u1ecdc v\xe0 m\xe1y h\u1ecdc."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"alt",src:i(4149).Z})),(0,c.kt)("h2",{id:"ii-c\xe0i-\u0111\u1eb7t"},"II. C\xe0i \u0111\u1eb7t"),(0,c.kt)("p",null,"\u0110\u1ec3 c\xf3 th\u1ec3 s\u1eed d\u1ee5ng Jupyter Notebook v\xe0 JupyterLab, c\xe1ch \u0111\u01a1n gi\u1ea3n nh\u1ea5t l\xe0 c\xe0i ph\u1ea7n m\u1ec1m Anaconda. B\u1ea1n c\xf3 th\u1ec3 tham kh\u1ea3o v\xe0 l\xe0m theo h\u01b0\u1edbng d\u1eabn c\u1ee7a b\xe0i vi\u1ebft tr\u01b0\u1edbc t\u1ea1i ",(0,c.kt)("a",{parentName:"p",href:"/tutorial/python/anaconda"},"\u0111\xe2y")," \u0111\u1ec3 ho\xe0n t\u1ea5t vi\u1ec7c c\xe0i \u0111\u1eb7t."),(0,c.kt)("p",null,"Sau khi c\xe0i \u0111\u1eb7t xong Anaconda, ta c\xf3 th\u1ec3 c\xe0i Jupyter Notebook v\xe0 Jupyter Lab trong ho\u1eb7c sau khi t\u1ea1o ra m\xf4i tr\u01b0\u1eddng \u1ea3o c\u1ee7a d\u1ef1 \xe1n."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t \u0111\u1ed3ng th\u1eddi khi t\u1ea1o ra m\xf4i tr\u01b0\u1eddng \u1ea3o:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"(base) \u279c  ~ conda create -n zootopi python=3.8 jupyter jupyterlab\n")),(0,c.kt)("p",null,"ho\u1eb7c"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t khi \u0111\xe3 c\xf3 s\u1eb5n m\xf4i tr\u01b0\u1eddng \u1ea3o:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"(zootopi) \u279c  ~ pip install jupyter\n(zootopi) \u279c  ~ pip install jupyterlab\n")),(0,c.kt)("p",null,"Sau khi c\xe0i \u0111\u1eb7t xong, ta k\xedch ho\u1ea1t c\xf4ng c\u1ee5 b\u1eb1ng c\xe2u l\u1ec7nh sau:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"V\u1edbi Jupyter Notebook:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"(zootopi) \u279c  ~ jupyter notebook\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"V\u1edbi Jupyter Lab:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"(zootopi) \u279c  ~ jupyter notebook\n")),(0,c.kt)("p",null,"Khi \u0111\xf3 giao di\u1ec7n c\u1ee7a c\xf4ng c\u1ee5 s\u1ebd hi\u1ec7n l\xean tr\xean web browser c\u1ee7a tr\xecnh duy\u1ec7t web b\u1ea1n s\u1eed d\u1ee5ng (Chrome, Firefox, v.v) v\u1edbi \u0111\u01b0\u1eddng d\u1eabn t\u1edbi:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Jupyter Notebook: ",(0,c.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/tree")),(0,c.kt)("li",{parentName:"ul"},"Jupyter Lab: ",(0,c.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/lab"))),(0,c.kt)("p",null,"Trong b\xe0i vi\u1ebft ti\u1ebfp theo, ZootoPi s\u1ebd \u0111i s\xe2u h\u01a1n v\xe0o c\xe1ch s\u1eed d\u1ee5ng c\xe1c b\u1ea1n v\u1ec1 ",(0,c.kt)("inlineCode",{parentName:"p"},"JupyterLab")," v\xe0 ",(0,c.kt)("inlineCode",{parentName:"p"},"Jupyter Notebook")," c\u0169ng nh\u01b0 \u0111\u01b0a ra nh\u1eefng so s\xe1nh tr\u1ef1c quan v\u1ec1 t\xednh n\u0103ng khi l\xe0m vi\u1ec7c v\u1edbi 2 c\xf4ng c\u1ee5 n\xe0y. ZootoPi xin ph\xe9p h\u1eb9n b\u1ea1n trong b\xe0i vi\u1ebft ti\u1ebfp theo!"))}g.isMDXComponent=!0},4149:function(t,n,i){n.Z=i.p+"assets/images/jupyterlab-42d1317f49c6901ef29b0790c2dcb429.png"},4272:function(t,n,i){n.Z=i.p+"assets/images/jupyternotebook-38126b39145b04767d526fde9d82bf6e.png"}}]);