"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{2933:function(t,r,e){e.r(r),e.d(r,{default:function(){return x}});var n=e(5861),a=e(9439),c=e(7757),u=e.n(c),s=e(2791),i=e(7689),o=e(7825),p=e(2758),f=e(8197),l=e(1353),v={list:"cast_list__51ksD",item:"cast_item__aHuI4"},h=e(184),m=function(t){var r=t.cast;return(0,h.jsx)("ul",{className:v.list,children:r.map((function(t){var r=t.name,e=t.character,n=t.id,a=t.profile_path;return(0,h.jsxs)("li",{className:v.item,children:[(0,h.jsx)("img",{src:a?"".concat(f.sQ,"/").concat(a):l,alt:r,className:v.img}),(0,h.jsx)("p",{children:r}),(0,h.jsxs)("p",{children:["Role: ",e]})]},n)}))})};m.defaultProps={cast:[]};var d=m,x=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),m=v[0],x=v[1],w=(0,s.useState)(null),g=(0,a.Z)(w,2),b=g[0],k=g[1],_=(0,i.UO)().id;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),k(null),t.prev=2,t.next=5,(0,f.M1)(_);case 5:if(r=t.sent,0!==(e=r.cast).length){t.next=9;break}throw new Error("No cast info available for this movie");case 9:c(e),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),k(t.t0);case 15:return t.prev=15,x(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]),(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(o.Z,{}),b&&(0,h.jsx)(p.Z,{error:b.message}),e.length>0&&(0,h.jsx)(d,{cast:e})]})}},8197:function(t,r,e){e.d(r,{Hg:function(){return o},M1:function(){return l},TP:function(){return f},sQ:function(){return s},tx:function(){return v},z1:function(){return p}});var n=e(5861),a=e(7757),c=e.n(a),u=e(1912),s="https://image.tmdb.org/t/p/w300",i=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d69968ee858c93c3dbc043339ed72979",page:1}}),o=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},2758:function(t,r,e){e.d(r,{Z:function(){return c}});var n="error-msg_text__XCU1C",a=e(184),c=function(t){var r=t.error;return(0,a.jsx)("p",{className:n,children:r})}},1353:function(t,r,e){t.exports=e.p+"static/media/placeholder.c5eb70baeae9d93f4003.jpg"}}]);
//# sourceMappingURL=933.18518903.chunk.js.map