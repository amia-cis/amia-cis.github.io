(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9257],{3365:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(4938)),a=t(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"}),"Thermostat");n.Z=o},855:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(4938)),a=t(5893),o=(0,i.default)([(0,a.jsx)("path",{d:"M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm10.73-8.39c.75.23 1.3.78 1.57 1.46l4.27-7.11c.65-1.08.3-2.48-.78-3.13-.87-.52-1.99-.41-2.73.29l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1zm-3.12 1.66c.16-.52.48-.96.89-1.27H3.28C2.02 11 1 12.02 1 13.28c0 1.02.67 1.91 1.65 2.19l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61c-.77-.62-1.13-1.67-.82-2.67zm11.6 6.34-2.28-4.1c-.27-.48-.73-.83-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99-.32 1.06-1.28 1.77-2.39 1.77-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0 .72-.72.88-1.83.38-2.72z"},"0"),(0,a.jsx)("path",{d:"M12.56 14.43c.79.24 1.63-.2 1.87-1 .24-.79-.2-1.63-1-1.87-.79-.24-1.63.2-1.87 1-.24.79.21 1.63 1 1.87z"},"1")],"WindPower");n.Z=o},4938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(8372)},6242:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(7462),i=t(3366),a=t(7294),o=t(6010),c=t(7192),l=t(1496),u=t(3616),s=t(5113),d=t(8979);function p(e){return(0,d.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var f=t(5893);const h=["className","raised"],m=(0,l.ZP)(s.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var y=a.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=t,s=(0,i.Z)(t,h),d=(0,r.Z)({},t,{raised:l}),y=(e=>{const{classes:n}=e;return(0,c.Z)({root:["root"]},p,n)})(d);return(0,f.jsx)(m,(0,r.Z)({className:(0,o.Z)(y.root,a),elevation:l?8:void 0,ref:n,ownerState:d},s))}))},8396:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return d}});var i=t(7294),a=t(4168),o=t(539),c=t(8974);function l(e,n,t,r,a){const o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[l,u]=i.useState((()=>a&&o?t(e).matches:r?r(e).matches:n));return(0,c.Z)((()=>{let n=!0;if(!o)return;const r=t(e),i=()=>{n&&u(r.matches)};return i(),r.addListener(i),()=>{n=!1,r.removeListener(i)}}),[e,t,o]),l}const u=(r||(r=t.t(i,2))).useSyncExternalStore;function s(e,n,t,r){const a=i.useCallback((()=>n),[n]),o=i.useMemo((()=>{if(null!==r){const{matches:n}=r(e);return()=>n}return a}),[a,e,r]),[c,l]=i.useMemo((()=>{if(null===t)return[a,()=>()=>{}];const n=t(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]}),[a,t,e]);return u(l,c,o)}function d(e,n={}){const t=(0,a.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:i=!1,matchMedia:c=(r?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p}=(0,o.Z)({name:"MuiUseMediaQuery",props:n,theme:t});let f="function"===typeof e?e(t):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==u?s:l)(f,i,c,d,p)}},8372:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return i.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return o.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return y},useControlled:function(){return x.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var r=t(8076),i=t(8216),a=t(7450),o=t(2066),c=t(7144);var l=function(e,n){return()=>null},u=t(1579),s=t(8038),d=t(5340);t(7462);var p=function(e,n){return()=>null},f=t(7960).Z,h=t(8974),m=t(7909);var y=function(e,n,t,r,i){return null},x=t(9299),v=t(2068),g=t(1705),b=t(8791);const w={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},7840:function(e,n,t){"use strict";var r=t(5893),i=t(5861);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(1496).ZP)((function(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},9257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return we}});var r=t(4051),i=t.n(r),a=t(5893),o=t(9669),c=t.n(o),l=t(7294),u=t(8396);const s=(0,l.createContext)(null),d=s.Provider;function p(){const e=(0,l.useContext)(s);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var f=t(7509);function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function m(e){let{children:n,className:t,id:r,placeholder:i,style:a,whenCreated:o,...c}=e;const u=(0,l.useRef)(null),s=function(e,n){const[t,r]=(0,l.useState)(null);return(0,l.useEffect)((()=>{if(null!==e.current&&null===t){const t=new f.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(u,c),p=(0,l.useRef)(!1);(0,l.useEffect)((()=>{null!=s&&!1===p.current&&null!=o&&(p.current=!0,o(s))}),[s,o]),(0,l.useEffect)((()=>()=>{null==s||s.remove()}),[s]);const[m]=(0,l.useState)({className:t,id:r,style:a}),y=(0,l.useMemo)((()=>s?{__version:1,map:s}:null),[s]),x=y?l.createElement(d,{value:y},n):i??null;return l.createElement("div",h({},m,{ref:u}),x)}function y(e,n){return null==n?function(n,t){return(0,l.useRef)(e(n,t))}:function(t,r){const i=(0,l.useRef)(e(t,r)),a=(0,l.useRef)(t),{instance:o}=i.current;return(0,l.useEffect)((function(){a.current!==t&&(n(o,t,a.current),a.current=t)}),[o,t,r]),i}}var x=t(3935);function v(e){function n(n,t){const{instance:r,context:i}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null==n.children?null:l.createElement(d,{value:i},n.children)}return(0,l.forwardRef)(n)}const g=y((function(e,n){let{children:t,...r}=e;const i=new f.Control.Layers(void 0,void 0,r);return{instance:i,context:{...n,layersControl:i}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())})),b=(w=g,function(e){const n=p(),t=w(e,n),{instance:r}=t.current,i=(0,l.useRef)(e.position),{position:a}=e;return(0,l.useEffect)((function(){return r.addTo(n.map),function(){r.remove()}}),[n.map,r]),(0,l.useEffect)((function(){null!=a&&a!==i.current&&(r.setPosition(a),i.current=a)}),[r,a]),t});var w;const S=v(b);function j(e){return function(n){const t=p(),r=(0,l.useRef)(n),[i,a]=(0,l.useState)(null),{layersControl:o,map:c}=t,u=(0,l.useCallback)((n=>{null!=o&&(r.current.checked&&c.addLayer(n),e(o,n,r.current.name),a(n))}),[o,c]),s=(0,l.useCallback)((e=>{null==o||o.removeLayer(e),a(null)}),[o]),f=(0,l.useMemo)((()=>({...t,layerContainer:{addLayer:u,removeLayer:s}})),[t,u,s]);return(0,l.useEffect)((()=>{null!==i&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||c.removeLayer(i):c.addLayer(i),r.current=n)})),n.children?l.createElement(d,{value:f},n.children):null}}function _(e,n){const t=(0,l.useRef)(n);(0,l.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function C(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function M(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function E(e,n){(0,l.useEffect)((function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var t;null==(t=n.layerContainer)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function O(e){return function(n){const t=p(),r=e(M(n,t),t);return _(t.map,n.attribution),C(r.current,n.eventHandlers),E(r.current,t),r}}function Z(e){return function(n){const t=p(),r=e(M(n,t),t);return C(r.current,n.eventHandlers),E(r.current,t),function(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){if(n.pathOptions!==t.current){const r=n.pathOptions??{};e.instance.setStyle(r),t.current=r}}),[e,n])}(r.current,n),r}}S.BaseLayer=j((function(e,n,t){e.addBaseLayer(n,t)})),S.Overlay=j((function(e,n,t){e.addOverlay(n,t)}));const L=function(e){function n(n,t){const{instance:r}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null}return(0,l.forwardRef)(n)}(O(y((function(e,n){let{url:t,...r}=e;return{instance:new f.TileLayer(t,M(r,n)),context:n}}),(function(e,n,t){const{opacity:r,zIndex:i}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=i&&i!==t.zIndex&&e.setZIndex(i)}))));const I=function(e,n){return v(Z(y(e,n)))}((function(e,n){let{data:t,...r}=e;const i=new f.GeoJSON(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.style!==t.style&&(null==n.style?e.resetStyle():e.setStyle(n.style))})),N=function(e,n){return v(O(y(e,n)))}((function(e,n){let{position:t,...r}=e;const i=new f.Marker(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),P=function(e,n){const t=function(e,n){return function(t,r){const i=p(),a=e(M(t,i),i);return _(i.map,t.attribution),C(a.current,t.eventHandlers),n(a.current,i,t,r),a}}(y(e),n);return function(e){function n(n,t){const[r,i]=(0,l.useState)(!1),{instance:a}=e(n,i).current;(0,l.useImperativeHandle)(t,(()=>a)),(0,l.useEffect)((function(){r&&a.update()}),[a,r,n.children]);const o=a._contentNode;return o?(0,x.createPortal)(n.children,o):null}return(0,l.forwardRef)(n)}(t)}((function(e,n){return{instance:new f.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:i,onOpen:a,position:o}=t;(0,l.useEffect)((function(){const t=n.overlayContainer;if(null==t)return;const{instance:c}=e,l=e=>{e.tooltip===c&&(o&&c.setLatLng(o),c.update(),r(!0),null==a||a())},u=e=>{e.tooltip===c&&(r(!1),null==i||i())};return t.on({tooltipopen:l,tooltipclose:u}),t.bindTooltip(c),function(){t.off({tooltipopen:l,tooltipclose:u}),null!=t._map&&t.unbindTooltip()}}),[e,n,r,i,a,o])}));var k=t(7357),z=t(9473),R=t(1664),A=t(5675),T=t(6295),D=t(6242),H=t(8456),U=t(6886),W=t(1903),G=t(5861),B=t(6660),Y={daily:{width:{xs:"75px",sm:"87px"},minWidth:{xs:"75px",sm:"87px"},minHeight:"114px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 255, 1.0)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:{xs:"8px",sm:"9px"}},"& .daily-date":{fontSize:{xs:"10px",sm:"13px"}}}},F=t(3365),V=t(855);var J=function(e){var n=e.dailyweather;return(0,a.jsxs)(k.Z,{sx:Y.daily,children:[(0,a.jsx)("div",{className:"daily-date",children:n.day}),(0,a.jsx)("div",{children:(0,a.jsx)(A.default,{unoptimized:!0,src:n.icon,height:50,width:50,loader:B.imageLoader,alt:n.day})}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(F.Z,{fontSize:"12px"}),(0,a.jsxs)("strong",{children:[n.temp_mean,"\xb0"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(V.Z,{fontSize:"12px"}),n.wind_speed]})]})]})},K=t(7840);var Q,q,X,$={card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minWidth:{xs:"200px",sm:"490px"},maxWidth:"490px",marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5":{marginBottom:function(e){return e.spacing(2)}},"& .span-source":{"& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main}}}},cardInfo:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",width:"100%",maxWidth:"490px",padding:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(3)},fontSize:{xs:"11px",sm:"14px"},"& td":{padding:(Q={xs:0},q="xs",X="1px",q in Q?Object.defineProperty(Q,q,{value:X,enumerable:!0,configurable:!0,writable:!0}):Q[q]=X,Q)}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},weathertoday:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",flexDirection:{xs:"column",b4xs:"row",sm:"row"},"& .icon-temp":{display:"flex",alignItems:"center",gap:"10px"},"& .temperature":{fontSize:"50px",fontWeight:"bold"},"& .weather-details":{fontSize:"14px"}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}var te=function(e){var n=e.municipalities,t=e.sel_options,r=e.weather,i=e.forecast,o=e.record,c=e.isSmallScreen,u=void 0!==c&&c,s=e.onSelectItemChange,d=(0,l.useState)(0),p=d[0],f=d[1];(0,l.useEffect)((function(){var e=function(){return f((window.innerWidth-h())/2+24)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var h=function(){var e=document.getElementById("header-contents");return e?e.getBoundingClientRect().width:1200};return(0,a.jsxs)(k.Z,{sx:{position:"absolute",top:function(e){return e.constants.navbar.outerHeight+40},right:p,marginLeft:"24px",zIndex:400},className:"mui-fixed",children:[(0,a.jsxs)(D.Z,{variant:"outlined",sx:$.card,style:{backgroundColor:"rgba(139, 195, 74, 0.5)"},children:[(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(G.Z,{variant:"h5",children:"AMIA Villages Weather Today"}),(0,a.jsx)(T.Z,{disablePortal:!0,id:"municipality",value:t.sel_municipality,disabled:0===n.length||t.loading,options:n,sx:$.autocomplete,size:"small",renderInput:function(e){return(0,a.jsx)(W.Z,ne({},e,{label:null===t.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ne({},n,{from:"municipality"}))}})]}),t.loading&&(0,a.jsx)(k.Z,{sx:$.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)(H.Z,{size:24,color:"secondary"})}),""===t.error&&!t.loading&&null!==t.sel_municipality&&""!==r.description&&(0,a.jsxs)(k.Z,{sx:$.weathertoday,children:[(0,a.jsxs)("div",{className:"icon-temp",children:[(0,a.jsx)(A.default,{unoptimized:!0,src:r.icon,height:100,width:100,loader:B.imageLoader,alt:r.description}),(0,a.jsxs)("div",{className:"temperature",children:[r.temp,"\xb0C"]})]}),(0,a.jsxs)("div",{className:"weather-details",children:[(0,a.jsxs)("div",{children:["Date today: ",r.datenow]}),(0,a.jsxs)("div",{children:["Humidity: ",r.humidity]}),(0,a.jsxs)("div",{children:["Wind speed: ",r.wind]}),(0,a.jsx)("div",{children:r.description?"".concat(r.description.charAt(0).toUpperCase()).concat(r.description.slice(1)):""})]})]}),""===t.error&&!t.loading&&null===t.sel_municipality&&(0,a.jsx)(k.Z,{sx:$.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:"\xa0"})}),""!==t.error&&(0,a.jsx)(k.Z,{sx:$.info,style:{minWidth:u?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:t.error})})]}),i.length>0&&(0,a.jsxs)(D.Z,{variant:"outlined",sx:$.card,children:[(0,a.jsx)(G.Z,{variant:"h6",children:"10-Day Rainfall Forecast"}),(0,a.jsxs)(K.Z,{sx:{marginBottom:"16px"},children:["View the full 10-Day Weather Forecast ",(0,a.jsx)(R.default,{href:"/weather-services",children:"here"}),"."]}),(0,a.jsx)(U.ZP,{container:!0,children:i.map((function(e,n){return(0,a.jsx)(U.ZP,{item:!0,children:(0,a.jsx)(J,{dailyweather:e})},"daily-".concat(n))}))}),(0,a.jsxs)(G.Z,{variant:"caption",className:"span-source",children:["source: ",(0,a.jsx)(R.default,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA's 10-Day Climate Forecast"})]})]}),u&&null!==o&&(0,a.jsx)(D.Z,{variant:"outlined",sx:$.cardInfo,children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:o[e.toLowerCase()]})]},n)}))})})})]})},re=t(6867),ie=t(901),ae=t(1902);function oe(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}function ce(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){oe(a,r,i,o,c,"next",e)}function c(e){oe(a,r,i,o,c,"throw",e)}o(void 0)}))}}function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){le(e,n,t[n])}))}return e}var se={sel_municipality:null,sel_province:"",loading:!0,error:""},de={icon:"https://openweathermap.org/img/wn/10d@2x.png",temp:"00",pressure:"0000 hPa",humidity:"0%",wind:"00 meter/sec"};var pe=function(e){var n=e.data,t=void 0===n?[]:n,r=e.record,o=e.isSmallScreen,c=e.onSelectMunicipality,u=(0,l.useState)(se),s=u[0],d=u[1],p=(0,l.useState)([]),f=p[0],h=p[1],m=(0,l.useState)(de),y=m[0],x=m[1],v=(0,l.useState)([]),g=v[0],b=v[1],w=(0,z.I0)(),S=(0,z.v9)((function(e){return e.tendayweather})),j=S.status,_=S.entities;(0,l.useEffect)((function(){if(t.length>0){var e=[];t.forEach((function(n){e.map((function(e){return e.id})).includes(n.municipality)||e.push({id:n.municipality,label:"".concat(n.municipality,", ").concat(n.province),lat:n.lat,lon:n.lon})})),h(e)}}),[t]),(0,l.useEffect)((function(){f.length>0&&C("Pamplona")}),[f,C]),(0,l.useEffect)((function(){if(j===ie.G.FULLFILLED&&null!==s.sel_municipality&&0===g.length)try{c(s.sel_municipality.id);var e=Object.values(_).find((function(e){return e.municipality===s.sel_municipality.id}));if(e){var n=JSON.parse(e.data),t=void 0!==ae.Sx.rainfall[n[0].rainfall]?"images/icons/weather/".concat(ae.Sx.rainfall[n[0].rainfall]):"images/icons/weather/blank_weather.png",r=(new Date).toDateString(),i=n.find((function(e){return e.day_format===r.substring(0,r.length-5)}))||n[0],a={icon:t,temp:Math.round(i.tmean),precipitation:null,humidity:"".concat(E(i.humidity),"%"),datenow:r,wind:"".concat(E(i.wspeed)," mps"),description:"".concat(O(i.rainfall),", ").concat(O(i.cover))},o=[];n.forEach((function(e){var n=new Date("".concat(e.day_format,", ").concat((new Date).getFullYear())),t={day:e.day_format,wind_speed:E(e.wspeed),temp_mean:E(e.tmean),icon:void 0!==e.rainfall?"images/icons/weather/".concat(ae.Sx.rainfall[e.rainfall]):"images/icons/weather/blank_weather.png",date:n.toLocaleDateString("en-US"),description:""};o.push(t)})),x(a),b(o),d((function(e){return ue({},e,{loading:!1,error:""})}))}}catch(l){d((function(e){return ue({},e,{loading:!1,error:l.message})}))}}),[j,_,g,s.sel_municipality,c]);var C=(0,l.useCallback)(function(){var e=ce(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(t=f.find((function(e){return e.id===n})))){e.next=3;break}return e.abrupt("return");case 3:b([]),r=(null===t||void 0===t?void 0:t.label)||"",a=r.substring(r.indexOf(",")+1).trim(),d(ue({},s,{sel_municipality:t,sel_province:a,loading:!0,error:""})),w((0,re.R)(a));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[f,s,w]),M=function(){var e=ce(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(r=t.id)){e.next=7;break}return d(ue({},s,{sel_municipality:null,loading:!1})),x(de),b([]),c(null),e.abrupt("return");case 7:C(r);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=function(e){return Math.round(100*(e+Number.EPSILON))/100},O=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")};return(0,a.jsx)(te,{sel_options:s,municipalities:f,weather:y,forecast:g,record:r,isSmallScreen:o,onSelectItemChange:M})},fe=t(9108),he=t.n(fe);var me=function(e){var n=e.record,t=(0,l.useState)(null),r=t[0],i=t[1],o=(0,l.useState)(null),c=o[0],u=o[1];return(0,l.useEffect)((function(){i(null!==n?[n.lat,n.lon]:null),u(n)}),[n]),null===r?null:(0,a.jsx)(N,{position:r,eventHandlers:{mouseover:function(){i(null)},click:function(){i(null)}},children:(0,a.jsx)(P,{className:he().tooltipCustom,permanent:!0,children:(0,a.jsx)("table",{style:{width:"100%"},children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:c[e.toLowerCase()]})]},n)}))})})})})},ye=[{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",name:"Street Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"},{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",name:"Topography Map",attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",name:"Light",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",name:"Terrain Map",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",name:"Watercolor",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",name:"Satellite Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",name:"Shaded Relief",attribution:"Tiles &copy; Esri &mdash; Source: Esri"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",name:"Ocean",attribution:"Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}],xe={map:{width:"100%",minHeight:"700px",height:"calc(100vh - 88px - 119px)",maxWidth:function(e){return e.breakpoints.xl}}};function ve(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}var ge={lat:13.29341114953598,lng:124.5},be=["Barangay","Municipality","Province","Association"];var we=function(e){var n=e.data,t=void 0===n?[]:n,r=(0,l.useState)({}),o=r[0],s=r[1],d=(0,l.useState)(""),p=d[0],f=d[1],h=(0,l.useState)(null),y=h[0],x=h[1],v=(0,l.useRef)(null),g=(0,u.Z)((function(e){return e.breakpoints.down("md")}));return(0,l.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("https://api.mapbox.com/datasets/v1/".concat("ciatph","/").concat("cl3cph4nv098122ppnztfyi5n","/features?access_token=").concat("pk.eyJ1IjoiY2lhdHBoIiwiYSI6ImNqNXcyeTNhcTA5MzEycHFpdG90enFxMG8ifQ.gwZ6uo6pvx4-RZ1lHODcBQ"));case 3:n=e.sent,s(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){ve(a,r,i,o,c,"next",e)}function c(e){ve(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(k.Z,{sx:xe.map,style:{minHeight:g?"1300px":"750px"},children:[(0,a.jsxs)(m,{style:{height:"100%"},center:ge,zoom:8,maxZoom:12,minZoom:8,tileSize:512,placeholder:(0,a.jsx)("h3",{children:"You need JavaScript to render this app."}),whenCreated:function(e){v.current=e},children:[(0,a.jsx)(S,{position:"topleft",children:ye.map((function(e,n){return(0,a.jsx)(S.BaseLayer,{name:e.name,checked:0===n,children:(0,a.jsx)(L,{zIndex:0,attribution:e.attribution,url:e.url})},"map-".concat(n))}))}),(0,a.jsx)(I,{municipality:p,data:o.features,zIndex:1,onEachFeature:function(e,n){n.setStyle(function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({fillColor:e.properties.ADM2_EN===p?"#ff6a00":"#ffa666",fillOpacity:1,weight:0},"fillOpacity","0.5"))}},Math.random().toString(36).substring(2,8)),t.map((function(e,n){return(0,a.jsx)(N,{position:[e.lat,e.lon],id:"tooltip-".concat(n),eventHandlers:{mouseover:function(e){null!==y&&x(null)},click:function(e){null!==y&&x(null)}},children:(0,a.jsx)(P,{className:he().tooltipCustom,direction:"left",children:(0,a.jsx)("table",{style:{width:"100%"},id:"tip-".concat(n),children:(0,a.jsx)("tbody",{children:be.map((function(n,t){return["lat","lon"].includes(n)?(0,a.jsx)("tr",{},t):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[n,":"]})}),(0,a.jsx)("td",{children:e[n.toLowerCase()]})]},t)}))})})})},n)})),!g&&(0,a.jsx)(me,{record:y})]}),(0,a.jsx)(pe,{data:t,record:y,isSmallScreen:g,onSelectMunicipality:function(e){if(null===e)f(""),x(null);else{var n=t.find((function(n){return n.municipality===e}));if(void 0!==n){var r=n.province;f((function(e){return r})),x(n),function(e,n){var t=v.current;t&&t.flyTo([e,n+4],10,{duration:2.5})}(n.lat,n.lon)}else f(""),x(null)}}})]})}},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return r},Y1:function(){return i},Sx:function(){return a}});var r=[{icon:"rainfall_no_rain_48.png",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_48.png",label:"Light rain"},{icon:"rainfall_moderate_rain_48.png",label:"Moderate rain"},{icon:"rain_heavy_rain_48.png",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],i=[{icon:"cc_sunny_48.png",label:"Sunny"},{icon:"cc_mostly_sunny_48.png",label:"Mostly sunny"},{icon:"cc_partly_cloudy_48.png",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_48.png",label:"Mostly cloudy"},{icon:"cc_cloudy_48.png",label:"Cloudy"}],a={rainfall:{"NO RAIN":"rainfall_no_rain_48.png","LIGHT RAINS":"rainfall_light_rain_48.png","MODERATE RAINS":"rainfall_moderate_rain_48.png","HEAVY RAINS":"rain_heavy_rain_48.png"},cloudCover:{SUNNY:"cc_sunny_48.png","MOSTLY SUNNY":"cc_mostly_sunny_48.png","PARTLY CLOUDY":"cc_partly_cloudy_48.png","MOSTLY CLOUDY":"cc_mostly_cloudy_48.png",CLOUDY:"cc_cloudy_48.png"}}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},c=t(6273),l=t(387),u=t(7190);var s={};function d(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var p=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=o.default.useMemo((function(){var n=i(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),p=a.href,f=a.as,h=e.children,m=e.replace,y=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,b=i(u.useIntersection({rootMargin:"200px"}),2),w=b[0],S=b[1],j=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);o.default.useEffect((function(){var e=S&&t&&c.isLocalURL(p),n="undefined"!==typeof v?v:r&&r.locale,i=s[p+"%"+f+(n?"%"+n:"")];e&&!i&&d(r,p,f,{locale:n})}),[f,p,S,v,t,r]);var _={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,o,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[i?"replace":"push"](t,r,{shallow:a,locale:l,scroll:o}))}(e,r,p,f,m,y,x,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(p)&&d(r,p,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof v?v:r&&r.locale,M=r&&r.isLocaleDomain&&c.getDomainLocale(f,C,r&&r.locales,r&&r.domainLocales);_.href=M||c.addBasePath(c.addLocale(f,C,r&&r.defaultLocale))}return o.default.cloneElement(n,_)};n.default=p},9108:function(e){e.exports={tooltipCustom:"Map_tooltipCustom___IYju"}},1664:function(e,n,t){e.exports=t(8418)},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);