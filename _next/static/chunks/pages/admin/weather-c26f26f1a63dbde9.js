(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{1158:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/weather",function(){return t(632)}])},4623:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(7357),a=t(8456),i=t(5861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var s=function(){return(0,r.jsx)(o.Z,{sx:c.container,children:(0,r.jsxs)(o.Z,{sx:c.loading,children:[(0,r.jsx)(i.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(a.Z,{size:"32px"})]})})}},7702:function(e,n,t){"use strict";t.d(n,{Z:function(){return U}});var r=t(5893),o=t(7357),a=t(7294),i=t(2293),c=t(6720),s=t(7948),u=t(1519),l=t(7533),f=t(3946),d=t(8462),p=t(891),h=t(796),b=t(9953),v=t(155),x=t(5861),m=t(1664),y=t(7520),g=t(9662),j=t(3384),w=t(326),O=t(7427),S=t(1898),Z=t(8349),k={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"}},listitem:{"& a":{textDecoration:"none"}}};function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=280,E=[{text:"Get Started",link:"/admin",icon:(0,r.jsx)(j.Z,{})},{text:"Weather Services",link:"/admin/weather",icon:(0,r.jsx)(Z.Z,{})},{text:"Create Crops Bulletins",link:"/admin/bulletins/crops",icon:(0,r.jsx)(S.Z,{})},{text:"Create Risks Bulletins",link:"/admin/bulletins/risks",icon:(0,r.jsx)(S.Z,{})}],C=[{text:"BACAP Website",link:"/",icon:(0,r.jsx)(y.Z,{})},{text:"Profile",link:"/admin/profile",icon:(0,r.jsx)(O.Z,{})},{text:"Logout",link:"#",icon:(0,r.jsx)(g.Z,{})}];function R(e){var n=e.window,t=_(a.useState(!1),2),y=t[0],g=t[1],j=e.user,O=e.onBtnClick,S=function(){g(!y)},Z=(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(d.Z,{sx:k.list,children:E.map((function(e,n){return(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]})},n)}))}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(d.Z,{sx:k.list,children:C.map((function(e,n){return"Logout"===e.text?(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,onClick:O,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]})},n):(0,r.jsx)(m.default,{href:e.link,passHref:!0,children:(0,r.jsxs)(p.ZP,{button:!0,children:[(0,r.jsx)(h.Z,{children:e.icon}),(0,r.jsx)(b.Z,{children:e.text})]},n)},n)}))})]}),P=void 0!==n?function(){return n().document.body}:void 0;return(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(c.ZP,{}),(0,r.jsx)(i.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(A,"px)")},ml:{sm:"".concat(A,"px")}},children:(0,r.jsxs)(v.Z,{sx:k.toolbar,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(f.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:S,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(w.Z,{})}),(0,r.jsx)(x.Z,{variant:"h6",noWrap:!0,component:"div",children:"BACAP Admin"})]}),(0,r.jsxs)(o.Z,{sx:k.profileToolbar,children:["Welcome, ",j.email,"!"]})]})}),(0,r.jsxs)(o.Z,{component:"nav",sx:{width:{sm:A},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,r.jsx)(l.ZP,{container:P,variant:"temporary",open:y,onClose:S,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:A}},children:Z}),(0,r.jsx)(l.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:A}},open:!0,children:Z})]}),(0,r.jsxs)(o.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(A,"px)")}},children:[(0,r.jsx)(v.Z,{}),(0,r.jsx)(s.Z,{maxWidth:"lg",children:e.children})]})]})}var T=t(4623);var U=function(e){return(0,r.jsxs)(o.Z,{sx:{marginTop:function(e){return e.spacing(4)}},children:[e.loading&&(0,r.jsx)(T.Z,{}),!e.loading&&e.user&&(0,r.jsx)(R,{user:e.user,onBtnClick:e.onBtnLogoutClick,children:e.children})]})}},6601:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(5893),o=t(7357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.children,t=e.value,c=e.index,s=i(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(o.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},632:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return De},default:function(){return We}});var r=t(4051),o=t.n(r),a=t(5893),i=t(7294),c=t(1163),s=t(4815),u=t(7467),l=t(7357),f=t(44),d=t(1703),p=t(6601),h=t(5861),b=t(7702),v=t(1057),x=t(6863),m=t(657),y=t(1425),g=t(6514),j=t(8951),w=t(7645),O=t(9898),S=t(7879),Z=t(6901),k=t(7709),P=t(7906),_=t(295),A=t(3252),E=t(2882),C=t(3184),R=t(3816),T=t(2367),U=t(258),B=t(8456),I=t(7109),L=t(3946),D=t(9669),W=t.n(D),z=t(5048);function F(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function M(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){F(a,r,o,i,c,"next",e)}function c(e){F(a,r,o,i,c,"throw",e)}i(void 0)}))}}function N(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"setAuthHeaders",value:function(e){return M(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,z.I8.currentUser.getIdToken(!0);case 4:t=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0.message);case 10:e.headers.Authorization=t?"Bearer ".concat(t):"";case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},{key:"createRequestObject",value:function(e){var n=e.body,t=e.params,r=this;return M(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{}},n&&(a.data=n),t&&(a.params=t),e.next=5,r.setAuthHeaders(a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}}])&&N(n.prototype,t),r&&N(n,r),e}();function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function J(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){G(a,r,o,i,c,"next",e)}function c(e){G(a,r,o,i,c,"throw",e)}i(void 0)}))}}function V(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}function Q(e,n){return!n||"object"!==ee(n)&&"function"!==typeof n?q(e):n}function Y(e,n){return Y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},Y(e,n)}var ee=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ne(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=$(e);if(n){var o=$(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Q(this,t)}}var te=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&Y(e,n)}(i,e);var n,t,r,a=ne(i);function i(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i);var n=q(e=a.call(this));return X(q(e),"getUsers",J(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W().get(n.USERS_API_LIST);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e.BASE_URL="https://amia-cis.herokuapp.com/api",e.USERS_API="".concat(e.BASE_URL,"/user"),e.USERS_API_LIST="".concat(e.BASE_URL,"/users"),e}return n=i,(t=[{key:"createUser",value:function(e){var n=this;return J(o().mark((function t(){var r,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["email","displayname","account_level","disabled","emailverified"].forEach((function(n){void 0!==e[n]&&(r[n]=e[n])})),t.next=5,n.createRequestObject({body:r});case 5:return a=t.sent,t.next=8,W()(K({},a,{url:n.USERS_API,method:"POST"}));case 8:return i=t.sent,t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"updateUser",value:function(e){var n=this;return J(o().mark((function t(){var r,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},["uid","email","displayname","disabled","emailverified","account_level"].forEach((function(n){void 0!==e[n.toLowerCase()]&&(r[n]=e[n.toLowerCase()])})),t.next=5,n.createRequestObject({body:r});case 5:return a=t.sent,t.next=8,W()(K({},a,{url:n.USERS_API,method:"PATCH"}));case 8:return i=t.sent,t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))()}},{key:"deleteUser",value:function(e){var n=this;return J(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({});case 2:return r=t.sent,t.next=5,W().delete("".concat(n.USERS_API,"/").concat(e),r);case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getUser",value:function(e){var n=e.uid,t=e.email,r=this;return J(o().mark((function e(){var a,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},n&&(a={uid:n}),t&&(a={email:t}),e.next=5,r.createRequestObject({params:a});case 5:return i=e.sent,e.next=8,W().get("".concat(r.BASE_URL,"/user"),i);case 8:return c=e.sent,e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})))()}}])&&V(n.prototype,t),r&&V(n,r),i}(H),re="under_normal",oe="under_wetter_than_normal",ae="under_drier_than_normal";function ie(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function ce(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){se(e,n,t[n])}))}return e}function fe(e,n){return!n||"object"!==pe(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function de(e,n){return de=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},de(e,n)}var pe=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function he(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=ue(e);if(n){var o=ue(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return fe(this,t)}}var be=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&de(e,n)}(i,e);var n,t,r,a=he(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).BASE_URL="https://amia-cis.herokuapp.com/api",e.WEATHER_FORECAST_SEASONAL="".concat(e.BASE_URL,"/weather/seasonal/region"),e.WEATHER_FORECAST_PROVINCE="".concat(e.BASE_URL,"/weather/seasonal/province"),e}return n=i,t=[{key:"upsertSeasonal",value:function(e){var n,t=this;return(n=o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,W()(le({},r,{url:t.WEATHER_FORECAST_SEASONAL,method:"POST"}));case 5:return a=n.sent,n.abrupt("return",a.data);case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(e){ie(a,r,o,i,c,"next",e)}function c(e){ie(a,r,o,i,c,"throw",e)}i(void 0)}))})()}},{key:"getweathercondition",value:function(e){var n="";return e<=80&&(n=re),e>=81&&e<=120&&(n=oe),e>=120&&(n=ae),n}}],t&&ce(n.prototype,t),r&&ce(n,r),i}(H),ve=new te,xe=new be,me=(ve.createUser.bind(ve),ve.updateUser.bind(ve),ve.deleteUser.bind(ve),ve.getUser.bind(ve),ve.getUsers.bind(ve),xe.upsertSeasonal.bind(xe)),ye=xe.getweathercondition.bind(xe),ge=t(9132);function je(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function we(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function Oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Oe(e,n,t[n])}))}return e}function Ze(e){return function(e){if(Array.isArray(e))return je(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ke={loading:!1,show:!1,error:"",msg:""};var Pe=function(e){var n=e.weatherData,t=e.provinces,r=e.onCancelClick,c=e.onAsyncFinish,s=(0,i.useState)([]),u=s[0],f=s[1],d=(0,i.useState)([]),p=d[0],h=d[1],b=(0,i.useState)(ke),m=b[0],y=b[1],g=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],j=[{id:0,label:"Jan"},{id:1,label:"Feb"},{id:2,label:"Mar"},{id:3,label:"Apr"},{id:4,label:"May"},{id:5,label:"Jun"},{id:6,label:"Jul"},{id:7,label:"Aug"},{id:8,label:"Sep"},{id:9,label:"Oct"},{id:10,label:"Nov"},{id:11,label:"Dec"}];(0,i.useEffect)((function(){if(n.length>0&&0===u.length){for(var e=[],t=0;t<n.length;t+=1){var r={};(r=Se({},n[t])).months=[];for(var o=0;o<n[t].months.length;o+=1)r.months.push(Se({},n[t].months[o]));e.push(r)}f((function(n){return e}))}}),[n,u]),(0,i.useEffect)((function(){if(u.length>0){var e=O();h(e)}}),[u]),(0,i.useEffect)((function(){if(u.length>0&&0===p.length){for(var e=[],n=0;n<u.length;n+=1){for(var t=[],r=0;r<u[n].months.length;r+=1)t.push(!1);e.push(t)}h((function(n){return e}))}}),[u,p]);var w=function(e){var n="";try{n=t.filter((function(n){return n.province===e}))[0].format}catch(r){n="n/a"}return n},O=function(){for(var e=Ze(p),n=0;n<e.length;n+=1)for(var t=0;t<e[n].length;t+=1)e[n][t]=!1;return e},D=function(){var e,n=(e=o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>0?t[0].region:"",W()&&6===u.length){e.next=4;break}return y((function(e){return Se({},e,{show:!0,loading:!1,error:"Invalid months sequence."})})),e.abrupt("return");case 4:return e.prev=4,y(Se({},ke,{loading:!0})),e.next=8,me({region:n,provinces:u});case 8:c(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),r=e.t0.message.replaceAll(/Firebase/g,""),y((function(e){return Se({},e,{show:!0,loading:!1,error:r})}));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){we(a,r,o,i,c,"next",e)}function c(e){we(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),W=function(){for(var e=u[0].months.map((function(e){return g.indexOf(e.mo)+1})),n=!0,t=0;t<e.length-1&&(!(1!==Math.abs(e[t+1]-e[t])||e[t+1]<e[t])||(n=!1,12===e[t]&&1===e[t+1]&&(n=!0),n));)t+=1;return n};return(0,a.jsx)("div",{children:u.length>0&&p.length>0&&(0,a.jsxs)(E.Z,{children:[(0,a.jsxs)(P.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,a.jsx)(C.Z,{children:(0,a.jsxs)(R.Z,{children:[(0,a.jsx)(A.Z,{children:"Province"}),u[0].mos.map((function(e,n){return(0,a.jsx)(A.Z,{sx:{textAlign:"center"},children:(0,a.jsx)(S.Z,{size:"small",disablePortal:!0,disabled:m.loading,id:"month-".concat(n),options:j,ListboxProps:{sx:{fontSize:"14px"}},sx:{maxWidth:"120px",width:"120px",fontSize:"14px","& .MuiAutocomplete-input, & .MuiInputLabel-root":{fontSize:"14px"}},renderInput:function(e){return(0,a.jsx)(T.Z,Se({},e,{label:"Month",size:"small",variant:"outlined"}))},onChange:function(e,t){return function(e,n){for(var t=parseInt(n.from.charAt(n.from.length-1)),r=Ze(u),o=0;o<r.length;o+=1)r[o].months[t].mo=g[n.id];f(r)}(0,Se({},t,{from:"month-".concat(n)}))}})},"".concat(e,"-").concat(n))}))]})}),(0,a.jsx)(_.Z,{children:u.map((function(e,n){return(0,a.jsxs)(R.Z,{children:[(0,a.jsx)(A.Z,{children:w(e.name)}),e.months.map((function(e,t){return(0,a.jsxs)(A.Z,{id:"cell-".concat(n,"-").concat(t),sx:{textAlign:"center"},onClick:function(){return function(e,n){if(!m.loading){var t=O();t[e][n]=!0,h(t),""===m.error&&""===m.msg||y(ke)}}(n,t)},children:[(0,a.jsxs)("div",{id:"view-".concat(n,"-").concat(t),style:{display:p[n][t]?"none":"block"},children:[(0,a.jsx)(l.Z,{children:e.val}),(0,a.jsx)(l.Z,{sx:ge.Z.labels,children:e.con})]}),(0,a.jsx)(k.Z,{sx:{"& input":{fontSize:"12px"},width:"120px",display:p[n][t]?"block":"none"},id:"text-".concat(n,"-").concat(t),size:"small",disabled:m.loading,endAdornment:(0,a.jsx)(I.Z,{position:"end",sx:{float:"right",marginTop:"-16px"},children:(0,a.jsx)(L.Z,{edge:"end",onClick:function(){return function(e,n){var t=document.getElementById("text-".concat(e,"-").concat(n)),r=void 0!==document.getElementById("text-".concat(e,"-").concat(n))?t.value:"";if((isNaN(r)||""===r)&&(y((function(e){return Se({},e,{loading:!1,show:!0,error:"Not a number"})})),r="ERROR"),"ERROR"!==r){var o=Ze(u),a=o[e];a.months[n].val=r,a.months[n].con=ye(r),o[e]=a,f(o)}}(n,t)},children:(0,a.jsx)(U.Z,{})})})},"text-".concat(n,"-").concat(t))]},"".concat(e.mo,"-").concat(t))}))]},"row-".concat(n))}))})]}),(0,a.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"24px"},children:[(0,a.jsx)("div",{style:{minWidth:"400px"},children:(0,a.jsx)(Z.Z,{severity:""!==m.error?"error":"success",sx:{fontSize:"12px",minHeight:"32px",width:"100%",visibility:m.show?"initial":"hidden"},children:""!==m.error?m.error:m.msg})}),(0,a.jsxs)(x.Z,{variant:"outlined","aria-label":"outlined button controls group",sx:{float:"right",marginTop:"24px","& button":{width:"100px"}},children:[(0,a.jsx)(v.Z,{id:"cancel",onClick:r,disabled:m.loading,children:"Back"}),(0,a.jsxs)(v.Z,{onClick:D,disabled:m.loading,variant:"contained",children:[(0,a.jsx)("span",{style:{display:m.loading?"none":"block"},children:"Save"})," \xa0",(0,a.jsx)(B.Z,{size:20,color:"secondary",sx:{display:m.loading?"block":"none"}})]})]})]})]})})};function _e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ae={seasonal_update:!1,tenday_update:!1};var Ee=function(e){var n=e.weatherData,t=e.provinces,r=(0,i.useState)(Ae),o=r[0],s=r[1],u=(0,i.useState)(!1),f=u[0],d=u[1],p=(0,c.useRouter)(),b=function(e){var n=e.target.id;s("cancel"===n?Ae:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){_e(e,n,t[n])}))}return e}({},o,_e({},n,!0)))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(m.Z,{open:f,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,a.jsx)(w.Z,{id:"data-saved-success",children:"Success"}),(0,a.jsx)(g.Z,{children:(0,a.jsx)(j.Z,{id:"alert-dialog-description",children:"The seasonal weather data are saved successfully."})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(v.Z,{onClick:function(){p.push("/weather-services")},autoFocus:!0,children:"OK"})})]}),(0,a.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:function(e){return e.spacing(1)}},children:[(0,a.jsx)(h.Z,{variant:"h6",children:"Seasonal Weather Forecast Updater"}),(0,a.jsx)(x.Z,{variant:"outlined","aria-label":"outlined button controls group",children:!o.seasonal_update&&!o.tenday_update&&(0,a.jsx)(v.Z,{id:"seasonal_update",onClick:b,children:"Update"})})]}),(0,a.jsxs)(h.Z,{variant:"body2",sx:ge.Z.subheader,children:["Copy the Bicol Region's ",(0,a.jsx)("strong",{children:"Rainfall Analysis Forecast"})," from PAGASA's ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast.",children:"Seasonal Forecast"})," page for each province."]}),!o.seasonal_update&&(0,a.jsx)(O.Z,{weatherData:n,provinces:t}),o.seasonal_update&&(0,a.jsx)(Pe,{weatherData:n,provinces:t,onCancelClick:b,onAsyncFinish:function(){return d((function(e){return!e}))}})]})},Ce={tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.primary.dark)},borderRadius:"8px"},tabsMain:{marginTop:function(e){return e.spacing(4)}}};function Re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Re(e,n,t[n])}))}return e}var Ue=function(e){var n=(0,i.useState)(0),t=n[0],r=n[1];return(0,a.jsxs)(b.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnClick,children:[(0,a.jsx)(h.Z,{variant:"h5",children:"Weather Services Updater"}),(0,a.jsxs)("p",{children:["Update the site-wide ",(0,a.jsx)("strong",{children:"Weather Services"})," information for the ",(0,a.jsx)("strong",{children:"Seasonal"})," and ",(0,a.jsx)("strong",{children:"10-Day"})," Weather Forecasts by manually encoding the required data with reference from PAGASA's weather forecasts on ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast"}),"."]}),(0,a.jsxs)("p",{children:["Please take caution in updating these information because it will be automatically referenced by all site admins when creating crop and climate risks bulletins on the ",(0,a.jsx)("strong",{children:"Create Crop Bulletins"})," and ",(0,a.jsx)("strong",{children:"Create Risks Bulletins"})," pages, and on the site's public ",(0,a.jsx)("strong",{children:"Agroclimatic Services - Crop Recommendations"})," page."]}),(0,a.jsxs)(l.Z,{sx:Ce.tabsContainer,children:[(0,a.jsxs)(d.Z,{value:t,onChange:function(e,n){r(n)},"aria-label":"weather services updater",children:[(0,a.jsx)(f.Z,Te({label:"Seasonal Forecast Updater"},(0,p.P)(0))),(0,a.jsx)(f.Z,Te({label:"10-Day Forecast Updater"},(0,p.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(p.x,{value:t,index:0,children:(0,a.jsx)(Ee,{weatherData:e.seasonal,provinces:e.provinces})}),(0,a.jsxs)(p.x,{value:t,index:1,children:[(0,a.jsx)(h.Z,{sx:{marginTop:function(e){return e.spacing(1)}},variant:"h6",children:"10-Day Weather Forecast Updater"}),(0,a.jsx)("p",{children:"To be updated."})]})]})]})]})};function Be(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function Ie(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){Be(a,r,o,i,c,"next",e)}function c(e){Be(a,r,o,i,c,"throw",e)}i(void 0)}))}}function Le(e){var n=e.provinces,t=(0,i.useState)([]),r=t[0],l=t[1],f=(0,s.aC)(),d=(0,c.useRouter)();(0,i.useState)((function(){var e=function(){var e=Ie(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.GV)("bicol","seasonal");case 3:(n=e.sent).length>0&&l((function(e){return n})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){f.loading||f.user||d.push("/admin/login")}),[f.user,f.loading,d]);var p=function(){var e=Ie(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.logOut();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,a.jsx)(Ue,{loading:f.loading,user:f.user,provinces:n,seasonal:r,onBtnClick:p})}Le.customLayout=!0;var De=!0,We=Le}},function(e){e.O(0,[155,432,367,915,879,912,411,122,379,774,888,179],(function(){return n=1158,e(e.s=n);var n}));var n=e.O();_N_E=n}]);