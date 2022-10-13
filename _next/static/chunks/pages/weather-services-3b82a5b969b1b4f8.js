(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{9859:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(428)}])},9132:function(n,e){"use strict";e.Z={tablecontainer:{marginTop:function(n){return n.spacing(1)},border:function(n){return"1px solid ".concat(n.palette.bacap.border)},borderRadius:function(n){return n.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(n){return n.spacing(4)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(n){return n.palette.secondary.light}},legend:{margin:function(n){return n.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}}}},2509:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(5893),i=t(9473),a=t(1163),o=t(7357),c=t(7906),s=t(295),l=t(3252),d=t(2882),u=t(3184),p=t(3816),x=t(1033),f=t(8078),g={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var h=function(n){var e=n.rows,t=void 0===e?3:e,i=n.cols,a=void 0===i?3:i;return(0,r.jsx)(o.Z,{sx:g.container,children:Array.from(Array(t).keys()).map((function(n,e){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(a).keys()).map((function(n,e){return(0,r.jsx)(f.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/a),"%")}},"col-".concat(e))}))},"row-".concat(e))}))})},m=t(7426),b=t(213),y=t(7715),v=t(9132);var j=function(n){var e=n.weatherData,t=n.withBorder,f=void 0!==t&&t,g=n.fsLoading,j=void 0===g||g,w=(0,i.v9)((function(n){return n.provinces.entities})),Z=(0,a.useRouter)(),_=function(n){var e="";if(0===Object.values(w).length)return"n/a";try{e=Object.values(w).find((function(e){return e.name===n})).label}catch(t){e="n/a"}return e},O=function(n){var e=n.children;return f?(0,r.jsx)(d.Z,{sx:v.Z.tablecontainer,children:e}):(0,r.jsx)(d.Z,{children:e})};return(0,r.jsx)("div",{children:j?(0,r.jsx)(h,{rows:7,cols:7}):e.length>0?(0,r.jsxs)(O,{children:[(0,r.jsxs)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(u.Z,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{sx:{width:"20%"},children:"Province"}),e[0].mos.map((function(n,e){return(0,r.jsx)(l.Z,{sx:{textAlign:"center"},children:"".concat(n[0].toUpperCase()).concat(n.slice(1))},"".concat(n,"-").concat(e))}))]})}),(0,r.jsx)(s.Z,{children:e.map((function(n){return(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(l.Z,{children:_(n.name)}),n.months.map((function(n,e){return(0,r.jsx)(l.Z,{sx:{backgroundColor:m.tN[n.con],border:"1px solid #000",textAlign:"center",fontSize:"14px",padding:"10px",color:["above_normal","wb_normal"].includes(n.con)?"#fff":"#000"},children:n.val},"".concat(n.mo,"-").concat(e))}))]},n.name)}))})]}),(0,r.jsxs)(o.Z,{sx:v.Z.legend,children:[(0,r.jsxs)(b.Z,{children:["Encoded from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page ",(0,r.jsx)("br",{}),"by ","/admin/weather"===Z.pathname?e[0].updated_by:"an admin"," on \xa0",(0,y.Xn)(e[0].date_created)]}),(0,r.jsx)("ul",{children:Object.values(m.MW).map((function(n){return(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:m.tN[n.label]}}),n.sync," (",n.content,")"]},n.id)}))})]})]}):(0,r.jsx)(x.Z,{})})}},213:function(n,e,t){"use strict";var r=t(5893),i=t(5861);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var o=(0,t(1496).ZP)((function(n){return(0,r.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}({component:"p",variant:"caption"},n))}))((function(n){var e=n.theme;return{color:e.palette.text.secondary,"& a":{color:e.palette.green.dark,textDecoration:"none"},"& a:visited":{color:e.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));e.Z=o},1033:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5893),i=t(5675),a=t(7357),o=t(5861),c=t(120),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var l=function(n){var e=n.message,t=void 0===e?"Failed to load data":e,l=n.style,d=void 0===l?{}:l;return(0,r.jsxs)(a.Z,{sx:s.container,style:d,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,r.jsx)(o.Z,{variant:"subtitle1",children:t})]})}},6451:function(n,e,t){"use strict";var r=t(5893),i=t(5113);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var o=(0,t(1496).ZP)((function(n){return(0,r.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}({},n))}))((function(n){var e=n.theme;return{padding:e.spacing(3),borderRadius:e.spacing(1),boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}));e.Z=o},4010:function(n,e,t){"use strict";var r=t(5893),i=t(5113);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var o=(0,t(1496).ZP)((function(n){return(0,r.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}({},n))}))((function(n){var e=n.theme;return{padding:e.spacing(3),borderRadius:e.spacing(1),backgroundColor:"#fff",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",border:"1px solid ".concat(e.palette.bacap.border)}}));e.Z=o},428:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return on}});var r=t(5893),i=t(7294),a=t(9473),o=t(4822),c=t(5861),s=t(4051),l=t.n(s),d=t(901),u=t(6295),p=t(7357),x=t(6242),f=t(8456),g=t(6886),h=t(1903),m=t(5675),b=t(120),y=t(3365),v=t(855),j=[{icon:"rainfall_no_rain_48.png",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_48.png",label:"Light rain"},{icon:"rainfall_moderate_rain_48.png",label:"Moderate rain"},{icon:"rain_heavy_rain_48.png",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],w=[{icon:"cc_sunny_48.png",label:"Sunny"},{icon:"cc_mostly_sunny_48.png",label:"Mostly sunny"},{icon:"cc_partly_cloudy_48.png",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_48.png",label:"Mostly cloudy"},{icon:"cc_cloudy_48.png",label:"Cloudy"}],Z={rainfall:{"NO RAIN":"rainfall_no_rain_48.png","LIGHT RAINS":"rainfall_light_rain_48.png","MODERATE RAINS":"rainfall_moderate_rain_48.png","HEAVY RAINS":"rain_heavy_rain_48.png"},cloudCover:{SUNNY:"cc_sunny_48.png","MOSTLY SUNNY":"cc_mostly_sunny_48.png","PARTLY CLOUDY":"cc_partly_cloudy_48.png","MOSTLY CLOUDY":"cc_mostly_cloudy_48.png",CLOUDT:"cc_cloudy_48.png"}},_={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{margin:"4px 0 4px 0"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:"12px",margin:"4px"},"& .temp-weather-icons":{backgroundColor:"#fff",paddingTop:"8px"}}};var O=function(n){var e=n.dailyweather,t=function(n){return Math.round(100*(n+Number.EPSILON))/100},i=void 0!==Z.rainfall[e.rainfall]?"images/icons/weather/".concat(Z.rainfall[e.rainfall]):"images/icons/weather/blank_weather.png",a=void 0!==Z.cloudCover[e.cover]?"images/icons/weather/".concat(Z.cloudCover[e.cover]):"images/icons/weather/blank_weather.png";return(0,r.jsxs)(p.Z,{sx:_.daily,children:[(0,r.jsxs)(p.Z,{sx:{padding:0},children:[(0,r.jsx)("div",{className:"temp-day",children:e.day}),(0,r.jsxs)("div",{className:"temp-weather-icons",children:[(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)(i),height:45,width:45,loader:b.imageLoader,alt:e.day}),(0,r.jsx)("br",{}),(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)(a),height:45,width:45,loader:b.imageLoader,alt:e.day})]})]}),(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{fontSize:"12px"}),(0,r.jsxs)("strong",{children:[t(e.temp_avg),"\xb0"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{fontSize:"12px"}),t(e.wspeed)]})]})})]})},S=t(1033),P=t(213),A=t(6451),C={titleContainer:{display:"flex",alignItems:"center",height:"inherit","& h6":{marginBottom:{xs:"auto",sm:"unset"}}},iconCard:{padding:"2px 6px 2px 6px",borderRadius:1,height:"100%",width:"62px",margin:{xs:"2px",xs2:"4px"},display:"flex",flexDirection:"column",textAlign:"center","& span":{lineHeight:"initial",fontSize:"11px"}},cardsContainer:{display:"flex",height:"78px"},imgContainer:{margin:"auto",marginTop:{xs:"inherit",sm:0},marginBottom:{xs:"inherit",sm:0},height:{xs:"30px",sm:"45px"},width:{xs:"30px",sm:"45px"}}};var L=function(n){var e=n.sideTitle,t=void 0===e?"":e,i=n.legendsData;return(0,r.jsxs)(g.ZP,{container:!0,gap:0,sx:{width:"100%",marginTop:"16px"},children:[(0,r.jsx)(g.ZP,{item:!0,sx:C.titleContainer,xs:12,lg:2,children:(0,r.jsx)(c.Z,{variant:"subtitle2",children:t})}),(0,r.jsx)(g.ZP,{xs:12,item:!0,lg:10,sx:C.cardsContainer,children:i.map((function(n,e){return(0,r.jsxs)(A.Z,{sx:C.iconCard,style:{visibility:n.hidden?"hidden":"visible"},children:[(0,r.jsx)(p.Z,{sx:C.imgContainer,children:(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/icons/weather/".concat(n.icon)),height:45,width:45,loader:b.imageLoader,alt:e.label})}),(0,r.jsx)("span",{style:{whiteSpace:n.nowrap?"nowrap":"normal"},children:n.label})]},e)}))})]})},T={wrapper:{marginTop:function(n){return n.spacing(8)},marginBottom:function(n){return n.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(n){return n.spacing(3)},padding:function(n){return n.spacing(2)},borderRadius:function(n){return n.spacing(1)},"& h5, h6":{marginBottom:function(n){return n.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(n){return n.spacing(1)}},autoMuni:{marginTop:function(n){return n.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){k(n,e,t[e])}))}return n}var N=function(n){var e=n.weather,t=n.onSelectItemChange,o=(0,a.v9)((function(n){return n.provinces})),s=(0,a.v9)((function(n){return n.municipalities})),l=(0,a.v9)((function(n){return n.tendayweather})),m=(0,i.useState)(!0),b=m[0],y=m[1],v=(0,i.useState)(!1),Z=v[0],_=v[1];return(0,i.useEffect)((function(){var n=o.status!==d.G.FULLFILLED||l.status!==d.G.FULLFILLED;""===o.error&&""===l.error||_(!0),y(n)}),[o.status,l.status,o.error,l.error]),(0,r.jsxs)(p.Z,{sx:T.wrapper,id:"contents-tenday-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(x.Z,{variant:"outlined",sx:T.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(g.ZP,{container:!0,maxWidth:"lg",spacing:4,alignItems:"bottom",children:[(0,r.jsx)(g.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||b,options:Object.values(o.entities),size:"small",renderInput:function(n){return(0,r.jsx)(h.Z,E({},n,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(n,e){return n.label===e.label},onChange:function(n,e){return t(n,E({},e,{from:"province"}))}}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"municipality",value:s.municipality,disabled:0===s.ids.length||b,options:Object.values(s.entities),sx:T.autoMuni,size:"small",renderInput:function(n){return(0,r.jsx)(h.Z,E({},n,{label:null===s.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(n,e){return n.label===e.label},onChange:function(n,e){return t(n,E({},e,{from:"municipality"}))}})]})}),(0,r.jsx)(g.ZP,{item:!0,xs:12,md:3,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Data Overview"}),!b&&!Z&&(0,r.jsxs)(P.Z,{children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0 ",l.currentLogs.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",l.currentLogs.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",l.currentLogs.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",l.currentLogs.date_synced,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Synced from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",target:"_blank",rel:"noreferrer",children:"10-Day Climate Forecast"})," spreadsheet files by ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on ",l.currentLogs.date_synced]})]})}),(0,r.jsxs)(g.ZP,{item:!0,xs:12,md:5,children:[(0,r.jsx)(L,{sideTitle:"Rainfall Intensity",legendsData:j}),(0,r.jsx)(L,{sideTitle:"Cloud Cover",legendsData:w})]})]}),(0,r.jsx)(g.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:b&&!Z?(0,r.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(f.Z,{size:32}),(0,r.jsx)(c.Z,{variant:"caption",children:"Loading municipalities..."})]}):Z?(0,r.jsx)(S.Z,{}):e.map((function(n,e){return(0,r.jsx)(O,{dailyweather:n},"dw-".concat(e))}))})]})]})},D=t(3691),I=t(3549),R=t(6867);function W(n,e,t,r,i,a,o){try{var c=n[a](o),s=c.value}catch(l){return void t(l)}c.done?e(s):Promise.resolve(s).then(r,i)}var z=function(){var n=(0,a.v9)((function(n){return n.provinces})),e=n.ids,t=n.entities,o=(0,a.v9)((function(n){return n.municipalities})).municipality,c=(0,a.v9)((function(n){return n.tendayweather})),s=c.ids,u=c.entities,p=c.status,x=(0,i.useState)([]),f=x[0],g=x[1],h=(0,i.useState)(!1),m=h[0],b=h[1],y=(0,a.I0)();(0,i.useEffect)((function(){y((0,D.QA)(null))}),[y]),(0,i.useEffect)((function(){e.length>0&&(y((0,I.Wn)(Object.values(t)[0])),y((0,R.R)(Object.values(t)[0].label)).unwrap().then((function(){b(!0)})))}),[y,e,t]),(0,i.useEffect)((function(){if(s.length>0&&p===d.G.FULLFILLED&&m){var n=Object.values(u).sort((function(n,e){return n.municipality.localeCompare(e.municipality)})).map((function(n,e){return{id:e,label:n.municipality}}));y((0,D.X4)(n)),y((0,D.QA)(n[0]))}}),[y,s,u,p,m]),(0,i.useEffect)((function(){if(null!==o&&m){var n=Object.values(u).find((function(n){return n.municipality===o.label}));n&&g(JSON.parse(n.data).map((function(n){return{day:n.day_format,temp_avg:n.tmean,wspeed:n.wspeed,rainfall:n.rainfall,cover:n.cover}})))}}),[y,o,u,p,m]);var v=function(){var n,e=(n=l().mark((function n(e,t){var r,i;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.label,i=t.from,!r){n.next=14;break}n.t0=i,n.next="province"===n.t0?5:"municipality"===n.t0?9:11;break;case 5:return y((0,I.Wn)(t)),y((0,R.R)(r)),y((0,D.X4)([])),n.abrupt("break",12);case 9:return y((0,D.QA)({id:t.id,label:t.label})),n.abrupt("break",12);case 11:return n.abrupt("break",12);case 12:n.next=25;break;case 14:n.t1=i,n.next="province"===n.t1?17:"municipality"===n.t1?21:24;break;case 17:return y((0,I.jg)()),y((0,D.X4)([])),g([]),n.abrupt("break",25);case 21:return y((0,D.QA)(null)),g([]),n.abrupt("break",25);case 24:return n.abrupt("break",25);case 25:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){W(a,r,i,o,c,"next",n)}function c(n){W(a,r,i,o,c,"throw",n)}o(void 0)}))});return function(n,t){return e.apply(this,arguments)}}();return(0,r.jsx)(N,{weather:f,onSelectItemChange:v})},M=t(2509),F=t(8078),U=t(7715),B={wrapper:{marginTop:function(n){return n.spacing(10)}},container:{padding:function(n){return n.spacing(2)},paddingTop:function(n){return n.spacing(2)},marginBottom:function(n){return n.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}}};var H=function(n){var e=n.typhoon,t=void 0===e?null:e,i=n.loading;return(0,r.jsx)(p.Z,{sx:B.wrapper,children:i?(0,r.jsxs)(g.ZP,{container:!0,maxWidth:"lg",sx:B.container,spacing:4,children:[(0,r.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(F.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(g.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(n){return(0,r.jsx)(F.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(n))})),(0,r.jsx)(F.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(g.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,r.jsxs)(g.ZP,{container:!0,maxWidth:"lg",sx:B.container,spacing:4,children:[(0,r.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:b.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(g.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(c.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:t.description}),(0,r.jsxs)(P.Z,{children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",target:"_blank",rel:"noreferrer",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",t.updated_by," on \xa0",(0,U.Xn)(t.date_updated)]})]})]}):(0,r.jsx)(S.Z,{})})},Y={wrapper:{marginTop:function(n){return n.spacing(6)}},container:{maxWidth:function(n){return n.breakpoints.values.sm},marginTop:function(n){return n.spacing(1)},border:"1px solid #484848",borderRadius:function(n){return n.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(n){return n.palette.text.secondary},"& a":{color:function(n){return n.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(n){return n.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var G=function(n){var e=n.seasonal,t=n.typhoon,i=n.fsLoading,a=n.loading;return(0,r.jsxs)(p.Z,{sx:Y.wrapper,id:"contents-seasonal-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(H,{typhoon:t,loading:a}),!i&&e.length>0&&(0,r.jsxs)(c.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var n="";if(e.length>0){var t=e[0].mos[0],r=e[0].mos[e[0].mos.length-1];n="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return n}()]}),(0,r.jsx)(M.Z,{weatherData:e,withBorder:!0,fsLoading:i})]})};function X(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var V=(0,t(1496).ZP)((function(n){return(0,r.jsx)(p.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){X(n,e,t[e])}))}return n}({},n))}))((function(n){n.theme;return{backgroundColor:"#ff7e79",textTransform:"uppercase",fontWeight:"bold",textAlign:"center",padding:"8px 0 8px 0"}})),Q=V,K=t(4010);var q=function(){return(0,r.jsx)(p.Z,{sx:{width:"100%",marginTop:function(n){return n.spacing(4)}},children:(0,r.jsxs)(g.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(g.ZP,{item:!0,sm:12,md:6,children:[1,2,3,4,5,6,7,8].map((function(n){return(0,r.jsx)(F.Z,{variant:"text"},n)}))}),(0,r.jsx)(g.ZP,{item:!0,sm:12,md:6,children:(0,r.jsx)(F.Z,{animation:"wave",variant:"rectangular",height:450,sx:{minWidth:"540px"}})})]})})},$={container:{maxWidth:function(n){return n.breakpoints.values.sm},marginTop:function(n){return n.spacing(7)},border:"1px solid #484848",borderRadius:function(n){return n.spacing(1)},padding:function(n){return n.spacing(2)}},wrapper:{marginTop:function(n){return n.spacing(10)}},dataContainer:{marginTop:function(n){return n.spacing(4)}},dataContent:{"& div":{padding:function(n){return n.spacing(2)}},".data-content-description":{backgroundColor:"rgba(0, 0, 0, 0.03)"}},dataContentDescriptionText:{display:"flex",padding:function(n){return n.spacing(2)}}};var J=function(n){var e=n.cyclone,t=n.cycloneLoading;return(0,r.jsxs)(p.Z,{sx:$.wrapper,id:"contents-special-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Special Weather Forecast"}),t?(0,r.jsx)(q,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(g.ZP,{container:!0,sx:$.dataContainer,spacing:2,children:(0,r.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(K.Z,{sx:{margin:0,marginTop:"16px",padding:0},children:(0,r.jsxs)(p.Z,{sx:{padding:"16px"},children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Summary"}),(0,r.jsx)(P.Z,{sx:{color:e.has_cyclone?"red":"rgba(0, 0, 0, 0.6)"},children:e.summary}),(0,r.jsxs)(P.Z,{sx:{marginTop:"16px"},children:["This section is captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",target:"_blank",rel:"noreferrer",children:"Tropical Cyclone Bulletin"}),(0,r.jsx)("br",{})," web page by","system"===e.updated_by?" system ":" an admin ","on ",(0,U.Xn)(e.date_updated),". Please view PAGASA's to view the latest tropical cyclone information."]})]})})})}),(0,r.jsxs)(g.ZP,{container:!0,sx:$.dataContainer,spacing:2,children:[(0,r.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(K.Z,{sx:{margin:0,padding:0},children:[(0,r.jsxs)(p.Z,{sx:{textAlign:"center",padding:"16px"},children:[(0,r.jsx)(c.Z,{variant:"h6",children:0===e.data.meta.bulletin_number?"No Active Tropical Cyclone":e.data.meta.bulletin_number}),(0,r.jsxs)(c.Z,{variant:"subtitle1",children:["Issued at ",e.data.meta.issued_at]})]}),(0,r.jsxs)(Q,{children:["Typhoon ",e.data.meta.typhoon_name]}),(0,r.jsx)(p.Z,{sx:$.dataContent,children:e.data.details.map((function(n,e){return(0,r.jsxs)("div",{style:{padding:0},children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{variant:"subtitle2",children:(0,r.jsx)("strong",{children:n.title})})}),(0,r.jsx)(p.Z,{className:"data-content-description",children:"object"===typeof n.value?(0,r.jsx)("ul",{children:n.value.map((function(n,e){return(0,r.jsx)("li",{children:(0,r.jsx)(c.Z,{variant:"body2",children:n})},e)}))}):(0,r.jsx)(c.Z,{variant:"body2",children:n.value})})]},e)}))})]})}),(0,r.jsx)(g.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(K.Z,{sx:{margin:0,padding:0},children:[(0,r.jsx)(p.Z,{sx:{textAlign:"center"},children:""===e.img?(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/placeholders/pixel-gray.png"),height:450,width:540,loader:b.imageLoader,alt:"placeholder"}):(0,r.jsx)(m.default,{unoptimized:!0,src:e.img,height:450,width:540,loader:b.imageLoader,alt:"placeholder"})}),(0,r.jsx)(Q,{children:"Tropical Cyclone Wind Signal"}),(0,r.jsx)(p.Z,{sx:$.dataContentDescriptionText,children:(0,r.jsx)(P.Z,{children:"This section is under maintenance."})})]})})]})]})]})},nn=t(1029),en=t(560),tn=t(7682);function rn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function an(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return rn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var on=function(){var n=an((0,tn.ky)(nn.K.GLOBAL_COLLECTIONS,nn.K.TYPHOON_ADVISORY),2),e=n[0],t=n[1],s=an((0,tn.ky)(nn.K.GLOBAL_COLLECTIONS,nn.K.CYCLONE_ADVISORY),2),l=s[0],d=s[1],u=(0,tn.m$)(en.M.WEATHER_FORECASTS,"bicol",en.M.SUB_SEASONAL,"name"),p=u.documents,x=u.loading,f=(0,a.v9)((function(n){return n.provinces.ids})),g=(0,i.useRef)(null),h=(0,a.I0)();return(0,i.useEffect)((function(){null===g.current&&0===f.length&&(g.current=!0,h((0,o.Q)()))}),[h,f.length]),(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"ACAP Services"}),(0,r.jsx)(c.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,r.jsx)(z,{}),(0,r.jsx)("div",{id:"seasonal-forecast",style:{height:"64px"}}),(0,r.jsx)(G,{seasonal:p,typhoon:e,fsLoading:x,loading:t}),(0,r.jsx)("div",{id:"special-weather-forecast",style:{height:"40px"}}),(0,r.jsx)(J,{cyclone:l,cycloneLoading:d})]})}}},function(n){n.O(0,[9351,6153,9964,1704,1903,6295,9958,6265,6454,9774,2888,179],(function(){return e=9859,n(n.s=e);var e}));var e=n.O();_N_E=e}]);