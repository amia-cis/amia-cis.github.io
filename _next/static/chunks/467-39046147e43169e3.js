"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{7467:function(e,t,n){n.d(t,{OP:function(){return g},Mw:function(){return d},$K:function(){return h},Ob:function(){return v},GV:function(){return _}});var r=n(4051),a=n.n(r),i=n(5048),s=n(5321);function c(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){c(i,r,a,s,o,"next",e)}function o(e){c(i,r,a,s,o,"throw",e)}s(void 0)}))}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;p(this,"getSelections",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCollectionData(t.CROP_REC_ACTIVITY_SELECTION,"prov");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var n=this;p(this,"getProvinces",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getCollectionData(n.CROP_REC_PROVINCES,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var r=this;p(this,"getMunicipalities",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCollectionData(r.CROP_REC_MUNICIPALITIES,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var c=this;p(this,"getActivities",function(){var e=o(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=(0,s.hJ)(i.db,c.CROP_REC_ACTIVITY_SELECTION),r=(0,s.IO)(n,(0,s.ar)("prov","==",t)),e.next=6,c.getCollectionData(c.CROP_REC_ACTIVITY_SELECTION,"",r);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var u=this;p(this,"getVillages",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getCollectionData(u.VILLAGES,"barangay");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var C=this;p(this,"getCropCalendarsHi",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getCollectionData(C.CROP_CALENDARS,"filename");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var l=this;p(this,"getRegionProvinces",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getCollectionData(l.REGIONS,"province");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var h=this;p(this,"getWeatherForecast",function(){var e=o(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getNestedCollectionData(h.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var d=this;p(this,"getRecommendations",function(){var e=o(a().mark((function e(t,n){var r,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t&&void 0!==n){e.next=2;break}return e.abrupt("return");case 2:return r=(0,s.hJ)(i.db,d.CROP_REC_RECOMMENDATIONS),c=(0,s.IO)(r,(0,s.ar)("province","==",t),(0,s.ar)("municipality","==",n)),e.next=6,d.getCollectionData(d.CROP_REC_RECOMMENDATIONS,"",c);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var v=this;p(this,"getMainCropRecommendations",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getCollectionData(v.CROP_REC_LIST_RECS_MAIN,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var _=this;p(this,"getSubCropRecommendations",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getCollectionData(_.CROP_REC_LIST_RECS_SUB,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var g=this;p(this,"getCroppingCalendarMerged",o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getCollectionData(g.CROPPING_CALENDAR_MERGED,"id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));var E=this;p(this,"getCroppingCalendarSimplified",function(){var e=o(a().mark((function e(t,n){var r,c,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t&&void 0!==n){e.next=2;break}return e.abrupt("return");case 2:return r=(0,s.hJ)(i.db,E.CROPPING_CALENDAR_MERGED),c=(0,s.IO)(r,(0,s.ar)("province","==",t),(0,s.ar)("municipality","==",n)),e.next=6,(0,s.PL)(c);case 6:return o=e.sent,u=o.docs.map((function(e){return f({},e.data())})),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var R=this;p(this,"getPageMediaAssets",function(){var e=o(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,R.getCollectionData(R.MEDIA_ASSETS,"filename");case 4:n=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),console.error(e.t0.message),new Error(e.t0.message);case 11:return e.abrupt("return",n.length>0?n.filter((function(e){return e.page===t})).map((function(e){return e.url})):n);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}());var b=this;p(this,"getTyphoonAdvisory",o(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.JU)(i.db,b.GLOBAL_COLLECTIONS,b.TYPHOON_ADVISORY),e.next=3,(0,s.QT)(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)})))),this.CROP_REC_ACTIVITY_SELECTION="rec_selections",this.VILLAGES="villages",this.CROP_CALENDARS="misc_crop_calendars",this.REGIONS="const_regions",this.CROP_REC_RECOMMENDATIONS="n_crop_recommendations",this.CROP_REC_PROVINCES="n_provinces",this.CROP_REC_MUNICIPALITIES="n_municipalities",this.CROP_REC_CROPS="n_crops",this.CROP_REC_STAGES="n_crop_stages",this.CROP_REC_ACTIVITIES="n_activities",this.CROP_REC_LIST_RECS_MAIN="n_list_recommendations",this.CROP_REC_LIST_RECS_SUB="n_list_subrecommendations",this.CROPPING_CALENDAR_MERGED="n_cropping_calendar_merged",this.MEDIA_ASSETS="n_page_media",this.WEATHER_FORECASTS="weather_forecasts",this.TYPHOON_ADVISORY="typhoon_advisory",this.GLOBAL_COLLECTIONS="w_services"}var t,n,r;return t=e,n=[{key:"getCollectionData",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return o(a().mark((function r(){var c,o,u,p;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=(0,s.hJ)(i.db,e),o=n||(0,s.IO)(c,(0,s.Xo)(t,"asc")),r.next=4,(0,s.PL)(o);case 4:return u=r.sent,p=u.docs.map((function(e){return f({},e.data())})),r.abrupt("return",p);case 7:case"end":return r.stop()}}),r)})))()}},{key:"getNestedCollectionData",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return o(a().mark((function c(){var o,u,p;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=(0,s.IO)((0,s.hJ)(i.db,e,t,n),(0,s.Xo)(r)),a.next=3,(0,s.PL)(o);case 3:return u=a.sent,p=u.docs.map((function(e){return f({},e.data())})),a.abrupt("return",p);case 6:case"end":return a.stop()}}),c)})))()}},{key:"getSeasonalMonths",value:function(){var e=this;return o(a().mark((function t(){var n,r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,s.IO)((0,s.hJ)(i.db,e.WEATHER_FORECASTS,"bicol","seasonal"),(0,s.Xo)("name"),(0,s.b9)(1)),t.next=3,(0,s.PL)(n);case 3:return r=t.sent,c=r.docs.map((function(e){return f({},e.data())})),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))()}}],n&&u(t.prototype,n),r&&u(t,r),e}(),l=new C,h=(l.getSelections.bind(l),l.getProvinces.bind(l),l.getActivities.bind(l),l.getVillages.bind(l),l.getRegionProvinces.bind(l),l.getCropCalendarsHi.bind(l),l.getMunicipalities.bind(l),l.getRecommendations.bind(l)),d=l.getMainCropRecommendations.bind(l),v=l.getSubCropRecommendations.bind(l),_=l.getWeatherForecast.bind(l),g=(l.getSeasonalMonths.bind(l),l.getTyphoonAdvisory.bind(l),l.getCroppingCalendarMerged.bind(l),l.getCroppingCalendarSimplified.bind(l));l.getPageMediaAssets.bind(l)}}]);