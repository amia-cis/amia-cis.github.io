(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8031],{6318:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cropping-calendar",function(){return r(4298)}])},3370:function(e,n,r){"use strict";var t=r(5893),a=r(9008);n.Z=function(e){var n=e.title,r=e.ogDescription,i=e.ogImageURL,c=e.ogImgAlt,o=void 0===c?"Picture":c,s=e.ogSiteName,l=void 0===s?"ACAP-BICOL":s,u=e.ogURL;return(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{name:"description",content:r}),(0,t.jsx)("meta",{name:"og:description",content:r}),(0,t.jsx)("meta",{property:"og:title",content:n}),(0,t.jsx)("meta",{property:"og:site_name",content:l}),(0,t.jsx)("meta",{property:"og:image",content:i}),(0,t.jsx)("meta",{property:"og:image:width",content:"600"}),(0,t.jsx)("meta",{property:"og:image:height",content:"315"}),(0,t.jsx)("meta",{property:"og:image:alt",content:o}),(0,t.jsx)("meta",{property:"og:url",content:u}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:title",content:n}),(0,t.jsx)("meta",{name:"twitter:image",content:i}),(0,t.jsx)("title",{children:n})]})}},7634:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(5893),a=r(5675),i=r(7357),c=r(5861),o=r(6660),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var l=function(e){var n=e.message,r=void 0===n?"Failed to load data":n,l=e.style,u=void 0===l?{}:l;return(0,t.jsxs)(i.Z,{sx:s.container,style:u,children:[(0,t.jsx)(a.default,{unoptimized:!0,src:(0,o.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:o.imageLoader,alt:"Empty data"}),(0,t.jsx)(c.Z,{variant:"subtitle1",children:r})]})}},3577:function(e,n,r){"use strict";var t=r(5893),a=r(7357),i=r(8456);n.Z=function(e){var n=e.text,r=void 0===n?"":n,c=e.size,o=void 0===c?24:c,s=e.children;return(0,t.jsxs)(a.Z,{sx:{width:"100%",textAlign:"center",height:"20vh"},children:[(0,t.jsxs)(a.Z,{sx:{width:"100%",textAlign:"center",marginTop:function(e){return e.spacing(12)},marginBottom:"32px",display:"flex",justifyContent:"center"},children:[(0,t.jsx)("span",{children:""!==r?r:"Loading..."})," \xa0",(0,t.jsx)(i.Z,{size:o})]}),s]})}},4298:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return T},default:function(){return B}});var t=r(4051),a=r.n(t),i=r(5893),c=r(7294),o=r(9473),s=r(4822),l=r(3549),u=r(3691),p=r(5635),d=r(901),m=r(5861),f=r(8396),x=r(6295),g=r(7357),h=r(6242),b=r(7634),v=r(480),j=r(6886),y=r(6872),C=r(2890),Z=r(1903),w=r(3577),k=r(7426),P={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},card:{height:{xs:"unset",md:"640px !important"},backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"640px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(5)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},calendar:{width:"100%",alignItems:"center","& .cropcal-cropname":{fontSize:{xs:"9px !important",sm:"12px !important",md:"unset !important"},whiteSpace:{xs:"unset",sm:"nowrap"}},"& .calendar-header-csystem":{fontSize:{xs:"12px",md:"16px"},textAlign:"center","& h6":{fontSize:{xs:"11px",sm:"unset"}}},"& .calendar-header-months":{display:"flex",fontSize:{xs:"11px",md:"1rem"},"& div":{width:"100%",textAlign:"center"},"& .monthlabels":{backgroundColor:"#092139",color:"#fff",padding:{xs:"8px 0 8px 0",sm:"8px 8px 8px 8px"}}},"& .cal-mo-container":{height:"32px",display:"flex","& div":{width:"100%",textAlign:"center"}},"& .cropCalprep":{backgroundColor:"#ffd966"},"& .cropCalgrow":{backgroundColor:"#375623"},"& .cropCalharv":{backgroundColor:"#203764"},"& .cropCalplant":{backgroundColor:"#a9d08e"},"& .cropCalnocolor, .cropCalbkank":{backgroundColor:"#f7f7ff"},cellBorderColor:{cropCalprep:"#ffd966",cropCalgrow:"#375623",cropCalharv:"#203764",cropCalplant:"#a9d08e",cropCalnocolor:"#f7f7ff",cropCalbkank:"rgba(0, 0, 0, 0.4)"}},legend:{"& ul":{listStyle:"none","& li":{marginRight:"10px",fontSize:"14px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},errorMsg:{fontSize:"12px"},infoMsg:{fontSize:"12px"}};function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){O(e,n,r[n])}))}return e}var _=function(e){var n=e.state,r=e.subcalendar,t=e.withcalendar,a=e.onSelectItemChange,s=(0,f.Z)("(max-width:600px)"),l=(0,o.v9)((function(e){return e.provinces})),u=(0,o.v9)((function(e){return e.municipalities})),p=(0,c.useState)(!1),d=p[0],O=p[1];return(0,c.useEffect)((function(){""===l.error&&""===u.error&&""===n.error||O(!0)}),[l,u,n.error]),(0,i.jsxs)(h.Z,{variant:"outlined",sx:P.card,children:[(0,i.jsxs)(j.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",sx:{marginBottom:"48px"},children:[(0,i.jsx)(j.ZP,{item:!0,xs:12,md:4,children:(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{variant:"h6",children:"Location Selector"}),(0,i.jsx)(x.Z,{disablePortal:!0,id:"province",size:"small",value:l.province,disabled:0===l.ids||n.loading,options:Object.values(l.entities),renderInput:function(e){return(0,i.jsx)(Z.Z,S({},e,{label:0===l.ids.length?"Loading...":"Select a province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,S({},n,{from:"province"}))}}),(0,i.jsx)(x.Z,{disablePortal:!0,id:"municipality",size:"small",value:u.municipality,disabled:0===u.ids.length||n.loading,options:Object.values(u.entities),getOptionDisabled:function(e){return!t.includes(e.label)},sx:P.autoMuni,renderInput:function(e){return(0,i.jsx)(Z.Z,S({},e,{label:null===u.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return a(e,S({},n,{from:"municipality"}))}})]})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,md:4,children:(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{variant:"h6",children:"Crop Type"}),(0,i.jsxs)(C.Z,{row:!0,"aria-labelledby":"crop-calendar-croptype-selector",name:"crop-calendar-croptype-selector",children:[(0,i.jsx)(v.Z,{value:"rice",control:(0,i.jsx)(y.Z,{onClick:function(e){return a(e,{label:"Rice",from:"rice"})}}),label:"Rice",checked:"rice"===n.crop,disabled:null===n.municipality||n.loading}),(0,i.jsx)(v.Z,{value:"other_crops",control:(0,i.jsx)(y.Z,{onClick:function(e){return a(e,{label:"Other Crops",from:"other_crops"})}}),label:"Other Crops",checked:"other_crops"===n.crop,disabled:null===n.municipality||n.loading})]})]})})]}),n.loading&&!d?(0,i.jsx)(w.Z,{text:"Loading data..."}):d?(0,i.jsx)(b.Z,{message:"Error loading data."}):0===Object.keys(r).length&&null!==u.municipality&&null!==l.province?(0,i.jsx)(g.Z,{sx:P.infoMsg,children:"Data for the requested resource is not yet available."}):Object.keys(r).length>0?(0,i.jsxs)(g.Z,{children:[(0,i.jsxs)(j.ZP,{container:!0,sx:P.calendar,children:[(0,i.jsx)(j.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem",children:(0,i.jsx)(m.Z,{variant:"subtitle1",children:(0,i.jsx)("strong",{children:"Cropping System"})})}),(0,i.jsx)(j.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(k.re).map((function(e,n){return(0,i.jsx)(g.Z,{className:"monthlabels",children:s?(0,i.jsx)("span",{children:e.format.substring(0,1)}):(0,i.jsx)("span",{children:e.format.substring(0,3)})},"cal-mo-".concat(n))}))})]}),Object.keys(r).map((function(e,n){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(j.ZP,{container:!0,sx:P.calendar,children:[(0,i.jsx)(j.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,i.jsx)(j.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(k.re).map((function(e,n){return(0,i.jsx)(g.Z,{className:"cal-mo-container",style:{borderRight:"1px solid rgba(0, 0, 0, 0.4)"},children:(0,i.jsx)("div",{className:"cropCalnocolor"})},"cal-mo-itm-".concat(n,"-1"))}))})]}),(0,i.jsxs)(j.ZP,{container:!0,sx:P.calendar,children:[(0,i.jsx)(j.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem cropcal-cropname",children:e}),(0,i.jsx)(j.ZP,{item:!0,xs:10,md:9,className:"calendar-header-months",children:Object.values(k.re).map((function(n,t){var a=r[e][n.code].length<=1?"1px solid rgba(0, 0, 0, 0.4)":"",c=P.calendar.cellBorderColor[r[e][n.code][0]],o=P.calendar.cellBorderColor[r[e][n.code][1]];return(0,i.jsxs)(g.Z,{className:"cal-mo-container",style:{borderRight:""!==a?a:o.includes("#f7f7ff")?"1px solid rgba(0, 0, 0, 0.4)":"1px solid ".concat(o)},children:[(0,i.jsx)("div",{style:{backgroundColor:c||"#f7f7ff"}}),(0,i.jsx)("div",{style:{backgroundColor:o||"#f7f7ff"}})]},"cal-mo-itm-".concat(t,"-1"))}))})]},"cal-row-".concat(n))]},"cal-row-".concat(e))})),(0,i.jsxs)(j.ZP,{container:!0,style:{marginTop:"32px"},children:[(0,i.jsx)(j.ZP,{item:!0,xs:2,md:3,className:"calendar-header-csystem"}),(0,i.jsxs)(j.ZP,{item:!0,xs:10,md:9,sx:P.legend,className:"calendar-header-months",children:[(0,i.jsx)("strong",{children:"Legend"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{style:{backgroundColor:"#ffd966"}}),"Land Preparation"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{style:{backgroundColor:"#a9d08e"}}),"Planting"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{style:{backgroundColor:"#375623"}}),"Growing"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{style:{backgroundColor:"#203764"}}),"Harvesting"]})]})]})]})]}):(0,i.jsx)(g.Z,{sx:P.infoMsg,children:"Please select a province and a municipality."})]})},E=r(3370),L=r(2848);function N(e,n,r,t,a,i,c){try{var o=e[i](c),s=o.value}catch(l){return void r(l)}o.done?n(s):Promise.resolve(s).then(t,a)}function R(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function c(e){N(i,t,a,c,o,"next",e)}function o(e){N(i,t,a,c,o,"throw",e)}c(void 0)}))}}function A(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function I(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){A(e,n,r[n])}))}return e}var z={crop:"rice",loading:!0,error:""};var T=!0,B=function(e){var n=e.municipalitliesLite,r=e.media,t=(0,c.useState)(z),f=t[0],x=t[1],g=(0,c.useState)([]),h=g[0],b=g[1],v=(0,c.useState)([]),j=v[0],y=v[1],C=(0,c.useState)([]),Z=C[0],w=(C[1],(0,o.v9)((function(e){return e.provinces}))),P=w.ids,O=w.entities,S=w.province,N=(0,o.v9)((function(e){return e.municipalities})),T=N.status,B=N.municipality,D=(0,o.I0)(),M=(0,c.useRef)(!1);(0,c.useEffect)((function(){return function(){M.current=!1}}),[]),(0,c.useEffect)((function(){0===P.length?(M.current=!0,D((0,s.Q)())):(D((0,l.Wn)({id:1,label:"Camarines Sur"})),D((0,p.q)("Camarines Sur")).unwrap().then((function(){M.current=!0;var e=n.find((function(e){return"Camarines Sur"===e.province}));D((0,u.QA)({id:e.id,label:e.name}))})))}),[D,P.length,O,n]),(0,c.useEffect)((function(){var e=function(){var e=R(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T!==d.G.FULLFILLED||null===B||!M.current){e.next=13;break}if(n.map((function(e){return e.name})).includes(B.label)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,L.OP)(S.label,B.label);case 6:r=e.sent,M.current&&(x((function(e){return I({},e,{loading:!1})})),b((function(e){return r}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),x((function(n){return I({},n,{loading:!1,error:e.t0.message})}));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[T,B,n,S]),(0,c.useEffect)((function(){h.length>0&&q(null,{label:"Rice",from:"rice"})}),[h]);var q=function(){var e=R(a().mark((function e(r,t){var i,c,o,s,d,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.label,c=t.from,["rice","other_crops"].includes(c)||b([]),void 0===i){e.next=23;break}e.t0=c,e.next="province"===e.t0?6:"municipality"===e.t0?8:"rice"===e.t0||"other_crops"===e.t0?12:20;break;case 6:try{x(I({},f,{loading:!0})),D((0,l.Wn)(t)),D((0,p.q)(t.label)).unwrap().then((function(){var e=n.find((function(e){return e.province===t.label}));D((0,u.QA)({id:e.id,label:e.name}))})),y([])}catch(r){x(I({},f,{loading:!1,error:r.message}))}return e.abrupt("break",21);case 8:return x(I({},f,{loading:!0})),D((0,u.QA)(t)),y([]),e.abrupt("break",21);case 12:return x((function(e){return I({},e,{crop:c})})),o="rice"===c?["Rainfed Rice","Irrigated Rice","Rice"]:["Cassava","Lowland Vegetable","Corn"],s=h.filter((function(e){return e.province===S.label&&e.municipality===B.label&&o.includes(e.crop)})),d=s.reduce((function(e,n){var r=Object.values(k.re).reduce((function(e,r){var t=""===n[r.code]?[]:2===n[r.code].split(",").length?n[r.code].split(",").map((function(e){return"cropCal".concat(e.length>0?e:"nocolor")})):["cropCal".concat(n[r.code]),"cropCal".concat(n[r.code])];return I({},e,A({},r.code,t))}),{});return void 0!==e[n.cropping_system]&&Object.values(k.re).forEach((function(t){var a=t.code;e[n.cropping_system][a].every((function(e){return r[a].includes(e)}))||e[n.cropping_system][a].filter((function(e){return!r[a].includes(e)})).forEach((function(e){r[a].push(e)}))})),I({},e,A({},n.cropping_system,r))}),{}),m={},s.forEach((function(e){void 0===m[e.cropping_system]&&(m[e.cropping_system]=[]),m[e.cropping_system].includes(e.crop)||m[e.cropping_system].push(e.crop)})),y(d),e.abrupt("break",21);case 20:return e.abrupt("break",21);case 21:e.next=33;break;case 23:e.t1=c,e.next="province"===e.t1?26:"municipality"===e.t1?29:32;break;case 26:return x(I({},f,{province:null,municipality:null})),y([]),e.abrupt("break",33);case 29:return x(I({},f,{municipality:null})),y([]),e.abrupt("break",33);case 32:return e.abrupt("break",33);case 33:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{id:"bacap-cropping-calendar",children:[(0,i.jsx)(E.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) Cropping Calendar",ogDescription:r.description,ogImageURL:r.url,ogURL:r.path}),(0,i.jsx)(m.Z,{variant:"h4",children:"Cropping Calendar"}),(0,i.jsx)(m.Z,{variant:"label",children:"Cropping Calendar page"}),(0,i.jsx)(_,{state:f,subcalendar:j,systemCropname:Z,withcalendar:n.map((function(e){return e.name})),onSelectItemChange:q})]})}}},function(e){e.O(0,[9351,6153,9964,1704,1903,6295,712,9774,2888,179],(function(){return n=6318,e(e.s=n);var n}));var n=e.O();_N_E=n}]);