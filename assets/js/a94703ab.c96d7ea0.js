"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[666],{6072:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(1504),o=n(4971),i=n(7932),s=n(9652),c=n(7887),l=n(5212),r=n(4357),d=n(3504),u=n(6864);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(7624);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:c}=(0,d.yI)();return(0,d.SM)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.c)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.c)("clean-btn",s.W.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(8736),x=n(5592),j=n(4088),f=n(8848),v=n(8164);function _(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.c)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t,children:(0,b.jsx)(_,{className:g.collapseSidebarButtonIcon})})}var S=n(8532),C=n(3192);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var B=n(3596),y=n(584),w=n(6016),A=n(3664);function W(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.G)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.G)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function L(e){let{item:t,onItemClick:n,activePath:i,level:l,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.y)(),v=function(e){const t=(0,A.c)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,c.Gw)(e):void 0),[e,t])}(t),_=(0,c.Md)(t,i),g=(0,y.Sc)(x,i),{collapsed:k,setCollapsed:S}=(0,B.a)({initialState:()=>!!h&&(!_&&t.collapsed)}),{expandedItem:T,setExpandedItem:L}=function(){const e=(0,a.useContext)(N);if(e===I)throw new C.AH("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!k),L(e?null:r),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,C.i0)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:k,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==r&&j&&S(!0)}),[h,T,r,S,j]),(0,b.jsxs)("li",{className:(0,o.c)(s.W.docs.docSidebarItemCategory,s.W.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},p),children:[(0,b.jsxs)("div",{className:(0,o.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,b.jsx)(w.c,{className:(0,o.c)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!k:void 0,href:h?v??"#":v,...d,children:m}),x&&h&&(0,b.jsx)(W,{collapsed:k,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(B.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,b.jsx)(F,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var E=n(8136),M=n(3232);const H={menuExternalLink:"menuExternalLink_NmtK"};function P(e){let{item:t,onItemClick:n,activePath:a,level:i,index:l,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,c.Md)(t,a),x=(0,E.c)(d);return(0,b.jsx)("li",{className:(0,o.c)(s.W.docs.docSidebarItemLink,s.W.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(w.c,{className:(0,o.c)("menu__link",!x&&H.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(M.c,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function G(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:c,className:l}=t;return(0,b.jsx)("li",{className:(0,o.c)(s.W.docs.docSidebarItemLink,s.W.docs.docSidebarItemLinkLevel(n),c&&[R.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:i}},a)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(L,{item:t,...n});case"html":return(0,b.jsx)(G,{item:t,...n});default:return(0,b.jsx)(P,{item:t,...n})}}function U(e){let{items:t,...n}=e;const a=(0,c.mg)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(D,{item:e,index:t,...n},t)))})}const F=(0,a.memo)(U),K={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function V(e){let{path:t,sidebar:n,className:i}=e;const c=function(){const{isActive:e}=(0,S.el)(),[t,n]=(0,a.useState)(e);return(0,d.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.c)("menu thin-scrollbar",K.menu,c&&K.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.c)(s.W.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(F,{items:n,activePath:t,level:1})})})}const Y="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:c}}}=(0,f.y)();return(0,b.jsxs)("div",{className:(0,o.c)(Y,s&&z,i&&q),children:[s&&(0,b.jsx)(v.c,{tabIndex:-1,className:O}),(0,b.jsx)(V,{path:t,sidebar:n}),c&&(0,b.jsx)(k,{onClick:a})]})}const Q=a.memo(J);var X=n(7880),Z=n(1628);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,Z.q)();return(0,b.jsx)("ul",{className:(0,o.c)(s.W.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(F,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(X.Mx,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,j.U)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(Q,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,r.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(_,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function se(e){let{children:t}=e;const n=(0,l.m)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:c}=(0,x.IT)(),[l,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&r(!1),!l&&(0,p.I)()&&r(!0),i((e=>!e))}),[i,l]);return(0,b.jsx)("aside",{className:(0,o.c)(s.W.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.c)(ie.sidebarViewport,l&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:c,onCollapse:d,isHidden:l}),l&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const le={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function re(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,l.m)();return(0,b.jsx)("main",{className:(0,o.c)(le.docMainContainer,(t||!a)&&le.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.c)("container padding-top--md padding-bottom--lg",le.docItemWrapper,t&&le.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,l.m)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(re,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(6592);function be(e){const t=(0,c.Uj)(e);if(!t)return(0,b.jsx)(me.c,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.cr,{className:(0,o.c)(s.W.page.docsDocPage),children:(0,b.jsx)(l.y,{name:a,items:r,children:(0,b.jsx)(ue,{children:n})})})}},6592:(e,t,n)=>{n.d(t,{c:()=>c});n(1504);var a=n(4971),o=n(4357),i=n(6448),s=n(7624);function c(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.c)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.c,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.c,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);