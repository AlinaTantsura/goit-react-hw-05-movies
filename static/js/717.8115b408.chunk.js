"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{197:function(e,n,t){t.d(n,{Hx:function(){return m},V0:function(){return l},Y5:function(){return d},uV:function(){return x},vw:function(){return c}});var r=t(861),i=t(757),s=t.n(i),a=t(340),o={baseURL:"https://api.themoviedb.org",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ"}};function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/3/trending/all/day?language=en-US",o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/3/movie/".concat(n),o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/3/movie/".concat(n,"/credits"),o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/3/movie/".concat(n,"/reviews"),o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},717:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,i=t(168),s=t(87),a=t(867),o=a.ZP.button((function(){return{marginLeft:"15px",marginBottom:"10px",padding:"5px",border:"solid 1px lightgrey",borderRadius:"4px",svg:{fill:"black",stroke:"black"},"&:hover, &:focus":{borderColor:"grey",backgroundColor:"grey",a:{color:"white"},svg:{fill:"white",stroke:"white"}}}})),c=(0,a.ZP)(s.rU)(r||(r=(0,i.Z)(["\n    text-decoration: none;\n    color: black;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    // button:hover, button:focus &{\n    //     color: white;\n    // }\n"]))),u=t(184),l=function(e){var n=e.to,t=e.children;return(0,u.jsx)(o,{children:(0,u.jsx)(c,{to:n,children:t})})},p=t(861),d=t(439),h=t(757),x=t.n(h),f=t(197),m=t(686),g=t(791),v=t(689),j=a.ZP.div((function(){return{padding:"15px",display:"flex",gap:"15px",ul:{display:"flex",gap:"10px",listStyle:"none",padding:0},img:{width:"250px",height:"350px",objectFit:"cover",borderRadius:"6px"}}})),w=a.ZP.div((function(){return{padding:"15px",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",h4:{margin:0,padding:0},ul:{marginBottom:0}}})),b=function(e){var n=e.movieId,t=(0,v.TH)(),r=(0,g.useState)(null),i=(0,d.Z)(r,2),a=i[0],o=i[1],c=(0,v.s0)();return(0,g.useEffect)((function(){function e(){return(e=(0,p.Z)(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Y5)(n);case 3:t=e.sent,o(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),m.Notify.failure("There is no information about movie"),c("/");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n,c]),(0,u.jsx)(u.Fragment,{children:a&&(0,u.jsxs)("section",{children:[(0,u.jsxs)(j,{children:[(0,u.jsx)("img",{src:a.poster_path?"https://image.tmdb.org/t/p/w500/".concat(a.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:a.title||a.name,width:250}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:a.title||a.name}),(0,u.jsxs)("p",{children:["User score: ",a.vote_average]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:a.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("ul",{children:a.genres.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,u.jsxs)(w,{children:[(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"cast",state:t.state,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"reviews",state:t.state,children:"Review"})})]})]})]})})},y=function(){var e,n,t=null!==(e=null===(n=(0,v.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",r=(0,v.UO)().id;return(0,u.jsxs)("main",{children:[(0,u.jsxs)(l,{to:t,children:[(0,u.jsx)("svg",{fill:"none",height:"16",viewBox:"0 0 48 48",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsxs)("g",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4",children:[(0,u.jsx)("path",{d:"m5.79891 24h35.99999"}),(0,u.jsx)("path",{d:"m17.7988 36-11.99997-12 11.99997-12"})]})})," GO BACK"]}),(0,u.jsx)(b,{movieId:r}),(0,u.jsx)(g.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading info..."}),children:(0,u.jsx)(v.j3,{})})]})}}}]);
//# sourceMappingURL=717.8115b408.chunk.js.map