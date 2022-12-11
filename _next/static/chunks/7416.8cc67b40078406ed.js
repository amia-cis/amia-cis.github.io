(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7416],{6242:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(7462),i=t(3366),a=t(7294),o=t(6010),c=t(7192),s=t(1496),u=t(3616),l=t(5113),d=t(8979);function p(e){return(0,d.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var f=t(5893);const h=["className","raised"],m=(0,s.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var x=a.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=t,l=(0,i.Z)(t,h),d=(0,r.Z)({},t,{raised:s}),x=(e=>{const{classes:n}=e;return(0,c.Z)({root:["root"]},p,n)})(d);return(0,f.jsx)(m,(0,r.Z)({className:(0,o.Z)(x.root,a),elevation:s?8:void 0,ref:n,ownerState:d},l))}))},8396:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return d}});var i=t(7294),a=t(4168),o=t(539),c=t(8974);function s(e,n,t,r,a){const o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[s,u]=i.useState((()=>a&&o?t(e).matches:r?r(e).matches:n));return(0,c.Z)((()=>{let n=!0;if(!o)return;const r=t(e),i=()=>{n&&u(r.matches)};return i(),r.addListener(i),()=>{n=!1,r.removeListener(i)}}),[e,t,o]),s}const u=(r||(r=t.t(i,2))).useSyncExternalStore;function l(e,n,t,r){const a=i.useCallback((()=>n),[n]),o=i.useMemo((()=>{if(null!==r){const{matches:n}=r(e);return()=>n}return a}),[a,e,r]),[c,s]=i.useMemo((()=>{if(null===t)return[a,()=>()=>{}];const n=t(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]}),[a,t,e]);return u(s,c,o)}function d(e,n={}){const t=(0,a.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:i=!1,matchMedia:c=(r?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p}=(0,o.Z)({name:"MuiUseMediaQuery",props:n,theme:t});let f="function"===typeof e?e(t):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==u?l:s)(f,i,c,d,p)}},7416:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(4051),i=t.n(r),a=t(5893),o=t(9669),c=t.n(o),s=t(7294),u=t(8396);const l=(0,s.createContext)(null),d=l.Provider;function p(){const e=(0,s.useContext)(l);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var f=t(7509);function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function m(e){let{children:n,className:t,id:r,placeholder:i,style:a,whenCreated:o,...c}=e;const u=(0,s.useRef)(null),l=function(e,n){const[t,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{if(null!==e.current&&null===t){const t=new f.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(u,c),p=(0,s.useRef)(!1);(0,s.useEffect)((()=>{null!=l&&!1===p.current&&null!=o&&(p.current=!0,o(l))}),[l,o]),(0,s.useEffect)((()=>()=>{null==l||l.remove()}),[l]);const[m]=(0,s.useState)({className:t,id:r,style:a}),x=(0,s.useMemo)((()=>l?{__version:1,map:l}:null),[l]),y=x?s.createElement(d,{value:x},n):i??null;return s.createElement("div",h({},m,{ref:u}),y)}function x(e,n){return null==n?function(n,t){return(0,s.useRef)(e(n,t))}:function(t,r){const i=(0,s.useRef)(e(t,r)),a=(0,s.useRef)(t),{instance:o}=i.current;return(0,s.useEffect)((function(){a.current!==t&&(n(o,t,a.current),a.current=t)}),[o,t,r]),i}}var y=t(3935);function v(e){function n(n,t){const{instance:r,context:i}=e(n).current;return(0,s.useImperativeHandle)(t,(()=>r)),null==n.children?null:s.createElement(d,{value:i},n.children)}return(0,s.forwardRef)(n)}const g=x((function(e,n){let{children:t,...r}=e;const i=new f.Control.Layers(void 0,void 0,r);return{instance:i,context:{...n,layersControl:i}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())})),w=(b=g,function(e){const n=p(),t=b(e,n),{instance:r}=t.current,i=(0,s.useRef)(e.position),{position:a}=e;return(0,s.useEffect)((function(){return r.addTo(n.map),function(){r.remove()}}),[n.map,r]),(0,s.useEffect)((function(){null!=a&&a!==i.current&&(r.setPosition(a),i.current=a)}),[r,a]),t});var b;const j=v(w);function S(e){return function(n){const t=p(),r=(0,s.useRef)(n),[i,a]=(0,s.useState)(null),{layersControl:o,map:c}=t,u=(0,s.useCallback)((n=>{null!=o&&(r.current.checked&&c.addLayer(n),e(o,n,r.current.name),a(n))}),[o,c]),l=(0,s.useCallback)((e=>{null==o||o.removeLayer(e),a(null)}),[o]),f=(0,s.useMemo)((()=>({...t,layerContainer:{addLayer:u,removeLayer:l}})),[t,u,l]);return(0,s.useEffect)((()=>{null!==i&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||c.removeLayer(i):c.addLayer(i),r.current=n)})),n.children?s.createElement(d,{value:f},n.children):null}}function C(e,n){const t=(0,s.useRef)(n);(0,s.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function M(e,n){const t=(0,s.useRef)();(0,s.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function E(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function O(e,n){(0,s.useEffect)((function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var t;null==(t=n.layerContainer)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function Z(e){return function(n){const t=p(),r=e(E(n,t),t);return C(t.map,n.attribution),M(r.current,n.eventHandlers),O(r.current,t),r}}function k(e){return function(n){const t=p(),r=e(E(n,t),t);return M(r.current,n.eventHandlers),O(r.current,t),function(e,n){const t=(0,s.useRef)();(0,s.useEffect)((function(){if(n.pathOptions!==t.current){const r=n.pathOptions??{};e.instance.setStyle(r),t.current=r}}),[e,n])}(r.current,n),r}}j.BaseLayer=S((function(e,n,t){e.addBaseLayer(n,t)})),j.Overlay=S((function(e,n,t){e.addOverlay(n,t)}));const I=function(e){function n(n,t){const{instance:r}=e(n).current;return(0,s.useImperativeHandle)(t,(()=>r)),null}return(0,s.forwardRef)(n)}(Z(x((function(e,n){let{url:t,...r}=e;return{instance:new f.TileLayer(t,E(r,n)),context:n}}),(function(e,n,t){const{opacity:r,zIndex:i}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=i&&i!==t.zIndex&&e.setZIndex(i)}))));const _=function(e,n){return v(k(x(e,n)))}((function(e,n){let{data:t,...r}=e;const i=new f.GeoJSON(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.style!==t.style&&(null==n.style?e.resetStyle():e.setStyle(n.style))})),L=function(e,n){return v(Z(x(e,n)))}((function(e,n){let{position:t,...r}=e;const i=new f.Marker(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),P=function(e,n){const t=function(e,n){return function(t,r){const i=p(),a=e(E(t,i),i);return C(i.map,t.attribution),M(a.current,t.eventHandlers),n(a.current,i,t,r),a}}(x(e),n);return function(e){function n(n,t){const[r,i]=(0,s.useState)(!1),{instance:a}=e(n,i).current;(0,s.useImperativeHandle)(t,(()=>a)),(0,s.useEffect)((function(){r&&a.update()}),[a,r,n.children]);const o=a._contentNode;return o?(0,y.createPortal)(n.children,o):null}return(0,s.forwardRef)(n)}(t)}((function(e,n){return{instance:new f.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:i,onOpen:a,position:o}=t;(0,s.useEffect)((function(){const t=n.overlayContainer;if(null==t)return;const{instance:c}=e,s=e=>{e.tooltip===c&&(o&&c.setLatLng(o),c.update(),r(!0),null==a||a())},u=e=>{e.tooltip===c&&(r(!1),null==i||i())};return t.on({tooltipopen:s,tooltipclose:u}),t.bindTooltip(c),function(){t.off({tooltipopen:s,tooltipclose:u}),null!=t._map&&t.unbindTooltip()}}),[e,n,r,i,a,o])}));var z=t(7357),T=t(5675),R=t(6295),N=t(6242),A=t(8456),W=t(6886),B=t(1903),H=t(5861),G=t(6660),D={daily:{width:"73px",minWidth:"73px",backgroundColor:"rgba(255, 255, 255, 1.0)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-label":{display:"flex",justifyContent:"space-evenly",fontSize:"12px"}}};var U=function(e){var n=e.dailyweather;return(0,a.jsxs)(z.Z,{sx:D.daily,children:[(0,a.jsx)("div",{children:n.day}),(0,a.jsx)("div",{children:(0,a.jsx)(T.default,{unoptimized:!0,src:n.icon,height:50,width:50,loader:G.imageLoader,alt:n.day})}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("strong",{children:[n.temp_max,"\xb0"]})}),(0,a.jsxs)("div",{children:[n.temp_min,"\xb0"]})]})]})},Y={card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minWidth:{xs:"200px",sm:"500px"},maxWidth:"500px",marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},cardInfo:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",width:"100%",maxWidth:"500px",padding:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(3)},fontSize:"14px"},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},weathertoday:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",flexDirection:{xs:"column",b4xs:"row",sm:"row"},"& .icon-temp":{display:"flex",alignItems:"center"},"& .temperature":{fontSize:"50px",fontWeight:"bold"},"& .weather-details":{fontSize:"14px"}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}var V=function(e){var n=e.municipalities,t=e.sel_options,r=e.weather,i=e.forecast,o=e.record,c=e.isSmallScreen,u=void 0!==c&&c,l=e.onSelectItemChange,d=(0,s.useState)(0),p=d[0],f=d[1];(0,s.useEffect)((function(){var e=function(){return f((window.innerWidth-h())/2+24)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var h=function(){var e=document.getElementById("header-contents");return e?e.getBoundingClientRect().width:1200};return(0,a.jsxs)(z.Z,{sx:{position:"absolute",top:function(e){return e.constants.navbar.outerHeight+40},right:p,marginLeft:"24px",zIndex:400},className:"mui-fixed",children:[(0,a.jsxs)(N.Z,{variant:"outlined",sx:Y.card,style:{backgroundColor:"rgba(139, 195, 74, 0.5)"},children:[(0,a.jsxs)(z.Z,{children:[(0,a.jsx)(H.Z,{variant:"h5",children:"AMIA Villages Weather Today"}),(0,a.jsx)(R.Z,{disablePortal:!0,id:"municipality",value:t.sel_municipality,disabled:0===n.length||t.loading,options:n,sx:Y.autocomplete,size:"small",renderInput:function(e){return(0,a.jsx)(B.Z,Q({},e,{label:null===t.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return l(e,Q({},n,{from:"municipality"}))}})]}),t.loading&&(0,a.jsx)(z.Z,{sx:Y.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)(A.Z,{size:24,color:"secondary"})}),""===t.error&&!t.loading&&null!==t.sel_municipality&&""!==r.description&&(0,a.jsxs)(z.Z,{sx:Y.weathertoday,children:[(0,a.jsxs)("div",{className:"icon-temp",children:[(0,a.jsx)(T.default,{unoptimized:!0,src:r.icon,height:100,width:100,loader:G.imageLoader,alt:r.description}),(0,a.jsxs)("div",{className:"temperature",children:[r.temp,"\xb0C"]})]}),(0,a.jsxs)("div",{className:"weather-details",children:[(0,a.jsxs)("div",{children:["Atmospheric Pressure: ",r.pressure]}),(0,a.jsxs)("div",{children:["Humidity: ",r.humidity]}),(0,a.jsxs)("div",{children:["Wind: ",r.wind]}),(0,a.jsxs)("div",{children:["Condition: ",r.description?"".concat(r.description.charAt(0).toUpperCase()).concat(r.description.slice(1)):""]})]})]}),""===t.error&&!t.loading&&null===t.sel_municipality&&(0,a.jsx)(z.Z,{sx:Y.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:"\xa0"})}),""!==t.error&&(0,a.jsx)(z.Z,{sx:Y.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:t.error})})]}),i.length>0&&(0,a.jsxs)(N.Z,{variant:"outlined",sx:Y.card,children:[(0,a.jsx)(H.Z,{variant:"h6",children:"Daily Weather Forecast"}),(0,a.jsx)(W.ZP,{container:!0,children:i.map((function(e,n){return(0,a.jsx)(W.ZP,{item:!0,children:(0,a.jsx)(U,{dailyweather:e})},"daily-".concat(n))}))}),(0,a.jsx)(H.Z,{variant:"caption",className:"span-source",children:"source: https://openweathermap.org/"})]}),u&&null!==o&&(0,a.jsx)(N.Z,{variant:"outlined",sx:Y.cardInfo,children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:o[e.toLowerCase()]})]},n)}))})})})]})};function J(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function q(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.BASE_URL="https://amia-cis.onrender.com/api"}var n,t,r;return n=e,t=[{key:"getWeatherToday",value:function(e,n){return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,c().get("https://api.openweathermap.org/data/2.5/onecall",{params:{lat:e,lon:n,appid:"d0a4e8d2c5840292a2c37738e6408609",exclude:"minutely,hourly,alerts",units:"metric"}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(e){J(a,r,i,o,c,"next",e)}function c(e){J(a,r,i,o,c,"throw",e)}o(void 0)}))})();var t}}],t&&q(n.prototype,t),r&&q(n,r),e}(),K=new X,$=K.getWeatherToday.bind(K);function ee(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function ne(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){ee(a,r,i,o,c,"next",e)}function c(e){ee(a,r,i,o,c,"throw",e)}o(void 0)}))}}function te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){te(e,n,t[n])}))}return e}var ie={sel_municipality:null,loading:!0,error:""},ae={icon:"https://openweathermap.org/img/wn/10d@2x.png",temp:"00",pressure:"0000 hPa",humidity:"0%",wind:"00 meter/sec"};var oe=function(e){var n=e.data,t=void 0===n?[]:n,r=e.record,o=e.isSmallScreen,c=e.onSelectMunicipality,u=(0,s.useState)(ie),l=u[0],d=u[1],p=(0,s.useState)([]),f=p[0],h=p[1],m=(0,s.useState)(ae),x=m[0],y=m[1],v=(0,s.useState)([]),g=v[0],w=v[1];(0,s.useEffect)((function(){if(t.length>0){var e=[];t.forEach((function(n){e.map((function(e){return e.id})).includes(n.municipality)||e.push({id:n.municipality,label:"".concat(n.municipality,", ").concat(n.province),lat:n.lat,lon:n.lon})})),h(e)}}),[t]),(0,s.useEffect)((function(){f.length>0&&b("Pamplona")}),[f,b]);var b=(0,s.useCallback)(function(){var e=ne(i().mark((function e(n){var t,r,a,o,s,u,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(t=f.find((function(e){return e.id===n})))){e.next=3;break}return e.abrupt("return");case 3:return d(re({},l,{error:"",loading:!0})),w([]),e.prev=5,e.next=8,$(t.lat,t.lon);case 8:r=e.sent,d(re({},l,{sel_municipality:t,loading:!1,error:""})),c(t.id),a=r.data.current.weather.length>0?r.data.current.weather[0].icon:null,o=r.data.current.weather.length>0?r.data.current.weather[0].description:"",s={icon:null!==a?"https://openweathermap.org/img/wn/".concat(a,"@2x.png"):null,temp:Math.round(r.data.current.temp),precipitation:null,humidity:"".concat(r.data.current.humidity,"%"),pressure:"".concat(r.data.current.pressure," hPa"),wind:"".concat(r.data.current.wind_speed," meter/sec"),description:o},u=[],p=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],r.data.daily.forEach((function(e){var n=new Date(1e3*e.dt),t={day:p[n.getDay()],temp_min:Math.round(e.temp.min),temp_max:Math.round(e.temp.max),icon:e.weather.length>0?"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"):"",date:n.toLocaleDateString("en-US"),description:e.weather.length>0?e.weather[0].description:""};u.push(t)})),y(s),w(u),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),d(re({},l,{sel_municipality:t,loading:!1,error:e.t0.message}));case 24:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(n){return e.apply(this,arguments)}}(),[f,c,l]),j=function(){var e=ne(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(r=t.id)){e.next=7;break}return d(re({},l,{sel_municipality:null,loading:!1})),y(ae),w([]),c(null),e.abrupt("return");case 7:b(r);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,a.jsx)(V,{sel_options:l,municipalities:f,weather:x,forecast:g,record:r,isSmallScreen:o,onSelectItemChange:j})},ce=t(9108),se=t.n(ce);var ue=function(e){var n=e.record,t=(0,s.useState)(null),r=t[0],i=t[1],o=(0,s.useState)(null),c=o[0],u=o[1];return(0,s.useEffect)((function(){i(null!==n?[n.lat,n.lon]:null),u(n)}),[n]),null===r?null:(0,a.jsx)(L,{position:r,eventHandlers:{mouseover:function(){i(null)},click:function(){i(null)}},children:(0,a.jsx)(P,{className:se().tooltipCustom,permanent:!0,children:(0,a.jsx)("table",{style:{width:"100%"},children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:c[e.toLowerCase()]})]},n)}))})})})})},le=[{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",name:"Street Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"},{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",name:"Topography Map",attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",name:"Light",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",name:"Terrain Map",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",name:"Watercolor",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",name:"Satellite Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",name:"Shaded Relief",attribution:"Tiles &copy; Esri &mdash; Source: Esri"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",name:"Ocean",attribution:"Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}],de={map:{width:"100%",minHeight:"700px",height:"calc(100vh - 88px - 119px)",maxWidth:function(e){return e.breakpoints.xl}}};function pe(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}var fe={lat:13.29341114953598,lng:124.5},he=["Barangay","Municipality","Province","Association"];var me=function(e){var n=e.data,t=void 0===n?[]:n,r=(0,s.useState)({}),o=r[0],l=r[1],d=(0,s.useState)(""),p=d[0],f=d[1],h=(0,s.useState)(null),x=h[0],y=h[1],v=(0,s.useRef)(null),g=(0,u.Z)((function(e){return e.breakpoints.down("md")}));return(0,s.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("https://api.mapbox.com/datasets/v1/".concat("ciatph","/").concat("cl3cph4nv098122ppnztfyi5n","/features?access_token=").concat("pk.eyJ1IjoiY2lhdHBoIiwiYSI6ImNqNXcyeTNhcTA5MzEycHFpdG90enFxMG8ifQ.gwZ6uo6pvx4-RZ1lHODcBQ"));case 3:n=e.sent,l(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){pe(a,r,i,o,c,"next",e)}function c(e){pe(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(z.Z,{sx:de.map,style:{minHeight:g?"1100px":"700px"},children:[(0,a.jsxs)(m,{style:{height:"100%"},center:fe,zoom:8,maxZoom:12,minZoom:8,tileSize:512,placeholder:(0,a.jsx)("h3",{children:"You need JavaScript to render this app."}),whenCreated:function(e){v.current=e},children:[(0,a.jsx)(j,{position:"topleft",children:le.map((function(e,n){return(0,a.jsx)(j.BaseLayer,{name:e.name,checked:0===n,children:(0,a.jsx)(I,{zIndex:0,attribution:e.attribution,url:e.url})},"map-".concat(n))}))}),(0,a.jsx)(_,{municipality:p,data:o.features,zIndex:1,onEachFeature:function(e,n){var t,r,i;n.setStyle((t={fillColor:e.properties.ADM2_EN===p?"#ff6a00":"#ffa666",fillOpacity:1,weight:0},i="0.5",(r="fillOpacity")in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t))}},Math.random().toString(36).substr(2,8)),t.map((function(e,n){return(0,a.jsx)(L,{position:[e.lat,e.lon],id:"tooltip-".concat(n),eventHandlers:{mouseover:function(e){null!==x&&y(null)},click:function(e){null!==x&&y(null)}},children:(0,a.jsx)(P,{className:se().tooltipCustom,direction:"left",children:(0,a.jsx)("table",{style:{width:"100%"},id:"tip-".concat(n),children:(0,a.jsx)("tbody",{children:he.map((function(n,t){return["lat","lon"].includes(n)?(0,a.jsx)("tr",{},t):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[n,":"]})}),(0,a.jsx)("td",{children:e[n.toLowerCase()]})]},t)}))})})})},n)})),!g&&(0,a.jsx)(ue,{record:x})]}),(0,a.jsx)(oe,{data:t,record:x,isSmallScreen:g,onSelectMunicipality:function(e){if(null===e)f(""),y(null);else{var n=t.find((function(n){return n.municipality===e}));if(void 0!==n){var r=n.province;f((function(e){return r})),y(n),function(e,n){var t=v.current;t&&t.flyTo([e,n+4],10,{duration:2.5})}(n.lat,n.lon)}else f(""),y(null)}}})]})}},9108:function(e){e.exports={tooltipCustom:"Map_tooltipCustom___IYju"}}}]);