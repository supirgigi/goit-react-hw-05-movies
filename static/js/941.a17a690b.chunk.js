"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{7941:function(r,e,t){t.r(e),t.d(e,{default:function(){return x}});var n=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(7689),o=t(7825),f=t(2758),p=t(8197),v="reviews_list__oZBcb",h="reviews_title__QxhAn",l=t(184),d=function(r){var e=r.reviews;return(0,l.jsx)("ul",{className:v,children:e.map((function(r){var e=r.author,t=r.content,n=r.id;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h4",{className:h,children:["Author: ",e]}),(0,l.jsx)("p",{children:t})]},n)}))})};d.defaultProps={reviews:[]};var m=d,x=function(){var r=(0,s.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),d=h[0],x=h[1],w=(0,s.useState)(null),g=(0,a.Z)(w,2),b=g[0],k=g[1],Z=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return x(!0),k(null),r.prev=2,r.next=5,(0,p.tx)(Z);case 5:if(e=r.sent,0!==(t=e.results).length){r.next=9;break}throw new Error("No reviews available for this movie");case 9:u(t),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),k(r.t0);case 15:return r.prev=15,x(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[2,12,15,18]])})));return function(){return r.apply(this,arguments)}}();r()}),[Z]),(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)(o.Z,{}),b&&(0,l.jsx)(f.Z,{error:b.message}),t.length>0&&(0,l.jsx)(m,{reviews:t})]})}},8197:function(r,e,t){t.d(e,{Hg:function(){return o},M1:function(){return v},TP:function(){return p},sQ:function(){return s},tx:function(){return h},z1:function(){return f}});var n=t(5861),a=t(7757),u=t.n(a),c=t(1912),s="https://image.tmdb.org/t/p/w300",i=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d69968ee858c93c3dbc043339ed72979",page:1}}),o=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/movie/day");case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/search/movie",{params:{query:e}});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},2758:function(r,e,t){t.d(e,{Z:function(){return u}});var n="error-msg_text__XCU1C",a=t(184),u=function(r){var e=r.error;return(0,a.jsx)("p",{className:n,children:e})}}}]);
//# sourceMappingURL=941.a17a690b.chunk.js.map