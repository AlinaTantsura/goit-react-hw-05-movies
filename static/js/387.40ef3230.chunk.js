"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{197:function(t,e,n){n.d(e,{Hx:function(){return m},V0:function(){return p},Y5:function(){return f},uV:function(){return d},vw:function(){return s}});var r=n(861),a=n(757),i=n.n(a),c=n(340),u={baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day?language=en-US",u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e),u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits"),u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews"),u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},387:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),i=n(757),c=n.n(i),u=n(197),s=n(791),o=n(689),p=n(867).ZP.ul((function(){return{listStyle:"none",textAlign:"center",padding:"20px",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"15px",li:{paddingBottom:"8px",objectFit:"cover",boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",width:"150px",border:"solid 1px lightgrey",borderRadius:"6px",overflow:"hidden",display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",img:{width:"100%",height:"200px",objectFit:"cover"},p:{margin:0}}}})),l=n(686),f=n(184),h=function(){var t=(0,s.useState)(null),e=(0,a.Z)(t,2),n=e[0],i=e[1],h=(0,o.UO)().id;function d(){return d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.uV)(e);case 3:if(n=t.sent,0!==n.data.cast.length){t.next=9;break}return i(null),l.Notify.failure("There is no information about cast"),t.abrupt("return");case 9:i(n.data.cast),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),d.apply(this,arguments)}return(0,s.useEffect)((function(){!function(t){d.apply(this,arguments)}(h)}),[h]),n&&(0,f.jsx)("section",{children:(0,f.jsx)(p,{children:n.map((function(t){var e=t.id,n=t.character,r=t.name,a=t.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r,width:70}),(0,f.jsx)("p",{children:r}),n&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("b",{children:"Character:"}),(0,f.jsxs)("p",{children:[" ",n]})]})]},e)}))})})}}}]);
//# sourceMappingURL=387.40ef3230.chunk.js.map