(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{4838:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins/weather",function(){return t(6043)}])},3370:function(e,n,t){"use strict";var r=t(5893),o=t(9008);n.Z=function(e){var n=e.title,t=e.ogDescription,i=e.ogImageURL,a=e.ogImgAlt,c=void 0===a?"Picture":a,u=e.ogSiteName,s=void 0===u?"ACAP-BICOL":u,l=e.ogURL;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:site_name",content:s}),(0,r.jsx)("meta",{property:"og:image",content:i}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:c}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("title",{children:n})]})}},5322:function(e,n,t){"use strict";t.d(n,{UQ:function(){return d},_O:function(){return f},rN:function(){return p}});var r=t(5893),o=(t(7294),t(1496)),i=t(5716),a=t(7358),c=t(8895),u=t(2797);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}var d=(0,o.ZP)((function(e){return(0,r.jsx)(a.Z,l({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){e.theme;return{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),f=(0,o.ZP)((function(e){return(0,r.jsx)(c.Z,l({expandIcon:(0,r.jsx)(i.Z,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"},"& .MuiAccordionSummary-content":{marginLeft:n.spacing(1)}}})),p=(0,o.ZP)(u.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}))},6652:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),o=t(2963),i=t(122),a=t(1664),c={breacrumbs:{"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.dark}},fontSize:"16px",marginTop:function(e){return e.spacing(2)}}};var u=function(e){var n=e.navdata;return(0,r.jsx)(o.Z,{"aria-label":"breadcrumb",sx:c.breacrumbs,children:n.map((function(e,n){return void 0!==e.href?(0,r.jsx)(i.Z,{underline:"hover",color:"inherit",children:(0,r.jsx)(a.default,{href:e.href,passHref:!0,children:(0,r.jsx)("span",{children:e.name})})},"bcd-".concat(n)):(0,r.jsx)("div",{color:"text.primary",children:e.name},"bcd-".concat(n))}))})}},6256:function(e,n,t){"use strict";var r=t(5893),o=t(5322),i=t(8456),a=t(6886),c=t(5861),u=t(6652),s=t(3508),l=t(2665),d=t(8462),f=t(7212),p=t(7594),m=t(9334),x=t(9675);n.Z=function(e){var n=e.provinces,t=e.bulletins,h=e.handleClick,b=e.subtitle,g=void 0===b?"":b;return(0,r.jsxs)("div",{role:"presentation",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Bulletins"}),(0,r.jsx)(c.Z,{variant:"h5",children:g}),(0,r.jsx)(u.Z,{navdata:[{name:"Bulletins",href:"/bulletins"},{name:g}]}),(0,r.jsx)(a.ZP,{container:!0,justifyContent:"center",sx:{width:"100%",marginTop:function(e){return e.spacing(6)}},children:(0,r.jsx)(a.ZP,{item:!0,xs:10,children:n.map((function(e,n){return(0,r.jsxs)(o.UQ,{sx:{maxWidth:"720px"},defaultExpanded:0===n,children:[(0,r.jsx)(o._O,{expandIcon:(0,r.jsx)(s.Z,{}),"aria-controls":"panel1-content",children:(0,r.jsx)(c.Z,{variant:"subtitle1",children:e})}),void 0!==t[e]&&(0,r.jsx)(o.rN,{children:t[e].map((function(e,n){return(0,r.jsx)(d.Z,{dense:!0,sx:{padding:0},children:(0,r.jsxs)(f.ZP,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(m.Z,{sx:x.Z.listItem,primary:(0,r.jsx)("a",{href:"#",onClick:function(){return h(e.province,e.filename)},children:e.filename}),secondary:"Created on ".concat(e.date_created," ").concat(""!==e.error?"Error: ".concat(e.error):""),primaryTypographyProps:{fontSize:"14px"},secondaryTypographyProps:{fontSize:"11px"}}),(0,r.jsx)(i.Z,{size:20,color:"third",sx:{display:e.loading?"block":"none"}})]})},"acc-sub-".concat(n))}))})]},"acc-".concat(n))}))})})]})}},9675:function(e,n){"use strict";n.Z={listItem:{"& a":{color:function(e){return e.palette.text.primary},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main},textDecoration:"none"}}}},6043:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return v}});var r=t(4051),o=t.n(r),i=t(5893),a=t(7294),c=t(9669),u=t.n(c),s=t(6256),l=t(3370),d=t(7682),f=t(3981),p=t(7426);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function g(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=!0;n.default=function(e){var n=e.villages,t=e.media,r=(0,d.Kx)(p.Do.PDF_CROPS_TENDAY,"idstr").documents,c=(0,a.useState)([]),m=c[0],h=c[1],v=(0,a.useState)({}),y=v[0],j=v[1];(0,a.useEffect)((function(){var e=n.map((function(e){return e.province})).filter((function(e,n,t){return t.indexOf(e)===n}));h((function(n){return e}))}),[n]),(0,a.useEffect)((function(){if(r.length>0){var e={};r.forEach((function(n){void 0===e[n.province]&&(e[n.province]=[]),e[n.province].push({province:n.province,filename:n.filename,date_created:n.date_created.toDate().toDateString(),loading:!1,error:""})})),j(e)}}),[r]);var w=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=g(y[e]),i=o.map((function(e){return e.filename})).filter((function(e,n,t){return t.indexOf(e)===n})).indexOf(n);if(!(i>=0))throw new Error("Index not found.");o[i].loading=t,o[i].error=r,j(b({},y,{province:o}))},O=function(){var e,n=(e=o().mark((function e(n,t){var r,i,a,c,s,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(n,t,!0),e.next=4,(0,f.y8)(t,p.Ry.TEN_DAY);case 4:return r=e.sent,e.next=7,u().get(r,{responseType:"blob"});case 7:i=e.sent,a=r.substr(r.indexOf("bulletins_tenday%2F")+19,r.length),c=a.substr(0,a.indexOf("?")),s=window.URL.createObjectURL(new Blob([i.data])),(l=document.createElement("a")).href=s,l.setAttribute("download",decodeURI(c)),document.body.appendChild(l),l.click(),document.body.removeChild(l),w(n,t,!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),w(n,t,!1,e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){x(i,r,o,a,c,"next",e)}function c(e){x(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,a.useEffect)((function(){var e=n.map((function(e){return e.province})).filter((function(e,n,t){return t.indexOf(e)===n}));h((function(n){return e}))}),[n]),(0,i.jsxs)("div",{id:"acap-bulletins-10day",children:[(0,i.jsx)(l.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) 10-Day Farm Weather Outlook Bulletins",ogDescription:t.description,ogImageURL:t.url,ogURL:t.path}),(0,i.jsx)(s.Z,{provinces:m,bulletins:y,handleClick:O,subtitle:"10-Day Farm Weather Outlook"})]})}},3981:function(e,n,t){"use strict";t.d(n,{y8:function(){return o}});var r=new(t(1029).d),o=(r.getPageMediaAssets.bind(r),r.getPageAssetsDoc.bind(r),r.getTyphoonAdvisory.bind(r),r.getPdfDownloadURL.bind(r))}},function(e){e.O(0,[9351,6153,1704,7823,5658,6454,9774,2888,179],(function(){return n=4838,e(e.s=n);var n}));var n=e.O();_N_E=n}]);