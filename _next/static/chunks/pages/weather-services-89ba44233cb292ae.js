(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{6242:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(7462),i=t(3366),a=t(7294),o=t(6010),s=t(7192),c=t(1496),l=t(3616),d=t(5113),u=t(8979);function p(e){return(0,u.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var f=t(5893);const x=["className","raised"],h=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var g=a.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=t,d=(0,i.Z)(t,x),u=(0,r.Z)({},t,{raised:c}),g=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},p,n)})(u);return(0,f.jsx)(h,(0,r.Z)({className:(0,o.Z)(g.root,a),elevation:c?8:void 0,ref:n,ownerState:u},d))}))},8456:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var r=t(3366),i=t(7462),a=t(7294),o=t(6010),s=t(7192),c=t(917),l=t(8216),d=t(3616),u=t(1496),p=t(8979);function f(e){return(0,p.Z)("MuiCircularProgress",e)}(0,t(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=t(5893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let g,m,v,b,y=e=>e;const j=44,Z=(0,c.F4)(g||(g=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.F4)(m||(m=y`
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
`)),k=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:n})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:n.transitions.create("transform")},"inherit"!==e.color&&{color:n.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(v||(v=y`
      animation: ${0} 1.4s linear infinite;
    `),Z))),S=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,n)=>n.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.circle,n[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&n.circleDisableShrink]}})((({ownerState:e,theme:n})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(b||(b=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w)));var A=a.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:u=!1,size:p=40,style:g,thickness:m=3.6,value:v=0,variant:b="indeterminate"}=t,y=(0,r.Z)(t,h),Z=(0,i.Z)({},t,{color:c,disableShrink:u,size:p,thickness:m,value:v,variant:b}),w=(e=>{const{classes:n,variant:t,color:r,disableShrink:i}=e,a={root:["root",t,`color${(0,l.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,i&&"circleDisableShrink"]};return(0,s.Z)(a,f,n)})(Z),A={},P={},L={};if("determinate"===b){const e=2*Math.PI*((j-m)/2);A.strokeDasharray=e.toFixed(3),L["aria-valuenow"]=Math.round(v),A.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,x.jsx)(k,(0,i.Z)({className:(0,o.Z)(w.root,a),style:(0,i.Z)({width:p,height:p},P,g),ownerState:Z,ref:n,role:"progressbar"},L,y,{children:(0,x.jsx)(S,{className:w.svg,ownerState:Z,viewBox:"22 22 44 44",children:(0,x.jsx)(C,{className:w.circle,style:A,ownerState:Z,cx:j,cy:j,r:(j-m)/2,fill:"none",strokeWidth:m})})}))}))},1618:function(e,n,t){"use strict";const r=t(7294).createContext();n.Z=r},4063:function(e,n,t){"use strict";const r=t(7294).createContext();n.Z=r},3252:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(3366),i=t(7462),a=t(7294),o=t(6010),s=t(7192),c=t(1796),l=t(8216),d=t(1618),u=t(4063),p=t(3616),f=t(1496),x=t(8979);function h(e){return(0,x.Z)("MuiTableCell",e)}var g=(0,t(6087).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),m=t(5893);const v=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`size${(0,l.Z)(t.size)}`],"normal"!==t.padding&&n[`padding${(0,l.Z)(t.padding)}`],"inherit"!==t.align&&n[`align${(0,l.Z)(t.align)}`],t.stickyHeader&&n.stickyHeader]}})((({theme:e,ownerState:n})=>(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,c.$n)((0,c.Fq)(e.palette.divider,1),.88):(0,c._j)((0,c.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===n.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===n.variant&&{color:e.palette.text.primary},"footer"===n.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===n.size&&{padding:"6px 16px",[`&.${g.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var y=a.forwardRef((function(e,n){const t=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:c="inherit",className:f,component:x,padding:g,scope:y,size:j,sortDirection:Z,variant:w}=t,k=(0,r.Z)(t,v),S=a.useContext(d.Z),C=a.useContext(u.Z),A=C&&"head"===C.variant;let P;P=x||(A?"th":"td");let L=y;!L&&A&&(L="col");const D=w||C&&C.variant,_=(0,i.Z)({},t,{align:c,component:P,padding:g||(S&&S.padding?S.padding:"normal"),size:j||(S&&S.size?S.size:"medium"),sortDirection:Z,stickyHeader:"head"===D&&S&&S.stickyHeader,variant:D}),N=(e=>{const{classes:n,variant:t,align:r,padding:i,size:a,stickyHeader:o}=e,c={root:["root",t,o&&"stickyHeader","inherit"!==r&&`align${(0,l.Z)(r)}`,"normal"!==i&&`padding${(0,l.Z)(i)}`,`size${(0,l.Z)(a)}`]};return(0,s.Z)(c,h,n)})(_);let O=null;return Z&&(O="asc"===Z?"ascending":"descending"),(0,m.jsx)(b,(0,i.Z)({as:P,ref:n,className:(0,o.Z)(N.root,f),"aria-sort":O,scope:L,ownerState:_},k))}))},9859:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(998)}])},9132:function(e,n){"use strict";n.Z={tablecontainer:{marginTop:function(e){return e.spacing(1)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(e){return e.spacing(4)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(e){return e.palette.secondary.light}},legend:{margin:function(e){return e.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}}},2509:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(5893),i=t(9473),a=t(1163),o=t(7357),s=t(7906),c=t(295),l=t(3252),d=t(2882),u=t(3184),p=t(3816),f=t(5861),x=t(1033),h=t(8078),g={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var m=function(e){var n=e.rows,t=void 0===n?3:n,i=e.cols,a=void 0===i?3:i;return(0,r.jsx)(o.Z,{sx:g.container,children:Array.from(Array(t).keys()).map((function(e,n){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(a).keys()).map((function(e,n){return(0,r.jsx)(h.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/a),"%")}},"col-".concat(n))}))},"row-".concat(n))}))})},v=t(7426),b=t(9132);var y=function(e){var n=e.weatherData,t=e.withBorder,h=void 0!==t&&t,g=e.fsLoading,y=void 0===g||g,j=(0,i.v9)((function(e){return e.provinces.entities})),Z=(0,a.useRouter)(),w=function(e){var n="";if(0===Object.values(j).length)return"n/a";try{n=Object.values(j).find((function(n){return n.name===e})).label}catch(t){n="n/a"}return n},k=function(e){var n=e.children;return h?(0,r.jsx)(d.Z,{sx:b.Z.tablecontainer,children:n}):(0,r.jsx)(d.Z,{children:n})};return(0,r.jsx)("div",{children:y?(0,r.jsx)(m,{rows:7,cols:7}):n.length>0?(0,r.jsxs)(k,{children:[(0,r.jsxs)(s.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{sx:{width:"20%"},children:"Province"}),n[0].mos.map((function(e,n){return(0,r.jsx)(l.Z,{sx:{textAlign:"center"},children:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"".concat(e,"-").concat(n))}))]})}),(0,r.jsx)(c.Z,{children:n.map((function(e){return(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{children:w(e.name)}),e.months.map((function(e,n){return(0,r.jsx)(l.Z,{sx:{backgroundColor:v.tN[e.con],border:"1px solid #000",textAlign:"center",fontSize:"14px",padding:"10px",color:["above_normal","wb_normal"].includes(e.con)?"#fff":"#000"},children:e.val},"".concat(e.mo,"-").concat(n))}))]},e.name)}))})]}),(0,r.jsxs)(o.Z,{sx:b.Z.legend,children:[(0,r.jsxs)(f.Z,{component:"p",variant:"caption",sx:b.Z.caption,children:["Encoded from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal (Rainfall) Forecast"})," web page",(0,r.jsx)("br",{}),"by ","/admin/weather"===Z.pathname?n[0].updated_by:"an admin"," on \xa0",n[0].date_created.toDate().toDateString()]}),(0,r.jsx)("ul",{children:Object.values(v.MW).map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:v.tN[e.label]}}),e.sync," (",e.content,")"]},e.id)}))})]})]}):(0,r.jsx)(x.Z,{})})}},1033:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),i=t(5675),a=t(7357),o=t(5861),s=t(120),c={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var l=function(e){var n=e.message,t=void 0===n?"Failed to load data":n,l=e.style,d=void 0===l?{}:l;return(0,r.jsxs)(a.Z,{sx:c.container,style:d,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,s.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:s.imageLoader,alt:"Empty data"}),(0,r.jsx)(o.Z,{variant:"subtitle1",children:t})]})}},998:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(5893),i=t(7294),a=t(9473),o=t(4822),s=t(5861),c=t(4051),l=t.n(c),d=t(901),u=t(6295),p=t(7357),f=t(6242),x=t(8456),h=t(6886),g=t(1903),m=t(5675),v=t(120),b={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{marginBottom:"4px"},"& .temp-label":{display:"flex",justifyContent:"space-evenly",fontSize:"12px"}}};var y=function(e){var n=e.dailyweather,t=function(e){return Math.round(100*(e+Number.EPSILON))/100};return(0,r.jsxs)(p.Z,{sx:b.daily,children:[(0,r.jsx)("div",{className:"temp-day",children:n.day}),(0,r.jsx)("div",{children:(0,r.jsx)(m.default,{unoptimized:!0,src:(0,v.assetPrefixer)("images/icons/p_".concat(n.rainfall.toLowerCase().replace(" ","_"),".png")),height:50,width:50,loader:v.imageLoader,alt:n.day})}),(0,r.jsx)("div",{className:"temp-label",children:(0,r.jsxs)("div",{children:[n.cover,", ",n.rainfall]})}),(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("strong",{children:[t(n.temp_avg),"\xb0"]})}),(0,r.jsx)("div",{children:t(n.wspeed)})]})]})},j=t(1033),Z={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}var S=function(e){var n=e.weather,t=e.onSelectItemChange,o=(0,a.v9)((function(e){return e.provinces})),c=(0,a.v9)((function(e){return e.municipalities})),l=(0,a.v9)((function(e){return e.tendayweather})),m=(0,i.useState)(!0),v=m[0],b=m[1],w=(0,i.useState)(!1),S=w[0],C=w[1];return(0,i.useEffect)((function(){var e=o.status!==d.G.FULLFILLED||l.status!==d.G.FULLFILLED;""===o.error&&""===l.error||C(!0),b(e)}),[o.status,l.status,o.error,l.error]),(0,r.jsxs)(p.Z,{sx:Z.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(f.Z,{variant:"outlined",sx:Z.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||v,options:Object.values(o.entities),size:"small",renderInput:function(e){return(0,r.jsx)(g.Z,k({},e,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,k({},n,{from:"province"}))}}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"municipality",value:c.municipality,disabled:0===c.ids.length||v,options:Object.values(c.entities),sx:Z.autoMuni,size:"small",renderInput:function(e){return(0,r.jsx)(g.Z,k({},e,{label:null===c.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,k({},n,{from:"municipality"}))}})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Data Overview"}),!v&&!S&&(0,r.jsxs)(s.Z,{component:"p",variant:"caption",sx:Z.caption,children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0 ",l.currentLogs.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",l.currentLogs.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",l.currentLogs.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",l.currentLogs.date_synced,(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{variant:"h6",children:"\xa0"}),!v&&!S&&(0,r.jsxs)(s.Z,{component:"p",variant:"caption",sx:Z.caption,children:["Synced from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"10-Day Climate Forecast"})," spreadsheet files by ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on ",l.currentLogs.date_synced]})]})})]}),(0,r.jsx)(h.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:v&&!S?(0,r.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(x.Z,{size:32}),(0,r.jsx)(s.Z,{variant:"caption",children:"Loading municipalities..."})]}):S?(0,r.jsx)(j.Z,{}):n.map((function(e,n){return(0,r.jsx)(y,{dailyweather:e},"dw-".concat(n))}))})]})]})},C=t(3691),A=t(3549),P=t(6867);function L(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}var D=function(){var e=(0,a.v9)((function(e){return e.provinces})),n=e.ids,t=e.entities,o=(0,a.v9)((function(e){return e.municipalities})).municipality,s=(0,a.v9)((function(e){return e.tendayweather})),c=s.ids,u=s.entities,p=s.status,f=(0,i.useState)([]),x=f[0],h=f[1],g=(0,i.useState)(!1),m=g[0],v=g[1],b=(0,a.I0)();(0,i.useEffect)((function(){b((0,C.QA)(null))}),[b]),(0,i.useEffect)((function(){n.length>0&&(b((0,A.Wn)(Object.values(t)[0])),b((0,P.R)(Object.values(t)[0].label)).unwrap().then((function(){v(!0)})))}),[b,n,t]),(0,i.useEffect)((function(){if(c.length>0&&p===d.G.FULLFILLED&&m){var e=Object.values(u).sort((function(e,n){return e.municipality.localeCompare(n.municipality)})).map((function(e,n){return{id:n,label:e.municipality}}));b((0,C.X4)(e)),b((0,C.QA)(e[0]))}}),[b,c,u,p,m]),(0,i.useEffect)((function(){if(null!==o&&m){var e=Object.values(u).find((function(e){return e.municipality===o.label}));e&&h(JSON.parse(e.data).map((function(e){return{day:e.day_format,temp_avg:e.tmean,wspeed:e.wspeed,rainfall:e.rainfall,cover:e.cover}})))}}),[b,o,u,p,m]);var y=function(){var e,n=(e=l().mark((function e(n,t){var r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.label,i=t.from,!r){e.next=14;break}e.t0=i,e.next="province"===e.t0?5:"municipality"===e.t0?9:11;break;case 5:return b((0,A.Wn)(t)),b((0,P.R)(r)),b((0,C.X4)([])),e.abrupt("break",12);case 9:return b((0,C.QA)({id:t.id,label:t.label})),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:e.next=25;break;case 14:e.t1=i,e.next="province"===e.t1?17:"municipality"===e.t1?21:24;break;case 17:return b((0,A.jg)()),b((0,C.X4)([])),h([]),e.abrupt("break",25);case 21:return b((0,C.QA)(null)),h([]),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){L(a,r,i,o,s,"next",e)}function s(e){L(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,r.jsx)(S,{weather:x,onSelectItemChange:y})},_=t(2509),N=t(8078),O={wrapper:{marginTop:function(e){return e.spacing(10)}},container:{padding:function(e){return e.spacing(2)},paddingTop:function(e){return e.spacing(2)},marginBottom:function(e){return e.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var R=function(e){var n=e.typhoon,t=void 0===n?null:n,i=e.loading;return(0,r.jsx)(p.Z,{sx:O.wrapper,id:"typhoon-advisory",children:i?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:O.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(N.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(e){return(0,r.jsx)(N.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(e))})),(0,r.jsx)(N.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:O.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:v.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(s.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:t.description}),(0,r.jsxs)(s.Z,{component:"p",variant:"caption",sx:O.caption,children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",t.updated_by," on \xa0",t.date_updated.toDate().toDateString()]})]})]}):(0,r.jsx)(j.Z,{})})},T={wrapper:{marginTop:function(e){return e.spacing(6)}},container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(1)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var M=function(e){var n=e.seasonal,t=e.typhoon,i=e.fsLoading,a=e.loading;return(0,r.jsxs)(p.Z,{sx:T.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(R,{typhoon:t,loading:a}),!i&&n.length>0&&(0,r.jsxs)(s.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var e="";if(n.length>0){var t=n[0].mos[0],r=n[0].mos[n[0].mos.length-1];e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return e}()]}),(0,r.jsx)(_.Z,{weatherData:n,withBorder:!0,fsLoading:i})]})},z={container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(7)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)},padding:function(e){return e.spacing(2)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"}};var E=function(){return(0,r.jsxs)(p.Z,{sx:z.container,children:[(0,r.jsx)(s.Z,{variant:"h5",children:"Special Weather Advisory"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.Z,{variant:"subtitle2",children:"(to be updated)"}),(0,r.jsx)("br",{})]})},W=t(1029),I=t(560),F=t(7682);function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(){var e=H((0,F.ky)(W.K.GLOBAL_COLLECTIONS,W.K.TYPHOON_ADVISORY),2),n=e[0],t=e[1],c=(0,F.m$)(I.M.WEATHER_FORECASTS,"bicol",I.M.SUB_SEASONAL,"name"),l=c.documents,d=c.loading,u=(0,a.v9)((function(e){return e.provinces.ids})),p=(0,i.useRef)(null),f=(0,a.I0)();return(0,i.useEffect)((function(){null===p.current&&0===u.length&&(p.current=!0,f((0,o.Q)()))}),[f,u.length]),(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"BACAP Services"}),(0,r.jsx)(s.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,r.jsx)(D,{}),(0,r.jsx)(M,{seasonal:l,typhoon:n,fsLoading:d,loading:t}),(0,r.jsx)(E,{})]})}}},function(e){e.O(0,[958,774,888,179],(function(){return n=9859,e(e.s=n);var n}));var n=e.O();_N_E=n}]);