"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2351],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>m});var o=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,o,i=function(t,n){if(null==t)return{};var e,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=o.createContext({}),h=function(t){var n=o.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=h(t.components);return o.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),g=h(e),m=i,b=g["".concat(c,".").concat(m)]||g[m]||u[m]||a;return e?o.createElement(b,l(l({ref:n},p),{},{components:e})):o.createElement(b,l({ref:n},p))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,l=new Array(a);l[0]=g;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=t,r.mdxType="string"==typeof t?t:i,l[1]=r;for(var h=2;h<a;h++)l[h]=e[h];return o.createElement.apply(null,l)}return o.createElement.apply(null,e)}g.displayName="MDXCreateElement"},9998:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=e(7462),i=(e(7294),e(3905));const a={title:"Github Copilot Technical Review",description:"Copilot technical reviewer","\x3c!-- author":"H\u1ed3ng H\u1ea1nh --\x3e","\x3c!-- author_url":"https://github.com/honghanhh --\x3e"},l="\ud83d\udd25Github Copilot\ud83d\udd25",r={permalink:"/blog/2021/07/27/copilot",source:"@site/../blog/2021-07-27-copilot.md",title:"Github Copilot Technical Review",description:"Copilot technical reviewer",date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{title:"Github Copilot Technical Review",description:"Copilot technical reviewer","\x3c!-- author":"H\u1ed3ng H\u1ea1nh --\x3e","\x3c!-- author_url":"https://github.com/honghanhh --\x3e"},prevItem:{title:"XAI - Chi\u1ebfc h\u1ed9p \u0111en ph\xeda sau AI",permalink:"/blog/2022/02/12/xai"}},c={authorsImageUrls:[]},h=[{value:"1. Copilot l\xe0 g\xec?",id:"1-copilot-l\xe0-g\xec",level:2},{value:"2. T\xednh n\u0103ng c\u1ee7a Copilot",id:"2-t\xednh-n\u0103ng-c\u1ee7a-copilot",level:2},{value:"3. C\xe1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Copilot",id:"3-c\xe1ch-th\u1ee9c-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-copilot",level:2},{value:"3. \u01afu \u0111i\u1ec3m v\xe0 nh\u01b0\u1ee3c \u0111i\u1ec3m c\u1ee7a Copilot",id:"3-\u01b0u-\u0111i\u1ec3m-v\xe0-nh\u01b0\u1ee3c-\u0111i\u1ec3m-c\u1ee7a-copilot",level:2}],p={toc:h};function u(t){let{components:n,...a}=t;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"N\u1ebfu b\u1ea1n hay theo d\xf5i v\xe0 c\u1eadp nh\u1eadt nh\u1eefng tin t\u1ee9c v\u1ec1 c\xf4ng ngh\u1ec7 v\xe0 l\u1eadp tr\xecnh th\xec h\u1eb3n b\u1ea1n \u0111\xe3 bi\u1ebft v\u1ec1 m\u1ed9t c\xf4ng c\u1ee5 l\u1eadp tr\xecnh AI m\u1edbi mang t\xean Copilot v\u1eeba \u0111\u01b0\u1ee3c GitHub ch\xednh th\u1ee9c tr\xecnh l\xe0ng trong th\u1eddi gian v\u1eeba qua. N\u1ebfu b\u1ea1n ch\u01b0a bi\u1ebft th\xec \u0111\u1eebng lo l\u1eafng v\xec trong blog n\xe0y, ZootoPi s\u1ebd gi\u1edbi thi\u1ec7u cho c\xe1c b\u1ea1n v\u1ec1 ",(0,i.kt)("a",{parentName:"p",href:"https://copilot.github.com/"},"Copilot"),", ng\u01b0\u1eddi b\u1ea1n \u0111\u1ed3ng h\xe0nh h\u1ee9a h\u1eb9n s\u1ebd h\u1ed7 tr\u1ee3 anh em code c\u1ef1c k\xec b\xe1 \u0111\u1ea1o."),(0,i.kt)("div",{class:"video-wrap"},(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/jCCbCPVXcpQ?autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"1-copilot-l\xe0-g\xec"},"1. Copilot l\xe0 g\xec?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"copilot",src:e(8586).Z,width:"2856",height:"1550"})),(0,i.kt)("p",null,"Theo trang ch\u1ee7 c\u1ee7a Github, Copilot c\xf3 kh\u1ea3 n\u0103ng t\u1ea1o ra nh\u1eefng d\xf2ng code ch\u1ea5t l\u01b0\u1ee3ng tr\xean m\u1ed9t lo\u1ea1t ng\xf4n ng\u1eef l\u1eadp tr\xecnh b\u1eb1ng nh\u1eefng g\u1ee3i \xfd ngay b\xean trong tr\xecnh so\u1ea1n th\u1ea3o c\u1ee7a b\u1ea1n. Hi\u1ec7n t\u1ea1i, b\u1ea3n Technical Preview m\u1edbi c\xf3 Python, JavaScript, TypeScript, Ruby v\xe0 Go v\xe0 m\u1edbi s\u1eed d\u1ee5ng \u0111\u01b0\u1ee3c tr\xean Visual Code. Tuy nhi\xean, ZootoPi tin r\u1eb1ng phi\xean b\u1ea3n ho\xe0n ch\u1ec9nh s\u1ebb \u0111\xe1p \u1ee9ng nhi\u1ec1u ng\xf4n ng\u1eef h\u01a1n c\u0169ng nh\u01b0 tr\u1ea3i nghi\u1ec7m tr\xean c\xe1c IDE \u0111a d\u1ea1ng h\u01a1n."),(0,i.kt)("p",null,"Ph\u1ea3n \u1ee9ng \u0111\u1ea7u ti\xean c\u1ee7a ZootoPi khi nh\xecn th\u1ea5y Github Copilot \u0111\xf3 l\xe0 ..."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"amazing",src:e(2743).Z,width:"241",height:"228"})),(0,i.kt)("p",null,"T\u1ea5t nhi\xean \u0111\u1ea5y l\xe0 tr\u01b0\u1edbc khi ZootoPi c\xf3 b\u1ea5t k\u1ef3 \xfd t\u01b0\u1edfng n\xe0o v\u1ec1 c\xe1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng c\u1ee7a n\xf3."),(0,i.kt)("h2",{id:"2-t\xednh-n\u0103ng-c\u1ee7a-copilot"},"2. T\xednh n\u0103ng c\u1ee7a Copilot"),(0,i.kt)("p",null,"Nh\u01b0 \u0111\xe3 k\u1ec3 tr\xean, Copilot t\u1ea1o ra nh\u1eefng d\xf2ng code ch\u1ea5t l\u01b0\u1ee3ng tr\xean nhi\u1ec1u lo\u1ea1t ng\xf4n ng\u1eef b\u1eb1ng nh\u1eefng g\u1ee3i \xfd ngay b\xean trong tr\xecnh so\u1ea1n th\u1ea3o c\u1ee7a b\u1ea1n."),(0,i.kt)("p",null,"Nh\u1eefng g\xec b\u1ea1n ph\u1ea3i l\xe0m l\xe0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vi\u1ebft m\xf4 t\u1ea3 logic b\u1ea1n mu\u1ed1n \u1edf comment v\xe0 GitHub Copilot bi\u1ebfn logic \u0111\xf3 th\xe0nh nh\u1eefng d\xf2ng code."),(0,i.kt)("li",{parentName:"ul"},"Cung c\u1ea5p cho Copilot m\u1ed9t v\xe0i v\xed d\u1ee5 v\xe0 \u0111\u1ec3 ng\u01b0\u1eddi anh em n\xe0y t\u1ea1o ra ph\u1ea7n c\xf2n l\u1ea1i."),(0,i.kt)("li",{parentName:"ul"},"Ki\u1ec3m th\u1eed v\u1edbi unit test ch\u01b0a bao gi\u1edd d\u1ec5 d\xe0ng h\u01a1n v\xec \u0111\xe3 c\xf3 Copilot \u0111\u1ec1 xu\u1ea5t c\xe1c th\u1eed nghi\u1ec7m ph\xf9 h\u1ee3p v\u1edbi code c\u1ee7a b\u1ea1n."),(0,i.kt)("li",{parentName:"ul"},"Gi\u1ea3i ph\xe1p Copilot g\u1ee3i \xfd \u0111a d\u1ea1ng v\xe0 b\u1ea1n to\xe0n quy\u1ec1n l\u1ef1a ch\u1ecdn phi\xean b\u1ea3n ph\xf9 h\u1ee3p nh\u1ea5t.")),(0,i.kt)("p",null,"Cho d\xf9 b\u1ea1n \u0111ang ti\u1ebfp c\u1eadn m\u1ed9t ng\xf4n ng\u1eef ho\u1eb7c framework m\u1edbi hay ch\u1ec9 \u0111\u01a1n gi\u1ea3n l\xe0 h\u1ecdc vi\u1ebft code, \u0111\xe3 c\xf3 Copilot \u0111\u1ed3ng h\xe0nh c\xf9ng c\xe1c anh em tr\xean m\u1ecdi m\u1eb7t tr\u1eadn."),(0,i.kt)("h2",{id:"3-c\xe1ch-th\u1ee9c-ho\u1ea1t-\u0111\u1ed9ng-c\u1ee7a-copilot"},"3. C\xe1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng c\u1ee7a Copilot"),(0,i.kt)("p",null,"Copilot c\xf3 \u0111\u01b0a ra 1 h\xecnh \u1ea3nh \u0111\u1ec3 cho ta bi\u1ebft c\xe1ch ho\u1ea1t \u0111\u1ed9ng khi ta nh\u1eadp comments ho\u1eb7c 1 s\u1ed1 t\u1eeb \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a functions (h\xe0m) v\xe0 sau \u0111\xf3 1 lo\u1ea1t m\xe3 xu\u1ea5t hi\u1ec7n. Ta c\xf3 th\u1ec3 ti\u1ebfp t\u1ee5c ch\u1ea5p nh\u1eadn g\u1ee3i \xfd m\xe0 n\xf3 \u0111\u01b0a ra ho\u1eb7c ta c\xf3 th\u1ec3 s\u1eeda \u0111\u1ed5i 1 s\u1ed1 g\u1ee3i \xfd \u0111\u1ec3 \u0111\xfang \xfd m\xecnh h\u01a1n."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"copilot-flow",src:e(4723).Z,width:"1942",height:"974"})),(0,i.kt)("p",null,'ZootoPi g\u1ecdi c\u01a1 ch\u1ebf c\u1ee7a Copilot l\xe0 "',(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Vi\u1ebft comments \u0111i v\xe0 Copilot s\u1ebd g\u1ee3i \xfd code cho b\u1ea1n")),'". Ch\u1ea5p nh\u1eadn hay s\u1eeda \u0111\u1ed5i, quy\u1ec1n l\u1ee3i \u0111\u1ec1u n\u1eb1m trong tay b\u1ea1n.'),(0,i.kt)("p",null,"V\u1eady nh\u1eefng m\xe3 ngu\u1ed3n m\xe0 Copilot g\u1ee3i \xfd \u1edf \u0111\xe2y \u0111\u01b0\u1ee3c l\u1ea5y t\u1eeb \u0111\xe2u? N\xf3 \u0111\u1ebfn t\u1eeb ch\xednh Github! Khi h\u1ecd t\u1ea1o ra m\xf4 h\xecnh h\u1ecdc m\xe1y n\xe0y, h\u1ecd \u0111\xe3 hu\u1ea5n luy\u1ec7n tr\xean h\xe0ng tri\u1ec7u kho m\xe3 ngu\u1ed3n m\u1edf t\u1eeb Github."),(0,i.kt)("h2",{id:"3-\u01b0u-\u0111i\u1ec3m-v\xe0-nh\u01b0\u1ee3c-\u0111i\u1ec3m-c\u1ee7a-copilot"},"3. \u01afu \u0111i\u1ec3m v\xe0 nh\u01b0\u1ee3c \u0111i\u1ec3m c\u1ee7a Copilot"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u01afu \u0111i\u1ec3m"),(0,i.kt)("th",{parentName:"tr",align:null},"Nh\u01b0\u1ee3c \u0111i\u1ec3m"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T\u1ef1 \u0111\u1ed9ng ho\xe0n th\xe0nh m\xe3 ngu\u1ed3n."),(0,i.kt)("td",{parentName:"tr",align:null},"Ch\u1ea5t l\u01b0\u1ee3ng m\xe3 Copilot \u0111\u1ec1 xu\u1ea5t.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T\u1ef1 \u0111\u1ed9ng \u0111i\u1ec1n c\xe1c \u0111o\u1ea1n m\xe3 l\u1eb7p l\u1ea1i."),(0,i.kt)("td",{parentName:"tr",align:null},"V\u1ea5n \u0111\u1ec1 b\u1ea3n quy\u1ec1n.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T\u1ea1o c\xe1c ph\u01b0\u01a1ng \xe1n thay th\u1ebf."),(0,i.kt)("td",{parentName:"tr",align:null},"Chi ph\xed sau technical preview.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ki\u1ec3m th\u1eed t\u1ed1n \xedt c\xf4ng s\u1ee9c."),(0,i.kt)("td",{parentName:"tr",align:null},"Kh\xf4ng gi\xfap b\u1ea1n tr\u1edf th\xe0nh m\u1ed9t l\u1eadp tr\xecnh vi\xean gi\u1ecfi.")))),(0,i.kt)("p",null,"\u0110\xf3n xem nh\u1eefng tr\u1ea3i nghi\u1ec7m v\xe0 ph\xe2n t\xedch c\u1ee5 th\u1ec3 h\u01a1n v\u1ec1 Copilot t\u1ea1i k\xeanh ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/jCCbCPVXcpQ"},"ZootoPi"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Website: ",(0,i.kt)("a",{parentName:"li",href:"https://zootopi.dev/blog"},"https://zootopi.dev/blog")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Youtube: ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/jCCbCPVXcpQ"},"https://youtu.be/jCCbCPVXcpQ")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Facebook: ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/aizootopi"},"https://www.facebook.com/aizootopi"))))}u.isMDXComponent=!0},8586:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/copilot-intro-423ef2e3e4baaaaa1dd42650ab6bc947.png"},4723:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/flow-f0d7af752bed4137e3affcc7e68e3dc6.png"},2743:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/wow-11fc3d8a0425757c0fef113146d249e2.png"}}]);