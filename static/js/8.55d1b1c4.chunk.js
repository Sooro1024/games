(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[8],{71:function(A,e,a){"use strict";var B=a(2),Q=a(5),o=a(0),g=a.n(o),t=a(1),s=a.n(t),r=a(8),n=a.n(r),l=a(4),c={tag:l.o,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},Z=function(A){var e=A.className,a=A.cssModule,o=A.fluid,t=A.tag,s=Object(Q.a)(A,["className","cssModule","fluid","tag"]),r="container";!0===o?r="container-fluid":o&&(r="container-"+o);var c=Object(l.k)(n()(e,r),a);return g.a.createElement(t,Object(B.a)({},s,{className:c}))};Z.propTypes=c,Z.defaultProps={tag:"div"},e.a=Z},72:function(A,e,a){"use strict";var B=a(2),Q=a(5),o=a(0),g=a.n(o),t=a(1),s=a.n(t),r=a(8),n=a.n(r),l=a(4),c=s.a.oneOfType([s.a.number,s.a.string]),Z={tag:l.o,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:c,sm:c,md:c,lg:c,xl:c},E={tag:"div",widths:["xs","sm","md","lg","xl"]},k=function(A){var e=A.className,a=A.cssModule,o=A.noGutters,t=A.tag,s=A.form,r=A.widths,c=Object(Q.a)(A,["className","cssModule","noGutters","tag","form","widths"]),Z=[];r.forEach((function(e,a){var B=A[e];if(delete c[e],B){var Q=!a;Z.push(Q?"row-cols-"+B:"row-cols-"+e+"-"+B)}}));var E=Object(l.k)(n()(e,o?"no-gutters":null,s?"form-row":"row",Z),a);return g.a.createElement(t,Object(B.a)({},c,{className:E}))};k.propTypes=Z,k.defaultProps=E,e.a=k},73:function(A,e,a){"use strict";var B=a(2),Q=a(5),o=a(0),g=a.n(o),t=a(1),s=a.n(t),r=a(8),n=a.n(r),l=a(4),c=s.a.oneOfType([s.a.number,s.a.string]),Z=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:c,offset:c})]),E={tag:l.o,xs:Z,sm:Z,md:Z,lg:Z,xl:Z,className:s.a.string,cssModule:s.a.object,widths:s.a.array},k={tag:"div",widths:["xs","sm","md","lg","xl"]},i=function(A,e,a){return!0===a||""===a?A?"col":"col-"+e:"auto"===a?A?"col-auto":"col-"+e+"-auto":A?"col-"+a:"col-"+e+"-"+a},G=function(A){var e=A.className,a=A.cssModule,o=A.widths,t=A.tag,s=Object(Q.a)(A,["className","cssModule","widths","tag"]),r=[];o.forEach((function(e,B){var Q=A[e];if(delete s[e],Q||""===Q){var o=!B;if(Object(l.i)(Q)){var g,t=o?"-":"-"+e+"-",c=i(o,e,Q.size);r.push(Object(l.k)(n()(((g={})[c]=Q.size||""===Q.size,g["order"+t+Q.order]=Q.order||0===Q.order,g["offset"+t+Q.offset]=Q.offset||0===Q.offset,g)),a))}else{var Z=i(o,e,Q);r.push(Z)}}})),r.length||r.push("col");var c=Object(l.k)(n()(e,r),a);return g.a.createElement(t,Object(B.a)({},s,{className:c}))};G.propTypes=E,G.defaultProps=k,e.a=G},82:function(A,e,a){"use strict";a.r(e);var B=a(0),Q=a.n(B),o=a(71),g=a(72),t=a(73),s=a(2),r=a(5),n=a(1),l=a.n(n),c=a(8),Z=a.n(c),E=a(4),k={tag:E.o,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},i=function(A){var e=A.className,a=A.cssModule,B=A.color,o=A.body,g=A.inverse,t=A.outline,n=A.tag,l=A.innerRef,c=Object(r.a)(A,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),k=Object(E.k)(Z()(e,"card",!!g&&"text-white",!!o&&"card-body",!!B&&(t?"border":"bg")+"-"+B),a);return Q.a.createElement(n,Object(s.a)({},c,{className:k,ref:l}))};i.propTypes=k,i.defaultProps={tag:"div"};var G=i,I={tag:E.o,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(A){var e=A.className,a=A.cssModule,B=A.top,o=A.bottom,g=A.tag,t=Object(r.a)(A,["className","cssModule","top","bottom","tag"]),n="card-img";B&&(n="card-img-top"),o&&(n="card-img-bottom");var l=Object(E.k)(Z()(e,n),a);return Q.a.createElement(g,Object(s.a)({},t,{className:l}))};m.propTypes=I,m.defaultProps={tag:"img"};var C=m,y={tag:E.o,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(A){var e=A.className,a=A.cssModule,B=A.innerRef,o=A.tag,g=Object(r.a)(A,["className","cssModule","innerRef","tag"]),t=Object(E.k)(Z()(e,"card-body"),a);return Q.a.createElement(o,Object(s.a)({},g,{className:t,ref:B}))};u.propTypes=y,u.defaultProps={tag:"div"};var d=u,M={tag:E.o,className:l.a.string,cssModule:l.a.object},V=function(A){var e=A.className,a=A.cssModule,B=A.tag,o=Object(r.a)(A,["className","cssModule","tag"]),g=Object(E.k)(Z()(e,"card-title"),a);return Q.a.createElement(B,Object(s.a)({},o,{className:g}))};V.propTypes=M,V.defaultProps={tag:"div"};var f=V,v={tag:E.o,className:l.a.string,cssModule:l.a.object},p=function(A){var e=A.className,a=A.cssModule,B=A.tag,o=Object(r.a)(A,["className","cssModule","tag"]),g=Object(E.k)(Z()(e,"card-text"),a);return Q.a.createElement(B,Object(s.a)({},o,{className:g}))};p.propTypes=v,p.defaultProps={tag:"p"};var O=p,b=a(13),X=a.p+"static/media/MatchPic.eb530ddf.png",S=a(3),h=[{img:"data:image/png;base64,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",path:"/puzzle-15",name:"Puzzle 15",text:"Reorder numbers in the correct order"},{img:X,path:"/match-the-picture",name:"Match the picture",text:"Find all animal pairs !"},{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAAHkCAYAAADvrlz5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAolSURBVHhe7doxqh3JGYDRmcVYkSMtw9GAN+BoBA60gUHME2gFsnk4lAKLCcUDhcNFiYNBGCfegkHegMEGtekLyi5U0H1rvvv6BCdqqJ+KPqqqv3n69OkCAPy6BBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkAAgQZAAIEGQACBBkA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",path:"/snake",name:"Snake",text:"Retro snake game. Did you remember it ?"}];e.default=function(){return Object(S.jsx)(o.a,{children:Object(S.jsx)(g.a,{className:"align-items-stretch games-wraper",children:h.map((function(A){return Object(S.jsx)(t.a,{sm:12,md:4,children:Object(S.jsxs)(G,{children:[Object(S.jsx)(C,{top:!0,width:"100%",src:A.img,alt:"Card image cap"}),Object(S.jsxs)(d,{children:[Object(S.jsx)(f,{children:A.name}),Object(S.jsx)(O,{children:A.text}),Object(S.jsx)(b.b,{className:"btn btn-primary",to:A.path,children:"Play"})]})]})},A.path)}))})})}}}]);
//# sourceMappingURL=8.55d1b1c4.chunk.js.map