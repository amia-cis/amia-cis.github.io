(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3359],{1158:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/weather",function(){return t(1189)}])},6601:function(e,n,t){"use strict";t.d(n,{x:function(){return s},P:function(){return c}});var r=t(5893),a=t(7357);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=function(e){var n=e.children,t=e.value,s=e.index,c=i(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==s,id:"custom-tabpanel-".concat(s),"aria-labelledby":"custom-tab-".concat(s)},c,{children:t===s&&(0,r.jsx)(a.Z,{sx:{p:3},children:n})}))};var c=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},1189:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Se},default:function(){return ke}});var r=t(5893),a=t(7682),o=t(3059),i=t(2530),s=t(7294),c=t(7357),l=t(44),u=t(8409),d=t(6601),f=t(5861),p=t(1163),h=t(1057),b=t(6863),v=t(657),m=t(1425),g=t(6580),y=t(8951),x=t(7645),j=t(4051),w=t.n(j),O=t(4343),S=t(9669),k=t.n(S),P=t(9431),_=t(7426);function E(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function A(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){E(o,r,a,i,s,"next",e)}function s(e){E(o,r,a,i,s,"throw",e)}i(void 0)}))}}function C(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}function F(e,n){return!n||"object"!==I(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function W(e,n){return W=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},W(e,n)}var I=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function M(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=D(e);if(n){var a=D(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return F(this,t)}}var N={BASE_API_URL:"https://amia-cis.herokuapp.com/api",WEATHER_FORECAST_SEASONAL:"".concat("https://amia-cis.herokuapp.com/api","/weather/seasonal/region"),WEATHER_FORECAST_PROVINCE:"".concat("https://amia-cis.herokuapp.com/api","/weather/seasonal/province"),WEATHER_FORECAST_TEN_DAY:"".concat("https://amia-cis.herokuapp.com/api","/weather/10day")},B=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&W(e,n)}(o,e);var n,t,r,a=M(o);function o(){return C(this,o),a.apply(this,arguments)}return n=o,(t=[{key:"upsertSeasonal",value:function(e){var n=this;return A(w().mark((function t(){var r,a;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,k()(R({},r,{url:N.WEATHER_FORECAST_SEASONAL,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"upsertTenDay",value:function(e){var n=this;return A(w().mark((function t(){var r,a;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,k()(R({},r,{url:N.WEATHER_FORECAST_TEN_DAY,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getweathercondition",value:function(e){var n="";return e<=40&&(n=_.MW.DRIER.label),e>=41&&e<=120&&(n=_.MW.NORMAL.label),e>120&&(n=_.MW.WETTER.label),n}}])&&Z(n.prototype,t),r&&Z(n,r),o}(P.Z),L=new B,H=L.upsertSeasonal.bind(L),U=L.getweathercondition.bind(L),G=L.upsertTenDay.bind(L),z=t(6901),q=t(8456),V={datagrid:{borderRadius:2,"& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16,"& select":{width:"100px",height:"32px",border:"none !important",outline:"none !important",fontSize:16}}},gridContainer:{height:500,"& .normal":{backgroundColor:"yellow"},"& .drier":{backgroundColor:"red"},"& .wetter":{backgroundColor:"blue"}}};function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function X(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function Y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Y(e,n,t[n])}))}return e}function K(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Q={loading:!1,show:!1,error:"",msg:"",saveDisabled:!1};var ee=function(e){var n=e.weatherData,t=e.provinces,a=e.onCancelClick,o=e.onAsyncFinish,i=(0,s.useState)([]),l=i[0],u=i[1],d=(0,s.useState)([]),f=d[0],p=d[1],v=(0,s.useState)([]),m=v[0],g=v[1],y=(0,s.useState)(Q),x=y[0],j=y[1],S=[{id:0,label:"Jan"},{id:1,label:"Feb"},{id:2,label:"Mar"},{id:3,label:"Apr"},{id:4,label:"May"},{id:5,label:"Jun"},{id:6,label:"Jul"},{id:7,label:"Aug"},{id:8,label:"Sep"},{id:9,label:"Oct"},{id:10,label:"Nov"},{id:11,label:"Dec"}];(0,s.useEffect)((function(){n.length>0&&T()}),[n.length,T]);var k=function(){var e,n=(e=w().mark((function e(){var n,t,r,a,i,s,c,u,d;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=document.getElementsByTagName("select"),t=[],r=!0,a=0;a<n.length;a+=1)i=document.getElementById("select-mo-".concat(a)),t.push(Z(i.value));if(E(t)&&6===l.length){e.next=7;break}return j($({},Q,{show:!0,loading:!1,error:"Invalid months sequence."})),e.abrupt("return");case 7:s=0;case 8:if(!(s<l.length)){e.next=20;break}c=0;case 10:if(!(c<l[s].length)){e.next=17;break}if(P(l[s][c])){e.next=14;break}return r=!1,e.abrupt("break",17);case 14:c+=1,e.next=10;break;case 17:s+=1,e.next=8;break;case 20:if(r){e.next=23;break}return j($({},Q,{show:!0,error:"Invalid cell values."})),e.abrupt("return");case 23:return e.prev=23,j($({},Q,{loading:!0})),e.next=27,H(C(t));case 27:o(),e.next=37;break;case 30:e.prev=30,e.t0=e.catch(23),u="",void 0!==e.t0.response&&(u=void 0!==e.t0.response.data?e.t0.response.data:""),""===u&&(u=e.t0.message),d=u.replaceAll(/Firebase/g,""),j((function(e){return $({},e,{show:!0,loading:!1,error:d})}));case 37:case"end":return e.stop()}}),e,null,[[23,30]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){X(o,r,a,i,s,"next",e)}function s(e){X(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),P=function(e){return isNaN(e)||""===e?(j($({},Q,{show:!0,error:"Not a number"})),!1):(j(Q),!0)},E=function(e){for(var n=e.map((function(e){return e+1})),t=!0,r=0;r<n.length-1&&(!(1!==Math.abs(n[r+1]-n[r])||n[r+1]<n[r])||(t=!1,12===n[r]&&1===n[r+1]&&(t=!0),t));)r+=1;return t},A=function(e){var t=e.props.value,r=P(t)?t:"ERROR",a=e.id,o=(n.length>0?n[0].mos:[]).indexOf(e.field),i=K(l),s=i[a];s[o]=r,i[a]=s,u((function(e){return i}))},C=function(e){for(var n={region:t.length>0?t[0].region:"",provinces:[]},r=0;r<l.length;r+=1){for(var a={name:t[r].province,months:[]},o=0;o<e.length;o+=1)a.months.push({mo:S[e[o]].label.toLowerCase(),val:l[r][o],con:U(l[r][o])});n.provinces.push(a)}return n},Z=function(e){for(var n=0,t=0;t<S.length;t+=1)if(S[t].label.toLowerCase()===e.toLowerCase()){n=t;break}return n},T=function(){var e=function(e){var t=n[0].mos[e];i.push({field:t,headerName:"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)),width:110,editable:!0,sortable:!1,disableColumnMenu:!0,renderHeader:function(n){return(0,r.jsxs)("select",{onChange:function(n){return function(e,n){var t=e.target.value;document.getElementById("select-mo-".concat(n)).setAttribute("value",Z(t))}(n,e)},id:"select-mo-".concat(e),defaultValue:"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)),children:[(0,r.jsx)("option",{children:"Month"}),S.map((function(e,n){return(0,r.jsx)("option",{children:e.label},"mo-".concat(n))}))]})}})},a=function(e){var r=function(t){var r=n[e],o=r.months.filter((function(e){return e.mo===r.mos[t]}));1===o.length?(a[r.mos[t]]=o[0].val,i.push(o[0].val)):(a[r.mos[t]]="n/a",i.push("n/a"))},a={},i=[],l=function(e){var n="";try{n=t.filter((function(n){return n.province===e}))[0].format}catch(r){n="n/a"}return n}(n[e].name);c[l]=n[e].name,a.id=e,a.rowId=e,a.province=l,a.editable=!0;for(var u=0;u<n[e].mos.length;u+=1)r(u);o.push(a),s.push(i)},o=[],i=[],s=[],c={};i.push({field:"province",headerName:"Province",width:180,sortable:!1,disableColumnMenu:!0});for(var l=0;l<n[0].mos.length;l+=1)e(l);for(var d=0;d<n.length;d+=1)a(d);g(i),p(o),u(s)};return(0,r.jsxs)("div",{style:{height:500,width:"100%"},children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"baseline",marginBottom:"24px"},children:[(0,r.jsx)("div",{style:{minWidth:"40%"},children:(0,r.jsx)(z.Z,{severity:""!==x.error?"error":"success",sx:{fontSize:"12px",minHeight:"32px",width:"100%",visibility:x.show?"initial":"hidden"},children:""!==x.error?x.error:x.msg})}),(0,r.jsxs)(b.Z,{variant:"outlined","aria-label":"outlined button controls group",sx:{float:"right",marginTop:"24px","& button":{width:"50%"}},children:[(0,r.jsx)(h.Z,{id:"cancel",onClick:a,disabled:x.loading,children:"Cancel"}),(0,r.jsxs)(h.Z,{onClick:function(){var e=function(){return document.getElementsByTagName("select").length};if(j($({},Q,{loading:!0})),e()<6){var n=document.getElementsByClassName("MuiDataGrid-virtualScroller");if(n.length>0)var t=n[0].scrollWidth,r=setInterval((function(){t<=0&&(clearInterval(r),6===e()?k():j($({},Q,{show:!0,loading:!1,error:"Please edit the table cells on a larger screen."}))),n[0].scrollLeft+=3,t-=3}))}else k()},disabled:x.loading||x.saveDisabled,variant:"contained",children:[(0,r.jsx)("span",{style:{display:x.loading?"none":"block"},children:"Save"})," \xa0",(0,r.jsx)(q.Z,{size:20,color:"secondary",sx:{display:x.loading?"block":"none"}})]})]})]}),(0,r.jsx)(c.Z,{sx:V.gridContainer,children:(0,r.jsx)(O._,{rows:f,columns:m,sx:V.datagrid,customH:!0,editMode:"row",rowsPerPageOptions:[],getCellClassName:function(e){return void 0!==_.re[e.field.toUpperCase()]?U(e.value):""},isCellEditable:function(){return!x.loading},onEditCellPropsChange:function(e){j(Q),A(e)},initialState:{columns:{columnVisibilityModel:{rowId:!1}}}})})]})},ne=t(2509),te=t(9132);function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ae={seasonal_update:!1,tenday_update:!1};var oe=function(e){var n=e.weatherData,t=e.provinces,a=e.fsLoading,o=(0,s.useState)(ae),i=o[0],l=o[1],u=(0,s.useState)(!1),d=u[0],j=u[1],w=(0,p.useRouter)(),O=function(e){var n=e.target.id;l("cancel"===n?ae:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}({},i,re({},n,!0)))};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(v.Z,{open:d,"aria-labelledby":"data-saved-success","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(x.Z,{id:"data-saved-success",children:"Success"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(y.Z,{id:"alert-dialog-description",children:"The seasonal weather data are saved successfully."})}),(0,r.jsx)(m.Z,{children:(0,r.jsx)(h.Z,{onClick:function(){w.push("/weather-services")},autoFocus:!0,children:"OK"})})]}),(0,r.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:function(e){return e.spacing(1)}},children:[(0,r.jsx)(f.Z,{variant:"h6",children:"Seasonal Weather Forecast Updater"}),(0,r.jsx)(b.Z,{variant:"outlined","aria-label":"outlined button controls group",children:!i.seasonal_update&&!i.tenday_update&&(0,r.jsx)(h.Z,{id:"seasonal_update",onClick:O,children:"Edit"})})]}),(0,r.jsxs)(f.Z,{variant:"body2",sx:te.Z.subheader,children:["Copy the Bicol Region's ",(0,r.jsx)("strong",{children:"Rainfall Analysis Forecast"})," from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"Seasonal Forecast"})," page for each province. Press the ",(0,r.jsx)("strong",{children:"Edit"})," button and double click a cell to start editing."]}),!i.seasonal_update&&(0,r.jsx)(ne.Z,{weatherData:n,provinces:t,withBorder:!0,fsLoading:a}),i.seasonal_update&&(0,r.jsx)(ee,{weatherData:n,provinces:t,onCancelClick:O,onAsyncFinish:function(){return j((function(e){return!e}))}})]})},ie=t(1234),se=t(1496),ce=t(7918),le={subheader:{marginBottom:function(e){return e.spacing(2)},color:"gray",marginTop:function(e){return e.spacing(1)}},summary:{display:"flex",alignItems:"center",maxWidth:"500px",minHeight:"100px",border:"1px solid gray",borderRadius:"8px",marginTop:function(e){return e.spacing(1)},marginBottom:function(e){return e.spacing(3)},"& ul":{listStyle:"none"}},upload:{display:"flex",alignItems:"center",maxWidth:"500px",minHeight:"90px",border:"1px solid gray",borderRadius:"8px",fontSize:"14px",color:function(e){return e.palette.text.secondary},padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(1)},marginBottom:function(e){return e.spacing(1)}},notification:{maxWidth:"500px",marginBottom:function(e){return e.spacing(2)}}},ue=(0,se.ZP)("input")({display:"none"});var de=function(e){var n=e.files,t=void 0===n?[]:n,a=e.status,o=e.logs,i=e.handleSubmit,s=e.handleSelectFiles;return(0,r.jsxs)(c.Z,{sx:{"& li":{fontSize:"14px"}},children:[(0,r.jsx)(f.Z,{sx:{marginTop:function(e){return e.spacing(1)}},variant:"h6",children:"10-Day Weather Forecast Updater"}),(0,r.jsx)(f.Z,{variant:"body2",sx:le.subheader,children:"This panel updates the site's 10-Day Weather Forecast data by manually uploading the excel files from PAGASA. Follow the steps to update the site's 10-Day Weather Forecast data:"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Download all (10) excel files from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"10 Day Climate Forecast"})," web page."]}),(0,r.jsx)("li",{children:"Press the SELECT FILES button and select all the excel files."}),(0,r.jsx)("li",{children:"Press the SUBMIT button."}),(0,r.jsx)("li",{children:"Wait for the upload process to finish."})]}),(0,r.jsx)(f.Z,{sx:{marginTop:function(e){return e.spacing(4)}},variant:"h6",children:"Current Data Update Summary"}),(0,r.jsx)(c.Z,{sx:le.summary,children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Updated by:"}),"\xa0 ",o.updated_by]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0 ",o.date_valid]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0 ",o.date_forecast]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0 ",o.date_synced]})]})}),(0,r.jsx)(c.Z,{sx:le.upload,children:0===t.length?(0,r.jsx)("span",{children:"Select excel files."}):(0,r.jsx)(c.Z,{sx:{"& div":{margin:"2px"}},children:Array.from(t).map((function(e,n){return(0,r.jsx)(ce.Z,{label:e.name,size:"small"},"excel-".concat(n))}))})}),(0,r.jsxs)(c.Z,{sx:le.notification,children:[!a.loading&&""!==a.error&&(0,r.jsx)(z.Z,{severity:"error",children:a.error}),!a.loading&&""!==a.msg&&(0,r.jsx)(z.Z,{severity:"success",children:a.msg})]}),(0,r.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,r.jsx)(ue,{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"contained-button-file",multiple:!0,type:"file",name:"excel-files",onChange:s,disabled:a.loading}),(0,r.jsxs)(h.Z,{variant:"contained",component:"span",disabled:a.loading,children:["Select Files",(0,r.jsx)(q.Z,{size:20,color:"secondary",sx:{display:a.loading?"block":"none"}})]}),(0,r.jsx)(h.Z,{type:"submit",onClick:i,disabled:a.loading,children:"Submit"})]})]})};function fe(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function pe(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){fe(o,r,a,i,s,"next",e)}function s(e){fe(o,r,a,i,s,"throw",e)}i(void 0)}))}}function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){he(e,n,t[n])}))}return e}var ve={loading:!1,error:"",msg:""},me=he({updated_by:"",date_forecast:"",date_synced:"",date_valid:""},"updated_by","");var ge=function(){var e=(0,s.useState)([]),n=e[0],t=e[1],a=(0,s.useState)(ve),o=a[0],i=a[1],c=(0,s.useState)(me),l=c[0],u=c[1];(0,s.useEffect)((function(){d()}),[]);var d=function(){var e=pe(w().mark((function e(){var n,t,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ie.vx)();case 3:n=e.sent,t=Object.values(n[0].municipalities)[0][0],(r={updated_by:n[0].updated_by,date_synced:n[0].date_created.toDate().toDateString()}).date_forecast=t.date_forecast,r.date_valid=t.date_range,u(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=pe(w().mark((function e(){var t,r,a;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData,r=0;r<n.length;r+=1)t.append("excel-files",n[r]);return e.prev=2,i(be({},ve,{loading:!0})),e.next=6,G(t);case 6:i((function(e){return be({},ve,{loading:!1,msg:"Upload success."})})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),a=e.t0.response?e.t0.response.data:e.t0.message,i(be({},ve,{loading:!1,error:a}));case 13:try{d()}catch(o){console.error(o.message)}case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(de,{files:n,status:o,logs:l,handleSubmit:f,handleSelectFiles:function(e){i(ve),t(e.target.files)}})},ye={tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},tabsMain:{marginTop:function(e){return e.spacing(4)}}};function xe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function je(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){xe(e,n,t[n])}))}return e}var we=function(e){var n=(0,s.useState)(0),t=n[0],a=n[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)(f.Z,{variant:"h5",children:"Weather Services Updater"}),(0,r.jsxs)("p",{children:["Update the site-wide ",(0,r.jsx)("strong",{children:"Weather Services"})," information for the ",(0,r.jsx)("strong",{children:"Seasonal"})," and ",(0,r.jsx)("strong",{children:"10-Day"})," Weather Forecasts by manually encoding the required data with reference from PAGASA's weather forecasts on ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",children:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast"}),"."]}),(0,r.jsxs)("p",{children:["Please take caution in updating these information because they will be automatically referenced by all site admins when creating crop and climate risks bulletins on the ",(0,r.jsx)("strong",{children:"Create Crop Bulletins"})," and ",(0,r.jsx)("strong",{children:"Create Risks Bulletins"})," Admin pages. Global data updates made by admins are also viewable on the site's public ",(0,r.jsx)("strong",{children:"BACAP Services"})," and ",(0,r.jsx)("strong",{children:"Crop Recommendations"})," pages."]}),(0,r.jsxs)(c.Z,{sx:ye.tabsContainer,children:[(0,r.jsxs)(u.Z,{value:t,onChange:function(e,n){a(n)},"aria-label":"weather services updater",children:[(0,r.jsx)(l.Z,je({label:"Seasonal Weather Forecast"},(0,d.P)(0))),(0,r.jsx)(l.Z,je({label:"10-Day Weather Forecast"},(0,d.P)(1)))]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.x,{value:t,index:0,children:(0,r.jsx)(oe,{weatherData:e.seasonal,provinces:e.provinces,fsLoading:e.fsLoading})}),(0,r.jsx)(d.x,{value:t,index:1,children:(0,r.jsx)(ge,{})})]})]})]})},Oe=t(560);var Se=!0,ke=(0,o.Z)((function(e){var n=(0,a.m$)(Oe.M.WEATHER_FORECASTS,"bicol",Oe.M.SUB_SEASONAL,"name"),t=n.documents,o=n.loading;return(0,r.jsx)(i.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:_.DW.ADMIN,children:(0,r.jsx)(we,{fsLoading:o,accLevel:_.DW.ADMIN,provinces:e.provinces,seasonal:t})})}))},9431:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(4051),a=t.n(r),o=t(5152);function i(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"setAuthHeaders",value:function(e){return s(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,o.I8.currentUser.getIdToken(!0);case 4:t=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0.message);case 10:e.headers.Authorization=t?"Bearer ".concat(t):"";case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},{key:"createRequestObject",value:function(e){var n=e.body,t=e.params,r=e.responseType,o=this;return s(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={headers:{}},n&&(i.data=n),t&&(i.params=t),r&&(i.responseType=r),e.next=6,o.setAuthHeaders(i);case 6:return e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))()}}])&&c(n.prototype,t),r&&c(n,r),e}()}},function(e){e.O(0,[3135,9669,3203,4343,6572,4848,2354,3728,6233,9774,2888,179],(function(){return n=1158,e(e.s=n);var n}));var n=e.O();_N_E=n}]);