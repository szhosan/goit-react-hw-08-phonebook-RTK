"use strict";(self.webpackChunkreact_homework_phonebook_RTK_Query=self.webpackChunkreact_homework_phonebook_RTK_Query||[]).push([[636],{403:function(n,r,o){var t=o(5318);r.Z=void 0;var e=t(o(5649)),i=o(184),a=(0,e.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=a},1889:function(n,r,o){o.d(r,{ZP:function(){return y}});var t=o(2982),e=o(4942),i=o(3366),a=o(7462),c=o(2791),s=o(8182),u=o(1184),l=o(8519),d=o(2039),p=o(7630),m=o(1046);var g=c.createContext(),v=o(9818);function f(n){return(0,v.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=(0,o(2152).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,t.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,t.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,t.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,t.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),w=o(184),h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function Z(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[o["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))];var t=n.xs,e=n.sm,i=n.md,a=n.lg,c=n.xl;return[Number(t)>0&&(o["spacing-xs-".concat(String(t))]||"spacing-xs-".concat(String(t))),Number(e)>0&&(o["spacing-sm-".concat(String(e))]||"spacing-sm-".concat(String(e))),Number(i)>0&&(o["spacing-md-".concat(String(i))]||"spacing-md-".concat(String(i))),Number(a)>0&&(o["spacing-lg-".concat(String(a))]||"spacing-lg-".concat(String(a))),Number(c)>0&&(o["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var k=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var o=n.ownerState,e=o.container,i=o.direction,a=o.item,c=o.lg,s=o.md,u=o.sm,l=o.spacing,d=o.wrap,p=o.xl,m=o.xs,g=o.zeroMinWidth;return[r.root,e&&r.container,a&&r.item,g&&r.zeroMinWidth].concat((0,t.Z)(Z(l,e,r)),["row"!==i&&r["direction-xs-".concat(String(i))],"wrap"!==d&&r["wrap-xs-".concat(String(d))],!1!==m&&r["grid-xs-".concat(String(m))],!1!==u&&r["grid-sm-".concat(String(u))],!1!==s&&r["grid-md-".concat(String(s))],!1!==c&&r["grid-lg-".concat(String(c))],!1!==p&&r["grid-xl-".concat(String(p))]])}})((function(n){var r=n.ownerState;return(0,a.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,o=n.ownerState,t=(0,u.P$)({values:o.direction,breakpoints:r.breakpoints.values});return(0,u.k9)({theme:r},t,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(S.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,o=n.ownerState,t=o.container,i=o.rowSpacing,a={};if(t&&0!==i){var c=(0,u.P$)({values:i,breakpoints:r.breakpoints.values});a=(0,u.k9)({theme:r},c,(function(n){var o=r.spacing(n);return"0px"!==o?(0,e.Z)({marginTop:"-".concat(b(o))},"& > .".concat(S.item),{paddingTop:b(o)}):{}}))}return a}),(function(n){var r=n.theme,o=n.ownerState,t=o.container,i=o.columnSpacing,a={};if(t&&0!==i){var c=(0,u.P$)({values:i,breakpoints:r.breakpoints.values});a=(0,u.k9)({theme:r},c,(function(n){var o=r.spacing(n);return"0px"!==o?(0,e.Z)({width:"calc(100% + ".concat(b(o),")"),marginLeft:"-".concat(b(o))},"& > .".concat(S.item),{paddingLeft:b(o)}):{}}))}return a}),(function(n){var r,o=n.theme,t=n.ownerState;return o.breakpoints.keys.reduce((function(n,e){var i={};if(t[e]&&(r=t[e]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:t.columns,breakpoints:o.breakpoints.values}),s="object"===typeof c?c[e]:c;if(void 0===s||null===s)return n;var l="".concat(Math.round(r/s*1e8)/1e6,"%"),d={};if(t.container&&t.item&&0!==t.columnSpacing){var p=o.spacing(t.columnSpacing);if("0px"!==p){var m="calc(".concat(l," + ").concat(b(p),")");d={flexBasis:m,maxWidth:m}}}i=(0,a.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}return 0===o.breakpoints.values[e]?Object.assign(n,i):n[o.breakpoints.up(e)]=i,n}),{})})),y=c.forwardRef((function(n,r){var o=(0,m.Z)({props:n,name:"MuiGrid"}),e=(0,l.Z)(o),u=e.className,p=e.columns,v=e.columnSpacing,x=e.component,S=void 0===x?"div":x,b=e.container,y=void 0!==b&&b,M=e.direction,W=void 0===M?"row":M,z=e.item,N=void 0!==z&&z,C=e.lg,R=void 0!==C&&C,V=e.md,P=void 0!==V&&V,B=e.rowSpacing,D=e.sm,_=void 0!==D&&D,j=e.spacing,F=void 0===j?0:j,G=e.wrap,L=void 0===G?"wrap":G,T=e.xl,A=void 0!==T&&T,H=e.xs,O=void 0!==H&&H,$=e.zeroMinWidth,K=void 0!==$&&$,Q=(0,i.Z)(e,h),q=B||F,E=v||F,I=c.useContext(g),J=y?p||12:I,U=(0,a.Z)({},e,{columns:J,container:y,direction:W,item:N,lg:R,md:P,sm:_,rowSpacing:q,columnSpacing:E,wrap:L,xl:A,xs:O,zeroMinWidth:K}),X=function(n){var r=n.classes,o=n.container,e=n.direction,i=n.item,a=n.lg,c=n.md,s=n.sm,u=n.spacing,l=n.wrap,p=n.xl,m=n.xs,g={root:["root",o&&"container",i&&"item",n.zeroMinWidth&&"zeroMinWidth"].concat((0,t.Z)(Z(u,o)),["row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==l&&"wrap-xs-".concat(String(l)),!1!==m&&"grid-xs-".concat(String(m)),!1!==s&&"grid-sm-".concat(String(s)),!1!==c&&"grid-md-".concat(String(c)),!1!==a&&"grid-lg-".concat(String(a)),!1!==p&&"grid-xl-".concat(String(p))])};return(0,d.Z)(g,f,r)}(U);return(0,w.jsx)(g.Provider,{value:J,children:(0,w.jsx)(k,(0,a.Z)({ownerState:U,className:(0,s.Z)(X.root,u),as:S,ref:r},Q))})}))},3060:function(n,r,o){o.d(r,{Z:function(){return W}});var t=o(2982),e=o(885),i=o(4942),a=o(3366),c=o(7462),s=o(2791),u=o(8182),l=o(2039),d=o(8529),p=o(2065),m=o(4036),g=o(7630),v=o(1046),f=o(3031),x=o(2071),S=o(890),w=o(9818);function h(n){return(0,w.Z)("MuiLink",n)}var b=(0,o(2152).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=o(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},M=(0,g.ZP)(S.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,r){var o=n.ownerState;return[r.root,r["underline".concat((0,m.Z)(o.underline))],"button"===o.component&&r.button]}})((function(n){var r=n.theme,o=n.ownerState,t=(0,d.D)(r,"palette.".concat(function(n){return y[n]||n}(o.color)))||o.color;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,p.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),W=s.forwardRef((function(n,r){var o=(0,v.Z)({props:n,name:"MuiLink"}),i=o.className,d=o.color,p=void 0===d?"primary":d,g=o.component,S=void 0===g?"a":g,w=o.onBlur,b=o.onFocus,W=o.TypographyClasses,z=o.underline,N=void 0===z?"always":z,C=o.variant,R=void 0===C?"inherit":C,V=o.sx,P=(0,a.Z)(o,k),B=(0,f.Z)(),D=B.isFocusVisibleRef,_=B.onBlur,j=B.onFocus,F=B.ref,G=s.useState(!1),L=(0,e.Z)(G,2),T=L[0],A=L[1],H=(0,x.Z)(r,F),O=(0,c.Z)({},o,{color:p,component:S,focusVisible:T,underline:N,variant:R}),$=function(n){var r=n.classes,o=n.component,t=n.focusVisible,e=n.underline,i={root:["root","underline".concat((0,m.Z)(e)),"button"===o&&"button",t&&"focusVisible"]};return(0,l.Z)(i,h,r)}(O);return(0,Z.jsx)(M,(0,c.Z)({color:p,className:(0,u.Z)($.root,i),classes:W,component:S,onBlur:function(n){_(n),!1===D.current&&A(!1),w&&w(n)},onFocus:function(n){j(n),!0===D.current&&A(!0),b&&b(n)},ref:H,ownerState:O,variant:R,sx:[].concat((0,t.Z)(Object.keys(y).includes(p)?[]:[{color:p}]),(0,t.Z)(Array.isArray(V)?V:[V]))},P))}))}}]);
//# sourceMappingURL=636.45b46271.chunk.js.map