(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{9179:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/risks",function(){return r(9883)}])},4623:function(n,e,r){"use strict";r.d(e,{Z:function(){return l}});var t=r(5893),i=r(7357),o=r(8456),s=r(5861),a={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var l=function(){return(0,t.jsx)(i.Z,{sx:a.container,children:(0,t.jsxs)(i.Z,{sx:a.loading,children:[(0,t.jsx)(s.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(o.Z,{size:"32px"})]})})}},7702:function(n,e,r){"use strict";r.d(e,{Z:function(){return E}});var t=r(5893),i=r(7357),o=r(7294),s=r(2293),a=r(6720),l=r(7948),c=r(7720),u=r(7533),d=r(3946),x=r(8462),f=r(7594),p=r(9334),h=r(8619),m=r(155),g=r(5861),j=r(1664),y=r(1163),b=r(7520),v=r(9662),Z=r(3384),k=r(326),w=r(7427),C=r(1898),S=r(4229),P={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{padding:function(n){return n.spacing(1)},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},"& .MuiListItemButton-root:hover":{backgroundColor:function(n){return n.palette.primary.light}},"& .listitembutton-styled":{py:0,minHeight:48,color:function(n){return n.palette.primary.dark},borderRadius:function(n){return n.spacing(1)},margin:function(n){return n.spacing(1)},"&:hover, &:focus":{"& .MuiTypography-root":{color:function(n){return n.palette.primary.dark}}}},"& .MuiListItemIcon-root":{marginRight:"-8px"}},listitem:{"& a":{textDecoration:"none"}}};function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function _(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],s=!0,a=!1;try{for(r=r.call(n);!(s=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return A(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=280,T=[{text:"Get Started",link:"/admin",icon:(0,t.jsx)(Z.Z,{})},{text:"Crop Recommendations",link:"/admin/bulletins/crops",icon:(0,t.jsx)(C.Z,{})},{text:"Risks Recommendations",link:"/admin/bulletins/risks",icon:(0,t.jsx)(C.Z,{})},{text:"BACAP Settings",link:"/admin/weather",icon:(0,t.jsx)(S.Z,{})}],I=[{text:"Profile",link:"/admin/profile",icon:(0,t.jsx)(w.Z,{})},{text:"BACAP Website",link:"/",icon:(0,t.jsx)(b.Z,{})},{text:"Logout",link:"#",icon:(0,t.jsx)(v.Z,{})}];function R(n){var e=n.window,r=_(o.useState(!1),2),b=r[0],v=r[1],Z=_(o.useState(null),2),w=Z[0],C=Z[1],S=(0,y.useRouter)(),A=n.user,R=n.onBtnClick;o.useEffect((function(){var n=S.route.substr(S.route.lastIndexOf("/")+1,S.route.length),e={admin:0,crops:1,risks:2,weather:3,profile:4,create:1,view:1};C(e[n]?e[n]:0)}),[S.route]);var z=function(){v(!b)},E=(0,t.jsxs)("div",{children:[(0,t.jsx)(m.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(x.Z,{sx:P.list,disablePadding:!0,children:T.map((function(n,e){return(0,t.jsx)(j.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:w===e,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(p.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]},n.label)},e)}))}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(x.Z,{sx:P.list,children:I.map((function(n,e){return"Logout"===n.text?(0,t.jsx)(j.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:w===e+4,onClick:R,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(p.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},e):(0,t.jsx)(j.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(h.Z,{className:"listitembutton-styled",selected:w===e+4,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(p.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},e)}))})]}),L=void 0!==e?function(){return e().document.body}:void 0;return(0,t.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,t.jsx)(a.ZP,{}),(0,t.jsx)(s.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(B,"px)")},ml:{sm:"".concat(B,"px")}},children:(0,t.jsxs)(m.Z,{sx:P.toolbar,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:z,sx:{mr:2,display:{sm:"none"}},children:(0,t.jsx)(k.Z,{})}),(0,t.jsx)(g.Z,{variant:"h6",noWrap:!0,component:"div",children:"BACAP Admin"})]}),(0,t.jsxs)(i.Z,{sx:P.profileToolbar,children:["Welcome, ",A.email,"!"]})]})}),(0,t.jsxs)(i.Z,{component:"nav",sx:{width:{sm:B},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,t.jsx)(u.ZP,{container:L,variant:"temporary",open:b,onClose:z,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:B}},children:E}),(0,t.jsx)(u.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:B,boxShadow:"0px 0px 20px rgb(1 41 112 / 10%)",color:"#444444",border:"none",backgroundColor:"#fff"}},open:!0,children:E})]}),(0,t.jsxs)(i.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(B,"px)")}},children:[(0,t.jsx)(m.Z,{}),(0,t.jsx)(l.Z,{maxWidth:"lg",children:n.children})]})]})}var z=r(4623);var E=function(n){return(0,t.jsxs)(i.Z,{sx:{marginTop:function(n){return n.spacing(4)}},children:[n.loading&&(0,t.jsx)(z.Z,{}),!n.loading&&n.user&&(0,t.jsx)(R,{user:n.user,onBtnClick:n.onBtnLogoutClick,children:n.children})]})}},9883:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var t=r(4051),i=r.n(t),o=r(5893),s=r(7294),a=r(1163),l=r(3835),c=r(5861),u=r(7702);var d=function(n){return(0,o.jsxs)(u.Z,{loading:n.loading,user:n.user,onBtnLogoutClick:n.onBtnClick,children:[(0,o.jsx)(c.Z,{variant:"h5",children:"Climate Risks Recommendations"}),(0,o.jsxs)("p",{children:["Create and preview ",(0,o.jsx)("strong",{children:"10-Day"})," and ",(0,o.jsx)("strong",{children:"Seasonal"})," climate risks bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]})};function x(n,e,r,t,i,o,s){try{var a=n[o](s),l=a.value}catch(c){return void r(c)}a.done?e(l):Promise.resolve(l).then(t,i)}function f(){var n=(0,l.aC)(),e=(0,a.useRouter)();(0,s.useEffect)((function(){n.loading||n.user||e.push("/admin/login")}),[n.user,n.loading,e]);var r=function(){var e,r=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function s(n){x(o,t,i,s,a,"next",n)}function a(n){x(o,t,i,s,a,"throw",n)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,o.jsx)(d,{loading:n.loading,user:n.user,onBtnClick:r})}f.customLayout=!0,f.adminPage=!0;var p=f}},function(n){n.O(0,[611,774,888,179],(function(){return e=9179,n(n.s=e);var e}));var e=n.O();_N_E=e}]);