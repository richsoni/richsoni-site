(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{125:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return m});var r=n(0),a=n.n(r),u=n(162),c=n.n(u),i=(n(153),n(141)),o=n(137),s=n(166),l=n(156),f=function(t){return a.a.createElement("li",null,a.a.createElement("a",{href:t.data.fields.url},t.data.frontmatter.title))},d=function(t){var e=t.tracks,n=t.songs,r=Object(l.c)(n);return a.a.createElement("ol",{className:"tracklist"},e.map(function(t){return a.a.createElement(f,{key:t,data:r[t]})}))};e.default=function(t){var e=t.data,n=e.album,r=e.songs;return a.a.createElement(i.a,null,a.a.createElement(o.b,null,a.a.createElement(o.a,{href:"/albums"},"Albums"),a.a.createElement(o.a,null,n.frontmatter.title)),a.a.createElement("h2",null,"Release Date: ",n.frontmatter.released_on),a.a.createElement(s.a,{data:n,className:c.a.artwork,overlay:!1,clickable:!1}),a.a.createElement("div",{style:{backgroundImage:"url(/images/releases/"+n.fields.basename+".png)"}}),a.a.createElement(d,{songs:r,tracks:n.frontmatter.tracklist}))};var m="202070333"},156:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u});n(28),n(157),n(158);var r=function(t){return function(t){return t.edges.map(function(t){return t.node}).filter(function(t){return t.frontmatter.setlist})}(t).reduce(function(t,e){return(e.frontmatter.setlist||[]).map(function(n){t[n]||(t[n]=[]),t[n].push(e.fields.date)}),t},{})},a=function(t,e){return t.edges.filter(function(t){return t.node.frontmatter.setlist}).filter(function(t){return t.node.frontmatter.setlist.includes(e)})},u=function(t){return t.edges.map(function(t){return t.node}).reduce(function(t,e){var n;return Object.assign({},t,((n={})[e.fields.basename]=e,n))},{})}},157:function(t,e,n){"use strict";var r=n(21),a=n(67)(!0);r(r.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},158:function(t,e,n){"use strict";var r=n(21),a=n(159);r(r.P+r.F*n(160)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},159:function(t,e,n){var r=n(68),a=n(23);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},160:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},162:function(t,e,n){t.exports={wrapper:"style-module--wrapper--aOfU0",artwork:"style-module--artwork--2ufHx"}}}]);
//# sourceMappingURL=component---src-templates-albums-js-5a298648395e2178fbbf.js.map