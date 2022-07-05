(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{6242:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),i=n(7294),o=n(6010),c=n(7192),s=n(1496),l=n(3616),u=n(5113),d=n(8979);function p(e){return(0,d.Z)("MuiCard",e)}(0,n(6087).Z)("MuiCard",["root"]);var f=n(5893);const x=["className","raised"],h=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var m=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,u=(0,a.Z)(n,x),d=(0,r.Z)({},n,{raised:s}),m=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},p,t)})(d);return(0,f.jsx)(h,(0,r.Z)({className:(0,o.Z)(m.root,i),elevation:s?8:void 0,ref:t,ownerState:d},u))}))},8456:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(3366),a=n(7462),i=n(7294),o=n(6010),c=n(7192),s=n(917),l=n(8216),u=n(3616),d=n(1496),p=n(8979);function f(e){return(0,p.Z)("MuiCircularProgress",e)}(0,n(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=n(5893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let m,g,v,y,b=e=>e;const j=44,w=(0,s.F4)(m||(m=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,s.F4)(g||(g=b`
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
`)),S=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,l.Z)(n.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(v||(v=b`
      animation: ${0} 1.4s linear infinite;
    `),w))),k=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),_=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${(0,l.Z)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(y||(y=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)));var A=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:d=!1,size:p=40,style:m,thickness:g=3.6,value:v=0,variant:y="indeterminate"}=n,b=(0,r.Z)(n,h),w=(0,a.Z)({},n,{color:s,disableShrink:d,size:p,thickness:g,value:v,variant:y}),Z=(e=>{const{classes:t,variant:n,color:r,disableShrink:a}=e,i={root:["root",n,`color${(0,l.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(n)}`,a&&"circleDisableShrink"]};return(0,c.Z)(i,f,t)})(w),A={},O={},P={};if("determinate"===y){const e=2*Math.PI*((j-g)/2);A.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(v),A.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,x.jsx)(S,(0,a.Z)({className:(0,o.Z)(Z.root,i),style:(0,a.Z)({width:p,height:p},O,m),ownerState:w,ref:t,role:"progressbar"},P,b,{children:(0,x.jsx)(k,{className:Z.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,x.jsx)(_,{className:Z.circle,style:A,ownerState:w,cx:j,cy:j,r:(j-g)/2,fill:"none",strokeWidth:g})})}))}))},1618:function(e,t,n){"use strict";const r=n(7294).createContext();t.Z=r},4063:function(e,t,n){"use strict";const r=n(7294).createContext();t.Z=r},3252:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(3366),a=n(7462),i=n(7294),o=n(6010),c=n(7192),s=n(1796),l=n(8216),u=n(1618),d=n(4063),p=n(3616),f=n(1496),x=n(8979);function h(e){return(0,x.Z)("MuiTableCell",e)}var m=(0,n(6087).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=n(5893);const v=["align","className","component","padding","scope","size","sortDirection","variant"],y=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,l.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,l.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,l.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${m.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var b=i.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:f,component:x,padding:m,scope:b,size:j,sortDirection:w,variant:Z}=n,S=(0,r.Z)(n,v),k=i.useContext(u.Z),_=i.useContext(d.Z),A=_&&"head"===_.variant;let O;O=x||(A?"th":"td");let P=b;!P&&A&&(P="col");const C=Z||_&&_.variant,D=(0,a.Z)({},n,{align:s,component:O,padding:m||(k&&k.padding?k.padding:"normal"),size:j||(k&&k.size?k.size:"medium"),sortDirection:w,stickyHeader:"head"===C&&k&&k.stickyHeader,variant:C}),T=(e=>{const{classes:t,variant:n,align:r,padding:a,size:i,stickyHeader:o}=e,s={root:["root",n,o&&"stickyHeader","inherit"!==r&&`align${(0,l.Z)(r)}`,"normal"!==a&&`padding${(0,l.Z)(a)}`,`size${(0,l.Z)(i)}`]};return(0,c.Z)(s,h,t)})(D);let R=null;return w&&(R="asc"===w?"ascending":"descending"),(0,g.jsx)(y,(0,a.Z)({as:O,ref:t,className:(0,o.Z)(T.root,f),"aria-sort":R,scope:P,ownerState:D},S))}))},9859:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return n(90)}])},9132:function(e,t){"use strict";t.Z={tablecontainer:{marginTop:function(e){return e.spacing(1)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(e){return e.spacing(4)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(e){return e.palette.secondary.light}},legend:{margin:function(e){return e.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"center"},"& ul":{listStyle:"none","& li":{float:"left",marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}}},2509:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),a=n(1163),i=n(7357),o=n(7906),c=n(295),s=n(3252),l=n(2882),u=n(3184),d=n(3816),p=n(5861),f=n(1033),x=n(8078),h={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var m=function(e){var t=e.rows,n=void 0===t?3:t,a=e.cols,o=void 0===a?3:a;return(0,r.jsx)(i.Z,{sx:h.container,children:Array.from(Array(n).keys()).map((function(e,t){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(o).keys()).map((function(e,t){return(0,r.jsx)(x.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/o),"%")}},"col-".concat(t))}))},"row-".concat(t))}))})},g=n(7426),v=n(9132);var y=function(e){var t=e.weatherData,n=e.provinces,x=e.withBorder,h=void 0!==x&&x,y=e.fsLoading,b=void 0===y||y,j=(0,a.useRouter)(),w=function(e){var t="";try{t=n.filter((function(t){return t.province===e}))[0].format}catch(r){t="n/a"}return t},Z=function(e){var t=e.children;return h?(0,r.jsx)(l.Z,{sx:v.Z.tablecontainer,children:t}):(0,r.jsx)(l.Z,{children:t})};return(0,r.jsx)("div",{children:b?(0,r.jsx)(m,{rows:7,cols:7}):t.length>0?(0,r.jsxs)(Z,{children:[(0,r.jsxs)(o.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(s.Z,{sx:{width:"20%"},children:"Province"}),t[0].mos.map((function(e,t){return(0,r.jsx)(s.Z,{sx:{textAlign:"center"},children:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"".concat(e,"-").concat(t))}))]})}),(0,r.jsx)(c.Z,{children:t.map((function(e){return(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(s.Z,{children:w(e.name)}),e.months.map((function(e,t){return(0,r.jsx)(s.Z,{sx:{backgroundColor:g.tN[e.con],border:"1px solid",textAlign:"center",fontSize:"14px",padding:"10px"},children:e.val},"".concat(e.mo,"-").concat(t))}))]},e.name)}))})]}),(0,r.jsxs)(i.Z,{sx:v.Z.legend,children:[(0,r.jsxs)(p.Z,{component:"p",variant:"caption",sx:v.Z.caption,children:["Encoded from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal (Rainfall) Forecast"})," web page",(0,r.jsx)("br",{}),"by ","/admin/weather"===j.pathname?t[0].updated_by:"an admin"," on \xa0",t[0].date_created.toDate().toDateString()]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:g.tN[g.MW.NORMAL.label]}}),g.MW.NORMAL.sync]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:g.tN[g.MW.DRIER.label]}}),g.MW.DRIER.sync]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:g.tN[g.MW.WETTER.label]}}),g.MW.WETTER.sync]})]})]})]}):(0,r.jsx)(f.Z,{})})}},90:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),a=n(5861),i=n(4051),o=n.n(i),c=n(7294),s=n(6295),l=n(7357),u=n(6242),d=n(8456),p=n(6886),f=n(1903),x=n(5675),h=n(120),m={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{marginBottom:"4px"},"& .temp-label":{display:"flex",justifyContent:"space-evenly",fontSize:"12px"}}};var g=function(e){var t=e.dailyweather;return(0,r.jsxs)(l.Z,{sx:m.daily,children:[(0,r.jsx)("div",{className:"temp-day",children:t.day}),(0,r.jsx)("div",{children:(0,r.jsx)(x.default,{unoptimized:!0,src:(0,h.assetPrefixer)("images/icons/p_".concat(t.rainfall.toLowerCase().replace(" ","_"),".png")),height:50,width:50,loader:h.imageLoader,alt:t.day})}),(0,r.jsx)("div",{className:"temp-label",children:(0,r.jsxs)("div",{children:[t.cover,", ",t.rainfall]})}),(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("strong",{children:[Math.round(t.temp_max),"\xb0"]})}),(0,r.jsxs)("div",{children:[Math.round(t.temp_min),"\xb0"]})]})]})},v=n(1033),y={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}var w=function(e){var t=e.provinces,n=void 0===t?[]:t,i=e.municipalities,o=void 0===i?[]:i,c=e.weather,x=e.logs,h=e.sel_options,m=e.onSelectItemChange;return(0,r.jsxs)(l.Z,{sx:y.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(a.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(u.Z,{variant:"outlined",sx:y.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(p.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",children:[(0,r.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(s.Z,{disablePortal:!0,id:"province",value:h.sel_province,disabled:0===n.length,options:n.map((function(e){return{id:e.province,label:e.format}})),size:"small",renderInput:function(e){return(0,r.jsx)(f.Z,j({},e,{label:null===h.sel_province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return m(e,j({},t,{from:"province"}))}}),(0,r.jsx)(s.Z,{disablePortal:!0,id:"municipality",value:h.sel_municipality,disabled:0===o.length||h.loading,options:o,sx:y.autoMuni,size:"small",renderInput:function(e){return(0,r.jsx)(f.Z,j({},e,{label:null===h.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,t){return e.label===t.label},onChange:function(e,t){return m(e,j({},t,{from:"municipality"}))}})]})}),(0,r.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.Z,{variant:"h6",children:"Data Overview"}),(0,r.jsxs)(a.Z,{component:"p",variant:"caption",sx:y.caption,children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0 ",x.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",x.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",x.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",x.date_synced,(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.Z,{variant:"h6",children:"\xa0"}),(0,r.jsxs)(a.Z,{component:"p",variant:"caption",sx:y.caption,children:["Synced from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"10-Day Climate Forecast"})," spreadsheet files by ","system"===x.updated_by?"":"an"," ",x.updated_by," on ",x.date_synced]})]})})]}),(0,r.jsx)(p.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:h.loading?(0,r.jsxs)(l.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(d.Z,{size:32}),(0,r.jsx)(a.Z,{variant:"caption",children:"Loading municipalities..."})]}):""!==h.error?(0,r.jsx)(v.Z,{}):c.map((function(e,t){return(0,r.jsx)(g,{dailyweather:e},"dw-".concat(t))}))})]})]})},Z=n(1234);function S(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){S(i,r,a,o,c,"next",e)}function c(e){S(i,r,a,o,c,"throw",e)}o(void 0)}))}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}var O={sel_municipality:null,sel_province:null,loading:!0,error:""};var P=function(e){var t=e.provinces,n=void 0===t?[]:t,a=(0,c.useState)(O),i=a[0],s=a[1],l=(0,c.useState)([]),u=l[0],d=l[1],p=(0,c.useState)([]),f=p[0],x=p[1],h=(0,c.useState)([]),m=h[0],g=h[1],v=(0,c.useState)({}),y=v[0],b=v[1],j=(0,c.useState)(!1),S=j[0],_=j[1],P=(0,c.useRef)(!1);(0,c.useEffect)((function(){P.current=!0;var e=function(){var e=k(o().mark((function e(){var t,n,r,a,i,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.vx)();case 3:for(t=e.sent,n=Object.values(t[0].municipalities)[0][0],(r={date_synced:t[0].date_created.toDate().toDateString()}).updated_by="system"===t[0].updated_by?t[0].updated_by:"admin",r.date_forecast=n.date_forecast,r.date_valid=n.date_range,a=n.date_range.match(/[\d]{4}|[,]{4}/g),i=n.date_range.split("-"),r.date_start=null===a||2!==i.length?null:new Date("".concat(i[0].trim(),", ").concat(a[0])),r.days=[],c=1;c<=10;c+=1)l=null!==r.date_start?new Date("".concat(r.date_start.getMonth()+1," ").concat(r.date_start.getDate()+(c-1),", ").concat(r.date_start.getFullYear())).toDateString():null,r.days.push(null!==l?l.substr(0,l.length-5):"Day ".concat(c));P.current&&(b(r),x(t[0].municipalities),d((function(e){return Object.keys(t[0].municipalities).map((function(e){return{id:e,label:e}}))})),s((function(e){return A({},e,{loading:!1})}))),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),s((function(t){return A({},t,{loading:!1,error:e.t0.message})}));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){P.current=!1}}),[]),(0,c.useEffect)((function(){!S&&n.length>0&&u.length>0&&(s(A({},O,{sel_province:{id:n[0].province,label:n[0].format},sel_municipality:u[0],loading:!1})),g(f[u[0].label].map((function(e,t){return{day:y.days[t],temp_max:e.tmax,temp_min:e.tmin,rainfall:e.rainfall,cover:e.cover}}))),_(!0))}),[S,n,u,f,y]);var C=function(){var e=k(o().mark((function e(t,n){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.label,a=n.from,!r){e.next=24;break}e.t0=a,e.next="province"===e.t0?5:"municipality"===e.t0?18:21;break;case 5:return s(A({},O,{sel_province:n,loading:!0})),g([]),e.prev=7,e.next=10,(0,Z.cp)(r);case 10:c=e.sent,P.current&&(d((function(e){return Object.keys(c[0].municipalities).map((function(e){return{id:e,label:e}}))})),x((function(e){return c[0].municipalities})),s((function(e){return A({},e,{loading:!1})}))),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(7),s(A({},i,{loading:!1,error:e.t1.message}));case 17:return e.abrupt("break",22);case 18:return s(A({},i,{sel_municipality:n,loading:!1})),g(f[r].map((function(e,t){return{day:y.days[t],temp_max:e.tmax,temp_min:e.tmin,rainfall:e.rainfall,cover:e.cover}}))),e.abrupt("break",22);case 21:return e.abrupt("break",22);case 22:e.next=35;break;case 24:e.t2=a,e.next="province"===e.t2?27:"municipality"===e.t2?31:34;break;case 27:return s(A({},O,{loading:!1})),d([]),g([]),e.abrupt("break",35);case 31:return s(A({},i,{sel_municipality:null})),g([]),e.abrupt("break",35);case 34:return e.abrupt("break",35);case 35:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsx)(w,{provinces:n,municipalities:u,weather:m,logs:y,sel_options:i,onSelectItemChange:C})},C=n(2509),D=n(8078),T={wrapper:{marginTop:function(e){return e.spacing(10)}},container:{padding:function(e){return e.spacing(2)},paddingTop:function(e){return e.spacing(2)},marginBottom:function(e){return e.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var R=function(e){var t=e.typhoon,n=void 0===t?null:t,i=e.loading;return(0,r.jsx)(l.Z,{sx:T.wrapper,id:"typhoon-advisory",children:i?(0,r.jsxs)(p.ZP,{container:!0,maxWidth:"lg",sx:T.container,spacing:4,children:[(0,r.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(D.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(p.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(e){return(0,r.jsx)(D.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(e))})),(0,r.jsx)(D.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(p.ZP,{item:!0,xs:12,md:3})]}):null!==n?(0,r.jsxs)(p.ZP,{container:!0,maxWidth:"lg",sx:T.container,spacing:4,children:[(0,r.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(x.default,{unoptimized:!0,src:n.img,height:273,width:600,loader:h.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(p.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(a.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:n.description}),(0,r.jsxs)(a.Z,{component:"p",variant:"caption",sx:T.caption,children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",n.updated_by," on \xa0",n.date_updated.toDate().toDateString()]})]})]}):(0,r.jsx)(v.Z,{})})},M={wrapper:{marginTop:function(e){return e.spacing(6)}},container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(1)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var E=function(e){var t=e.seasonal,n=e.provinces,i=e.typhoon,o=e.fsLoading,c=e.loading;return(0,r.jsxs)(l.Z,{sx:M.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(a.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(R,{typhoon:i,loading:c}),!o&&t.length>0&&(0,r.jsxs)(a.Z,{variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var e="";if(t.length>0){var n=t[0].mos[0],r=t[0].mos[t[0].mos.length-1];e="".concat(n.charAt(0).toUpperCase()).concat(n.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return e}()]}),(0,r.jsx)(C.Z,{weatherData:t,provinces:n,withBorder:!0,fsLoading:o})]})},N={container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(7)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)},padding:function(e){return e.spacing(2)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"}};var W=function(){return(0,r.jsxs)(l.Z,{sx:N.container,children:[(0,r.jsx)(a.Z,{variant:"h5",children:"Typhoon Advisory"}),(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{variant:"subtitle2",children:"(to be updated)"}),(0,r.jsx)("br",{})]})};n(4763);var L="const_regions",z=n(1029),I=n(560),H=n(7682);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(){var e=(0,H.Kx)(L,"province").documents,t=$((0,H.ky)(z.K.GLOBAL_COLLECTIONS,z.K.TYPHOON_ADVISORY),2),n=t[0],i=t[1],o=(0,H.m$)(I.M.WEATHER_FORECASTS,"bicol",I.M.SUB_SEASONAL,"name"),c=o.documents,s=o.loading;return(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(a.Z,{variant:"h4",children:"BACAP Services"}),(0,r.jsx)(a.Z,{variant:"label",children:"Weather Forecasts and Typhoon Advisory information"}),(0,r.jsx)(P,{provinces:e}),(0,r.jsx)(E,{provinces:e,seasonal:c,typhoon:n,fsLoading:s,loading:i}),(0,r.jsx)(W,{})]})}},1029:function(e,t,n){"use strict";n.d(t,{K:function(){return g},d:function(){return v}});var r=n(4051),a=n.n(r),i=n(4763),o=n(4659);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?c(e):t}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f(this,n)}}var g={MEDIA_ASSETS:"n_page_media",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory"},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(n,e);var t=m(n);function n(){var e;u(this,n);var r=c(e=t.apply(this,arguments));d(c(e),"getPageMediaAssets",function(){var e=l(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,r.getCollectionData(g.MEDIA_ASSETS,"filename");case 4:n=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),console.error(e.t0.message),new Error(e.t0.message);case 11:return e.abrupt("return",n.length>0?n.filter((function(e){return e.page===t})).map((function(e){return e.url})):n);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}());var i=c(e);d(c(e),"getTyphoonAdvisory",l(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.doc(i.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),e.next=3,i.getDoc(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var s=c(e);return d(c(e),"getWeatherForecast",function(){var e=l(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getNestedCollectionData(g.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d(c(e),"getPdfDownloadURL",function(){var e=l(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,o.iH)(o.tO,"bulletins/".concat(t)),e.next=4,(0,o.Jt)(n);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e}return n}(i.Z)},1234:function(e,t,n){"use strict";n.d(t,{vx:function(){return a},cp:function(){return i}});var r=new(n(560).D),a=(r.getWeatherForecast.bind(r),r.getSeasonalMonths.bind(r),r.getTenDayStats.bind(r)),i=r.getTenDayProvince.bind(r)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[369,295,958,328,774,888,179],(function(){return t=9859,e(e.s=t);var t}));var t=e.O();_N_E=t}]);