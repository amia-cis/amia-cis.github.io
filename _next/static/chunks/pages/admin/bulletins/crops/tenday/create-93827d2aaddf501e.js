(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5507],{67947:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/tenday/create",function(){return t(91617)}])},91617:function(e,n,t){"use strict";t.r(n);var r=t(34051),i=t.n(r),o=t(85893),u=t(67294),l=t(9473),c=t(30340),a=t(66383),s=t(95243),f=t(88453),p=t(61690),d=t(87006),v=t(24530),m=t(901),_=t(76490),g=t(33050),y=t(4463),b=t(68193),h=t(23766),E=t(41375),w=t(94640),S=t(16013),O=t(27392),N=t(59111),k=t(47426),A=t(53063),P=t(12671),D=t(87661);function L(e,n,t,r,i,o,u){try{var l=e[o](u),c=l.value}catch(a){return void t(a)}l.done?n(c):Promise.resolve(c).then(r,i)}function T(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function u(e){L(o,r,i,u,l,"next",e)}function l(e){L(o,r,i,u,l,"throw",e)}u(void 0)}))}}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}var Y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},B={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,processed:!1,loading:!1,error:"",success:"",sel_condition:{id:0,from:"weather_condition",label:k.MW.WAY_BELOW_NORMAL.label}},C={url:"",filename:""};n.default=(0,s.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,s=(0,u.useState)(B),L=s[0],R=s[1],I=(0,u.useState)([]),Z=I[0],F=I[1],W=(0,u.useState)([]),K=W[0],M=W[1],U=(0,u.useState)([]),q=U[0],G=U[1],X=(0,u.useState)([]),z=X[0],V=X[1],$=(0,u.useState)(null),H=$[0],J=$[1],Q=(0,h.Z)(L.sel_province,z),ee=(0,w.Z)(L.sel_province,L.sel_municipality),ne=ee.days,te=ee.loading,re=ee.error,ie=ee.summary,oe=(0,g.Z)(L.sel_province),ue=oe.cropcalendar,le=oe.loading,ce=oe.error,ae=(0,_.Z)(ue,L.sel_municipality),se=(0,y.Z)(Z,null===ie||void 0===ie?void 0:ie.date_start,ae,!0),fe=se.cropslist,pe=se.uniquecropstages,de=se.error,ve=(0,b.Z)(H,null,S.q.TENDAY,!0),me=ve.recommendations,_e=ve.farmoperations,ge=ve.loading,ye=ve.error,be=(0,E.Z)(me),he=be.group,Ee=be.error,we=(0,l.v9)((function(e){return e.reports})),Se=we.status,Oe=we.report,Ne=(0,l.v9)((function(e){return e.dashboard.reportType})),ke=(0,l.v9)((function(e){return e.dashboard.isEnglish})),Ae=(0,u.useState)(!0),Pe=Ae[0],De=Ae[1],Le=(0,u.useState)(!1),Te=Le[0],je=Le[1],xe=(0,u.useRef)(!1),Ye=(0,u.useState)(""),Be=Ye[0],Ce=Ye[1],Re=(0,u.useState)(C),Ie=Re[0],Ze=Re[1],Fe=(0,u.useState)(O.BF),We=Fe[0],Ke=Fe[1],Me=(0,l.I0)();(0,u.useEffect)((function(){xe.current=!0;var e=function(){var e=T(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.$m)();case 3:n=e.sent,xe&&V(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){xe.current=!1}}),[]),(0,u.useEffect)((function(){Me((0,v.Km)([])),Me((0,P.s_)())}),[Me]),(0,u.useEffect)((function(){z.length>0&&G((0,N.m)(z))}),[z]),(0,u.useEffect)((function(){null!==ie&&R((function(e){return x({},e,{sel_month:{label:ie.date_range}})}))}),[ie]),(0,u.useEffect)((function(){De(r||le||ge||te)}),[r,le,ge,te]),(0,u.useEffect)((function(){Ze(C)}),[ke]),(0,u.useEffect)((function(){if(""!==ce||""!==ye||""!==re||""!==de){var e=ce||ye||re||de;R((function(n){return x({},n,{error:e})}))}else R((function(e){return x({},e,{error:""})}))}),[de,ye,re,ce]),(0,u.useEffect)((function(){null===L.sel_municipality||te||Ce((function(e){var n;return(0,D.smsWriter)({type:D.SMS_TYPE.TENDAY,replacements:(n={},j(n,D.REPLACE_KEYS.TENDAY.MUNICIPALITY,L.sel_municipality),j(n,D.REPLACE_KEYS.TENDAY.FORECAST,ne.reduce((function(e,n){return e+="".concat(n.label," - ").concat(n.rainfall,"\n")}),"")),n)})}))}),[ne,te,L.sel_municipality]),(0,u.useEffect)((function(){Se===m.G.FULLFILLED&&null!==Oe&&xe.current&&Ke((function(e){return x({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Oe.id})}))}),[Se,Oe]),(0,u.useEffect)((function(){Ee||null===he||Me((0,v.Km)(he))}),[he,Ee,Me]),(0,u.useEffect)((function(){if(!r)if(pe.length>0){var e=pe.map((function(e){return e.code})).toString(),n=pe.map((function(e){return e.label})).toString();J(e),R((function(e){return x({},e,{sel_crop:fe.map((function(e){return e.label})).toString().split(",").join(", "),sel_stage:n})}))}else Me((0,v.Km)([])),null!==L.sel_municipality&&R((function(e){return x({},e,{error:"No crop stages are available for this date on ".concat(e.sel_municipality,".")})}))}),[pe,fe,r,,Me]);var Ue=function(){var e=T(i().mark((function e(){var n,t,r,o,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Ie.url){e.next=3;break}return je(!0),e.abrupt("return");case 3:return R((function(e){return x({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"bicol",province:L.sel_province,municipality:L.sel_municipality,operation:"preview",language:ke?"en":"tag"},je(!0),R((function(e){return x({},e,{loading:!0,error:""})})),e.next=10,(0,d.bM)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(o={}).href=URL.createObjectURL(r),o.download="".concat(L.sel_province,"_").concat(L.sel_municipality,".pdf"),Ze((function(e){return x({},e,{url:o.href,filename:o.download})})),R((function(e){return x({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),u="",void 0!==e.t0.response&&(u=void 0!==e.t0.response.data&&"[object Blob]"===Y(e.t0.response.data)?e.t0.response.data:""),""===u&&(u=e.t0.message),R((function(e){return x({},e,{loading:!1,error:u})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=T(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ke(x({},We,{loading:!0,msg:"Saving report..."}));try{t={region:"bicol",province:L.sel_province,municipality:L.sel_municipality,operation:"create",language:ke?"en":"tag"},Me((0,p.a0)(t)).unwrap().then((function(){Ne!==O.Ry.TEN_DAY&&(Me((0,A.uq)(O.Ry.TEN_DAY)),Me((0,p.RC)({uid:n.uid,type:O.Ry.TEN_DAY})))})).catch((function(e){xe.current&&Ke((function(n){return x({},n,{msg:e,loading:!1,savesuccess:!1,docId:null})}))}))}catch(i){r="",void 0!==i.response&&(r=void 0!==i.response.data&&"[object Blob]"===Y(i.response.data)?i.response.data:""),""===r&&(r=i.message),R((function(e){return x({},e,{loading:!1,error:r})}))}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(a.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:k.DW.ADMIN,children:(0,o.jsx)(c.Z,{optsprovinces:q,optsmunicipalities:Q,optscrops:fe,optscropstages:pe,optsactivities:_e,sel_options:L,loading:Pe,isloadingreport:Se===m.G.PENDING,isdisabled:!1,open:Te,message:We,smstext:Be,pageTitle:"10-Day Farm Weather Outlook and Advisory Bulletin",pageDescription:"Create <strong>10-Day Farm Weather Outlook and Advisory</strong> crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download.",pdfPreview:Ie,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(Ze(C),K.length>0&&M([]),""!==L.error&&R((function(e){return x({},e,{error:""})})),Object.keys(n).includes("id"))switch(t){case"province":J(null),R((function(e){return x({},e,{sel_province:r,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"municipality":J(null),R((function(e){return x({},e,{sel_municipality:r,sel_crop:null,sel_stage:null,sel_activity:null})})),F(ue.filter((function(e){return e.municipality===r})))}else if("province"===t){var i=L.sel_month;R(x({},B,{sel_month:i})),J(null)}else"municipality"===t&&(R(x({},L,{sel_municipality:null,sel_crop:null,sel_day:null,sel_stage:null,sel_activity:null})),J(null))},handlePreview:Ue,handleSave:qe,toggleViewerOpen:function(){je((function(e){return!e}))},resetSelections:function(){var e=L.sel_month;R(x({},B,{sel_month:e})),J(null),Me((0,v.Km)([]))},togglePrompt:function(){Ke((function(e){return x({},O.BF,{isOpen:!e.isOpen})}))}})})}))},59111:function(e,n,t){"use strict";t.d(n,{m:function(){return r}});var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return e.map((function(e,t){return{id:t,label:e[n]}}))}}},function(e){e.O(0,[6284,2866,9964,9522,1903,6279,6295,4039,2882,7092,6572,1050,3523,7702,1241,9774,2888,179],(function(){return n=67947,e(e.s=n);var n}));var n=e.O();_N_E=n}]);