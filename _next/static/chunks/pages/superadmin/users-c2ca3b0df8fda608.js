(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{3052:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/users",function(){return n(3773)}])},3773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r=n(4051),a=n.n(r),i=n(5893),o=n(5697),s=n.n(o),u=n(7294),l=n(7426),c=n(9669),d=n.n(c),f=n(9431);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function w(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?p(e):t}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}var S=new(function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(o,e);var t,n,r,i=j(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=p(e=i.call(this));return h(p(e),"getUsers",v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get(t.USERS_API_LIST);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e.BASE_URL="https://amia-cis.herokuapp.com/api",e.USERS_API="".concat(e.BASE_URL,"/user"),e.USERS_API_LIST="".concat(e.BASE_URL,"/users"),e}return t=o,(n=[{key:"createUser",value:function(e){var t=this;return v(a().mark((function n(){var r,i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={},["email","displayname","password","account_level","disabled","emailverified"].forEach((function(t){if(void 0===e[t]||""===e[t])throw new Error("Please check your input.");r[t]=e[t]})),n.next=5,t.createRequestObject({body:r});case 5:return i=n.sent,n.next=8,d()(g({},i,{url:t.USERS_API,method:"POST"}));case 8:return o=n.sent,n.abrupt("return",o.data);case 10:case"end":return n.stop()}}),n)})))()}},{key:"updateUser",value:function(e){var t=this;return v(a().mark((function n(){var r,i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={},["uid","email","displayname","password","disabled","emailverified","account_level"].forEach((function(t){if(void 0!==e[t.toLowerCase()]&&"password"!==t&&""===e[t])throw new Error("Please check your input.");r[t]=e[t]})),n.next=5,t.createRequestObject({body:r});case 5:return i=n.sent,n.next=8,d()(g({},i,{url:t.USERS_API,method:"PATCH"}));case 8:return o=n.sent,n.abrupt("return",o.data);case 10:case"end":return n.stop()}}),n)})))()}},{key:"deleteUser",value:function(e){var t=this;return v(a().mark((function n(){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({});case 2:return r=n.sent,n.next=5,d().delete("".concat(t.USERS_API,"/").concat(e),r);case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"getUser",value:function(e){var t=e.uid,n=e.email,r=this;return v(a().mark((function e(){var i,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},t&&(i={uid:t}),n&&(i={email:n}),e.next=5,r.createRequestObject({params:i});case 5:return o=e.sent,e.next=8,d().get("".concat(r.BASE_URL,"/user"),o);case 8:return s=e.sent,e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))()}}])&&b(t.prototype,n),r&&b(t,r),o}(f.Z)),T=S.createUser.bind(S),k=S.updateUser.bind(S),C=S.deleteUser.bind(S),O=S.getUser.bind(S),_=S.getUsers.bind(S);function P(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,a)}function U(){var e=(0,u.useState)(null),t=e[0],n=e[1],r=(0,u.useState)(!0),i=r[0],o=r[1],s=(0,u.useState)(""),l=s[0],c=s[1];return(0,u.useEffect)((function(){var e=function(){var e,t=(e=a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:t=e.sent,o(!1),n(t.data),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),r="",void 0!==e.t0.response&&(r=void 0!==e.t0.response.data?e.t0.response.data:""),""===r&&(r=e.t0.message),c(r);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){P(i,r,a,o,s,"next",e)}function s(e){P(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[]),{users:t,loading:i,error:l}}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=[{key:"isValidEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)&&""!==e}},{key:"isValidName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/[a-zA-Z. ]+$/.test(e.trim())&&""!==e}},{key:"isValidPassword",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>0}}],n&&A(t.prototype,n),r&&A(t,r),e}(),D=new I,R=D.isValidEmail.bind(D),L=D.isValidName.bind(D),V=D.isValidPassword.bind(D),Z=n(3059),B=n(2530),N=n(7357),z=n(5861),M=n(3501),H=n(5322),W=n(2176),F=n(6132),G=n(853),q=n(3539),$=n(480),X=n(3841),J=n(8972),K=n(8360),Q=n(2852),Y=n(1903),ee={container:{width:"parent",display:"flex",flexDirection:"column","& .MuiTextField-root, button":{marginTop:function(e){return e.spacing(2)}}},formlabel:{fontSize:"12px",marginTop:function(e){return e.spacing(3)},marginBottom:"4px"},selectBox:{marginBottom:function(e){return e.spacing(2)}}};function te(e){var t=e.state,n=e.loadstatus,r=e.onTextChange,a=e.type,o=void 0===a?"create":a,s=e.inputValidation,u=e.handleInputClick;return(0,i.jsxs)(N.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:ee.container,children:["create"!==o&&(0,i.jsx)(Y.Z,{id:"uid",label:"Enter UID",variant:"standard",size:"small",disabled:!0,value:t.uid}),(0,i.jsx)(Y.Z,{id:"email",label:"Enter email",variant:"standard",size:"small",error:""!==s.email,helperText:""!==s.email?s.email:"",disabled:n.isLoading,value:t.email,onChange:r,onClick:u}),(0,i.jsx)(Y.Z,{id:"displayname",label:"Enter display name",variant:"standard",size:"small",error:""!==s.displayname,helperText:""!==s.displayname?s.displayname:"",disabled:n.isLoading,value:t.displayname,onChange:r,onClick:u}),(0,i.jsx)(Y.Z,{id:"password",label:"Enter password",type:"password",placeholder:"create"===t.mode?"Enter password":"Password will not be updated if left blank",variant:"standard",size:"small",error:""!==s.password&&"create"===o,helperText:""!==s.password&&"create"===o?s.password:"",disabled:n.isLoading,value:t.password,onChange:r,onClick:u}),(0,i.jsx)(X.Z,{sx:ee.formlabel,id:"accountlevel-label",children:"Account Type"}),(0,i.jsxs)(K.Z,{labelId:"accountlevel-label",id:"account_level",size:"small",sx:ee.selectBox,disabled:n.isLoading,value:t.account_level,onChange:r,children:[(0,i.jsx)(J.Z,{value:1,size:"small",children:"Superadmin"}),(0,i.jsx)(J.Z,{value:2,size:"small",children:"Admin"})]}),(0,i.jsx)($.Z,{control:(0,i.jsx)(Q.Z,{checked:t.disabled,disabled:n.isLoading,id:"disabled",name:"disabled",onChange:r}),label:"Account Disabled"}),(0,i.jsx)($.Z,{control:(0,i.jsx)(Q.Z,{checked:t.emailverified,disabled:n.isLoading,id:"emailverified",name:"emailverified",onChange:r}),label:"Email Verified"})]})}te.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,type:s().string,inputValidation:s().object,handleInputClick:s().func};var ne=te,re={container:{width:"parent"},infoRow:{width:"parent",display:"flex",justifyContent:"space-between",fontSize:"14px",alignItems:"center",padding:"12px",borderBottom:"1px solid #f0f0f0","& div:first-child":{color:"#a0a0a0"},"& div:last-child":{color:"#000"}}},ae={email:"Email",displayName:"Display Name",acclevel:"Acc. Type",emailVerified:"Email Verified",disabled:"Acc. Disabled",last_signin:"Last Signin"};function ie(e){var t=e.userinfo;return(0,i.jsx)(N.Z,{children:Object.keys(ae).map((function(e){return(0,i.jsxs)(N.Z,{sx:re.infoRow,children:[(0,i.jsx)("div",{children:ae[e]}),(0,i.jsx)("div",{children:t[e].toString()})]},e)}))})}ie.propTypes={userinfo:s().object};var oe=ie,se={gridContainer:{marginTop:"24px",minHeight:500}},ue={datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}}};function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}function de(e){return(0,i.jsxs)(W.D,ce({},e,{children:[(0,i.jsx)(F.S,{}),(0,i.jsx)(G.M,{})]}))}var fe,pe={CREATE:0,VIEW:1,EDIT:2,DELETE:3},me=(le(fe={},pe.CREATE,{windowTitle:"Create a New User",buttonText:"Create User",yesBtnText:"Save"}),le(fe,pe.VIEW,{windowTitle:"User Information",buttonText:"View",yesBtnText:"Edit"}),le(fe,pe.EDIT,{windowTitle:"Update User Information",buttonText:"Edit",yesBtnText:"Update"}),le(fe,pe.DELETE,{windowTitle:"User Information",buttonText:"Delete",yesBtnText:"Delete"}),fe);function ve(e){var t=e.state,n=e.loadstatus,r=e.loadingusers,a=e.rows,o=e.columns,s=e.onTextChange,l=e.onEditStart,c=e.handleCreateUser,d=e.handleDeleteUser,f=e.handleUpdateUser,p=e.handleInputClick,m=e.inputValidation,v=e.usersLoadingError,b=(0,u.useState)({}),h=b[0],y=b[1],g=(0,u.useState)(!1),w=g[0],x=g[1],E=(0,u.useState)(pe.CREATE),j=E[0],S=E[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(z.Z,{variant:"h5",children:"Users Management"}),(0,i.jsx)("p",{children:"Manage admin user accounts"}),(0,i.jsx)("br",{}),(0,i.jsx)(M.Z,{isOpen:n.dialogOpen&&[pe.CREATE,pe.DELETE].includes(j)||w&&[pe.VIEW,pe.EDIT].includes(j),maxWidth:"xs",openButtonText:"Create User",title:me[j].windowTitle,confirmBtnText:me[j].yesBtnText,extraBtnText:j===pe.VIEW?me[pe.DELETE].buttonText:"",loading:n.isLoading,modalConfirmHandlerCB:function(){switch(j){case pe.CREATE:c();break;case pe.VIEW:S(pe.EDIT);break;case pe.EDIT:f(),S(pe.CREATE)}},modalCancelHandlerCB:function(){p(),x(!1)},modalOpenHandlerCB:function(){S(pe.CREATE),x(!0)},modalExtraHandlerCB:function(){S(pe.DELETE),d(h.uid,h.email)},children:j===pe.CREATE||j===pe.EDIT?(0,i.jsx)(ne,{state:t,loadstatus:n,onTextChange:s,inputValidation:m,handleInputClick:p,type:"create"}):(0,i.jsx)(oe,{userinfo:h})}),(0,i.jsx)(N.Z,{sx:se.gridContainer,style:{height:a.length<=4?"500px":"unset"},children:(0,i.jsx)(q._,{rows:a,columns:o,sx:ue.datagrid,rowHeight:48,autoHeight:a.length>=5,disableDensitySelector:!0,rowsPerPageOptions:[15,30,100],error:""!==v?v:null,components:{Toolbar:de},loading:r,initialState:{columns:{columnVisibilityModel:{rowId:!1}},pagination:{pageSize:12}},onRowClick:function(e){var t=ce({},e.row);t.account_level="Admin"===t.acclevel?2:1,t.displayname=t.displayName,t.emailverified=t.emailVerified,l(t.uid,"edit"),y(t),S(pe.VIEW),x(!0)}})}),(""!==n.error||""!==n.message)&&(0,i.jsx)(H.Z,{openSnackbar:!0,message:""!==n.error?n.error:n.message,severity:""!==n.error?"error":"success"})]})}ve.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,onEditStart:s().func,handleCreateUser:s().func,handleDeleteUser:s().func,handleUpdateUser:s().func,handleInputClick:s().func,inputValidation:s().object,usersLoadingError:s().string};var be=ve;function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,a)}function ge(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){ye(i,r,a,o,s,"next",e)}function s(e){ye(i,r,a,o,s,"throw",e)}o(void 0)}))}}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){we(e,t,n[t])}))}return e}function Ee(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var je={email:"",displayname:"",password:"",account_level:2,disabled:!1,emailverified:!0,mode:"create"},Se={isLoading:!1,dialogOpen:!1,error:"",message:""},Te={email:"",displayname:"",password:"",account_level:"",disabled:"",emailverified:""};function ke(e){var t=(0,u.useState)(je),n=t[0],r=t[1],o=(0,u.useState)(Se),s=o[0],c=o[1],d=(0,u.useState)(Te),f=d[0],p=d[1],m=(0,u.useState)([]),v=m[0],b=m[1],h=U(),y=h.users,g=h.loading,w=h.error,x=(0,u.useState)([]),E=x[0],j=x[1],S=(0,u.useState)([]),P=S[0],A=S[1];(0,u.useEffect)((function(){null!==y&&b((function(e){return y.users}))}),[y]),(0,u.useEffect)((function(){if(v.length>0){var e={email:{label:"Email",width:280},displayName:{label:"Display Name",width:200},acclevel:{label:"Acc. Type",width:120},emailVerified:{label:"Email Verified",width:125},disabled:{label:"Acc. Disabled",width:120},last_signin:{label:"Last Signin",width:250}},t=["email","displayName","acclevel","emailVerified","disabled","last_signin"].reduce((function(t,n,r){return t.push({field:n,headerName:e[n].label,width:e[n].width,align:r>1?"center":"left",headerAlign:r>1?"center":"left",editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,i.jsx)("div",{style:{fontSize:"last_signin"===n?"13px":"14px"},children:e.value.toString()})}}),t}),[]),n=v.filter((function(e){return void 0!==e.customClaims})).map((function(e,t){return{id:t,uid:e.uid,email:e.email,displayName:e.displayName,acclevel:1===e.customClaims.account_level?"Superadmin":"Admin",emailVerified:e.emailVerified,disabled:e.disabled,date_created:e.metadata.creationTime,last_signin:e.metadata.lastSignInTime?e.metadata.lastSignInTime:"-"}}));j(n),A(t)}}),[v]);var I=function(e){var t=Object.keys(je).reduce((function(t,n){return t[n]=e[n],t}),{});if(null!==t)return t.uid=e.uid,t.account_level=e.customClaims.account_level,t.displayname=e.displayName,t.emailverified=e.emailVerified,t.password="",t},D=function(){c(xe({},Se,{dialogOpen:!0,isLoading:!0}))},Z=function(e){var t=e.message,n=void 0===t?"":t,a=e.error,i=void 0===a?"":a;c((function(e){return xe({},Se,{message:n,error:i})})),r((function(e){return xe({},je)}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create",t=0,r={};return R(n.email)||(r.email="Please check your email input.",t+=1),L(n.displayname)||(r.displayname="Please check your display name.",t+=1),"create"===e&&(V(n.password)||(r.password="Please check your password input.",t+=1)),p(xe({},f,r)),0===t},z=function(){var e=ge(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N("create")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,D(),e.next=6,T(n);case 6:return e.next=8,_();case 8:t=e.sent.data,b(t.users),Z({message:"User successfully ".concat(n.email," created!")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),Z({error:e.t0.response?e.t0.response.data:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=ge(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(),e.next=4,C(t);case 4:return e.next=6,_();case 6:r=e.sent.data,b(r.users),Z({message:"Successfully deleted user ".concat(n,"!")}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Z({error:e.t0.response?e.t0.response.data:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=ge(a().mark((function e(){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N("edit")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,D(),e.next=6,k(n);case 6:return e.next=8,O({uid:n.uid,email:n.email});case 8:t=e.sent,(r=v.findIndex((function(e){return e.uid===t.uid})))>=0&&((i=Ee(v))[r]=t,b(i)),Z({message:"Successfully updated ".concat(n.email,"'s details!")}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),Z({error:e.t0.response?e.t0.response.data:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(B.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:l.DW.SUPERADMIN,children:(0,i.jsx)(be,{state:n,loadstatus:s,loadingusers:g,rows:E,columns:P,onTextChange:function(e){var t=e.target,a=t.id,i=t.value,o=t.checked,u=void 0!==a?a:"account_level";["emailverified","disabled"].includes(u)&&(i=o),r(xe({},n,we({},u,i))),(""!==s.error||""!==s.message||Object.keys(f).filter((function(e){return""!==f[e]})).length>0)&&(c(Se),p(Te))},onEditStart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",n=v.find((function(t){return t.uid===e})),a=I(n);a=xe({},a,{mode:t}),r(a)},handleCreateUser:z,handleDeleteUser:M,handleUpdateUser:H,handleInputClick:function(e){if(e){var t=e.target.id;r(xe({},n,we({},t,"")))}else r(je),c(Se);p(Te)},inputValidation:f,usersLoadingError:w})})}ke.propTypes={loading:s().bool,user:s().object,onBtnLogoutClick:s().func,accLevel:s().number};var Ce=(0,Z.Z)(ke)}},function(e){e.O(0,[135,203,539,433,728,986,774,888,179],(function(){return t=3052,e(e.s=t);var t}));var t=e.O();_N_E=t}]);