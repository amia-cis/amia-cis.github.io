(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{8456:function(e,r,n){"use strict";n.d(r,{Z:function(){return O}});var t=n(3366),o=n(7462),a=n(7294),i=n(6010),c=n(7192),s=n(917),l=n(8216),u=n(3616),d=n(1496),f=n(8979);function p(e){return(0,f.Z)("MuiCircularProgress",e)}(0,n(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=n(5893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let m,v,b,g,y=e=>e;const k=44,j=(0,s.F4)(m||(m=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,s.F4)(v||(v=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.variant],r[`color${(0,l.Z)(n.color)}`]]}})((({ownerState:e,theme:r})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(b||(b=y`
      animation: ${0} 1.4s linear infinite;
    `),j))),Z=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),P=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.circle,r[`circle${(0,l.Z)(n.variant)}`],n.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(g||(g=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w)));var O=a.forwardRef((function(e,r){const n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:d=!1,size:f=40,style:m,thickness:v=3.6,value:b=0,variant:g="indeterminate"}=n,y=(0,t.Z)(n,h),j=(0,o.Z)({},n,{color:s,disableShrink:d,size:f,thickness:v,value:b,variant:g}),w=(e=>{const{classes:r,variant:n,color:t,disableShrink:o}=e,a={root:["root",n,`color${(0,l.Z)(t)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(n)}`,o&&"circleDisableShrink"]};return(0,c.Z)(a,p,r)})(j),O={},_={},C={};if("determinate"===g){const e=2*Math.PI*((k-v)/2);O.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(b),O.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,x.jsx)(S,(0,o.Z)({className:(0,i.Z)(w.root,a),style:(0,o.Z)({width:f,height:f},_,m),ownerState:j,ref:r,role:"progressbar"},C,y,{children:(0,x.jsx)(Z,{className:w.svg,ownerState:j,viewBox:"22 22 44 44",children:(0,x.jsx)(P,{className:w.circle,style:O,ownerState:j,cx:k,cy:k,r:(k-v)/2,fill:"none",strokeWidth:v})})}))}))},1451:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins/seasonal-outlook",function(){return n(6332)}])},6971:function(e,r){"use strict";r.Z={container:{marginTop:function(e){return e.spacing(8)}},listItem:{"& a":{color:function(e){return e.palette.secondary.dark},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.primary.main},textDecoration:"none"}},card:{height:"100%",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}}},6450:function(e,r,n){"use strict";n.d(r,{UQ:function(){return d},_O:function(){return f},rN:function(){return p}});var t=n(5893),o=(n(7294),n(1496)),a=n(5716),i=n(7358),c=n(8895),s=n(2797);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){l(e,r,n[r])}))}return e}var d=(0,o.ZP)((function(e){return(0,t.jsx)(i.Z,u({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){e.theme;return{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),f=(0,o.ZP)((function(e){return(0,t.jsx)(c.Z,u({expandIcon:(0,t.jsx)(a.Z,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var r=e.theme;return{backgroundColor:"dark"===r.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"},"& .MuiAccordionSummary-content":{marginLeft:r.spacing(1)}}})),p=(0,o.ZP)(s.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}))},9403:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(5893),o=n(2963),a=n(122),i=n(1664),c={breacrumbs:{"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.dark}},fontSize:"16px",marginTop:function(e){return e.spacing(2)}}};var s=function(e){var r=e.navdata;return(0,t.jsx)(o.Z,{"aria-label":"breadcrumb",sx:c.breacrumbs,children:r.map((function(e,r){return void 0!==e.href?(0,t.jsx)(a.Z,{underline:"hover",color:"inherit",children:(0,t.jsx)(i.default,{href:e.href,passHref:!0,children:(0,t.jsx)("span",{children:e.name})})},"bcd-".concat(r)):(0,t.jsx)("div",{color:"text.primary",children:e.name},"bcd-".concat(r))}))})}},6332:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return D},default:function(){return E}});var t=n(4051),o=n.n(t),a=n(5893),i=n(7294),c=n(9669),s=n.n(c),l=n(6450),u=n(8456),d=n(6886),f=n(5861),p=n(9403),x=n(3508),h=n(2665),m=n(8462),v=n(7212),b=n(7594),g=n(9334),y=n(6971);var k=function(e){var r=e.provinces,n=e.bulletins,t=e.handleClick;return(0,a.jsxs)("div",{role:"presentation",children:[(0,a.jsx)(f.Z,{variant:"h4",children:"Bulletins"}),(0,a.jsx)(f.Z,{variant:"h5",children:"Seasonal Outlook"}),(0,a.jsx)(p.Z,{navdata:[{name:"Bulletins",href:"/bulletins"},{name:"Seasonal Outlook"}]}),(0,a.jsx)(d.ZP,{container:!0,justifyContent:"center",sx:{width:"100%",marginTop:function(e){return e.spacing(6)}},children:(0,a.jsx)(d.ZP,{item:!0,xs:10,children:r.map((function(e,r){return(0,a.jsxs)(l.UQ,{sx:{maxWidth:"720px"},defaultExpanded:0===r,children:[(0,a.jsx)(l._O,{expandIcon:(0,a.jsx)(x.Z,{}),"aria-controls":"panel1-content",children:(0,a.jsx)(f.Z,{variant:"subtitle1",children:e})}),void 0!==n[e]&&(0,a.jsx)(l.rN,{children:n[e].map((function(e,r){return(0,a.jsx)(m.Z,{dense:!0,sx:{padding:0},children:(0,a.jsxs)(v.ZP,{children:[(0,a.jsx)(b.Z,{children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(g.Z,{sx:y.Z.listItem,primary:(0,a.jsx)("a",{href:"#",onClick:function(){return t(e.province,e.filename)},children:e.filename}),secondary:"Created on ".concat(e.date_created," ").concat(""!==e.error?"Error: ".concat(e.error):""),primaryTypographyProps:{fontSize:"14px"},secondaryTypographyProps:{fontSize:"11px"}}),(0,a.jsx)(u.Z,{size:20,color:"primary",sx:{display:e.loading?"block":"none"}})]})},"acc-sub-".concat(r))}))})]},"acc-".concat(r))}))})})]})},j=n(7682),w=new(n(1029).d),S=(w.getPageMediaAssets.bind(w),w.getTyphoonAdvisory.bind(w),w.getPdfDownloadURL.bind(w));function Z(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function P(e,r,n,t,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void n(l)}c.done?r(s):Promise.resolve(s).then(t,o)}function O(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){O(e,r,n[r])}))}return e}function C(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return Z(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=!0,E=function(e){var r=e.villages,n=(0,j.Kx)("bulletins_pdf_crops","idstr").documents,t=(0,i.useState)([]),c=t[0],l=t[1],u=(0,i.useState)({}),d=u[0],f=u[1];(0,i.useEffect)((function(){var e=r.map((function(e){return e.province})).filter((function(e,r,n){return n.indexOf(e)===r}));l((function(r){return e}))}),[r]),(0,i.useEffect)((function(){if(n.length>0){var e={};n.forEach((function(r){void 0===e[r.province]&&(e[r.province]=[]),e[r.province].push({province:r.province,filename:r.filename,date_created:r.date_created.toDate().toDateString(),loading:!1,error:""})})),f(e)}}),[n]);var p=function(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=C(d[e]),a=o.map((function(e){return e.filename})).filter((function(e,r,n){return n.indexOf(e)===r})).indexOf(r);if(!(a>=0))throw new Error("Index not found.");o[a].loading=n,o[a].error=t,f(_({},d,{province:o}))},x=function(){var e,r=(e=o().mark((function e(r,n){var t,a,i,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(r,n,!0),e.next=4,S(n);case 4:return t=e.sent,e.next=7,s().get(t,{responseType:"blob"});case 7:a=e.sent,i=t.substr(t.indexOf("bulletins%2F")+12,t.length),c=i.substr(0,i.indexOf("?")),l=window.URL.createObjectURL(new Blob([a.data])),(u=document.createElement("a")).href=l,u.setAttribute("download",decodeURI(c)),document.body.appendChild(u),u.click(),document.body.removeChild(u),p(r,n,!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),p(r,n,!1,e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})),function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function i(e){P(a,t,o,i,c,"next",e)}function c(e){P(a,t,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return r.apply(this,arguments)}}();return(0,a.jsx)(k,{provinces:c,bulletins:d,handleClick:x})}}},function(e){e.O(0,[669,753,774,888,179],(function(){return r=1451,e(e.s=r);var r}));var r=e.O();_N_E=r}]);