(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{9859:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(671)}])},9132:function(n,e){"use strict";e.Z={tablecontainer:{marginTop:function(n){return n.spacing(1)},border:function(n){return"1px solid ".concat(n.palette.bacap.border)},borderRadius:function(n){return n.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(n){return n.spacing(4)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(n){return n.palette.secondary.light}},legend:{margin:function(n){return n.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}},caption:{color:function(n){return n.palette.text.secondary},"& a":{color:function(n){return n.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(n){return n.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}}},2509:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(5893),i=t(9473),a=t(1163),o=t(7357),c=t(7906),s=t(295),l=t(3252),u=t(2882),d=t(3184),p=t(3816),x=t(5861),f=t(1033),h=t(8078),m={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var g=function(n){var e=n.rows,t=void 0===e?3:e,i=n.cols,a=void 0===i?3:i;return(0,r.jsx)(o.Z,{sx:m.container,children:Array.from(Array(t).keys()).map((function(n,e){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(a).keys()).map((function(n,e){return(0,r.jsx)(h.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/a),"%")}},"col-".concat(e))}))},"row-".concat(e))}))})},b=t(7426),v=t(9132);var j=function(n){var e=n.weatherData,t=n.withBorder,h=void 0!==t&&t,m=n.fsLoading,j=void 0===m||m,y=(0,i.v9)((function(n){return n.provinces.entities})),Z=(0,a.useRouter)(),w=function(n){var e="";if(0===Object.values(y).length)return"n/a";try{e=Object.values(y).find((function(e){return e.name===n})).label}catch(t){e="n/a"}return e},O=function(n){var e=n.children;return h?(0,r.jsx)(u.Z,{sx:v.Z.tablecontainer,children:e}):(0,r.jsx)(u.Z,{children:e})};return(0,r.jsx)("div",{children:j?(0,r.jsx)(g,{rows:7,cols:7}):e.length>0?(0,r.jsxs)(O,{children:[(0,r.jsxs)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(d.Z,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{sx:{width:"20%"},children:"Province"}),e[0].mos.map((function(n,e){return(0,r.jsx)(l.Z,{sx:{textAlign:"center"},children:"".concat(n[0].toUpperCase()).concat(n.slice(1))},"".concat(n,"-").concat(e))}))]})}),(0,r.jsx)(s.Z,{children:e.map((function(n){return(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{children:w(n.name)}),n.months.map((function(n,e){return(0,r.jsx)(l.Z,{sx:{backgroundColor:b.tN[n.con],border:"1px solid #000",textAlign:"center",fontSize:"14px",padding:"10px",color:["above_normal","wb_normal"].includes(n.con)?"#fff":"#000"},children:n.val},"".concat(n.mo,"-").concat(e))}))]},n.name)}))})]}),(0,r.jsxs)(o.Z,{sx:v.Z.legend,children:[(0,r.jsxs)(x.Z,{component:"p",variant:"caption",sx:v.Z.caption,children:["Encoded from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal (Rainfall) Forecast"})," web page",(0,r.jsx)("br",{}),"by ","/admin/weather"===Z.pathname?e[0].updated_by:"an admin"," on \xa0",e[0].date_created.toDate().toDateString()]}),(0,r.jsx)("ul",{children:Object.values(b.MW).map((function(n){return(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:b.tN[n.label]}}),n.sync," (",n.content,")"]},n.id)}))})]})]}):(0,r.jsx)(f.Z,{})})}},1033:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5893),i=t(5675),a=t(7357),o=t(5861),c=t(120),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var l=function(n){var e=n.message,t=void 0===e?"Failed to load data":e,l=n.style,u=void 0===l?{}:l;return(0,r.jsxs)(a.Z,{sx:s.container,style:u,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,r.jsx)(o.Z,{variant:"subtitle1",children:t})]})}},4010:function(n,e,t){"use strict";var r=t(5893),i=t(5113);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var o=(0,t(1496).ZP)((function(n){return(0,r.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}({},n))}))((function(n){var e=n.theme;return{padding:e.spacing(3),borderRadius:e.spacing(1),backgroundColor:"#fff",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",border:"1px solid ".concat(e.palette.bacap.border)}}));e.Z=o},671:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return en}});var r=t(5893),i=t(7294),a=t(9473),o=t(4822),c=t(5861),s=t(4051),l=t.n(s),u=t(901),d=t(6295),p=t(7357),x=t(6242),f=t(8456),h=t(6886),m=t(1903),g=t(5675),b=t(120),v=t(3365),j=t(855),y={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:function(n){return n.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{marginBottom:"4px"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:"12px"}},dataContent:{}};var Z=function(n){var e=n.dailyweather,t=function(n){return Math.round(100*(n+Number.EPSILON))/100};return(0,r.jsxs)(p.Z,{sx:y.daily,children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)("div",{className:"temp-day",children:e.day}),(0,r.jsx)("div",{children:(0,r.jsx)(g.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/icons/p_".concat(e.rainfall.toLowerCase().replace(" ","_"),".png")),height:50,width:50,loader:b.imageLoader,alt:e.day})}),(0,r.jsx)("div",{className:"temp-label",children:(0,r.jsxs)("div",{children:[e.cover,", ",e.rainfall]})})]}),(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{fontSize:"12px"}),(0,r.jsxs)("strong",{children:[t(e.temp_avg),"\xb0"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(j.Z,{fontSize:"12px"}),t(e.wspeed)]})]})})]})},w=t(1033),O=t(1496);function S(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var P=(0,O.ZP)((function(n){return(0,r.jsx)(c.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){S(n,e,t[e])}))}return n}({component:"p",variant:"caption"},n))}))((function(n){var e=n.theme;return{color:e.palette.text.secondary,"& a":{color:e.palette.secondary.main,textDecoration:"none"},"& a:visited":{color:e.palette.primary.dark},"& a:hover, span:hover":{textDecoration:"underline"}}})),A=P,C={wrapper:{marginTop:function(n){return n.spacing(8)},marginBottom:function(n){return n.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(n){return n.spacing(3)},padding:function(n){return n.spacing(2)},borderRadius:function(n){return n.spacing(1)},"& h5, h6":{marginBottom:function(n){return n.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(n){return n.spacing(1)}},autoMuni:{marginTop:function(n){return n.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function L(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){L(n,e,t[e])}))}return n}var k=function(n){var e=n.weather,t=n.onSelectItemChange,o=(0,a.v9)((function(n){return n.provinces})),s=(0,a.v9)((function(n){return n.municipalities})),l=(0,a.v9)((function(n){return n.tendayweather})),g=(0,i.useState)(!0),b=g[0],v=g[1],j=(0,i.useState)(!1),y=j[0],O=j[1];return(0,i.useEffect)((function(){var n=o.status!==u.G.FULLFILLED||l.status!==u.G.FULLFILLED;""===o.error&&""===l.error||O(!0),v(n)}),[o.status,l.status,o.error,l.error]),(0,r.jsxs)(p.Z,{sx:C.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(x.Z,{variant:"outlined",sx:C.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",spacing:5,alignItems:"bottom",children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(d.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||b,options:Object.values(o.entities),size:"small",renderInput:function(n){return(0,r.jsx)(m.Z,_({},n,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(n,e){return n.label===e.label},onChange:function(n,e){return t(n,_({},e,{from:"province"}))}}),(0,r.jsx)(d.Z,{disablePortal:!0,id:"municipality",value:s.municipality,disabled:0===s.ids.length||b,options:Object.values(s.entities),sx:C.autoMuni,size:"small",renderInput:function(n){return(0,r.jsx)(m.Z,_({},n,{label:null===s.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(n,e){return n.label===e.label},onChange:function(n,e){return t(n,_({},e,{from:"municipality"}))}})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Data Overview"}),!b&&!y&&(0,r.jsxs)(A,{children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0 ",l.currentLogs.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",l.currentLogs.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",l.currentLogs.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",l.currentLogs.date_synced,(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"\xa0"}),!b&&!y&&(0,r.jsxs)(A,{children:["Synced from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"10-Day Climate Forecast"})," spreadsheet files by ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on ",l.currentLogs.date_synced]})]})})]}),(0,r.jsx)(h.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:b&&!y?(0,r.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(f.Z,{size:32}),(0,r.jsx)(c.Z,{variant:"caption",children:"Loading municipalities..."})]}):y?(0,r.jsx)(w.Z,{}):e.map((function(n,e){return(0,r.jsx)(Z,{dailyweather:n},"dw-".concat(e))}))})]})]})},T=t(3691),D=t(3549),E=t(6867);function N(n,e,t,r,i,a,o){try{var c=n[a](o),s=c.value}catch(l){return void t(l)}c.done?e(s):Promise.resolve(s).then(r,i)}var W=function(){var n=(0,a.v9)((function(n){return n.provinces})),e=n.ids,t=n.entities,o=(0,a.v9)((function(n){return n.municipalities})).municipality,c=(0,a.v9)((function(n){return n.tendayweather})),s=c.ids,d=c.entities,p=c.status,x=(0,i.useState)([]),f=x[0],h=x[1],m=(0,i.useState)(!1),g=m[0],b=m[1],v=(0,a.I0)();(0,i.useEffect)((function(){v((0,T.QA)(null))}),[v]),(0,i.useEffect)((function(){e.length>0&&(v((0,D.Wn)(Object.values(t)[0])),v((0,E.R)(Object.values(t)[0].label)).unwrap().then((function(){b(!0)})))}),[v,e,t]),(0,i.useEffect)((function(){if(s.length>0&&p===u.G.FULLFILLED&&g){var n=Object.values(d).sort((function(n,e){return n.municipality.localeCompare(e.municipality)})).map((function(n,e){return{id:e,label:n.municipality}}));v((0,T.X4)(n)),v((0,T.QA)(n[0]))}}),[v,s,d,p,g]),(0,i.useEffect)((function(){if(null!==o&&g){var n=Object.values(d).find((function(n){return n.municipality===o.label}));n&&h(JSON.parse(n.data).map((function(n){return{day:n.day_format,temp_avg:n.tmean,wspeed:n.wspeed,rainfall:n.rainfall,cover:n.cover}})))}}),[v,o,d,p,g]);var j=function(){var n,e=(n=l().mark((function n(e,t){var r,i;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.label,i=t.from,!r){n.next=14;break}n.t0=i,n.next="province"===n.t0?5:"municipality"===n.t0?9:11;break;case 5:return v((0,D.Wn)(t)),v((0,E.R)(r)),v((0,T.X4)([])),n.abrupt("break",12);case 9:return v((0,T.QA)({id:t.id,label:t.label})),n.abrupt("break",12);case 11:return n.abrupt("break",12);case 12:n.next=25;break;case 14:n.t1=i,n.next="province"===n.t1?17:"municipality"===n.t1?21:24;break;case 17:return v((0,D.jg)()),v((0,T.X4)([])),h([]),n.abrupt("break",25);case 21:return v((0,T.QA)(null)),h([]),n.abrupt("break",25);case 24:return n.abrupt("break",25);case 25:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){N(a,r,i,o,c,"next",n)}function c(n){N(a,r,i,o,c,"throw",n)}o(void 0)}))});return function(n,t){return e.apply(this,arguments)}}();return(0,r.jsx)(k,{weather:f,onSelectItemChange:j})},I=t(2509),R=t(8078),z={wrapper:{marginTop:function(n){return n.spacing(10)}},container:{padding:function(n){return n.spacing(2)},paddingTop:function(n){return n.spacing(2)},marginBottom:function(n){return n.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}},caption:{color:function(n){return n.palette.text.secondary},"& a":{color:function(n){return n.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(n){return n.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var F=function(n){var e=n.typhoon,t=void 0===e?null:e,i=n.loading;return(0,r.jsx)(p.Z,{sx:z.wrapper,children:i?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:z.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(R.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(n){return(0,r.jsx)(R.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(n))})),(0,r.jsx)(R.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:z.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(g.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:b.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(c.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:t.description}),(0,r.jsxs)(c.Z,{component:"p",variant:"caption",sx:z.caption,children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",t.updated_by," on \xa0",t.date_updated.toDate().toDateString()]})]})]}):(0,r.jsx)(w.Z,{})})},B={wrapper:{marginTop:function(n){return n.spacing(6)}},container:{maxWidth:function(n){return n.breakpoints.values.sm},marginTop:function(n){return n.spacing(1)},border:"1px solid #484848",borderRadius:function(n){return n.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(n){return n.palette.text.secondary},"& a":{color:function(n){return n.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(n){return n.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var M=function(n){var e=n.seasonal,t=n.typhoon,i=n.fsLoading,a=n.loading;return(0,r.jsxs)(p.Z,{sx:B.wrapper,id:"seasonal-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(F,{typhoon:t,loading:a}),!i&&e.length>0&&(0,r.jsxs)(c.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var n="";if(e.length>0){var t=e[0].mos[0],r=e[0].mos[e[0].mos.length-1];n="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return n}()]}),(0,r.jsx)(I.Z,{weatherData:e,withBorder:!0,fsLoading:i})]})};function G(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var U=(0,O.ZP)((function(n){return(0,r.jsx)(p.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){G(n,e,t[e])}))}return n}({},n))}))((function(n){n.theme;return{backgroundColor:"#ff7e79",textTransform:"uppercase",fontWeight:"bold",textAlign:"center",padding:"8px 0 8px 0"}})),H=U,Q=t(4010);var V=function(){return(0,r.jsx)(p.Z,{sx:{width:"100%",marginTop:function(n){return n.spacing(4)}},children:(0,r.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:[1,2,3,4,5,6,7,8].map((function(n){return(0,r.jsx)(R.Z,{variant:"text"},n)}))}),(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:(0,r.jsx)(R.Z,{animation:"wave",variant:"rectangular",height:450,sx:{minWidth:"540px"}})})]})})},X={container:{maxWidth:function(n){return n.breakpoints.values.sm},marginTop:function(n){return n.spacing(7)},border:"1px solid #484848",borderRadius:function(n){return n.spacing(1)},padding:function(n){return n.spacing(2)}},wrapper:{marginTop:function(n){return n.spacing(10)}},dataContainer:{marginTop:function(n){return n.spacing(4)}},dataContent:{"& div":{padding:function(n){return n.spacing(1)}},".data-content-description":{backgroundColor:"rgba(0, 0, 0, 0.03)"}},dataContentDescriptionText:{display:"flex",padding:"8px 0 8px 8px"}};var K=function(n){var e=n.cyclone,t=n.cycloneLoading;return(0,r.jsxs)(p.Z,{sx:X.wrapper,id:"typhoon-advisory",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Special Weather Advisory"}),t?(0,r.jsx)(V,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(h.ZP,{container:!0,sx:X.dataContainer,spacing:2,children:(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:(0,r.jsx)(Q.Z,{sx:{margin:0,marginTop:"16px",padding:0},children:(0,r.jsxs)(p.Z,{sx:{padding:"16px"},children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Summary"}),(0,r.jsx)(A,{sx:{color:e.has_cyclone?"red":"rgba(0, 0, 0, 0.6)"},children:e.summary}),(0,r.jsx)(c.Z,{variant:"h6",sx:{marginTop:"8px"},children:"Note"}),(0,r.jsxs)(A,{children:["This section is under maintenance. Please check out PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",children:"Tropical Cyclone Bulletin"}),(0,r.jsx)("br",{})," web page to view the latest tropical cyclone information."]})]})})})}),(0,r.jsxs)(h.ZP,{container:!0,sx:X.dataContainer,spacing:2,children:[(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:(0,r.jsxs)(Q.Z,{sx:{margin:0,padding:0},children:[(0,r.jsxs)(p.Z,{sx:{textAlign:"center",padding:"8px"},children:[(0,r.jsxs)(c.Z,{variant:"h6",children:["Tropical Cyclone Bulletin #",e.data.meta.bulletin_number]}),(0,r.jsxs)(c.Z,{variant:"subtitle1",children:["Issued at ",e.data.meta.issued_at]})]}),(0,r.jsxs)(H,{children:["Typhoon ",e.data.meta.typhoon_name]}),(0,r.jsx)(p.Z,{sx:X.dataContent,children:e.data.details.map((function(n,e){return(0,r.jsxs)("div",{style:{padding:0},children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{variant:"subtitle2",children:(0,r.jsx)("strong",{children:n.title})})}),(0,r.jsx)(p.Z,{className:"data-content-description",children:"object"===typeof n.value?(0,r.jsx)("ul",{children:n.value.map((function(n,e){return(0,r.jsx)("li",{children:(0,r.jsx)(c.Z,{variant:"body2",children:n})},e)}))}):(0,r.jsx)(c.Z,{variant:"body2",children:n.value})})]},e)}))})]})}),(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:(0,r.jsxs)(Q.Z,{sx:{margin:0,padding:0},children:[(0,r.jsx)(p.Z,{sx:{textAlign:"center"},children:(0,r.jsx)(g.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/placeholders/pixel-gray.png"),height:450,width:540,loader:b.imageLoader,alt:"placeholder"})}),(0,r.jsx)(H,{children:"Tropical Cyclone Wind Signal"}),e.data.signal.map((function(n,e){return(0,r.jsxs)(p.Z,{sx:X.dataContentDescriptionText,children:[(0,r.jsx)(c.Z,{variant:"body1",children:(0,r.jsxs)("strong",{children:[n.title,": \xa0 "]})}),(0,r.jsx)(c.Z,{variant:"body1",children:n.value})]},"cyclone-signal-".concat(e))}))]})})]})]})]})},Y=t(1029),q=t(560),$=t(7682);function J(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function nn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return J(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var en=function(){var n=nn((0,$.ky)(Y.K.GLOBAL_COLLECTIONS,Y.K.TYPHOON_ADVISORY),2),e=n[0],t=n[1],s=nn((0,$.ky)(Y.K.GLOBAL_COLLECTIONS,Y.K.CYCLONE_ADVISORY),2),l=s[0],u=s[1],d=(0,$.m$)(q.M.WEATHER_FORECASTS,"bicol",q.M.SUB_SEASONAL,"name"),p=d.documents,x=d.loading,f=(0,a.v9)((function(n){return n.provinces.ids})),h=(0,i.useRef)(null),m=(0,a.I0)();return(0,i.useEffect)((function(){null===h.current&&0===f.length&&(h.current=!0,m((0,o.Q)()))}),[m,f.length]),(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"BACAP Services"}),(0,r.jsx)(c.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,r.jsx)(W,{}),(0,r.jsx)(M,{seasonal:p,typhoon:e,fsLoading:x,loading:t}),(0,r.jsx)(K,{cyclone:l,cycloneLoading:u})]})}}},function(n){n.O(0,[958,495,774,888,179],(function(){return e=9859,n(n.s=e);var e}));var e=n.O();_N_E=e}]);