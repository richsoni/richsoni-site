(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var r=n(0),a=n.n(r),o=(n(163),n(153)),i=n.n(o),s=n(156),c=n(141),l=n(137);t.default=function(e){var t=e.data,n=t.song,r=(new i.a(n.fields.composedAt).format("MM/DD/YYYY"),Object(s.b)(t.events,n.fields.basename)),o=s.b.length>0?"Performed Live: "+r.length+" "+(1===r.length?"time":"times"):"";return a.a.createElement(c.a,null,a.a.createElement(l.b,null,a.a.createElement(l.a,{href:"/songs"},"Songs"),a.a.createElement(l.a,null,n.frontmatter.title)),o,a.a.createElement("div",{style:{marginTop:"2em"},dangerouslySetInnerHTML:{__html:n.html}}),a.a.createElement("h3",null,"Comments"))};var u="355524615"},136:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),s=n(46),c=n.n(s),l=n(143),u=n.n(l),m=n(138),f=n.n(m),d=n(4),p=n.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("li",{className:u.a.container+" "+f.a.hoverDim,style:c()({listStyle:"none"},this.props.style)},i.a.createElement("a",{title:this.props.service,href:this.props.href,className:u.a.a},i.a.createElement("i",{className:"fa fa-"+this.props.service}),i.a.createElement("span",null,this.props.children)))},t}(i.a.Component);h.propTypes={service:p.a.string,href:p.a.string,style:p.a.object},h.defaultProps={style:{}}},137:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),o=n(152),i=n.n(o),s=function(e){return e.href?a.a.createElement("a",{className:i.a.breadcrumb,href:e.href},e.children):a.a.createElement("span",{className:i.a.breadcrumb},e.children)},c=function(e){return a.a.createElement("section",{className:i.a.breadcrumbs},e.children)}},138:function(e,t,n){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},139:function(e,t,n){e.exports={pulse:"pulse-module--pulse--39LUu"}},141:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(151),i=n.n(o),s=n(150);t.a=function(e){return a.a.createElement(s.a,null,a.a.createElement("article",{className:i.a.article},e.children))}},142:function(e,t,n){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},143:function(e,t,n){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},144:function(e,t,n){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},145:function(e,t,n){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},146:function(e,t,n){e.exports={container:"index-module--container--1ecKf"}},147:function(e,t,n){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},148:function(e,t,n){e.exports=n.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},149:function(e,t,n){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},150:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(6),i=n.n(o),s=n(140),c=n(142),l=n.n(c),u=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],m=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],f=n(136),d=m.map(function(e){return a.a.createElement(f.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),p=u.map(function(e){return a.a.createElement("a",{key:e.url,className:l.a.navItem,href:e.url},e.title)}),h=function(e){return e.display?a.a.createElement("div",{className:l.a.overlay},p,a.a.createElement("div",{className:l.a.social},d),a.a.createElement("div",{className:l.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):a.a.createElement("div",null)},v=n(144),y=n.n(v),g=n(145),E=n.n(g),b=n(139),x=n(46),N=function(e){return a.a.createElement("div",{className:E.a.container,style:x({},e.style||{})},a.a.createElement("a",{style:{textDecoration:"none"},className:b.pulse,href:"/"},a.a.createElement("div",{className:E.a.logo200})))},w=n(4),k=n.n(w),S=n(146),C=n.n(S),T="white",D=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,n=e.toggleState;return a.a.createElement("a",{className:C.a.container,onClick:t},a.a.createElement("span",{className:"fa-stack fa-lg "+b.pulse},a.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:T,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?0:"1em"}}),a.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:T,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?"1em":0}})))},t}(a.a.Component);D.propTypes={onToggle:k.a.func},D.deafultProps={onToggle:function(){}};var I=n(138),L=n.n(I),P=m.map(function(e){return a.a.createElement(f.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),q=u.map(function(e){return a.a.createElement("div",{key:e.url,className:L.a.hoverDim},a.a.createElement("a",{className:y.a.navItem,href:e.url},e.title))}),j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return a.a.createElement("header",{className:y.a.header},a.a.createElement("div",{style:{}},a.a.createElement("nav",{style:{right:e?80:-1e4},className:""+y.a.navItemsContainer},q),a.a.createElement("nav",{style:{right:e?-1e4:64},className:""+y.a.socialButtonsContainer},P)))},t}(a.a.Component),F=function(e){function t(t){var n;return(n=e.call(this)||this).state={toggleState:!1},n}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.state.toggleState;return a.a.createElement("div",null,a.a.createElement(s.a,{query:{maxWidth:1018}},a.a.createElement(h,{display:e})),a.a.createElement(s.a,{query:{minWidth:1018}},a.a.createElement(j,{showNavMenu:e})),a.a.createElement(N,{style:{position:"fixed"}}),a.a.createElement(D,{toggleState:e,onToggle:this.onToggle.bind(this)}))},n.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(a.a.Component),O={display:"block",width:"100%",height:70},W={display:"block",width:"100%",height:0},z=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement(s.a,{query:{maxWidth:1018}},a.a.createElement("div",{style:O})),a.a.createElement(s.a,{query:{minWidth:1018}},a.a.createElement("div",{style:W})))},t}(a.a.Component),M=n(147),Y=n.n(M),A=m.map(function(e){return a.a.createElement(f.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),B=function(){return a.a.createElement("div",{className:Y.a.footer},a.a.createElement("div",{className:Y.a.social},A),a.a.createElement("div",{className:Y.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},G=n(154),H=n.n(G),J=n(148),_=n.n(J),K=function(){return a.a.createElement(H.a,null,a.a.createElement("link",{rel:"icon",type:"image/png",href:_.a}),a.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),a.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),a.a.createElement("meta",{property:"og:type",content:"website"}))},R=n(149),U=n.n(R);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:U.a.site},a.a.createElement(K,null),a.a.createElement(F,null),a.a.createElement(z,null),a.a.createElement("div",{className:U.a.content},t),a.a.createElement(B,null))}},151:function(e,t,n){e.exports={article:"style-module--article--3TXyA"}},152:function(e,t,n){e.exports={breadcrumbs:"style-module--breadcrumbs--1rmGG",breadcrumb:"style-module--breadcrumb--O0EDF"}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});n(28),n(157),n(158);var r=function(e){return function(e){return e.edges.map(function(e){return e.node}).filter(function(e){return e.frontmatter.setlist})}(e).reduce(function(e,t){return(t.frontmatter.setlist||[]).map(function(n){e[n]||(e[n]=[]),e[n].push(t.fields.date)}),e},{})},a=function(e,t){return e.edges.filter(function(e){return e.node.frontmatter.setlist}).filter(function(e){return e.node.frontmatter.setlist.includes(t)})},o=function(e){return e.edges.map(function(e){return e.node}).reduce(function(e,t){var n;return Object.assign({},e,((n={})[t.fields.basename]=t,n))},{})}},157:function(e,t,n){"use strict";var r=n(21),a=n(67)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},158:function(e,t,n){"use strict";var r=n(21),a=n(159);r(r.P+r.F*n(160)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},159:function(e,t,n){var r=n(68),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},160:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},163:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-songs-js-6ca0eff0ffafb912988f.js.map