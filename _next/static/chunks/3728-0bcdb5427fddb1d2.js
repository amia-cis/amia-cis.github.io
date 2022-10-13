"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3728],{3059:function(e,n,r){var t=r(4051),i=r.n(t),o=r(5893),a=r(7294),s=r(1163),l=r(3835),c=r(7426);function u(e,n,r,t,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void r(c)}s.done?n(l):Promise.resolve(l).then(t,i)}function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){var n=function(n){var r=(0,l.aC)(),t=(0,s.useRouter)();(0,a.useEffect)((function(){if(!r.loading&&!r.user){var e=t.pathname.includes("/superadmin")?"/superadmin/login":"/admin/login";t.push(e)}r.user&&(r.user.accountlevel===c.DW.ADMIN&&t.pathname.includes("/superadmin")&&t.push("/unauthorized"),r.user.accountlevel===c.DW.SUPERADMIN&&t.pathname.includes("/admin")&&t.push("/unauthorized"))}),[r.user,r.loading,t]);var p=function(){var e,n=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){u(o,t,i,a,s,"next",e)}function s(e){u(o,t,i,a,s,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}({},n,{loading:r.loading,user:r.user,onBtnLogoutClick:p}))};return n.customLayout=!0,n.adminPage=!0,n}},4623:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(5893),i=r(7357),o=r(8456),a=r(5861),s={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var l=function(){return(0,t.jsx)(i.Z,{sx:s.container,children:(0,t.jsxs)(i.Z,{sx:s.loading,children:[(0,t.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(o.Z,{size:"32px"})]})})}},2530:function(e,n,r){r.d(n,{Z:function(){return F}});var t=r(5893),i=r(7357),o=r(7294),a=r(2293),s=r(6720),l=r(7948),c=r(7720),u=r(7533),d=r(3946),p=r(8462),f=r(7594),x=r(9334),m=r(8619),h=r(155),y=r(5861),g=r(1664),b=r(1163),j=r(7426),v=r(7520),Z=r(9662),k=r(326),w=r(3384),S=r(9903),A=r(1898),C=r(4229),P=r(7427),M=[{text:"Get Started",link:"/admin",icon:(0,t.jsx)(w.Z,{})},{text:"Crop Recommendations",link:"/admin/bulletins/crops",icon:(0,t.jsx)(A.Z,{})},{text:"SMS Management",link:"/admin/sms",icon:(0,t.jsx)(S.Z,{})},{text:"Risks Recommendations",link:"/admin/bulletins/risks",icon:(0,t.jsx)(A.Z,{})},{text:"ACAP Settings",link:"/admin/weather",icon:(0,t.jsx)(C.Z,{})}],I=[{text:"Profile",link:"/admin/profile",icon:(0,t.jsx)(P.Z,{})}],D={admin:0,crops:1,risks:3,weather:4,sms:2,profile:5,create:1,view:1,viewSMS:2},O=r(6851),W=[{text:"Get Started",link:"/superadmin",icon:(0,t.jsx)(w.Z,{})},{text:"Users",link:"/superadmin/users",icon:(0,t.jsx)(O.Z,{})}],L=[{text:"Profile",link:"/superadmin/profile",icon:(0,t.jsx)(P.Z,{})}],N={users:1,profile:2},z=r(1796),T={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{padding:function(e){return e.spacing(1)},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},"& .MuiListItemButton-root:hover":{backgroundColor:function(e){return e.palette.primary.light}},"& .Mui-selected":{backgroundColor:function(e){return"".concat((0,z.Fq)(e.palette.primary.light,.3)," !important")}},"& .listitembutton-styled":{py:0,minHeight:48,color:function(e){return e.palette.primary.dark},borderRadius:function(e){return e.spacing(1)},margin:function(e){return e.spacing(1)},"&:hover, &:focus":{"& .MuiTypography-root":{color:function(e){return e.palette.primary.main}}},"& a":{color:function(e){return e.palette.primary.dark}}},"& .MuiListItemIcon-root":{marginRight:"-8px"}},listitem:{"& a":{textDecoration:"none"}}};function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(e,n)||H(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||H(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,n){if(e){if("string"===typeof e)return E(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,n):void 0}}var _=280,G=[{text:"ACAP Website",link:"/",icon:(0,t.jsx)(v.Z,{})},{text:"Logout",link:"#",icon:(0,t.jsx)(Z.Z,{})}];function U(e){var n=e.window,r=R(o.useState(!1),2),v=r[0],Z=r[1],w=R(o.useState(null),2),S=w[0],A=w[1],C=(0,b.useRouter)(),P=e.user,O=e.onBtnLogoutClick,z=e.user.accountlevel===j.DW.ADMIN?M:W,E=B(e.user.accountlevel===j.DW.ADMIN?I:L).concat(B(G)),H=z.length||0;o.useEffect((function(){var n=C.route.substring(C.route.lastIndexOf("/")+1,C.route.length),r=e.user.accountlevel===j.DW.ADMIN?D:N;A(r[n]?r[n]:0)}),[e.user.accountlevel,C.route]);var U=function(){Z(!v)},q=(0,t.jsxs)("div",{children:[(0,t.jsx)(h.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(p.Z,{sx:T.list,disablePadding:!0,children:z.map((function(e,n){return(0,t.jsx)(g.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===n,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(x.Z,{primaryTypographyProps:{fontSize:14,fontWeight:"medium"},children:(0,t.jsx)("a",{href:e.link,children:e.text})})]},e.label)},n)}))}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(p.Z,{sx:T.list,children:E.map((function(e,n){return"Logout"===e.text?(0,t.jsx)(g.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===n+H,onClick:O,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(x.Z,{primary:e.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},n):(0,t.jsx)(g.default,{href:e.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===n+H,children:[(0,t.jsx)(f.Z,{sx:{color:"inherit"},children:e.icon}),(0,t.jsx)(x.Z,{primaryTypographyProps:{fontSize:14,fontWeight:"medium"},children:(0,t.jsx)("a",{href:e.link,children:e.text})})]})},n)}))})]}),F=void 0!==n?function(){return n().document.body}:void 0;return(0,t.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,t.jsx)(s.ZP,{}),(0,t.jsx)(a.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(_,"px)")},ml:{sm:"".concat(_,"px")}},children:(0,t.jsxs)(h.Z,{sx:T.toolbar,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:U,sx:{mr:2,display:{sm:"none"}},children:(0,t.jsx)(k.Z,{})}),(0,t.jsx)(y.Z,{variant:"h6",noWrap:!0,component:"div",children:"ACAP Admin"})]}),(0,t.jsxs)(i.Z,{sx:T.profileToolbar,children:["Welcome, ",P.email,"!"]})]})}),(0,t.jsxs)(i.Z,{component:"nav",sx:{width:{sm:_},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,t.jsx)(u.ZP,{container:F,variant:"temporary",open:v,onClose:U,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:_}},children:q}),(0,t.jsx)(u.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:_,boxShadow:"0px 0px 20px rgb(1 41 112 / 10%)",color:"#444444",border:"none",backgroundColor:"#fff"}},open:!0,children:q})]}),(0,t.jsxs)(i.Z,{component:"main",sx:{flexGrow:1,padding:{xs:"16px 0 0 0",sm:"24px 24px 24px 24px"},width:{sm:"calc(100% - ".concat(_,"px)")}},children:[(0,t.jsx)(h.Z,{}),(0,t.jsx)(l.Z,{maxWidth:"lg",children:e.children})]})]})}var q=r(4623);var F=function(e){return(0,t.jsxs)(i.Z,{sx:{marginTop:function(e){return e.spacing(4)}},children:[e.loading&&(0,t.jsx)(q.Z,{}),!e.loading&&e.user&&e.user.accountlevel===e.accLevel&&(0,t.jsx)(U,{user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,children:e.children})]})}}}]);