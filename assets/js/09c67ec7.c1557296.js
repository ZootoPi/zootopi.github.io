"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1785],{3905:(t,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),h=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},c=function(t){var a=h(t.components);return n.createElement(o.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=h(e),u=r,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return e?n.createElement(g,l(l({ref:a},c),{},{components:e})):n.createElement(g,l({ref:a},c))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var h=2;h<i;h++)l[h]=e[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},8221:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=e(7462),r=(e(7294),e(3905));const i={},l="B\xe0i 5: Gi\u1edbi thi\u1ec7u v\u1ec1 Pandas",p={unversionedId:"python/pandas",id:"python/pandas",title:"B\xe0i 5: Gi\u1edbi thi\u1ec7u v\u1ec1 Pandas",description:"1. Gi\u1edbi thi\u1ec7u",source:"@site/../docs/tutorial/python/07.pandas.md",sourceDirName:"python",slug:"/python/pandas",permalink:"/tutorial/python/pandas",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"B\xe0i 4: Gi\u1edbi thi\u1ec7u v\u1ec1 NumPy",permalink:"/tutorial/python/numpy"},next:{title:"B\xe0i 6: Gi\u1edbi thi\u1ec7u v\u1ec1 Pandas (ti\u1ebfp theo)",permalink:"/tutorial/python/pandas_2"}},o={},h=[{value:"1. Gi\u1edbi thi\u1ec7u",id:"1-gi\u1edbi-thi\u1ec7u",level:2},{value:"1.1. Pandas l\xe0 g\xec?",id:"11-pandas-l\xe0-g\xec",level:3},{value:"1.2. C\xe0i \u0111\u1eb7t",id:"12-c\xe0i-\u0111\u1eb7t",level:3},{value:"1.3. Import th\u01b0 vi\u1ec7n",id:"13-import-th\u01b0-vi\u1ec7n",level:3},{value:"<strong>Tham kh\u1ea3o</strong>:",id:"tham-kh\u1ea3o",level:4},{value:"2. C\xe1c h\xe0m c\u01a1 b\u1ea3n trong Pandas",id:"2-c\xe1c-h\xe0m-c\u01a1-b\u1ea3n-trong-pandas",level:2},{value:"2.1. Objects trong Pandas",id:"21-objects-trong-pandas",level:3},{value:"2.2. Kh\u1edfi t\u1ea1o 1 DataFrame",id:"22-kh\u1edfi-t\u1ea1o-1-dataframe",level:3},{value:"2.3. Kh\u1edfi t\u1ea1o 1 Series",id:"23-kh\u1edfi-t\u1ea1o-1-series",level:3},{value:"2.4. \u0110\u1ecdc/l\u01b0u 1 DataFrame",id:"24-\u0111\u1ecdcl\u01b0u-1-dataframe",level:3}],c={toc:h};function d(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"b\xe0i-5-gi\u1edbi-thi\u1ec7u-v\u1ec1-pandas"},"B\xe0i 5: Gi\u1edbi thi\u1ec7u v\u1ec1 Pandas"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",alt:null})),(0,r.kt)("h2",{id:"1-gi\u1edbi-thi\u1ec7u"},"1. Gi\u1edbi thi\u1ec7u"),(0,r.kt)("h3",{id:"11-pandas-l\xe0-g\xec"},"1.1. Pandas l\xe0 g\xec?"),(0,r.kt)("p",null,"Pandas (vi\u1ebft t\u1eaft t\u1eeb ",(0,r.kt)("inlineCode",{parentName:"p"},"Panel Data")," -  b\u1ea3ng d\u1eef li\u1ec7u) l\xe0 th\u01b0 vi\u1ec7n m\xe3 ngu\u1ed3n m\u1edf ph\u1ee5c v\u1ee5 cho vi\u1ec7c ph\xe2n t\xedch v\xe0 x\u1eed l\xfd d\u1eef li\u1ec7u trong Python, \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi Wes McKinney trong n\u0103m 2008. Th\u01b0 vi\u1ec7n n\xe0y \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf \u0111\u1ec3 l\xe0m vi\u1ec7c d\u1ec5 d\xe0ng v\xe0 tr\u1ef1c quan v\u1edbi d\u1eef li\u1ec7u c\xf3 c\u1ea5u tr\xfac (d\u1ea1ng b\u1ea3ng, \u0111a chi\u1ec1u, ...) v\xe0 d\u1eef li\u1ec7u chu\u1ed7i th\u1eddi gian. Hi\u1ec7n nay, Pandas \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ed9ng r\xe3i trong c\u1ea3 nghi\xean c\u1ee9u l\u1eabn ph\xe1t tri\u1ec3n c\xe1c \u1ee9ng d\u1ee5ng v\u1ec1 khoa h\u1ecdc d\u1eef li\u1ec7u.  "),(0,r.kt)("p",null,"Pandas tr\u1edf th\xe0nh th\u01b0 vi\u1ec7n y\xeau th\xedch c\u1ee7a nh\u1eefng nh\xe0 ph\xe2n t\xedch d\u1eef li\u1ec7u b\u1edfi:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pandas ph\xf9 h\u1ee3p v\u1edbi nhi\u1ec1u lo\u1ea1i d\u1eef li\u1ec7u kh\xe1c nhau:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u d\u1ea1ng b\u1ea3ng, nh\u01b0 trong b\u1ea3ng SQL ho\u1eb7c b\u1ea3ng t\xednh Excel."),(0,r.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u chu\u1ed7i th\u1eddi gian theo th\u1ee9 t\u1ef1 v\xe0 kh\xf4ng c\xf3 th\u1ee9 t\u1ef1."),(0,r.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u ma tr\u1eadn t\xf9y \xfd v\u1edbi nh\xe3n h\xe0ng v\xe0 c\u1ed9t..."))),(0,r.kt)("li",{parentName:"ul"},"D\u1ec5 d\xe0ng thao t\xe1c, ph\xe2n t\xedch, x\u1eed l\xfd v\xe0 tr\u1ef1c quan ho\xe1 d\u1eef li\u1ec7u:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng x\u1eed l\xfd d\u1eef li\u1ec7u m\u1ea5t m\xe1t (NaN,...), nhi\u1ec5u, ..."),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng thay \u0111\u1ed5i k\xedch th\u01b0\u1edbc: ch\xe8n v\xe0 x\xf3a c\u1ed9t, d\xf2ng"),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng c\u0103n ch\u1ec9nh d\u1eef li\u1ec7u t\u1ef1 \u0111\u1ed9ng v\xe0 r\xf5 r\xe0ng"),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng ph\xe2n t\xe1ch, g\u1ed9p n\u1ed1i, chuy\u1ec3n \u0111\u1ed5i, \u0111\u1ecbnh h\xecnh c\xe1c t\u1eadp d\u1eef li\u1ec7u 1 c\xe1ch linh ho\u1ea1t gi\xfap cho vi\u1ec7c t\u1ed5ng h\u1ee3p v\xe0 ph\xe2n t\xedch d\u1eef li\u1ec7u nhanh g\u1ecdn, d\u1ec5 d\xe0ng h\u01a1n."),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng t\u1ea3i v\xe0 l\u01b0u tr\u1eef d\u1eef li\u1ec7u theo nhi\u1ec1u format kh\xe1c nhau: .csv, .txt, .excel, .pkl, .hdfs5, ..."),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng x\u1eed l\xed d\u1eef li\u1ec7u d\u1ea1ng chu\u1ed7i."),(0,r.kt)("li",{parentName:"ul"},"Kh\u1ea3 n\u0103ng t\xedch h\u1ee3p t\u1ed1t v\u1edbi c\xe1c th\u01b0 vi\u1ec7n kh\xe1c c\u1ee7a Python: SciPy, Matplotlib, Seaborn, Plotly, Sklearn, ...")))),(0,r.kt)("h3",{id:"12-c\xe0i-\u0111\u1eb7t"},"1.2. C\xe0i \u0111\u1eb7t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t khi t\u1ea1o m\xf4i tr\u01b0\u1eddng \u1ea3o:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conda create -n hanh python=3.7 pandas")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C\xe0i \u0111\u1eb7t sau khi t\u1ea1o xong m\xf4i tr\u01b0\u1eddng \u1ea3o:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conda install pandas"),"\nho\u1eb7c\n",(0,r.kt)("inlineCode",{parentName:"p"},"pip install pandas")),(0,r.kt)("h3",{id:"13-import-th\u01b0-vi\u1ec7n"},"1.3. Import th\u01b0 vi\u1ec7n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,r.kt)("h4",{id:"tham-kh\u1ea3o"},(0,r.kt)("strong",{parentName:"h4"},"Tham kh\u1ea3o"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf"},"Pandas Cheatsheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bedford-computing.co.uk/learning/wp-content/uploads/2015/10/Python-for-Data-Analysis.pdf"},"Python for Data Analysis"))),(0,r.kt)("h2",{id:"2-c\xe1c-h\xe0m-c\u01a1-b\u1ea3n-trong-pandas"},"2. C\xe1c h\xe0m c\u01a1 b\u1ea3n trong Pandas"),(0,r.kt)("h3",{id:"21-objects-trong-pandas"},"2.1. Objects trong Pandas"),(0,r.kt)("p",null,"Trong Pandas, ta c\xf3 2 kh\xe1i ni\u1ec7m:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DataFrames"),": c\xe1c b\u1ea3ng d\u1eef li\u1ec7u bao g\u1ed3m nhi\u1ec1u h\xe0ng v\xe0 nhi\u1ec1u c\u1ed9t, kh\u1edfi t\u1ea1o th\xf4ng qua c\xe2u l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"li"},"pd.DataFrame()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Series"),": c\u1ed9t d\u1eef li\u1ec7u, kh\u1edfi t\u1ea1o th\xf4ng qua c\xe2u l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"li"},"pd.Series()"))),(0,r.kt)("p",null,"B\u1ea3ng d\u1eef li\u1ec7u trong SQL g\u1ecdi l\xe0 b\u1ea3ng, Excel g\u1ecdi l\xe0 sheet, c\xf2n Python g\u1ecdi \u0111\xe2y l\xe0 1 DataFrame c\u1ee7a Pandas.\nHi\u1ec3u \u0111\u01a1n gi\u1ea3n, 1 c\xe1i Series l\xe0 1 c\u1ed9t c\u1ee7a DataFrame. \u1ede m\u1ee9c m\xe1y t\xednh th\xec Series l\xe0 1 object ri\xeang v\xe0 DataFrame l\xe0 1 object ri\xeang. Tuy nhi\xean, c\xf3 th\u1ec3 chuy\u1ec3n 1 Series th\xe0nh DataFrame v\xe0 chuy\u1ec3n DataFrame 1 c\u1ed9t th\xe0nh Series."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/creating_dataframe1.png",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://analyticssavvy.com/wp-content/uploads/2020/05/series-and-dataframe.png",alt:null})),(0,r.kt)("h3",{id:"22-kh\u1edfi-t\u1ea1o-1-dataframe"},"2.2. Kh\u1edfi t\u1ea1o 1 DataFrame"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o ra 1 DataFrame r\u1ed7ng")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame() #t\u1ea1o ra 1 dataframe r\u1ed7ng\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"type(df) \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pandas.core.frame.DataFrame\n")),(0,r.kt)("p",null,"V\u1eady trong tr\u01b0\u1eddng h\u1ee3p ta mu\u1ed1n t\u1ea1o ra 1 DataFrame c\xf3 ch\u1ee9a d\u1eef li\u1ec7u nh\u01b0 d\u01b0\u1edbi \u0111\xe2y th\xec l\xe0m th\u1ebf n\xe0o?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"right"},"age"),(0,r.kt)("th",{parentName:"tr",align:"left"},"university"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"student1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"My"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"student2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hanh"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"student3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NYU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"student4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Dat"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Paris13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"student5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hoai"),(0,r.kt)("td",{parentName:"tr",align:"right"},"15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MCU")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o ra 1 DataFrame t\u1eeb dict")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'name':['My','Hanh', 'Long', 'Dat', 'Hoai'],\n        'age':[10,11,12,14,15],\n        'university':['MIT','Harvard','NYU','Paris13','MCU']}\ndf1 = pd.DataFrame(dict1, index=[f'student{i}' for i in range(1,6)])\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o ra 1 DataFrame t\u1eeb list c\u1ee7a list")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"li = [['My',10,'MIT'], ['Hanh',11,'Havard'], ['Long',12,'NYU'],['Dat',14,'Paris13'],['Hoai',15,'MCU']]\ndf2 = pd.DataFrame(li, columns=['name', 'age', 'university'], index=[f'student{i}' for i in range(1,6)])\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o ra 1 DataFrame t\u1eeb zip")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"name = ['My','Hanh', 'Long', 'Dat', 'Hoai']\nage = [10,11,12,14,15]\nuniversity = ['MIT', 'Harvard','NYU','Paris13','MCU']\ntuple_li = list(zip(name, age, university))\ndf3 = pd.DataFrame(tuple_li,columns = ['name', 'age','university'], index=[f'student{i}' for i in range(1,6)])\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"T\u1ea1o t\u1eeb 1 chu\u1ed7i numpy")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"col1"),(0,r.kt)("th",{parentName:"tr",align:"right"},"col2"),(0,r.kt)("th",{parentName:"tr",align:"right"},"col3"),(0,r.kt)("th",{parentName:"tr",align:"right"},"col4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14"),(0,r.kt)("td",{parentName:"tr",align:"right"},"15"),(0,r.kt)("td",{parentName:"tr",align:"right"},"16")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\ndf1 = pd.DataFrame(np.linspace(1,16,16).reshape(4,4), columns=['col1', 'col2','col3', 'col4'])\ndf1 = pd.DataFrame(np.linspace(1,16,16).reshape(4,4), columns=[f'col{i}' for i in range(1,5)])\n")),(0,r.kt)("h3",{id:"23-kh\u1edfi-t\u1ea1o-1-series"},"2.3. Kh\u1edfi t\u1ea1o 1 Series"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#L\u1ea5y c\xe1c gi\xe1 tr\u1ecb 1 c\u1ed9t trong DataFrame v\xe0 truy\u1ec1n v\xe0o bi\u1ebfn Series\nseries = df2['name'] # c\xe1ch 1\nseries = df2.name # c\xe1ch 2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0110\u1ed1 vui"),": V\xec sao trong Pandas l\u1ea1i c\xf3 2 c\xe1ch kh\xe1c nhau \u0111\u1ec3 g\u1ecdi 1 c\u1ed9t trong DataFrame?"),(0,r.kt)("p",null,'Ngo\xe0i ra, c\xf3 1 s\u1ed1 c\xe1ch \u0111\u1ec3 ta kh\u1edfi t\u1ea1o 1 Series nh\u01b0 d\u01b0\u1edbi \u0111\xe2y"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"series1 = pd.Series({'name':[1,2,3]}) #kh\u1edfi t\u1ea1o 1 Series t\xean name v\xe0 c\xf3 c\xe1c gi\xe1 tr\u1ecb 1,2,3\n")),(0,r.kt)("p",null,"\u0110\u1ec3 tr\u1ea3 v\u1ec1 1 Series c\xf3 t\xean l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Zoo")," c\xf3 gi\xe1 tr\u1ecb ",(0,r.kt)("inlineCode",{parentName:"p"},"['Z','o','o']")," t\u01b0\u01a1ng \u1ee9ng index l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"['Char1','Char2','Char3']"),"."),(0,r.kt)("p",null,"Ta c\xf3 th\u1ec3 ch\u1ecdn 1 trong 2 c\xe1ch d\u01b0\u1edbi \u0111\xe2y."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"series2 = pd.Series(['Z','o','o'], index=['Char1', 'Char2','Char3'], name='Zoo')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"series3 = pd.Series(np.array(['Z','o','o']), index=['Char1', 'Char2','Char3'], name='Zoo')\n")),(0,r.kt)("h3",{id:"24-\u0111\u1ecdcl\u01b0u-1-dataframe"},"2.4. \u0110\u1ecdc/l\u01b0u 1 DataFrame"),(0,r.kt)("p",null,"Pandas h\u1ed7 tr\u1ee3 \u0111\u1ecdc nhi\u1ec1u format d\u1eef li\u1ec7u kh\xe1c nhau, v\xed d\u1ee5 nh\u01b0: excel, csv, sql, html, json, table, ... \u1ede \u0111\xe2y, m\xecnh s\u1ebd v\xed d\u1ee5 v\u1edbi 1 ki\u1ec3u d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn nh\u1ea5t, \u0111\xf3 l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," l\xe0 vi\u1ebft t\u1eaft c\u1ee7a c\u1ee5m t\u1eeb ",(0,r.kt)("inlineCode",{parentName:"p"},"commas seperated value"),", v\u1ec1 b\u1ea3n ch\u1ea5t l\xe0 1 file text l\u01b0u tr\u1eef c\xe1c th\xf4ng tin d\u1ea1ng b\u1ea3ng v\u1edbi c\xe1c gi\xe1 tr\u1ecb t\u1eebng c\u1ed9t ph\xe2n c\xe1ch nhau b\u1edbi d\u1ea5u ",(0,r.kt)("inlineCode",{parentName:"p"},"commas"),", t\u1ee9c l\xe0 d\u1ea5u ph\u1ea9y. C\xf3 nhi\u1ec1u bi\u1ebfn th\u1ec3 c\u1ee7a file ",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),", v\xed d\u1ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},".tsv")," t\u01b0\u01a1ng \u1ee9ng ",(0,r.kt)("inlineCode",{parentName:"p"},"tab seperated value"),", ..."),(0,r.kt)("p",null,"Ta c\xf3 th\u1ec3 \u0111\u1ecdc file csv th\xf4ng qua c\xe2u l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"p"},"pd.read_csv()")," v\xe0 l\u01b0u file t\u1ea1o ra v\xe0 thao t\xe1c th\xf4ng qua c\xe2u l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"p"},"pd.to_csv()"),". T\u01b0\u01a1ng t\u1ef1 nh\u01b0 csv, c\xe1c format d\u1eef li\u1ec7u kh\xe1c c\u0169ng s\u1ebd c\xf3 c\u1ea5u tr\xfac c\xe2u l\u1ec7nh trong Pandas t\u01b0\u01a1ng t\u1ef1 nh\u01b0 v\u1edbi csv. D\u01b0\u1edbi \u0111\xe2y l\xe0 1 s\u1ed1 v\xed d\u1ee5 v\u1ec1 \u0111\u1ecdc v\xe0 l\u01b0u file v\u1edbi Pandas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data', header=None) #d\u1eef li\u1ec7u online\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import seaborn as sns\ntips_df = sns.load_dataset('tips') #d\u1eef li\u1ec7u t\u1eeb github c\u1ee7a seaborn.\n")),(0,r.kt)("p",null,"Trong b\xe0i h\u1ecdc ti\u1ebfp theo, ch\xfang ta s\u1ebd c\xf9ng nhau t\xecm hi\u1ec3u 1 s\u1ed1 h\xe0m ph\u1ed5 bi\u1ebfn gi\xfap cho Pandas tr\u1edf th\xe0nh c\xf4ng c\u1ee5 x\u1eed l\xfd d\u1eef li\u1ec7u c\u1ea5u tr\xfac d\u1ea1ng b\u1ea3ng h\xe0ng \u0111\u1ea7u khi l\xe0m vi\u1ec7c v\u1edbi Python."))}d.isMDXComponent=!0}}]);