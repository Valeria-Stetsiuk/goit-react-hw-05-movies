"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{854:function(e,n,t){t.d(n,{a:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("p",{children:"Loading ..."})}},761:function(e,n,t){t.d(n,{B:function(){return c}});var r,a=t(168),c=t(444).ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n"])))},549:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r,a,c,s,i,o,u,l=t(861),d=t(885),p=t(757),f=t.n(p),h=t(739),v=t(791),x=t(555),g=t(854),m=t(761),b=t(874),Z=t(168),j=t(444),w=j.ZP.div(r||(r=(0,Z.Z)([""]))),k=j.ZP.img(a||(a=(0,Z.Z)([""]))),y=j.ZP.div(c||(c=(0,Z.Z)(["\n  gap: 20px;\n  padding: 20px;\n  display: flex;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n"]))),_=j.ZP.button(s||(s=(0,Z.Z)(["\n  margin: 10px auto 10px 20px;\n  color: #ffffff;\n  background-color: #07c;\n  border-color: transparent;\n  border-radius: 3px;\n  padding: 8px;\n  cursor: pointer;\n"]))),P=j.ZP.h3(i||(i=(0,Z.Z)(["\n  padding-left: 20px;\n  color: #ff0bef;\n"]))),S=j.ZP.ul(o||(o=(0,Z.Z)(["\n  list-style: none;\n  margin: 0;\n"]))),M=j.ZP.p(u||(u=(0,Z.Z)(["\n  color: #fff;\n"]))),U=t(184),B=function(){var e,n,t,r,a,c=(0,v.useState)(null),s=(0,d.Z)(c,2),i=s[0],o=s[1],u=(0,v.useState)(!1),p=(0,d.Z)(u,2),Z=p[0],j=p[1],B=(0,v.useState)(null),C=(0,d.Z)(B,2),F=C[0],I=C[1],O=(0,h.UO)().movieId,G=(0,h.TH)(),R=(0,h.s0)();(0,v.useEffect)((function(){var e=function(){var e=(0,l.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,x.y.fetchMovieById(n);case 4:t=e.sent,console.log(t),o(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),I(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(n){return e.apply(this,arguments)}}();e(O)}),[O]);return console.log(i),(0,U.jsxs)(U.Fragment,{children:[Z&&(0,U.jsx)(m.B,{children:(0,U.jsx)(g.a,{})}),i&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(_,{type:"button",onClick:function(){var e,n;R(null!==(e=null===G||void 0===G||null===(n=G.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")},children:"Go back"}),(0,U.jsxs)(y,{children:[(0,U.jsx)(w,{children:(0,U.jsx)(k,{src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:null!==(e=null!==(n=i.title)&&void 0!==n?n:i.original_name)&&void 0!==e?e:i.name,width:"250"})}),(0,U.jsxs)("div",{children:[(0,U.jsxs)("h2",{children:[null!==(t=null!==(r=i.title)&&void 0!==r?r:i.original_name)&&void 0!==t?t:i.name," (",new Date(i.release_date).getFullYear(),")"]}),(0,U.jsxs)(M,{children:["User score: ",Math.round(10*i.vote_average)," %"]}),(0,U.jsx)("h3",{children:"Genres"}),(0,U.jsx)(M,{children:null===(a=i.genres)||void 0===a?void 0:a.map((function(e){return e.name})).join(", ")}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsx)(M,{children:i.overview})]})]}),(0,U.jsx)(P,{children:"Additional information"}),(0,U.jsxs)(S,{children:[(0,U.jsx)("li",{children:(0,U.jsx)(b.r,{to:"cast",state:G.state,children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(b.r,{to:"reviews",state:G.state,children:"Reviews"})})]})]}),F&&(0,U.jsx)("p",{children:"Ooops!"}),(0,U.jsx)(v.Suspense,{fallback:(0,U.jsx)(g.a,{}),children:(0,U.jsx)(h.j3,{})})]})}},555:function(e,n,t){t.d(n,{y:function(){return o}});var r=t(861),a=t(757),c=t.n(a),s=t(44),i="aaa1d6367cdda8ac8cbbbe618a1aa87a",o={fetchMovies:function(){return(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.next=5,t.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieCast:function(e){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieReviews:function(e){return(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()}}}}]);
//# sourceMappingURL=549.a157c452.chunk.js.map