"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8052],{9132:function(e,r){r.Z={tablecontainer:{marginTop:function(e){return e.spacing(1)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},table:{"& td":{border:function(e){return"1px solid ".concat(e.palette.bacap.border)}}},headerMonths:{textAlign:"center",borderBottom:"none",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},headerSub:{width:"5%",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(e){return e.spacing(3)},maxWidth:"800px",color:"gray"},labels:{fontSize:"12px",color:function(e){return e.palette.secondary.light}},legend:{margin:function(e){return e.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}},tableRowHeader:{"& th, td":{fontSize:"11px",textAlign:"center",lineHeight:function(e){return e.spacing(2)},padding:"2px",fontWeight:500,borderTop:"none"},"& td":{border:"none"},"& td:nth-child(3n)":{borderRight:"1px solid rgb(226, 232, 240)"},"& td:last-child":{borderRight:"none"},"& td:first-child":{borderLeft:"1px solid rgb(226, 232, 240)"}},cellData:{"& td:first-child":{fontSize:"12px",textAlign:"left",borderLeft:"none",padding:"6px 16px 6px 16px"},"& td:last-child":{borderRight:"none"},"& td":{fontSize:"11px",textAlign:"center",padding:"10px",color:"rgba(0, 0, 0, 0.87)",border:"1px solid rgb(226, 232, 240)"}}}},6399:function(e,r,t){var n=t(5893),o=t(7294),a=t(9473),i=t(1163),c=t(7357),l=t(7906),s=t(295),d=t(3252),u=t(2882),f=t(3184),p=t(3816),b=t(7634),h=t(5238),x=t(7426),m=t(901),g=t(3894),y=t(7840),v=t(9132);function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S={updated_by:"-",date_created:"",monthLabels:[]};r.Z=function(e){var r=e.withBorder,t=void 0!==r&&r,j=(0,o.useState)(S),A=j[0],O=j[1],_=(0,o.useState)(!1),k=_[0],P=_[1],E=(0,a.v9)((function(e){return e.provinces.entities})),L=(0,o.useRef)(!1),R=(0,i.useRouter)(),C=(0,a.I0)();(0,o.useEffect)((function(){return L.current=!0,function(){L.current=!1}}),[]);var D=(0,a.v9)((function(e){return e.seasonalweather})),N=D.ids,z=D.status,F=D.entities;(0,o.useEffect)((function(){C((0,g.Y)()).unwrap().then((function(){L.current&&P(!0)}))}),[C]),(0,o.useEffect)((function(){if(z===m.G.FULLFILLED&&N.length>0&&k){var e=F[N[0]];if(!L.current)return;O((function(r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){w(e,r,t[r])}))}return e}({},r,{updated_by:"/admin/weather"===R.pathname?e.updated_by:"an admin",update_method:e.update_method,date_created:e.date_created,monthLabels:e.months.map((function(e){return"".concat(e.mo.charAt(0).toUpperCase()).concat(e.mo.slice(1)," ").concat(e.year)}))})}))}}),[F,z,N,R.pathname,k]);var I=function(e){var r="";if(0===Object.values(E).length)return"n/a";try{r=Object.values(E).find((function(r){return r.name===e})).label}catch(t){r="n/a"}return r},G=function(e){var r=e.children;return t?(0,n.jsx)(u.Z,{sx:v.Z.tablecontainer,children:r}):(0,n.jsx)(u.Z,{children:r})};return(0,n.jsx)("div",{children:z===m.G.PENDING?(0,n.jsx)(h.Z,{rows:7,cols:7}):N.length>0?(0,n.jsxs)(G,{sx:{width:"650px"},children:[(0,n.jsxs)(l.Z,{"aria-label":"simple table",size:"small",sx:v.Z.table,children:[(0,n.jsxs)(f.Z,{children:[(0,n.jsxs)(p.Z,{sx:v.Z.tableRowHeader,children:[(0,n.jsx)(d.Z,{sx:{width:"15%"},rowSpan:2,children:"Province"}),A.monthLabels.map((function(e,r){return(0,n.jsx)(d.Z,{sx:v.Z.headerMonths,colSpan:3,children:e},"".concat(e,"-").concat(r))}))]}),(0,n.jsx)(p.Z,{sx:v.Z.tableRowHeader,children:Z(new Array(3*A.monthLabels.length)).fill("").map((function(e,r){var t=r+1;return 1===t||t%3===1?(0,n.jsx)("td",{children:"Normal (mm)"},t):t%3===2?(0,n.jsx)("td",{children:"Forecast (mm)"},t):t%3===0?(0,n.jsx)("td",{children:"% of Normal"},t):void 0}))})]}),(0,n.jsx)(s.Z,{children:Object.values(F).map((function(e){return(0,n.jsxs)(p.Z,{sx:v.Z.cellData,children:[(0,n.jsx)(d.Z,{children:I(e.name)}),Z(new Array(3*A.monthLabels.length)).fill("").map((function(r,t){var o=t+1;if(1===o)return(0,n.jsx)("td",{children:e.months[0].normal},t);if(o%3===1)return(0,n.jsx)("td",{children:e.months[t/3].normal},t);if(o%3===2){var a=(o+1)/3;return(0,n.jsx)("td",{children:e.months[a-1].mean},t)}if(o%3===0){var i=o/3-1;return(0,n.jsx)(d.Z,{sx:{backgroundColor:x.tN[e.months[i].con],textAlign:"center",color:["above_normal","wb_normal"].includes(e.months[i].con)?"#fff !important":"#000"},children:e.months[i].val},t)}}))]},e.name)}))})]}),(0,n.jsxs)(c.Z,{sx:v.Z.legend,children:[A.update_method===x.o7.EXCEL?(0,n.jsxs)(y.Z,{children:["Updated via file upload of PAGASA's shared seasonal weather",(0,n.jsx)("br",{})," forecast excel file by ",A.updated_by," on \xa0",A.date_created,".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Full reference is available on PAGASA's ",(0,n.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page."]}):(0,n.jsxs)(y.Z,{children:["Encoded with reference from PAGASA's ",(0,n.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page ",(0,n.jsx)("br",{}),"by ",A.updated_by," on \xa0",A.date_created]}),(0,n.jsx)("ul",{children:Object.values(x.MW).map((function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{style:{backgroundColor:x.tN[e.label]}}),e.sync," (",e.content,")"]},e.id)}))})]})]}):(0,n.jsx)(b.Z,{})})}},7840:function(e,r,t){var n=t(5893),o=t(5861);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=(0,t(1496).ZP)((function(e){return(0,n.jsx)(o.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var r=e.theme;return{color:r.palette.text.secondary,"& a":{color:r.palette.green.dark,textDecoration:"none"},"& a:visited":{color:r.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));r.Z=i},7634:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(5893),o=t(5675),a=t(7357),i=t(5861),c=t(120),l={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var s=function(e){var r=e.message,t=void 0===r?"Failed to load data":r,s=e.style,d=void 0===s?{}:s;return(0,n.jsxs)(a.Z,{sx:l.container,style:d,children:[(0,n.jsx)(o.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,n.jsx)(i.Z,{variant:"subtitle1",children:t})]})}},5238:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(5893),o=t(7357),a=t(8078),i={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var c=function(e){var r=e.rows,t=void 0===r?3:r,c=e.cols,l=void 0===c?3:c;return(0,n.jsx)(o.Z,{sx:i.container,children:Array.from(Array(t).keys()).map((function(e,r){return(0,n.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(l).keys()).map((function(e,r){return(0,n.jsx)(a.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/l),"%")}},"col-".concat(r))}))},"row-".concat(r))}))})}},9646:function(e,r,t){var n=t(5893),o=t(5113);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=(0,t(1496).ZP)((function(e){return(0,n.jsx)(o.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},e))}))((function(e){var r=e.theme;return{padding:r.spacing(3),borderRadius:r.spacing(1),backgroundColor:"#fff",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",border:"1px solid ".concat(r.palette.bacap.border)}}));r.Z=i}}]);