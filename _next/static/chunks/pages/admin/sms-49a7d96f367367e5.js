(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5740],{8359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms",function(){return t(9314)}])},8554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},5322:function(e,n,t){"use strict";var r=t(5893),o=t(7294),a=t(5697),i=t.n(a),c=t(4866),s=t(6901);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=o.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,a=e.severity,i=e.closeHandlerCB,s=void 0===i?function(){}:i,l=(0,o.useState)(n),d=l[0],f=l[1],p=function(){f(!1),s()};return(0,r.jsx)(c.Z,{open:d,autoHideDuration:3e3,onClose:p,children:(0,r.jsx)(u,{onClose:p,severity:a,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:i().bool,message:i().string,severity:i().string},n.Z=d},6601:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(5893),o=t(7357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.children,t=e.value,c=e.index,s=i(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(o.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},9314:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ce}});var r=t(4051),o=t.n(r),a=t(5893),i=t(3059),c=t(7294),s=t(5861),l=t(7357),u=t(8409),d=t(44),f=t(6886),p=t(6601),h=t(1057),x=t(1903),b=t(8462),m=t(7212),v=t(8619),g=t(9334),j=t(7948),y={phonebookContainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"500px",maxHeight:"500px",borderRadius:"8px",background:"#fafafa",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",overflow:"auto"},searchPhonebookTextField:{width:"170px",margin:1,background:"#FFFFFF",position:"absolute",zIndex:1},contactInformationItem:{display:"flex",alignItems:"baseline"}},C=t(6486),O=t.n(C),S=t(657),E=t(7645),w=t(6580),Z=t(8951),k=t(1425),R=t(8456),T=/^09[0-9]{9}$/g,_="Cell number is required.";function A(e,n){var t=e.find((function(e){return e.cellnumber===n}));return Boolean(t)}var P=function(e,n,t,r){if(null!==t){if(""===t)return"ERROR_MISSING_CELLNUMBER";if(function(e){return!e.match(T)}(t))return"ERROR_INVALID_FORMAT_CELLNUMBER";if("EDIT"===e){if(r&&t!==r)return A(n,t)?"ERROR_CONTACT_ALREADY_EXIST":""}else{if("ADD"!==e)return"";if(A(n,t))return"ERROR_CONTACT_ALREADY_EXIST"}}},N=function(e){switch(e){case"ERROR_MISSING_CELLNUMBER":case"ERROR_MISSING_CELLNUMBER":return _;case"ERROR_INVALID_FORMAT_CELLNUMBER":return"Invalid cell number format.";case"ERROR_CONTACT_ALREADY_EXIST":return"Cell number already exists in the conact list.";default:return""}};var D=function(e){var n,t,r=e.contacts,o=e.open,i=e.handleClose,s=e.handleAddContact,u=e.loadingButton,d=(0,c.useState)(""),f=d[0],p=d[1],b=(0,c.useState)(null),m=b[0],v=b[1],g=(0,c.useState)(u),j=g[0],C=g[1];return(0,c.useEffect)((function(){C(u)}),[u]),(0,a.jsxs)(S.Z,{fullWidth:!0,maxWidth:"xs",open:o,onClose:i,children:[(0,a.jsx)(E.Z,{children:"Add Contact"}),(0,a.jsxs)(w.Z,{children:[(0,a.jsxs)(l.Z,{sx:y.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(Z.Z,{children:"Name:"})}),(0,a.jsx)(x.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){p(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:y.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(Z.Z,{children:"Cell Number:"})}),(0,a.jsx)(x.Z,{error:(null===(n=P("ADD",r,m,null))||void 0===n?void 0:n.length)>0,helperText:N(P("ADD",r,m)),id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){v(e.target.value)},type:"tel"})]})]}),(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(h.Z,{disabled:j,size:"small",onClick:i,children:"CANCEL"}),(0,a.jsxs)(h.Z,{disabled:(null===(t=P("ADD",r,m))||void 0===t?void 0:t.length)>0||null===m||j,size:"small",variant:"contained",onClick:function(){s({name:f,cellnumber:m}),p(""),v(null),i()},children:[(0,a.jsx)("span",{style:{display:j?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:j?"block":"none"}})]})]})]})};var I=function(e){var n,t,r=e.loadingButton,o=e.open,i=e.contact,s=e.contacts,u=e.handleClose,d=e.handleDeleteContact,f=e.handleEditContact,p=(0,c.useState)(!1),b=p[0],m=p[1],v=(0,c.useState)(i.name),g=v[0],j=v[1],C=(0,c.useState)(i.cellnumber),O=C[0],T=C[1],_=(0,c.useState)(r),A=_[0],D=_[1];return(0,c.useEffect)((function(){j(i.name),T(i.cellnumber)}),[i]),(0,c.useEffect)((function(){D(r)}),[r]),(0,a.jsxs)(S.Z,{fullWidth:!0,maxWidth:"xs",open:o,onClose:u,children:[(0,a.jsx)(E.Z,{children:"Contact Details"}),(0,a.jsxs)(w.Z,{children:[(0,a.jsxs)(l.Z,{sx:y.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(Z.Z,{children:"Name:"})}),(0,a.jsx)(x.Z,{disabled:!b,id:"outlined-basic",onChange:function(e){j(e.target.value)},value:g,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:y.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(Z.Z,{children:"Cell Number:"})}),(0,a.jsx)(x.Z,{error:(null===(n=P("EDIT",s,O,i.cellnumber))||void 0===n?void 0:n.length)>0,helperText:N(P("EDIT",s,O,i.cellnumber)),onChange:function(e){T(e.target.value)},disabled:!b,id:"outlined-basic",value:O,variant:"standard",size:"small",type:"tel"})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{children:[b?(0,a.jsxs)(h.Z,{disabled:(null===(t=P("EDIT",s,O,i.cellnumber))||void 0===t?void 0:t.length)>0||A,size:"small",variant:"outlined",onClick:function(){return f({id:i.id,name:g,cellnumber:O})},children:[(0,a.jsx)("span",{style:{display:A?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:A?"block":"none"}})]}):(0,a.jsx)(h.Z,{disabled:A,size:"small",variant:"outlined",onClick:function(){m(!0),T(i.cellnumber)},children:"EDIT"}),b?(0,a.jsx)(h.Z,{disabled:A,size:"small",variant:"outlined",onClick:function(){j(i.name),T(i.cellnumber),m(!1)},children:"CANCEL"}):(0,a.jsxs)(h.Z,{disabled:A,size:"small",color:"error",variant:"outlined",onClick:function(){return d(i)},children:[(0,a.jsx)("span",{style:{display:A?"none":"block"},children:"DELETE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:A?"block":"none"}})]}),(0,a.jsx)(h.Z,{disabled:A,size:"small",onClick:u,children:"CLOSE"})]})]})},L=t(5322);var F=function(e){var n=e.handleAddContact,t=e.handleDeleteContact,r=e.handleEditContact,o=e.loading,i=e.loadingButton,s=e.open,u=e.originalContacts,d=e.setOpen,f=(0,c.useState)(null),p=f[0],C=f[1],S=(0,c.useState)(u),E=S[0],w=S[1],Z=(0,c.useState)(!1),k=Z[0],R=Z[1],T=(0,c.useState)(""),_=T[0],A=T[1],P=(0,c.useState)(!1),N=P[0],F=P[1],M=(0,c.useState)(!1),B=M[0],z=M[1],W=(0,c.useState)({}),q=W[0],U=W[1];return(0,c.useEffect)((function(){w(u)}),[u]),(0,a.jsxs)("div",{children:[B&&Object.entries(q).length>0&&(0,a.jsx)(L.Z,{openSnackbar:!0,message:q.message,severity:q.severity}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{variant:"contained",color:"primary",onClick:function(){F(!0)},children:"ADD CONTACT"}),(0,a.jsx)(D,{contacts:u,open:N,handleClose:function(){F(!1)},handleAddContact:n,loadingButton:i})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:o?"Updating List...":(0,a.jsxs)(l.Z,{sx:y.phonebookContainer,children:[(0,a.jsx)(l.Z,{sx:y.searchPhonebookTextField,children:(0,a.jsx)(x.Z,{id:"outlined-basic",label:"Search...",onChange:function(e){var n=e.target.value;A(n);var t,r,o=isNaN(n);if(R(o),""===e.target.value)w(u);else{var a=(t=E,r=n,O().filter(t,O().flow(O().identity,O().values,O().join,O().toLower,O().partialRight(O().includes,r))));w(a)}},variant:"outlined",size:"small",style:{width:"100%"}})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(b.Z,{children:(null===E||void 0===E?void 0:E.length)>0?E.map((function(e){var n="checkbox-list-label-".concat(e.cellnumber);return(0,a.jsx)(m.ZP,{disablePadding:!0,children:(0,a.jsx)(v.Z,{role:void 0,dense:!0,onClick:function(){return function(e){z(!1),U({}),d(!0),C(e)}(e)},children:(0,a.jsx)(g.Z,{id:n,primary:""===e.name?e.cellnumber:e.name,secondary:""!==_&&!k&&""!==e.name&&e.cellnumber})})},e.cellnumber)})):(0,a.jsx)(j.Z,{children:(0,a.jsx)("p",{children:"No Results"})})}),p&&(0,a.jsx)(I,{contact:p,contacts:E,handleClose:function(){d(!1),C(null)},handleDeleteContact:t,handleEditContact:r,loadingButton:i,open:s})]})})]})},M=t(4343);var B=function(e){var n=e.columns,t=e.loadingReports,r=e.rows;return(0,a.jsx)("div",{style:{height:400,width:"100%"},children:(0,a.jsx)(M._,{rows:r,columns:n,loading:t,pageSize:5,rowsPerPageOptions:[5]})})},z=t(8554);function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){W(e,n,t[n])}))}return e}var U=function(e){var n=e.columns,t=e.contacts,r=e.getContacts,o=e.handleAddContact,i=e.handleDeleteContact,h=e.handleEditContact,x=e.handleOpenAddContact,b=e.loading,m=e.loadingButton,v=e.loadingReports,g=e.open,j=e.rows,y=e.setOpen,C=e.toAddContact,O=(0,c.useState)(C?1:0),S=O[0],E=O[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h5",children:"SMS Management"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"View Text (SMS) versions"})," of generated Crop Recommendations and send them to different individuals via SMS."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Manage your own phonebook"})," for ease of sending texts to individuals."]}),(0,a.jsxs)(l.Z,{sx:z.Z.tabsContainer,children:[(0,a.jsxs)(u.Z,{value:S,onChange:function(e,n){E(n)},"aria-label":"basic tabs example",children:[(0,a.jsx)(d.Z,q({label:"SMS"},(0,p.P)(0))),(0,a.jsx)(d.Z,q({label:"PHONEBOOK"},(0,p.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(p.x,{value:S,index:0,children:(0,a.jsx)(B,{columns:n,loadingReports:v,rows:j})}),(0,a.jsx)(p.x,{value:S,index:1,children:(0,a.jsx)(f.ZP,{container:!0,children:(0,a.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(F,{getContacts:r,handleAddContact:o,handleDeleteContact:i,handleEditContact:h,handleOpenAddContact:x,loading:b,loadingButton:m,open:g,originalContacts:t,setOpen:y})})})})]})]})]})},G=t(2530),H=t(7426),Y=t(3835),K=t(558),V=t(1163),X=t(8152),J=t(2882),$=t(5113),Q=t(7906),ee=t(3184),ne=t(3816),te=t(3252),re=t(295);function oe(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function ae(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){oe(a,r,o,i,c,"next",e)}function c(e){oe(a,r,o,i,c,"throw",e)}i(void 0)}))}}function ie(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ce=(0,i.Z)((function(e){var n=e.loading,t=e.user,r=e.onBtnLogoutClick,i=(0,Y.aC)(),u=(0,V.useRouter)(),d=(0,c.useState)([]),f=d[0],p=d[1],x=(0,c.useState)([]),b=x[0],m=x[1],v=(0,c.useState)([]),g=v[0],j=v[1],y=(0,c.useState)([]),C=y[0],O=y[1],Z=(0,c.useState)(!1),R=Z[0],T=Z[1],_=(0,c.useState)(!1),A=_[0],P=_[1],N=(0,c.useState)({}),D=N[0],I=N[1],F=(0,c.useState)(!1),M=F[0],B=F[1],z=(0,c.useState)(!1),W=z[0],q=z[1],oe=(0,c.useState)([]),ce=oe[0],se=oe[1],le=(0,c.useState)(!1),ue=le[0],de=le[1],fe=function(){var e=ae(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,(0,K.K2)();case 4:n=e.sent,O(n),B(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),pe=function(e){var n=e.logs;return(0,a.jsx)(J.Z,{component:$.Z,children:(0,a.jsxs)(Q.Z,{sx:{minWidth:650},"arial-label":"simple-table",children:[(0,a.jsx)(ee.Z,{children:(0,a.jsxs)(ne.Z,{children:[(0,a.jsx)(te.Z,{children:"Number"}),(0,a.jsxs)(te.Z,{children:["Date\xa0",(0,a.jsx)("span",{style:{fontSize:"10px"},children:"(MM/DD/YYYY)"})]}),(0,a.jsx)(te.Z,{children:"Message"}),(0,a.jsx)(te.Z,{children:"Recipients"})]})}),(0,a.jsx)(re.Z,{children:n.map((function(e,n){var t=JSON.parse(e),r=new Date(t.dateSent).toLocaleString();return(0,a.jsxs)(ne.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(te.Z,{component:"th",scope:"row",children:n+1}),(0,a.jsx)(te.Z,{children:r}),(0,a.jsx)(te.Z,{children:t.sentMessage}),(0,a.jsx)(te.Z,{children:t.recipientsWithName})]},t.dateSent)}))})]})})},he=function(e){var n=e.report;return(0,a.jsxs)(S.Z,{fullWidth:!0,maxWidth:"md",open:W,onClose:ge,children:[(0,a.jsx)(E.Z,{children:"SMS Recommendation Logs"}),(0,a.jsxs)(w.Z,{dividers:!0,children:[(0,a.jsx)(s.Z,{variant:"body2",children:"This is where you can check where you send your texts message."}),(0,a.jsx)("br",{}),(0,a.jsx)(pe,{logs:null===n||void 0===n?void 0:n.logs})]}),(0,a.jsx)(k.Z,{children:(0,a.jsx)(h.Z,{variant:"outlined",onClick:ge,children:"Close"})})]})};(0,c.useEffect)((function(){if(null!==i.user&&!i.loading){var e=function(){var e=ae(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,X.pr)(i.user.uid);case 3:n=e.sent,j(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),fe()}}),[i]),(0,c.useEffect)((function(){if(g.length>0){var e={action:"Action",logs:"Logs",crop:"Crop",text_recommendation:"Text-Form Recommendation",region:"Region",province:"Province",municipality:"Municipality",month:"Month",type:"Type",updated_by:"Updated by",date_created:"Date Created"},n=[];["action","logs","crop","text_recommendation","region","province","municipality","month","type","updated_by","date_created"].forEach((function(t){"action"===t?n.push({field:t,headerName:e[t],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(n){n.stopPropagation(),u.push({pathname:"/admin/sms/viewSMS/",query:{docId:e.row.docId}})},children:"SEND"})}}):"logs"===t?n.push({field:t,headerName:e[t],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){var n;return(null===(n=e.row.logs)||void 0===n?void 0:n.length)>0?(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(){q(!0),se(e.row)},children:"VIEW LOGS"}):(0,a.jsx)(l.Z,{sx:{fontWeight:"bold"},children:"UNSENT"})}}):n.push({field:t,headerName:e[t],width:150,editable:!1,sortable:!1,disableColumnMenu:!0})}));var t=g.map((function(e,n){var t;return ie(t={id:n,docId:e.id,logs:e.logs,crop:e.crop,text_recommendation:e.smsRecommendations||"No SMS Recommendations available"},"logs",e.logs),ie(t,"region",e.region),ie(t,"province",e.province),ie(t,"municipality",e.municipality),ie(t,"month",e.month),ie(t,"type",e.type),ie(t,"updated_by",e.updated_by),ie(t,"date_created",e.date_created.toDate().toDateString()),t}));p(t),m(n)}}),[u,g]),(0,c.useEffect)((function(){void 0===Object.keys(u.query)[0]&&(T(!1),I({})),"isSent"===Object.keys(u.query)[0]&&(B(!1),T(!0),xe({message:"true"===u.query.isSent?"Successfully sent Crop Recommendation via text!":"Unsuccessful in sending Crop Recommendation via text.",severity:"true"===u.query.isSent?"success":"error"}))}),[u]),(0,c.useEffect)((function(){i.loading||i.user||u.push("/admin/login")}),[i.user,i.loading,u]);var xe=function(e){I(e)},be=function(){var e=ae(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,de(!0),e.next=4,(0,K.rE)(n);case 4:if(!e.sent){e.next=8;break}return e.next=8,fe();case 8:de(!1),T(!0),I({message:"Successfully added a New Contact!",severity:"success"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),me=function(){var e=ae(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,de(!0),e.next=4,(0,K.GK)({docId:n.id});case 4:if(t=e.sent,P(!1),!t){e.next=9;break}return e.next=9,fe();case 9:de(!1),T(!0),I({openSnackbar:!0,message:"Successfully deleted contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),ve=function(){var e=ae(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,de(!0),e.next=4,(0,K.mP)({docId:n.id,name:n.name,cellnumber:n.cellnumber});case 4:if(t=e.sent,de(!1),P(!1),!t){e.next=10;break}return e.next=10,fe();case 10:T(!0),I({openSnackbar:!0,message:"Successfully edit contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),ge=function(){q(!1)};return(0,a.jsxs)(G.Z,{loading:n,user:t,onBtnLogoutClick:r,accLevel:H.DW.ADMIN,children:[(0,a.jsx)(he,{report:ce}),(0,a.jsx)(U,{columns:b,contacts:C,getContacts:fe,handleAddContact:be,handleDeleteContact:me,handleEditContact:ve,loading:M,loadingReports:n,onBtnClick:r,open:A,rows:f,setOpen:P,toAddContact:u.query.toAddContact,user:i.user,loadingButton:ue}),!M&&R&&(0,a.jsx)(L.Z,{openSnackbar:!0,message:D.message,severity:D.severity,closeHandler:function(){T(!1)}})]})}))},558:function(e,n,t){"use strict";t.d(n,{rE:function(){return C},GK:function(){return O},mP:function(){return S},K2:function(){return E}});var r=t(4051),o=t.n(r),a=t(9669),i=t.n(a),c=t(9431);function s(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function x(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e,n){return b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},b(e,n)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return x(this,t)}}var g={BASE_API_URL:"https://amia-cis.herokuapp.com/api",CREATE_CONTACT:"".concat("https://amia-cis.herokuapp.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis.herokuapp.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis.herokuapp.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis.herokuapp.com/api","/contacts"),PHONEBOOK:"phonebook"},j=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(c,e);var n,t,r,a=v(c);function c(){return u(this,c),a.apply(this,arguments)}return n=c,(t=[{key:"createContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:g.CREATE_CONTACT,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:g.DELETE_CONTACT,method:"DELETE"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:g.EDIT_CONTACT,method:"PATCH"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return l(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,i()(h({},t,{url:g.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(n.prototype,t),r&&d(n,r),c}(c.Z),y=new j,C=y.createContact.bind(y),O=y.deleteContact.bind(y),S=y.editContact.bind(y),E=y.getContacts.bind(y)}},function(e){e.O(0,[3662,3135,9669,3203,4343,6572,4848,7761,3728,8152,9774,2888,179],(function(){return n=8359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);