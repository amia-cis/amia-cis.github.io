"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{4623:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(5893),i=r(7357),o=r(8456),s=r(5861),a={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var c=function(){return(0,t.jsx)(i.Z,{sx:a.container,children:(0,t.jsxs)(i.Z,{sx:a.loading,children:[(0,t.jsx)(s.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(o.Z,{size:"32px"})]})})}},7702:function(e,n,r){r.d(n,{Z:function(){return E}});var t=r(5893),i=r(7357),o=r(7294),s=r(2293),a=r(6720),c=r(7948),l=r(7720),u=r(7533),d=r(3946),p=r(8462),x=r(7594),f=r(9334),h=r(8619),m=r(155),y=r(5861),b=r(1664),j=r(1163),g=r(7520),v=r(9662),Z=r(3384),k=r(9903),w=r(326),C=r(7427),S=r(1898),A=r(4229),P={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{padding:function(e){return e.spacing(1)},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},"& .MuiListItemButton-root:hover":{backgroundColor:function(e){return e.palette.primary.light}},"& .listitembutton-styled":{py:0,minHeight:48,color:function(e){return e.palette.primary.dark},borderRadius:function(e){return e.spacing(1)},margin:function(e){return e.spacing(1)},"&:hover, &:focus":{"& .MuiTypography-root":{color:function(e){return e.palette.primary.dark}}}},"& .MuiListItemIcon-root":{marginRight:"-8px"}},listitem:{"& a":{textDecoration:"none"}}};function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=280,z=[{text:"Get Started",link:"/admin",icon:(0,t.jsx)(Z.Z,{})},{text:"Crop Recommendations",link:"/admin/bulletins/crops",icon:(0,t.jsx)(S.Z,{})},{text:"SMS Management",link:"/admin/sms",icon:(0,t.jsx)(k.Z,{})},{text:"Risks Recommendations",link:"/admin/bulletins/risks",icon:(0,t.jsx)(S.Z,{})},{text:"BACAP Settings",link:"/admin/weather",icon:(0,t.jsx)(A.Z,{})}],B=z.length,H=[{text:"Profile",link:"/admin/profile",icon:(0,t.jsx)(C.Z,{})},{text:"BACAP Website",link:"/",icon:(0,t.jsx)(g.Z,{})},{text:"Logout",link:"#",icon:(0,t.jsx)(v.Z,{})}];function R(e){var n=e.window,r=I(o.useState(!1),2),g=r[0],v=r[1],Z=I(o.useState(null),2),k=Z[0],C=Z[1],S=(0,j.useRouter)(),A=e.user,T=e.onBtnClick;o.useEffect((function(){var e=S.route.substr(S.route.lastIndexOf("/")+1,S.route.length),n={admin:0,crops:1,risks:3,weather:4,sms:2,profile:5,create:1,view:1};C(n[e]?n[e]:0)}),[S.route]);var R=function(){v(!g)},W=(0,t.jsxs)("div",{children:[(0,t.jsx)(m.Z,{}),(0,t.jsx)(l.Z,{}),(0,t.jsx)(p.Z,{sx:P.list,disablePadding:!0,children:z.map((function(e,n){return(0,t.jsx)(b.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:k===n,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(f.Z,{primary:e.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]},e.label)},n)}))}),(0,t.jsx)(l.Z,{}),(0,t.jsx)(p.Z,{sx:P.list,children:H.map((function(e,n){return"Logout"===e.text?(0,t.jsx)(b.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:k===n+B,onClick:T,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(f.Z,{primary:e.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},n):(0,t.jsx)(b.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:k===n+B,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(f.Z,{primary:e.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},n)}))})]}),E=void 0!==n?function(){return n().document.body}:void 0;return(0,t.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,t.jsx)(a.ZP,{}),(0,t.jsx)(s.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(M,"px)")},ml:{sm:"".concat(M,"px")}},children:(0,t.jsxs)(m.Z,{sx:P.toolbar,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:R,sx:{mr:2,display:{sm:"none"}},children:(0,t.jsx)(w.Z,{})}),(0,t.jsx)(y.Z,{variant:"h6",noWrap:!0,component:"div",children:"BACAP Admin"})]}),(0,t.jsxs)(i.Z,{sx:P.profileToolbar,children:["Welcome, ",A.email,"!"]})]})}),(0,t.jsxs)(i.Z,{component:"nav",sx:{width:{sm:M},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,t.jsx)(u.ZP,{container:E,variant:"temporary",open:g,onClose:R,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:M}},children:W}),(0,t.jsx)(u.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:M,boxShadow:"0px 0px 20px rgb(1 41 112 / 10%)",color:"#444444",border:"none",backgroundColor:"#fff"}},open:!0,children:W})]}),(0,t.jsxs)(i.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(M,"px)")}},children:[(0,t.jsx)(m.Z,{}),(0,t.jsx)(c.Z,{maxWidth:"lg",children:e.children})]})]})}var W=r(4623);var E=function(e){return(0,t.jsxs)(i.Z,{sx:{marginTop:function(e){return e.spacing(4)}},children:[e.loading&&(0,t.jsx)(W.Z,{}),!e.loading&&e.user&&(0,t.jsx)(R,{user:e.user,onBtnClick:e.onBtnLogoutClick,children:e.children})]})}},9431:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(4051),i=r.n(t),o=r(4659);function s(e,n,r,t,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?n(c):Promise.resolve(c).then(t,i)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){s(o,t,i,a,c,"next",e)}function c(e){s(o,t,i,a,c,"throw",e)}a(void 0)}))}}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,t;return n=e,(r=[{key:"setAuthHeaders",value:function(e){return a(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,o.I8.currentUser.getIdToken(!0);case 4:r=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0.message);case 10:e.headers.Authorization=r?"Bearer ".concat(r):"";case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},{key:"createRequestObject",value:function(e){var n=e.body,r=e.params,t=e.responseType,o=this;return a(i().mark((function e(){var s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{}},n&&(s.data=n),r&&(s.params=r),t&&(s.responseType=t),e.next=6,o.setAuthHeaders(s);case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))()}}])&&c(n.prototype,r),t&&c(n,t),e}()}}]);