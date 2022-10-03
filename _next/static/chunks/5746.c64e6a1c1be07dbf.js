"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5746],{6397:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(5893),i=n(7294),o=n(5675),a=n(1664),l=n(2293),s=n(7357),c=n(7948),u=n(3946),p=n(155),d=n(3835),x=n(120),h=n(7426),f=n(8333),m=n(1057),g={button:{"& a, span":{color:function(e){return e.palette.primary.light},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.light}},"& a:hover":{color:"#fff"},"& span:hover":{color:"#fff"}},buttonSide:{"& a":{color:function(e){return e.palette.text.primary},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.main}}},buttonSelectedNav:{"& a, span":{color:function(e){return e.palette.third.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.third.main}}},buttonSelectedSide:{color:function(e){return e.palette.third.main},"& a":{color:function(e){return e.palette.third.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.third.main}}},subButtonSelected:{"& a, span":{color:function(e){return e.palette.text.primary},textDecoration:"none",textAlign:"left",textTransform:"capitalize",fontWeight:"normal",fontSize:16},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.secondary.main}},width:"100%",justifyContent:"flex-start"},dropMainButton:{"& a, span":{color:function(e){return e.palette.secondary.main},textDecoration:"none",textAlign:"left",textTransform:"capitalize",fontWeight:"normal",fontSize:16},"& a:visited":{color:"#000"},width:"100%",justifyContent:"flex-start"},menuContainerRegular:{width:"100% !important",display:{xs:"block"},"& .MuiPaper-root":{borderTop:function(e){return"5px solid ".concat(e.palette.third.main)},minWidth:"270px",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}}};var b=function(e){var t=(0,i.useState)(null),n=t[0],o=t[1],l=e.href,s=e.query,c=void 0===s?"":s,u=e.name,p=e.id,d=e.active,x=e.subitems,h=void 0===x?[]:x,b=e.layout,v=void 0===b?"horizontal":b,y=e.searchopts,j=void 0!==y&&y,w=e.isParent,C=void 0!==w&&w,S=e.isNavItem,k=void 0===S||S,O=e.IconMain,A=void 0===O?null:O,Z=e.IconSub,P=void 0===Z?null:Z,I=e.onItemClick;(0,i.useEffect)((function(){var e=function(){return o(null)};return window.addEventListener("resize",e),function(){window.addEventListener("resize",e)}}),[]);var D=function(e,t){o(null),I(e,t,h.length>0)};return(0,r.jsx)("div",{style:{display:j?"none":"block"},children:(0,r.jsx)(m.Z,{color:"inherit",id:p,sx:d?k?g.buttonSelectedNav:g.buttonSelectedSide:k?g.button:g.buttonSide,style:g.dropMainButton,onClick:function(e){return I(e,p,0===h.length)},children:C?(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsxs)("span",{onClick:function(e){return function(e){o(e.currentTarget)}(e)},style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[u,null!==A&&(0,r.jsx)(A,{})]}),(0,r.jsx)(f.Z,{id:"submenu-item",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:D,MenuListProps:{onMouseLeave:D},sx:g.menuContainerRegular,children:h.map((function(e,t){return(0,r.jsx)(m.Z,{color:"inherit",id:p,sx:d?g.subButtonSelected:g.button,style:{display:"flex",displayDirection:"horizontal"===v?"row":"column"},onClick:function(e){return D(e,p,h.length)},children:(0,r.jsx)(a.default,{href:"".concat(e.href,"/#").concat(e.query),query:e.query,passHref:!0,children:(0,r.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.name,null!==P&&(0,r.jsx)(P,{sx:{height:16}})]})})},"sub-".concat(e.href,"-").concat(t))}))})]}):(0,r.jsx)(a.default,{href:l,query:c,children:u})})})},v=n(1163),y=n(6304),j=n(7682),w=n(1029),C=n(6295),S=n(1903),k=n(5861),O=n(5113),A=n(2761),Z=n(8047),P={searchbar:{width:{xs:"205px",smol:"245px",b4xs:"380px"},minWidth:"parent",borderRadius:"5px",backgroundColor:"#fff","& .MuiAutocomplete-option":{backgroundColor:"red !important",color:"blue"}},textfield:{"& .MuiOutlinedInput-root":{"& > fieldset":{border:"none !important"}}},listbox:{maxHeight:"500px","& li":{borderRadius:"6px",marginTop:"8px"},"& :hover":{"& h6, svg":{color:function(e){return e.palette.secondary.main}}}},paperbg:{borderRadius:"6px",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",marginTop:"-2px",padding:"8px",border:"1px solid rgba(0, 0, 0, 0.12)"}};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}var z=function(e){var t=e.search,n=e.options,i=e.currentval,o=e.onSelectItemChange,a=e.handleSearchClick,l=e.onTextChange;return(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(C.Z,{disablePortal:!0,id:"search-key",value:i,options:n,getOptionLabel:function(e){return e.label},filterOptions:function(e){return e},sx:P.searchbar,style:{display:t?"block":"none"},size:"small",PaperComponent:function(e){return(0,r.jsx)(O.Z,D({elevation:5},e,{sx:P.paperbg}))},ListboxProps:{sx:P.listbox},noOptionsText:"No results found.",isOptionEqualToValue:function(e,t){return e.id===t.id},onInputChange:l,onChange:function(e,t){return o(e,D({},t))},renderOption:function(e,t){return(0,r.jsx)("li",D({},e,{style:{":hover":{color:"red"}},children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)(t.icon,{size:"24"}),(0,r.jsxs)(s.Z,{display:"flex",ml:3,flexDirection:"column",children:[(0,r.jsx)(k.Z,{variant:"subtitle1",color:"tewxt.primary",children:(0,r.jsx)("strong",{children:t.label})}),(0,r.jsx)(k.Z,{variant:"body2",color:"text.secondary",children:t.info})]})]})}))},renderInput:function(e){return(0,r.jsx)(S.Z,D({},e,{autoFocus:!0,focused:!0,placeholder:"Search",sx:P.textfield,inputRef:function(e){return e&&e.focus()}}))}}),(0,r.jsx)(u.Z,{size:"large","aria-label":"Search button","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:a,color:"inherit",sx:P.searchicon,children:t?(0,r.jsx)(Z.Z,{}):(0,r.jsx)(A.Z,{})})]})};var E=n(4689),B=n(5680),T=n(7430),L=n(7934),M=n(8497),R=n(1327),W=[{path:"/",name:"Home",icon:E.Z},{path:"weather-services",icon:B.Z},{path:"cropping-calendar",icon:T.Z},{path:"agroclimatic-services",icon:L.Z},{path:"bulletins",icon:M.Z},{path:"admin",icon:R.Z}];function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){var t=e.search,n=e.handleSearchClick,o=(0,j.Kx)(w.K.PAGE_SEARCH,"id").documents,a=(0,i.useState)(null),l=a[0],s=a[1],c=(0,i.useState)(null),u=c[0],p=c[1],d=(0,i.useState)([]),x=d[0],h=d[1],f=(0,i.useState)({}),m=f[0],g=f[1],b=(0,i.useState)(null),C=b[0],S=b[1],k=function(e,t){var n=(0,i.useState)(e),r=n[0],o=n[1];return(0,i.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(u,500),O=(0,v.useRouter)();(0,i.useEffect)((function(){if(o.length>0){var e=new y.Index({tokenize:"full",matcher:"simple",cache:!0});o.forEach((function(t){e.add(t.id,t.content)})),g(o.reduce((function(e,t){var n=W.find((function(e){return e.path===("index"===t.id?"/":t.id)})),r=n?n.icon:W[4].icon;return void 0===e?N({},t.id,{name:t.name,info:t.info,icon:r,path:t.path}):function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}({},e,N({},t.id,{name:t.name,info:t.info,icon:r,path:t.path}))}),{})),s(e)}}),[o]),(0,i.useEffect)((function(){if(k){var e=l.search(k,{limit:10,suggest:!0});h(e.map((function(e,t){return{id:t,label:m[e].name,info:m[e].info,icon:m[e].icon,href:"index"===e?"/":"/".concat(m[e].path)}})))}}),[k,l,m]);var A=function(){h([]),S(null),p(null)};return(0,r.jsx)(z,{search:t,word:u,options:x,currentval:C,onSelectItemChange:function(e,t){void 0===t.id?A():(S(t),O.push(t.href))},handleSearchClick:function(){t&&(h([]),S(null)),n()},onTextChange:function(e){if(e){var t=e.target.value;""===t?A():p(t)}}})},F={weather:{href:"/weather-services",name:"ACAP Services",subitems:[{href:"/weather-services",query:"ten-day-weather-forecast",name:"10-Day Weather Forecast"},{href:"/weather-services",query:"seasonal-forecast",name:"Seasonal Forecast"},{href:"/weather-services",query:"special-weather-forecast",name:"Special Weather Forecast"}]},calendar:{href:"/cropping-calendar",name:"Cropping Calendar",subitems:[]},agroclimatic:{href:"/agroclimatic-services",name:"Recommendations",subitems:[{href:"/agroclimatic-services",query:"seasonal-recommendations",name:"Regional Seasonal Climate Outlook and Advisory"},{href:"/agroclimatic-services",query:"resilient-practices",name:"10-Day Farm Weather Outlook and Advisory"},{href:"/agroclimatic-services",query:"special-weather-forecast",name:"Special Weather Forecast"}]},bulletins:{href:"/bulletins",name:"Bulletins",subitems:[]}};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={container:function(e){return H({display:{md:"flex"}},e.breakpoints.down("lg"),{color:e.palette.primary.main,paddingLeft:0,paddingRight:0})},appbar:{width:"100%",minHeight:"66px",borderBottom:function(e){return"6px solid ".concat(e.palette.third.main)},backgroundColor:function(e){return{md:e.palette.primary.light,lg:e.palette.primary.main}}},toolbar:{width:"100%",justifyContent:{sm:"space-between",md:"end"},alignItems:{xs:"flex-start",sm:"center"},backgroundColor:function(e){return e.palette.primary.main},flexDirection:{xs:"column",sm:"row"},color:function(e){return e.palette.primary.light},paddingTop:{xs:"4px"},padding:{lg:"6px 0 6px"},paddingRight:{xs:0,md:"8px"},height:"parent"},titleContainerFixed:function(e){var t;return H(t={position:"fixed",zIndex:"999",left:0,top:0,width:{xs:"unset",md:"400px"}},e.breakpoints.down("980"),{width:"300px"}),H(t,"marginRight",{xs:"24px",md:"unset"}),H(t,"cursor","pointer"),H(t,"alignItems","center"),t},titleContainer:function(e){var t;return H(t={width:{xs:"unset",md:"400px"}},e.breakpoints.down("980"),{width:"300px"}),H(t,"marginRight",{xs:"24px",md:"unset"}),H(t,"cursor","pointer"),H(t,"alignItems","center"),t},titleTextDesktop:{display:"grid",placeContent:"center"},title:{backgroundColor:function(e){return{md:e.palette.primary.light}},width:{sm:"100%"},display:{xs:"none",md:"flex"},justifyContent:{sm:"center"},"& span:first-child":{width:{xs:"50px !important",md:"65px !important"},display:{xs:"none !important",md:"block !important"}},gap:{xs:"12px",md:"12px"},"& h5, h4":function(e){var t;return H(t={fontFamily:"Roboto",fontSize:{xs:"1rem",md:"1.25rem"},lineHeight:{xs:"1.07",md:"1"},fontWeight:{xs:"normal",md:"bold"},textTransform:"uppercase",textAlign:"center",color:{md:e.palette.primary.main}},e.breakpoints.down("980"),{fontSize:"16px",fontWeight:"bold"}),H(t,"margin",0),H(t,"whiteSpace","nowrap"),t},"& h4":{color:{md:function(e){return e.palette.primary.main}},fontWeight:"normal",fontSize:{xs:"0.875rem",md:"1rem"},marginTop:{xs:"1px",md:"2px"}},height:"100%",padding:{md:"8px 16px 8px 0"}},subtitleLink:{fontFamily:"Antonio",textTransform:"uppercase",color:"#DCEDC8",cursor:"pointer",display:{sm:"block",md:"none"}},menuContainerSmall:{width:"100% !important",display:{xs:"block",md:"none"},"& .MuiPaper-root":{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}},menuContainerRegular:{width:"100% !important",minWidth:"300px",display:{xs:"block"},"& .MuiPaper-root":{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}}},G=n(326),K=n(5111),V=n(3619);function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){J(e,t,n[t])}))}return e}var U=Object.keys(F).reduce((function(e,t){return e[t]=!1,e}),{}),X={search:!1,loading:!1,info:"",error:""};var Y=function(){var e=(0,i.useState)(U),t=e[0],n=e[1],m=(0,i.useState)(null),v=m[0],y=m[1],j=(0,i.useState)(X),w=j[0],C=j[1],S=(0,d.aC)();(0,i.useEffect)((function(){var e=function(){y(null)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var k=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r?(n(Q({},U,J({},t,!0))),y(null)):n(Q({},U,J({},t,!0)))},O=function(e,t){y(null),k(t)},A=function(){C((function(e){return Q({},e,{search:!e.search})}))};return(0,r.jsx)(l.Z,{position:"sticky",sx:_.appbar,children:(0,r.jsxs)(c.Z,{maxWidth:"lg",sx:_.container,id:"header-contents",children:[(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsx)(s.Z,{sx:{minHeight:{sm:"none"}},children:(0,r.jsx)(s.Z,{sx:_.titleContainerFixed,children:(0,r.jsxs)(s.Z,{sx:_.title,children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,x.assetPrefixer)("images/logos/da-logo.png"),height:65,width:65,loader:x.imageLoader,alt:"Bicol Agro-Climatic Advisory Portal (BACAP)"}),(0,r.jsxs)(s.Z,{sx:_.titleTextDesktop,children:[(0,r.jsxs)("h5",{children:["Agro-Climatic",(0,r.jsx)("br",{}),"Advisory Portal - Bicol"]}),(0,r.jsx)("h4",{children:"(ACAP-BICOL)"})]})]})})})}),(0,r.jsx)(s.Z,{sx:{minHeight:{sm:"none",visibility:"hidden"}},children:(0,r.jsx)(s.Z,{sx:_.titleContainer,style:{visibility:"hidden"},children:(0,r.jsxs)(s.Z,{sx:_.title,style:{visibility:"hidden"},children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,x.assetPrefixer)("images/logos/da-logo.png"),height:65,width:65,loader:x.imageLoader,alt:"Bicol Agro-Climatic Advisory Portal (BACAP)"}),(0,r.jsxs)(s.Z,{sx:_.titleTextDesktop,children:[(0,r.jsxs)("h5",{children:["Agro-Climatic",(0,r.jsx)("br",{}),"Advisory Portal - Bicol"]}),(0,r.jsx)("h4",{children:"(ACAP-BICOL)"})]})]})})}),(0,r.jsxs)(p.Z,{variant:"dense",disableGutters:!0,sx:_.toolbar,children:[(0,r.jsxs)(s.Z,{sx:{width:"100%",flexGrow:1,justifyContent:"space-between",display:{xs:"flex",md:"none"}},children:[(0,r.jsx)(u.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit",children:(0,r.jsx)(G.Z,{})}),(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsxs)(s.Z,{sx:_.title,style:{display:w.search?"none":"flex",width:"100%",justifyContent:"center"},children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,x.assetPrefixer)("images/logos/da-logo.png"),height:75,width:75,loader:x.imageLoader,alt:"Bicol Agro-Climatic Advisory Portal (BACAP)"}),(0,r.jsxs)("div",{className:"acap-title",children:[(0,r.jsxs)("h5",{children:["Agro-Climatic",(0,r.jsx)("br",{}),"Advisory Portal - Bicol"]}),(0,r.jsx)("h4",{children:"(ACAP-BICOL)"})]})]})}),w.search&&(0,r.jsx)(q,{search:w.search,handleSearchClick:A}),(0,r.jsxs)(f.Z,{id:"menu-appbar",elevation:0,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(v),onClose:O,sx:g.menuContainerRegular,children:[Object.keys(F).map((function(e,n){var i=F[e].subitems.length>0;return(0,r.jsx)(b,{href:F[e].href,name:F[e].name,id:e,active:t[e],isParent:i,isNavItem:!1,IconMain:K.Z,IconSub:V.Z,subitems:F[e].subitems,onItemClick:k},n)})),(0,r.jsx)(b,{href:null!==S.user?S.user.accountlevel===h.DW.ADMIN?"/admin":"/superadmin":"/admin/login",name:null!==S.user?S.user.accountlevel===h.DW.ADMIN?"Admin":"Superadmin":"Login",id:"admin",active:!1,isNavItem:!1,layout:"vertical",onItemClick:function(){return O()}}),(0,r.jsx)(b,{href:"#",name:"Search",id:"sm-search",active:!1,isNavItem:!1,layout:"vertical",preventnavs:!0,onItemClick:function(e){O(0,"sm-search"),A()}})]})]}),(0,r.jsxs)(s.Z,{sx:{flexGrow:1,justifyContent:"flex-end",alignItems:"center",display:{xs:"none",md:"flex"}},children:[Object.keys(F).map((function(e,n){var i=F[e].subitems.length>0;return(0,r.jsx)(b,{href:F[e].href,name:F[e].name,id:e,active:t[e],isParent:i,IconMain:K.Z,IconSub:V.Z,subitems:F[e].subitems,searchopts:w.search,onItemClick:function(t){return k(t,e)}},n)})),(0,r.jsx)(b,{href:null!==S.user?S.user.accountlevel===h.DW.ADMIN?"/admin":"/superadmin":"/admin/login",name:null!==S.user?S.user.accountlevel===h.DW.ADMIN?"Admin":"Superadmin":"Login",id:"admin",active:!1,searchopts:w.search,onItemClick:function(){}}),(0,r.jsx)(q,{search:w.search,handleSearchClick:A})]})]})]})})}}}]);