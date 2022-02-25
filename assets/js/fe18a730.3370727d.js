"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[896],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return g}});var h=e(7294);function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);n&&(h=h.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,h)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,h,c=function(t,n){if(null==t)return{};var e,h,c={},i=Object.keys(t);for(h=0;h<i.length;h++)e=i[h],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(h=0;h<i.length;h++)e=i[h],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}var a=h.createContext({}),l=function(t){var n=h.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=l(t.components);return h.createElement(a.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return h.createElement(h.Fragment,{},n)}},m=h.forwardRef((function(t,n){var e=t.components,c=t.mdxType,i=t.originalType,a=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),m=l(e),g=c,s=m["".concat(a,".").concat(g)]||m[g]||u[g]||i;return e?h.createElement(s,o(o({ref:n},p),{},{components:e})):h.createElement(s,o({ref:n},p))}));function g(t,n){var e=arguments,c=n&&n.mdxType;if("string"==typeof t||c){var i=e.length,o=new Array(i);o[0]=m;var r={};for(var a in n)hasOwnProperty.call(n,a)&&(r[a]=n[a]);r.originalType=t,r.mdxType="string"==typeof t?t:c,o[1]=r;for(var l=2;l<i;l++)o[l]=e[l];return h.createElement.apply(null,o)}return h.createElement.apply(null,e)}m.displayName="MDXCreateElement"},2730:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var h=e(7462),c=e(3366),i=(e(7294),e(3905)),o=["components"],r={title:"XAI - C\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i m\xf4 h\xecnh",description:"XAI - C\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i m\xf4 h\xecnh h\u1ecdc m\xe1y v\xe0 h\u1ecdc s\xe2u","\x3c!-- author":"H\u1ed3ng H\u1ea1nh --\x3e","\x3c!-- author_url":"https://github.com/honghanhh --\x3e"},a="\ud83d\udd25XAI - Ph\xe2n lo\u1ea1i c\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i m\xf4 h\xecnh h\u1ecdc m\xe1y\ud83d\udd25",l={permalink:"/blog/2022/02/13/xai1",source:"@site/../blog/2022-02-13-xai1.md",title:"XAI - C\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i m\xf4 h\xecnh",description:"XAI - C\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i m\xf4 h\xecnh h\u1ecdc m\xe1y v\xe0 h\u1ecdc s\xe2u",date:"2022-02-13T00:00:00.000Z",formattedDate:"February 13, 2022",tags:[],truncated:!0,prevItem:{title:"4 m\u1eb9o t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Google Colab",permalink:"/blog/2022/02/17/colab"},nextItem:{title:"XAI - Chi\u1ebfc h\u1ed9p \u0111en ph\xeda sau AI",permalink:"/blog/2022/02/12/xai"}},p=[{value:"1. N\u1ed9i t\u1ea1i (intrinsic) hay h\u1eadu t\u1ea1i (post-hoc)?",id:"1-n\u1ed9i-t\u1ea1i-intrinsic-hay-h\u1eadu-t\u1ea1i-post-hoc",children:[]},{value:"2. M\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri (model-agnostic) hay M\xf4 h\xecnh c\u1ee5 th\u1ec3 (model-specific)?",id:"2-m\xf4-h\xecnh-b\u1ea5t-kh\u1ea3-tri-model-agnostic-hay-m\xf4-h\xecnh-c\u1ee5-th\u1ec3-model-specific",children:[]},{value:"3. C\u1ee5c b\u1ed9 (local) hay to\xe0n c\u1ee5c (global)?",id:"3-c\u1ee5c-b\u1ed9-local-hay-to\xe0n-c\u1ee5c-global",children:[]}],u={toc:p};function m(t){var n=t.components,r=(0,c.Z)(t,o);return(0,i.kt)("wrapper",(0,h.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ti\u1ebfp n\u1ed1i h\xe0nh tr\xecnh t\xecm hi\u1ec3u v\u1ec1 XAI c\xf9ng ZootoPi (tham kh\u1ea3o b\xe0i tr\u01b0\u1edbc v\u1ec1 ",(0,i.kt)("a",{parentName:"p",href:"https://zootopi.dev/blog/2022/02/12/xai"},"XAI - Chi\u1ebfc h\u1ed9p \u0111en ph\xeda sau AI"),"), 1 ph\xfat h\xf4m nay h\xe3y c\xf9ng ch\xfang m\xecnh ph\xe2n lo\u1ea1i c\xe1c ph\u01b0\u01a1ng ph\xe1p di\u1ec5n gi\u1ea3i 1 m\xf4 h\xecnh h\u1ecdc m\xe1y. C\u1ea5u tr\xfac c\u1ee7a vi\u1ec7c gi\u1ea3i th\xedch 1 m\xf4 h\xecnh h\u1ecdc m\xe1y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh b\u1eb1ng nhi\u1ec1u c\xe1ch kh\xe1c nhau d\u1ef1a v\xe0o m\u1ee5c \u0111\xedch, th\u1eddi \u0111i\u1ec3m, hay t\xednh \u1ee9ng d\u1ee5ng, nh\u01b0ng ph\u1ea7n l\u1edbn \u0111\u1ec1u c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c ph\xe2n chia theo 3 nh\xf3m ch\xednh:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N\u1ed9i t\u1ea1i (intrinsic) hay h\u1eadu t\u1ea1i (post-hoc)?"),(0,i.kt)("li",{parentName:"ul"},"M\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri (model-agnostic) hay M\xf4 h\xecnh c\u1ee5 th\u1ec3 (model-specific)?"),(0,i.kt)("li",{parentName:"ul"},"C\u1ee5c b\u1ed9 (local) hay to\xe0n c\u1ee5c (global)?")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Explanable AI",src:e(7855).Z})),(0,i.kt)("h2",{id:"1-n\u1ed9i-t\u1ea1i-intrinsic-hay-h\u1eadu-t\u1ea1i-post-hoc"},"1. N\u1ed9i t\u1ea1i (intrinsic) hay h\u1eadu t\u1ea1i (post-hoc)?"),(0,i.kt)("p",null,"Ph\u01b0\u01a1ng ph\xe1p n\u1ed9i t\u1ea1i \u0111\u1ec1 c\u1eadp \u0111\u1ebfn vi\u1ec7c gi\u1edbi h\u1ea1n \u0111\u1ed9 ph\u1ee9c t\u1ea1p c\u1ee7a m\xf4 h\xecnh. Khi c\xe1c m\xf4 h\xecnh \u0111\u1ee7 \u0111\u01a1n gi\u1ea3n v\u1ec1 c\u1ea5u tr\xfac, ch\xfang ta c\xf3 th\u1ec3 hi\u1ec3u c\xe1ch m\xf4 h\xecnh \u0111\u01b0a ra d\u1ef1 \u0111o\xe1n b\u1eb1ng vi\u1ec7c nh\xecn v\xe0o ch\xednh m\xf4 h\xecnh. V\xed d\u1ee5 nh\u01b0 c\xe1c tr\u1ecdng s\u1ed1 \u0111\xe3 h\u1ecdc c\u1ee7a 1 m\xf4 h\xecnh h\u1ed3i quy tuy\u1ebfn t\xednh (linear regression) ho\u1eb7c c\xe1c \u0111\u01b0\u1eddng ph\xe2n chia \u0111\xe3 \u0111\u01b0\u1ee3c h\u1ecdc v\u1edbi c\xe2y quy\u1ebft \u0111\u1ecbnh (decision tree) c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 gi\u1ea3i th\xedch t\u1ea1i sao m\xf4 h\xecnh l\u1ea1i \u0111\u01b0a ra c\xe1c d\u1ef1 \u0111o\xe1n."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1ed9t s\u1ed1 m\xf4 h\xecnh n\u1ed9i t\u1ea1i ph\u1ed5 bi\u1ebfn bao g\u1ed3m: Linear Regression, Logistic Regression, GLM, GAM, Decision Tree, Decision Rules, RuleFit, KNN, Naive Bayes,...")),(0,i.kt)("p",null,"Trong khi \u0111\xf3, c\xe1c ph\u01b0\u01a1ng ph\xe1p h\u1eadu t\u1ea1i ph\xe2n t\xedch m\xf4 h\xecnh sau khi \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\xe0o t\u1ea1o, v\xed d\u1ee5 nh\u01b0 vi\u1ec7c ho\xe1n v\u1ecb c\xe1c \u0111\u1eb7c tr\u01b0ng quan tr\u1ecdng (permutation feature importance). C\xe1c ph\u01b0\u01a1ng ph\xe1p n\xe0y g\u1ed3m 2 nh\xe1nh nh\u1ecf l\xe0 m\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri (model-agnostic) v\xe0 m\xf4 h\xecnh c\u1ee5 th\u1ec3 (model-specific)."),(0,i.kt)("h2",{id:"2-m\xf4-h\xecnh-b\u1ea5t-kh\u1ea3-tri-model-agnostic-hay-m\xf4-h\xecnh-c\u1ee5-th\u1ec3-model-specific"},"2. M\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri (model-agnostic) hay M\xf4 h\xecnh c\u1ee5 th\u1ec3 (model-specific)?"),(0,i.kt)("p",null,"M\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng cho b\u1ea5t k\xec m\xf4 h\xecnh h\u1ecdc m\xe1y n\xe0o trong khi m\xf4 h\xecnh c\u1ee5 th\u1ec3 ch\u1ec9 c\xf3 th\u1ec3 \xe1p d\u1ee5ng cho 1 s\u1ed1 lo\u1ea1i m\xf4 h\xecnh nh\u1ea5t \u0111\u1ecbnh. V\xed d\u1ee5, n\u1ebfu m\u1ed9t ph\u01b0\u01a1ng ph\xe1p ch\u1ec9 ho\u1ea1t \u0111\u1ed9ng v\u1edbi m\u1ea1ng neuron (Neural Network) th\xec n\xf3 s\u1ebd \u0111\u01b0\u1ee3c coi l\xe0 d\xe0nh ri\xeang cho m\xf4 h\xecnh \u0111\xf3. Ng\u01b0\u1ee3c l\u1ea1i, n\u1ebfu 1 ph\u01b0\u01a1ng ph\xe1p gi\u1ea3i th\xedch coi m\u1ecdi m\xf4 h\xecnh \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\xe0o t\u1ea1o l\xe0 h\u1ed9p \u0111en th\xec n\xf3 s\u1ebd \u0111\u01b0\u1ee3c coi l\xe0 m\xf4 h\xecnh b\u1ea5t kh\u1ea3 tri."),(0,i.kt)("h2",{id:"3-c\u1ee5c-b\u1ed9-local-hay-to\xe0n-c\u1ee5c-global"},"3. C\u1ee5c b\u1ed9 (local) hay to\xe0n c\u1ee5c (global)?"),(0,i.kt)("p",null,"Ph\u01b0\u01a1ng ph\xe1p gi\u1ea3i th\xedch c\u1ee5c b\u1ed9 nh\u1eb1m gi\u1ea3i th\xedch 1 \u0111i\u1ec3m d\u1eef li\u1ec7u ho\u1eb7c 1 d\u1ef1 \u0111o\xe1n duy nh\u1ea5t trong khi ph\u01b0\u01a1ng ph\xe1p to\xe0n c\u1ee5c c\u1ed1 g\u1eafng cung c\u1ea5p l\u1eddi gi\u1ea3i th\xedch to\xe0n di\u1ec7n v\u1ec1 c\xe1ch m\xf4 h\xecnh ho\u1ea1t \u0111\u1ed9ng d\u1ef1a tr\xean to\xe0n b\u1ed9 d\u1eef li\u1ec7u v\xe0 d\u1ef1 \u0111o\xe1n. C\xe1c ph\u01b0\u01a1ng ph\xe1p c\u1ee5c b\u1ed9 c\xf3 th\u1ec3 bi\u1ebfn th\xe0nh k\u1ef9 thu\u1eadt to\xe0n c\u1ee5c th\xf4ng qua vi\u1ec7c t\u1ed5ng h\u1ee3p c\xe1c k\u1ebft qu\u1ea3 c\u1ee5c b\u1ed9."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\u1ed9t s\u1ed1 v\xed d\u1ee5 cho ph\u01b0\u01a1ng ph\xe1p c\u1ee5c b\u1ed9 c\xf3 th\u1ec3 k\u1ec3 \u0111\u1ebfn Individual Conditional Expectation Curves, LIME, Scoped Rules (anchors), Counterfactual Explanations, Shapley values, SHAP, ..."),(0,i.kt)("li",{parentName:"ul"},"M\u1ed9t s\u1ed1 ph\u01b0\u01a1ng ph\xe1p to\xe0n c\u1ee5c ph\u1ed5 bi\u1ebfn bao g\u1ed3m Partial dependence plot, Accumulated local effect plots, Feature interaction (H-statistics), Functional decomposition, Permutation feature importance, Global surrogate models, Prototypes and criticisms, ...")),(0,i.kt)("p",null,"Chi ti\u1ebft v\u1ec1 c\xe1c ph\u01b0\u01a1ng ph\xe1p s\u1ebd \u0111\u01b0\u1ee3c ch\xfang m\xecnh l\xean s\xf3ng trong th\u1eddi gian t\u1edbi, \u0111\u1eebng qu\xean follow hashtag #XAI #1phutaicungzootopi \u0111\u1ec3 kh\xf4ng b\u1ecf l\u1ee1 nh\xe9!"),(0,i.kt)("p",null,"\u0110\xf3n xem nh\u1eefng tr\u1ea3i nghi\u1ec7m v\xe0 ph\xe2n t\xedch c\u1ee5 th\u1ec3 t\u1eeb Zootopi t\u1ea1i:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Website: ",(0,i.kt)("a",{parentName:"li",href:"https://zootopi.dev/blog"},"https://zootopi.dev/blog")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Youtube: ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/jCCbCPVXcpQ"},"https://youtu.be/jCCbCPVXcpQ")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Facebook: ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/aizootopi"},"https://www.facebook.com/aizootopi"))))}m.isMDXComponent=!0},7855:function(t,n,e){n.Z=e.p+"assets/images/xai_interpretability-ec609bd9d6b48c9bfc377f5177b1ef9a.png"}}]);