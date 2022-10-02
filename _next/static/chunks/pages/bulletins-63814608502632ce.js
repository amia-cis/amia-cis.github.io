(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3689],{1057:function(e,o,t){"use strict";t.d(o,{Z:function(){return C}});var n=t(3366),a=t(7462),r=t(7294),i=t(6010),l=t(7925),s=t(7192),c=t(1796),d=t(1496),u=t(3616),p=t(7739),m=t(8216),f=t(8979);function h(e){return(0,f.Z)("MuiButton",e)}var v=(0,t(6087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=t(8363),b=t(5893);const x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,m.Z)(t.color)}`],o[`size${(0,m.Z)(t.size)}`],o[`${t.variant}Size${(0,m.Z)(t.size)}`],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((({theme:e,ownerState:o})=>(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:(0,c.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${e.palette[o.color].main}`,backgroundColor:(0,c.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.palette[o.color].dark,"@media (hover: none)":{backgroundColor:e.palette[o.color].main}}),"&:active":(0,a.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[8]}),[`&.${v.focusVisible}`]:(0,a.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[6]}),[`&.${v.disabled}`]:(0,a.Z)({color:e.palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===o.variant&&"secondary"===o.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===o.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main,border:`1px solid ${(0,c.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].contrastText,backgroundColor:e.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.startIcon,o[`iconSize${(0,m.Z)(t.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.endIcon,o[`iconSize${(0,m.Z)(t.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var C=r.forwardRef((function(e,o){const t=r.useContext(g.Z),c=(0,l.Z)(t,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:f="primary",component:v="button",className:y,disabled:C=!1,disableElevation:z=!1,disableFocusRipple:M=!1,endIcon:R,focusVisibleClassName:k,fullWidth:I=!1,size:j="medium",startIcon:N,type:E,variant:$="text"}=d,L=(0,n.Z)(d,x),P=(0,a.Z)({},d,{color:f,component:v,disabled:C,disableElevation:z,disableFocusRipple:M,fullWidth:I,size:j,type:E,variant:$}),_=(e=>{const{color:o,disableElevation:t,fullWidth:n,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,m.Z)(o)}`,`size${(0,m.Z)(r)}`,`${i}Size${(0,m.Z)(r)}`,"inherit"===o&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(r)}`]},d=(0,s.Z)(c,h,l);return(0,a.Z)({},l,d)})(P),F=N&&(0,b.jsx)(S,{className:_.startIcon,ownerState:P,children:N}),A=R&&(0,b.jsx)(w,{className:_.endIcon,ownerState:P,children:R});return(0,b.jsxs)(Z,(0,a.Z)({ownerState:P,className:(0,i.Z)(y,t.className),component:v,disabled:C,focusRipple:!M,focusVisibleClassName:(0,i.Z)(_.focusVisible,k),ref:o,type:E},L,{classes:_,children:[F,p,A]}))}))},8363:function(e,o,t){"use strict";const n=t(7294).createContext({});o.Z=n},6242:function(e,o,t){"use strict";t.d(o,{Z:function(){return v}});var n=t(7462),a=t(3366),r=t(7294),i=t(6010),l=t(7192),s=t(1496),c=t(3616),d=t(5113),u=t(8979);function p(e){return(0,u.Z)("MuiCard",e)}(0,t(6087).Z)("MuiCard",["root"]);var m=t(5893);const f=["className","raised"],h=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({overflow:"hidden"})));var v=r.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=t,d=(0,a.Z)(t,f),u=(0,n.Z)({},t,{raised:s}),v=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"]},p,o)})(u);return(0,m.jsx)(h,(0,n.Z)({className:(0,i.Z)(v.root,r),elevation:s?8:void 0,ref:o,ownerState:u},d))}))},4267:function(e,o,t){"use strict";t.d(o,{Z:function(){return h}});var n=t(7462),a=t(3366),r=t(7294),i=t(6010),l=t(7192),s=t(1496),c=t(3616),d=t(8979);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,t(6087).Z)("MuiCardContent",["root"]);var p=t(5893);const m=["className","component"],f=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var h=r.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:s="div"}=t,d=(0,a.Z)(t,m),h=(0,n.Z)({},t,{component:s}),v=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"]},u,o)})(h);return(0,p.jsx)(f,(0,n.Z)({as:s,className:(0,i.Z)(v.root,r),ownerState:h,ref:o},d))}))},1413:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins",function(){return t(2406)}])},8418:function(e,o,t){"use strict";function n(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=e[t];return n}function a(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(r.push(n.value),!o||r.length!==o);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return r}}(e,o)||function(e,o){if(!e)return;if("string"===typeof e)return n(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o.default=void 0;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},l=t(6273),s=t(387),c=t(7190);var d={};function u(e,o,t,n){if(e&&l.isLocalURL(o)){e.prefetch(o,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[o+"%"+t+(a?"%"+a:"")]=!0}}var p=function(e){var o,t=!1!==e.prefetch,n=s.useRouter(),r=i.default.useMemo((function(){var o=a(l.resolveHref(n,e.href,!0),2),t=o[0],r=o[1];return{href:t,as:e.as?l.resolveHref(n,e.as):r||t}}),[n,e.href,e.as]),p=r.href,m=r.as,f=e.children,h=e.replace,v=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var x=(o=i.default.Children.only(f))&&"object"===typeof o&&o.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),Z=y[0],S=y[1],w=i.default.useCallback((function(e){Z(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,Z]);i.default.useEffect((function(){var e=S&&t&&l.isLocalURL(p),o="undefined"!==typeof b?b:n&&n.locale,a=d[p+"%"+m+(o?"%"+o:"")];e&&!a&&u(n,p,m,{locale:o})}),[m,p,S,b,t,n]);var C={ref:w,onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,o,t,n,a,r,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var o=e.currentTarget.target;return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),o[a?"replace":"push"](t,n,{shallow:r,locale:s,scroll:i}))}(e,n,p,m,h,v,g,b)},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),l.isLocalURL(p)&&u(n,p,m,{priority:!0})}};if(e.passHref||"a"===o.type&&!("href"in o.props)){var z="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(m,z,n&&n.locales,n&&n.domainLocales);C.href=M||l.addBasePath(l.addLocale(m,z,n&&n.defaultLocale))}return i.default.cloneElement(o,C)};o.default=p},2406:function(e,o,t){"use strict";t.r(o),t.d(o,{__N_SSG:function(){return $},default:function(){return L}});var n=t(5893),a=t(1664),r=t(7357),i=t(6242),l=t(3366),s=t(7462),c=t(7294),d=t(6010),u=t(7192),p=t(1496),m=t(3616),f=t(8979),h=t(6087);function v(e){return(0,f.Z)("MuiCardActions",e)}(0,h.Z)("MuiCardActions",["root","spacing"]);const g=["disableSpacing","className"],b=(0,p.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})((({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var x=c.forwardRef((function(e,o){const t=(0,m.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:r}=t,i=(0,l.Z)(t,g),c=(0,s.Z)({},t,{disableSpacing:a}),p=(e=>{const{classes:o,disableSpacing:t}=e,n={root:["root",!t&&"spacing"]};return(0,u.Z)(n,v,o)})(c);return(0,n.jsx)(b,(0,s.Z)({className:(0,d.Z)(p.root,r),ownerState:c,ref:o},i))})),y=t(4267);function Z(e){return(0,f.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);const S=["children","className","component","image","src","style"],w=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:n,isImageComponent:a}=t;return[o.root,n&&o.media,a&&o.img]}})((({ownerState:e})=>(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),C=["video","audio","picture","iframe","img"],z=["picture","img"];var M=c.forwardRef((function(e,o){const t=(0,m.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:r,component:i="div",image:c,src:p,style:f}=t,h=(0,l.Z)(t,S),v=-1!==C.indexOf(i),g=!v&&c?(0,s.Z)({backgroundImage:`url("${c}")`},f):f,b=(0,s.Z)({},t,{component:i,isMediaComponent:v,isImageComponent:-1!==z.indexOf(i)}),x=(e=>{const{classes:o,isMediaComponent:t,isImageComponent:n}=e,a={root:["root",t&&"media",n&&"img"]};return(0,u.Z)(a,Z,o)})(b);return(0,n.jsx)(w,(0,s.Z)({className:(0,d.Z)(x.root,r),as:i,role:!v&&c?"img":void 0,ref:o,style:g,ownerState:b,src:v?c||p:void 0},h,{children:a}))})),R=t(1057),k=t(6886),I=t(5861),j=[{title:"10-Day Farm Weather Outlook",img:"th_clouds",description:"View and download the 10-Day Farm Weather Outlook and Advisory Recommendations PDF Bulletins here.",href:"/bulletins/weather"},{title:"Seasonal Outlook",img:"th_seasonal",description:"View and download Regional Seasonal Climate Outlook and Advisory Crop Recommendations PDF Bulletins here.",href:"/bulletins/seasonal-outlook"},{title:"Typhoon Advisory",img:"th_typhoon_03",description:"View the Special Weather Advisory PDF bulletins here.",href:"/bulletins/typhoon-advisory"}],N={container:{marginTop:function(e){return e.spacing(8)}},card:{height:"100%",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"}};var E=function(e){var o=e.media;return(0,n.jsx)(r.Z,{sx:N.container,children:(0,n.jsx)(k.ZP,{container:!0,maxWidth:"lg",spacing:3,children:j.map((function(e,t){return(0,n.jsx)(k.ZP,{item:!0,xs:12,md:4,children:(0,n.jsxs)(i.Z,{sx:N.card,children:[(0,n.jsx)(M,{placeholder:"/images/thumbnails/".concat(e.img,".png"),component:"img",height:"225",srcSet:void 0!==o[t]?o[t]:"/images/thumbnails/".concat(e.img,".png"),alt:e.title}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(I.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),(0,n.jsx)(I.Z,{variant:"body2",color:"text.secondary",children:e.description})]}),(0,n.jsx)(x,{children:(0,n.jsx)(R.Z,{size:"small",children:(0,n.jsx)(a.default,{href:e.href,passHref:!0,children:(0,n.jsx)("span",{children:"View"})})})})]})},t)}))})})};var $=!0,L=function(e){var o=e.villages,t=e.media;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.Z,{variant:"h4",id:"bacap-bulletins",children:"Bulletins"}),(0,n.jsx)(I.Z,{variant:"label",children:"Welcome to the Bulletins PDF downloads page. You can preview and download Bulletins integrated with the Seasonal and 10-Day Weather Forecasts here."}),(0,n.jsx)(E,{villages:o,media:t})]})}},1664:function(e,o,t){e.exports=t(8418)}},function(e){e.O(0,[6845,9774,2888,179],(function(){return o=1413,e(e.s=o);var o}));var o=e.O();_N_E=o}]);