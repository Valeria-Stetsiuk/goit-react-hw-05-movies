"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{854:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(184),a=function(){return(0,r.jsx)("p",{children:"Loading ..."})}},761:function(e,t,n){n.d(t,{B:function(){return c}});var r,a=n(168),c=n(444).ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n"])))},436:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,a,c,s=n(861),i=n(885),o=n(757),u=n.n(o),p=n(854),f=n(791),h=n(739),d=n(15),l=n(761),v=n(168),x=n(444),g=x.ZP.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),m=x.ZP.li(a||(a=(0,v.Z)(["\n  width: calc((100% - 40px) / 5);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n"]))),w=x.ZP.img(c||(c=(0,v.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n"]))),Z=n(184),b=function(e){var t=e.movieInfo.cast;return(0,Z.jsx)("div",{children:t.length>0?(0,Z.jsx)(g,{children:t.map((function(e){var t=e.id,n=e.name,r=e.profile_path,a=e.character;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg",alt:n,width:"50",height:"75"}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("p",{children:n}),(0,Z.jsxs)("p",{children:["Character: ",a]})]})]},t)}))}):(0,Z.jsx)("p",{children:"We have no more details"})})},k=function(){var e=(0,f.useState)(null),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,f.useState)(!1),c=(0,i.Z)(a,2),o=c[0],v=c[1],x=(0,f.useState)(null),g=(0,i.Z)(x,2),m=g[0],w=g[1],k=(0,h.UO)().movieId;return(0,f.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,d.y.fetchMovieCast(t);case 4:n=e.sent,r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();e(k)}),[k]),(0,Z.jsxs)(Z.Fragment,{children:[o&&(0,Z.jsx)(l.B,{children:(0,Z.jsx)(p.a,{})}),m&&(0,Z.jsx)("p",{children:"We have no more details"}),n&&(0,Z.jsx)(b,{movieInfo:n})]})}},15:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s=n(44),i="aaa1d6367cdda8ac8cbbbe618a1aa87a",o={fetchMovies:function(){return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.next=5,n.data.results;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieCast:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=436.855b4a1f.chunk.js.map