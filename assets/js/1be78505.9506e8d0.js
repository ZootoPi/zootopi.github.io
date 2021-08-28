"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[514,181],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),r=a(3905),o=a(2263),l=a(6291),i=a(5992),c=a(6010),s=a(3018),d=a(3783),m=a(7898),u=a(8030),p=a(7462),b=function(e){return n.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=a(4973),h=a(3366),E=a(6742),v=a(3919),_=a(8617),g="menuLinkText_1J2g",k=["items"],C=["item"],N=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],S=function e(t,a){return"link"===t.type?(0,s.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,k);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,p.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,h.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(y,(0,p.Z)({item:t},a));case"link":default:return n.createElement(w,(0,p.Z)({item:t},a))}}function y(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,N),i=a.items,d=a.label,m=a.collapsible,u=S(a,o),b=(0,s.uR)({initialState:function(){return!!m&&(!u&&a.collapsed)}}),f=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,o=(0,s.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&r(!1)}),[t,o,a])}({isActive:u,collapsed:f,setCollapsed:E}),n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&u},t[g]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),n.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(T,{items:i,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function w(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,Z),l=t.href,i=t.label,s=S(t,r);return n.createElement("li",{className:"menu__list-item",key:i},n.createElement(E.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,v.Z)(l)?i:n.createElement("span",null,i,n.createElement(_.Z,null))))}var M="sidebar_15mo",x="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",L="sidebarLogo_3h0W",P="menu_Bmed",B="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},n.createElement(b,{className:H}))}function W(e){var t,a,r=e.path,o=e.sidebar,l=e.onCollapse,i=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,m.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,s.LU)(),b=p.navbar.hideOnScroll,f=p.hideableSidebar,h=(0,s.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(M,(t={},t[x]=b,t[A]=i,t))},b&&n.createElement(u.Z,{tabIndex:-1,className:L}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",P,(a={},a[B]=!h&&d,a))},n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:o,activePath:r}))),f&&n.createElement(R,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:a,activePath:r,onItemClick:function(){return t()}}))};function z(e){return n.createElement(s.Cv,{component:D,props:e})}var Y=n.memo(W),J=n.memo(z);function U(e){var t=(0,d.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),r&&n.createElement(J,e))}var G=a(6845),K=a(4608),X="backToTopButton_35hR",q="backToTopButtonShow_18ls";function O(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=O(),a=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,n.useState)(!1),l=o[0],i=o[1];return(0,m.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||r(),a<300)i(!1);else if(n){var o=document.documentElement.scrollHeight;a+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),n.createElement("button",{className:(0,c.Z)("clean-btn",X,(e={},e[q]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return a()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j=a(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,a,l,d=e.currentDocRoute,m=e.versionMetadata,u=e.children,p=(0,o.Z)().isClient,h=m.pluginId,E=m.version,v=d.sidebar,_=v?m.docsSidebars[v]:void 0,g=(0,n.useState)(!1),k=g[0],C=g[1],N=(0,n.useState)(!1),Z=N[0],S=N[1],T=(0,n.useCallback)((function(){Z&&S(!1),C(!k)}),[Z]);return n.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:E,tag:(0,s.os)(h,E)}},n.createElement("div",{className:V.docPage},n.createElement(Q,null),_&&n.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&k&&S(!0)}},n.createElement(U,{key:v,sidebar:_,path:d.path,onCollapse:T,isHidden:Z}),Z&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(b,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(V.docMainContainer,(a={},a[V.docMainContainerEnhanced]=k||!_,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(l={},l[V.docItemWrapperEnhanced]=k,l))},n.createElement(r.Zo,{components:G.Z},u)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,j.LX)(r.pathname,e)}));return o?n.createElement($,{currentDocRoute:o,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a})):n.createElement(K.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),r=a(5992),o=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),o=a(3018),l="footer__copyright_T59d",i="footer__tagline_1XAG";var c=function(){var e=(0,o.LU)(),t=e.footer,a=e.customField,c=(t||{}).copyright,s=a||{},d=s.footer_team,m=s.footer_team_url;return t?n.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===t.style})},n.createElement("div",{className:"container"},n.createElement("div",{className:"footer__bottom text--center row"},n.createElement("span",{className:i+" col"},"Made with \ud83e\udde1 by ",n.createElement("a",{href:m,target:"_blank"},d)),c?n.createElement("div",{className:l+" col",dangerouslySetInnerHTML:{__html:c}}):null))):null}}}]);