(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{9859:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(428)}])},9132:function(e,n){"use strict";n.Z={tablecontainer:{marginTop:function(e){return e.spacing(1)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(e){return e.spacing(3)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(e){return e.palette.secondary.light}},legend:{margin:function(e){return e.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}}}},2509:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(5893),a=t(7294),i=t(9473),o=t(1163),c=t(7357),s=t(7906),l=t(295),u=t(3252),d=t(2882),p=t(3184),x=t(3816),f=t(1033),h=t(8078),g={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var m=function(e){var n=e.rows,t=void 0===n?3:n,a=e.cols,i=void 0===a?3:a;return(0,r.jsx)(c.Z,{sx:g.container,children:Array.from(Array(t).keys()).map((function(e,n){return(0,r.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(i).keys()).map((function(e,n){return(0,r.jsx)(h.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/i),"%")}},"col-".concat(n))}))},"row-".concat(n))}))})},b=t(7426),y=t(901),j=t(3894),v=t(213),w=t(9132);function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _={updated_by:"-",date_created:"",monthLabels:[]};var O=function(e){var n=e.withBorder,t=void 0!==n&&n,h=(0,a.useState)(_),g=h[0],O=h[1],S=(0,a.useState)(!1),P=S[0],A=S[1],C=(0,i.v9)((function(e){return e.provinces.entities})),L=(0,a.useRef)(!1),k=(0,o.useRouter)(),T=(0,i.I0)();(0,a.useEffect)((function(){return L.current=!0,function(){L.current=!1}}),[]);var E=(0,i.v9)((function(e){return e.seasonalweather})),N=E.ids,D=E.status,I=E.entities;(0,a.useEffect)((function(){T((0,j.Y)()).unwrap().then((function(){L.current&&A(!0)}))}),[T]),(0,a.useEffect)((function(){if(D===y.G.FULLFILLED&&N.length>0&&P){var e=I[N[0]];if(!L.current)return;O((function(n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Z(e,n,t[n])}))}return e}({},n,{updated_by:"/admin/weather"===k.pathname?e.updated_by:"an admin",update_method:e.update_method,date_created:e.date_created,monthLabels:e.mos.map((function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}))})}))}}),[I,D,N,k.pathname,P]);var R=function(e){var n="";if(0===Object.values(C).length)return"n/a";try{n=Object.values(C).find((function(n){return n.name===e})).label}catch(t){n="n/a"}return n},W=function(e){var n=e.children;return t?(0,r.jsx)(d.Z,{sx:w.Z.tablecontainer,children:n}):(0,r.jsx)(d.Z,{children:n})};return(0,r.jsx)("div",{children:D===y.G.PENDING?(0,r.jsx)(m,{rows:7,cols:7}):N.length>0?(0,r.jsxs)(W,{children:[(0,r.jsxs)(s.Z,{sx:{minWidth:650},"aria-label":"simple table",size:"small",children:[(0,r.jsx)(p.Z,{children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(u.Z,{sx:{width:"20%"},children:"Province"}),g.monthLabels.map((function(e,n){return(0,r.jsx)(u.Z,{sx:{textAlign:"center"},children:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"".concat(e,"-").concat(n))}))]})}),(0,r.jsx)(l.Z,{children:Object.values(I).map((function(e){return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(u.Z,{children:R(e.name)}),e.months.map((function(e,n){return(0,r.jsx)(u.Z,{sx:{backgroundColor:b.tN[e.con],border:"1px solid #000",textAlign:"center",fontSize:"14px",padding:"10px",color:["above_normal","wb_normal"].includes(e.con)?"#fff":"#000"},children:e.val},"".concat(e.mo,"-").concat(n))}))]},e.name)}))})]}),(0,r.jsxs)(c.Z,{sx:w.Z.legend,children:[g.update_method===b.o7.EXCEL?(0,r.jsxs)(v.Z,{children:["Updated via file upload of PAGASA's shared seasonal weather",(0,r.jsx)("br",{})," forecast excel file by ",g.updated_by," on \xa0",g.date_created,".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Full reference is available on PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"}),(0,r.jsx)("br",{})," web page."]}):(0,r.jsxs)(v.Z,{children:["Encoded with reference from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page ",(0,r.jsx)("br",{}),"by ",g.updated_by," on \xa0",g.date_created]}),(0,r.jsx)("ul",{children:Object.values(b.MW).map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{backgroundColor:b.tN[e.label]}}),e.sync," (",e.content,")"]},e.id)}))})]})]}):(0,r.jsx)(f.Z,{})})}},213:function(e,n,t){"use strict";var r=t(5893),a=t(5861);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(1496).ZP)((function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},1033:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),a=t(5675),i=t(7357),o=t(5861),c=t(120),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var l=function(e){var n=e.message,t=void 0===n?"Failed to load data":n,l=e.style,u=void 0===l?{}:l;return(0,r.jsxs)(i.Z,{sx:s.container,style:u,children:[(0,r.jsx)(a.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,r.jsx)(o.Z,{variant:"subtitle1",children:t})]})}},6451:function(e,n,t){"use strict";var r=t(5893),a=t(5113);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(1496).ZP)((function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},e))}))((function(e){var n=e.theme;return{padding:n.spacing(3),borderRadius:n.spacing(1),boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}));n.Z=o},4010:function(e,n,t){"use strict";var r=t(5893),a=t(5113);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(1496).ZP)((function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},e))}))((function(e){var n=e.theme;return{padding:n.spacing(3),borderRadius:n.spacing(1),backgroundColor:"#fff",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",border:"1px solid ".concat(n.palette.bacap.border)}}));n.Z=o},428:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ie}});var r=t(5893),a=t(7294),i=t(9473),o=t(4822),c=t(5861),s=t(4051),l=t.n(s),u=t(901),d=t(6295),p=t(7357),x=t(6242),f=t(8456),h=t(6886),g=t(1903),m=t(5675),b=t(120),y=t(3365),j=t(855),v=[{icon:"rainfall_no_rain_48.png",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_48.png",label:"Light rain"},{icon:"rainfall_moderate_rain_48.png",label:"Moderate rain"},{icon:"rain_heavy_rain_48.png",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],w=[{icon:"cc_sunny_48.png",label:"Sunny"},{icon:"cc_mostly_sunny_48.png",label:"Mostly sunny"},{icon:"cc_partly_cloudy_48.png",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_48.png",label:"Mostly cloudy"},{icon:"cc_cloudy_48.png",label:"Cloudy"}],Z={rainfall:{"NO RAIN":"rainfall_no_rain_48.png","LIGHT RAINS":"rainfall_light_rain_48.png","MODERATE RAINS":"rainfall_moderate_rain_48.png","HEAVY RAINS":"rain_heavy_rain_48.png"},cloudCover:{SUNNY:"cc_sunny_48.png","MOSTLY SUNNY":"cc_mostly_sunny_48.png","PARTLY CLOUDY":"cc_partly_cloudy_48.png","MOSTLY CLOUDY":"cc_mostly_cloudy_48.png",CLOUDY:"cc_cloudy_48.png"}},_={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{margin:"4px 0 4px 0"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:"12px",margin:"4px"},"& .temp-weather-icons":{backgroundColor:"#fff",paddingTop:"8px"}}};var O=function(e){var n=e.dailyweather,t=function(e){return Math.round(100*(e+Number.EPSILON))/100},a=void 0!==Z.rainfall[n.rainfall]?"images/icons/weather/".concat(Z.rainfall[n.rainfall]):"images/icons/weather/blank_weather.png",i=void 0!==Z.cloudCover[n.cover]?"images/icons/weather/".concat(Z.cloudCover[n.cover]):"images/icons/weather/blank_weather.png";return(0,r.jsxs)(p.Z,{sx:_.daily,children:[(0,r.jsxs)(p.Z,{sx:{padding:0},children:[(0,r.jsx)("div",{className:"temp-day",children:n.day}),(0,r.jsxs)("div",{className:"temp-weather-icons",children:[(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)(a),height:45,width:45,loader:b.imageLoader,alt:n.day}),(0,r.jsx)("br",{}),(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)(i),height:45,width:45,loader:b.imageLoader,alt:n.day})]})]}),(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{fontSize:"12px"}),(0,r.jsxs)("strong",{children:[t(n.temp_avg),"\xb0"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(j.Z,{fontSize:"12px"}),t(n.wspeed)]})]})})]})},S=t(1033),P=t(213),A=t(6451),C={titleContainer:{display:"flex",alignItems:"center",height:"inherit","& h6":{marginBottom:{xs:"auto",sm:"unset"}}},iconCard:{padding:"2px 6px 2px 6px",borderRadius:1,height:"100%",width:"62px",margin:{xs:"2px",xs2:"4px"},display:"flex",flexDirection:"column",textAlign:"center","& span":{lineHeight:"initial",fontSize:"11px"}},cardsContainer:{display:"flex",height:"78px"},imgContainer:{margin:"auto",marginTop:{xs:"inherit",sm:0},marginBottom:{xs:"inherit",sm:0},height:{xs:"30px",sm:"45px"},width:{xs:"30px",sm:"45px"}}};var L=function(e){var n=e.sideTitle,t=void 0===n?"":n,a=e.legendsData;return(0,r.jsxs)(h.ZP,{container:!0,gap:0,sx:{width:"100%",marginTop:"16px"},children:[(0,r.jsx)(h.ZP,{item:!0,sx:C.titleContainer,xs:12,lg:2,children:(0,r.jsx)(c.Z,{variant:"subtitle2",children:t})}),(0,r.jsx)(h.ZP,{xs:12,item:!0,lg:10,sx:C.cardsContainer,children:a.map((function(e,n){return(0,r.jsxs)(A.Z,{sx:C.iconCard,style:{visibility:e.hidden?"hidden":"visible"},children:[(0,r.jsx)(p.Z,{sx:C.imgContainer,children:(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/icons/weather/".concat(e.icon)),height:45,width:45,loader:b.imageLoader,alt:n.label})}),(0,r.jsx)("span",{style:{whiteSpace:e.nowrap?"nowrap":"normal"},children:e.label})]},n)}))})]})},k={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}var N=function(e){var n=e.weather,t=e.onSelectItemChange,o=(0,i.v9)((function(e){return e.provinces})),s=(0,i.v9)((function(e){return e.municipalities})),l=(0,i.v9)((function(e){return e.tendayweather})),m=(0,a.useState)(!0),b=m[0],y=m[1],j=(0,a.useState)(!1),Z=j[0],_=j[1];return(0,a.useEffect)((function(){var e=o.status!==u.G.FULLFILLED||l.status!==u.G.FULLFILLED;""===o.error&&""===l.error||_(!0),y(e)}),[o.status,l.status,o.error,l.error]),(0,r.jsxs)(p.Z,{sx:k.wrapper,id:"contents-tenday-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(x.Z,{variant:"outlined",sx:k.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",spacing:4,alignItems:"bottom",children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(d.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||b,options:Object.values(o.entities),size:"small",renderInput:function(e){return(0,r.jsx)(g.Z,E({},e,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,E({},n,{from:"province"}))}}),(0,r.jsx)(d.Z,{disablePortal:!0,id:"municipality",value:s.municipality,disabled:0===s.ids.length||b,options:Object.values(s.entities),sx:k.autoMuni,size:"small",renderInput:function(e){return(0,r.jsx)(g.Z,E({},e,{label:null===s.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,E({},n,{from:"municipality"}))}})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:3,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Data Overview"}),!b&&!Z&&(0,r.jsxs)(P.Z,{children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0 ",l.currentLogs.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",l.currentLogs.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",l.currentLogs.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",l.currentLogs.date_synced,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Synced from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",target:"_blank",rel:"noreferrer",children:"10-Day Climate Forecast"})," spreadsheet files by ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on ",l.currentLogs.date_synced]})]})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:5,children:[(0,r.jsx)(L,{sideTitle:"Rainfall Intensity",legendsData:v}),(0,r.jsx)(L,{sideTitle:"Cloud Cover",legendsData:w})]})]}),(0,r.jsx)(h.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:b&&!Z?(0,r.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(f.Z,{size:32}),(0,r.jsx)(c.Z,{variant:"caption",children:"Loading municipalities..."})]}):Z?(0,r.jsx)(S.Z,{}):n.map((function(e,n){return(0,r.jsx)(O,{dailyweather:e},"dw-".concat(n))}))})]})]})},D=t(3691),I=t(3549),R=t(6867);function W(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}var F=function(){var e=(0,i.v9)((function(e){return e.provinces})),n=e.ids,t=e.entities,o=(0,i.v9)((function(e){return e.municipalities})).municipality,c=(0,i.v9)((function(e){return e.tendayweather})),s=c.ids,d=c.entities,p=c.status,x=(0,a.useState)([]),f=x[0],h=x[1],g=(0,a.useState)(!1),m=g[0],b=g[1],y=(0,i.I0)();(0,a.useEffect)((function(){y((0,D.QA)(null))}),[y]),(0,a.useEffect)((function(){n.length>0&&(y((0,I.Wn)(Object.values(t)[0])),y((0,R.R)(Object.values(t)[0].label)).unwrap().then((function(){b(!0)})))}),[y,n,t]),(0,a.useEffect)((function(){if(s.length>0&&p===u.G.FULLFILLED&&m){var e=Object.values(d).sort((function(e,n){return e.municipality.localeCompare(n.municipality)})).map((function(e,n){return{id:n,label:e.municipality}}));y((0,D.X4)(e)),y((0,D.QA)(e[0]))}}),[y,s,d,p,m]),(0,a.useEffect)((function(){if(null!==o&&m){var e=Object.values(d).find((function(e){return e.municipality===o.label}));e&&h(JSON.parse(e.data).map((function(e){return{day:e.day_format,temp_avg:e.tmean,wspeed:e.wspeed,rainfall:e.rainfall,cover:e.cover}})))}}),[y,o,d,p,m]);var j=function(){var e,n=(e=l().mark((function e(n,t){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.label,a=t.from,!r){e.next=14;break}e.t0=a,e.next="province"===e.t0?5:"municipality"===e.t0?9:11;break;case 5:return y((0,I.Wn)(t)),y((0,R.R)(r)),y((0,D.X4)([])),e.abrupt("break",12);case 9:return y((0,D.QA)({id:t.id,label:t.label})),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:e.next=25;break;case 14:e.t1=a,e.next="province"===e.t1?17:"municipality"===e.t1?21:24;break;case 17:return y((0,I.jg)()),y((0,D.X4)([])),h([]),e.abrupt("break",25);case 21:return y((0,D.QA)(null)),h([]),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){W(i,r,a,o,c,"next",e)}function c(e){W(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,r.jsx)(N,{weather:f,onSelectItemChange:j})},z=t(2509),M=t(8078),U=t(7715),G={wrapper:{marginTop:function(e){return e.spacing(10)}},container:{padding:function(e){return e.spacing(2)},paddingTop:function(e){return e.spacing(2)},marginBottom:function(e){return e.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}}};var B=function(e){var n=e.typhoon,t=void 0===n?null:n,a=e.loading;return(0,r.jsx)(p.Z,{sx:G.wrapper,children:a?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:G.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(M.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(e){return(0,r.jsx)(M.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(e))})),(0,r.jsx)(M.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,r.jsxs)(h.ZP,{container:!0,maxWidth:"lg",sx:G.container,spacing:4,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:b.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(h.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(c.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:t.description}),(0,r.jsxs)(P.Z,{children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",target:"_blank",rel:"noreferrer",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",t.updated_by," on \xa0",(0,U.Xn)(t.date_updated)]})]})]}):(0,r.jsx)(S.Z,{})})},Y={wrapper:{marginTop:function(e){return e.spacing(6)}},container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(1)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var H=function(e){var n=e.seasonal,t=e.typhoon,a=e.fsLoading,i=e.loading;return(0,r.jsxs)(p.Z,{sx:Y.wrapper,id:"contents-seasonal-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(B,{typhoon:t,loading:i}),!a&&n.length>0&&(0,r.jsxs)(c.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var e="";if(n.length>0){var t=n[0].mos[0],r=n[0].mos[n[0].mos.length-1];e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return e}()]}),(0,r.jsx)(z.Z,{weatherData:n,withBorder:!0,fsLoading:a})]})};function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var V=(0,t(1496).ZP)((function(e){return(0,r.jsx)(p.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}({},e))}))((function(e){e.theme;return{backgroundColor:"#ff7e79",textTransform:"uppercase",fontWeight:"bold",textAlign:"center",padding:"8px 0 8px 0"}})),Q=V,K=t(4010);var q=function(){return(0,r.jsx)(p.Z,{sx:{width:"100%",marginTop:function(e){return e.spacing(4)}},children:(0,r.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(M.Z,{variant:"text"},e)}))}),(0,r.jsx)(h.ZP,{item:!0,sm:12,md:6,children:(0,r.jsx)(M.Z,{animation:"wave",variant:"rectangular",height:450,sx:{minWidth:"540px"}})})]})})},$={container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(7)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)},padding:function(e){return e.spacing(2)}},wrapper:{marginTop:function(e){return e.spacing(10)}},dataContainer:{marginTop:function(e){return e.spacing(4)}},dataContent:{"& div":{padding:function(e){return e.spacing(2)}},".data-content-description":{backgroundColor:"rgba(0, 0, 0, 0.03)"}},dataContentDescriptionText:{display:"flex",padding:function(e){return e.spacing(2)},"& .windsignalcontent":{marginBottom:function(e){return e.spacing(3)}}}};var J=function(e){var n=e.cyclone,t=e.cycloneLoading;return(0,r.jsxs)(p.Z,{sx:$.wrapper,id:"contents-special-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"Special Weather Forecast"}),t?(0,r.jsx)(q,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(h.ZP,{container:!0,sx:$.dataContainer,spacing:2,children:(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(K.Z,{sx:{margin:0,marginTop:"16px",padding:0},children:(0,r.jsxs)(p.Z,{sx:{padding:"16px"},children:[(0,r.jsx)(c.Z,{variant:"h6",children:"Summary"}),(0,r.jsx)(P.Z,{sx:{color:n.has_cyclone?"red":"rgba(0, 0, 0, 0.6)"},children:n.summary}),(0,r.jsxs)(P.Z,{sx:{marginTop:"16px"},children:["This section is captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",target:"_blank",rel:"noreferrer",children:"Tropical Cyclone Bulletin"}),(0,r.jsx)("br",{})," web page by","system"===n.updated_by?" system ":" an admin ","on ",(0,U.Xn)(n.date_updated),". Please view PAGASA's Tropical Cyclone Bulletin web page to view the latest tropical cyclone information."]})]})})})}),(0,r.jsxs)(h.ZP,{container:!0,sx:$.dataContainer,spacing:2,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(K.Z,{sx:{margin:0,padding:0},children:[(0,r.jsxs)(p.Z,{sx:{textAlign:"center",padding:"16px"},children:[(0,r.jsx)(c.Z,{variant:"h6",children:0===n.data.meta.bulletin_number?"No Active Tropical Cyclone":n.data.meta.bulletin_number}),(0,r.jsx)(c.Z,{variant:"subtitle1",children:n.data.meta.issued_at.toLowerCase().includes("issued at")?n.data.meta.issued_at:"Issued at ".concat(n.data.meta.issued_at)})]}),(0,r.jsxs)(Q,{children:["Typhoon ",n.data.meta.typhoon_name]}),(0,r.jsx)(p.Z,{sx:$.dataContent,children:n.data.details.map((function(e,n){return(0,r.jsxs)("div",{style:{padding:0},children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{variant:"subtitle2",children:(0,r.jsx)("strong",{children:e.title})})}),(0,r.jsx)(p.Z,{className:"data-content-description",children:"object"===typeof e.value?(0,r.jsx)("ul",{children:e.value.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(c.Z,{variant:"body2",children:e})},n)}))}):(0,r.jsx)(c.Z,{variant:"body2",children:e.value})})]},n)}))})]})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(K.Z,{sx:{margin:0,padding:0},children:[(0,r.jsx)(p.Z,{sx:{textAlign:"center"},children:""===n.img?(0,r.jsx)(m.default,{unoptimized:!0,src:(0,b.assetPrefixer)("images/placeholders/pixel-gray.png"),height:450,width:540,loader:b.imageLoader,alt:"placeholder"}):(0,r.jsx)(m.default,{unoptimized:!0,src:n.img,height:450,width:540,loader:b.imageLoader,alt:"placeholder"})}),(0,r.jsx)(Q,{children:"Tropical Cyclone Wind Signal"}),(0,r.jsx)(p.Z,{sx:$.dataContentDescriptionText,children:(0,r.jsx)(P.Z,{children:"This section is under maintenance."})})]})})]})]})]})},ee=t(1029),ne=t(560),te=t(7682);function re(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return re(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return re(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ie=function(){var e=ae((0,te.ky)(ee.K.GLOBAL_COLLECTIONS,ee.K.TYPHOON_ADVISORY),2),n=e[0],t=e[1],s=ae((0,te.ky)(ee.K.GLOBAL_COLLECTIONS,ee.K.CYCLONE_ADVISORY),2),l=s[0],u=s[1],d=(0,te.m$)(ne.M.WEATHER_FORECASTS,"bicol",ne.M.SUB_SEASONAL,"name"),p=d.documents,x=d.loading,f=(0,i.v9)((function(e){return e.provinces.ids})),h=(0,a.useRef)(null),g=(0,i.I0)();return(0,a.useEffect)((function(){null===h.current&&0===f.length&&(h.current=!0,g((0,o.Q)()))}),[g,f.length]),(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(c.Z,{variant:"h4",children:"ACAP Services"}),(0,r.jsx)(c.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,r.jsx)(F,{}),(0,r.jsx)("div",{id:"seasonal-forecast",style:{height:"64px"}}),(0,r.jsx)(H,{seasonal:p,typhoon:n,fsLoading:x,loading:t}),(0,r.jsx)("div",{id:"special-weather-forecast",style:{height:"40px"}}),(0,r.jsx)(J,{cyclone:l,cycloneLoading:u})]})}}},function(e){e.O(0,[9351,6153,9964,1704,1903,6295,9958,6265,6454,9774,2888,179],(function(){return n=9859,e(e.s=n);var n}));var n=e.O();_N_E=n}]);