"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{197:function(e,t,n){n.d(t,{Hx:function(){return v},V0:function(){return f},Y5:function(){return l},uV:function(){return d},vw:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i={baseURL:"https://api.themoviedb.org/3/",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?language=en-US",i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t),i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"),i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"),i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},713:function(e,t,n){n.d(t,{Z:function(){return y}});var r,a=n(861),u=n(439),c=n(757),i=n.n(c),s=n(197),o=n(791),f=n(689),p=n(168),l=n(87),h=n(867),d=h.ZP.li((function(){return{marginBottom:"8px","&:last-child":{marginBottom:0}}})),m=(0,h.ZP)(l.rU)(r||(r=(0,p.Z)(["\n    text-decoration: none;\n    \n    &:hover{\n        color: white;\n        background-color: gray;\n    }\n"]))),v=n(686),x=n(184),y=function(e){var t=e.searchWord,n=void 0===t?"":t,r=(0,f.TH)(),c=(0,o.useState)(null),p=(0,u.Z)(c,2),l=p[0],h=p[1],y=(0,f.s0)();return(0,o.useEffect)((function(){function e(){return e=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=12;break}return e.next=4,(0,s.vw)();case 4:if(0!==(n=e.sent).data.results.length){e.next=9;break}return h(null),v.Notify.failure("There are no movies( Try reload the page)))"),e.abrupt("return");case 9:h(n.data.results),e.next=21;break;case 12:return e.next=14,(0,s.V0)(t);case 14:if(0!==(r=e.sent).data.results.length){e.next=20;break}return h(null),v.Notify.failure("There are no movies( Try change search word or reload the page)))"),y("/movies"),e.abrupt("return");case 20:h(r.data.results);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),v.Notify.failure("Try reloading the page) "+e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[0,23]])}))),e.apply(this,arguments)}!function(t){e.apply(this,arguments)}(n)}),[n,y]),l&&(0,x.jsx)("ul",{children:l.map((function(e){return(0,x.jsx)(d,{children:"/movies"===r.pathname?(0,x.jsx)(m,{to:"".concat(e.id),state:{from:"/movies?query=".concat(n)},children:e.name||e.title}):(0,x.jsx)(m,{to:"movies/".concat(e.id),state:{from:"/"},children:e.name||e.title})},e.id)}))})}},76:function(e,t,n){n.r(t);var r=n(713),a=n(791),u=n(689),c=n(184);t.default=function(e){var t=e.isWrong,n=void 0!==t&&t,i=(0,u.s0)();return(0,a.useEffect)((function(){n&&i("/")}),[n,i]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)(r.Z,{})]})}}}]);
//# sourceMappingURL=76.b0b81796.chunk.js.map