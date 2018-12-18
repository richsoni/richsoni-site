(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"query",function(){return y});var r=n(6),a=n.n(r),o=(n(66),n(164),n(0)),i=n.n(o),s=(n(174),n(171)),c=n(168),l=n(173),u=n(161),m=n(156),f=n(141),d=n(137),p=[{title:"Song",key:"title"},{title:"Artists",key:"artists"},{title:"Date Composed",key:"composedAt",sortASC:Object(l.a)("composedAtMoment"),sortDESC:Object(l.b)("composedAtMoment")},{title:"Times Played",key:"performanceCount"},{title:"First Performed",key:"firstPerformance",sortASC:Object(l.a)("firstPerformanceMoment"),sortDESC:Object(l.b)("firstPerformanceMoment")},{title:"Last Performed",key:"lastPerformance",sortASC:Object(l.a)("lastPerformanceMoment"),sortDESC:Object(l.b)("lastPerformanceMoment")}],h=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(f.a,null,i.a.createElement(d.b,null,i.a.createElement(d.a,null,"Songs")),i.a.createElement(c.a,{tabs:this.tabs()}))},n.tabs=function(){var e=function(e){var t=e.data.songs.edges.map(function(e){return e.node}),n=Object(m.a)(e.data.events,e.data.songs);return t.map(function(e){var t=e.frontmatter.artists.sort().join(", "),r=Object(u.a)(e.frontmatter.composed_at),a=n[e.fields.basename]||[],o=a[a.length-1],i=Object(u.a)(o),s=a[0],c=Object(u.a)(s);return{title:e.frontmatter.title,composedAt:r?r.format("YYYY-MM-DD"):null,artists:t,isMine:!!t.match("Rich Soni"),composedAtMoment:r,url:e.fields.url,performanceCount:a.length,firstPerformanceMoment:i,firstPerformance:o,lastPerformanceMoment:c,lastPerformance:s,key:e.id}})}(this.props);return[{content:function(){return i.a.createElement(s.a,{fields:p,items:e})},title:"All"},{content:function(){return i.a.createElement(s.a,{fields:p,items:e.filter(function(e){return e.isMine})})},title:"Originals"},{content:function(){return i.a.createElement(s.a,{fields:p,items:e.filter(function(e){return!e.isMine})})},title:"Covers"}]},t}(i.a.Component),y="2113294530"},136:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),s=n(46),c=n.n(s),l=n(143),u=n.n(l),m=n(138),f=n.n(m),d=n(4),p=n.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("li",{className:u.a.container+" "+f.a.hoverDim,style:c()({listStyle:"none"},this.props.style)},i.a.createElement("a",{title:this.props.service,href:this.props.href,className:u.a.a},i.a.createElement("i",{className:"fa fa-"+this.props.service}),i.a.createElement("span",null,this.props.children)))},t}(i.a.Component);h.propTypes={service:p.a.string,href:p.a.string,style:p.a.object},h.defaultProps={style:{}}},137:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),o=n(152),i=n.n(o),s=function(e){return e.href?a.a.createElement("a",{className:i.a.breadcrumb,href:e.href},e.children):a.a.createElement("span",{className:i.a.breadcrumb},e.children)},c=function(e){return a.a.createElement("section",{className:i.a.breadcrumbs},e.children)}},138:function(e,t,n){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},139:function(e,t,n){e.exports={pulse:"pulse-module--pulse--39LUu"}},141:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(151),i=n.n(o),s=n(150);t.a=function(e){return a.a.createElement(s.a,null,a.a.createElement("article",{className:i.a.article},e.children))}},142:function(e,t,n){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},143:function(e,t,n){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},144:function(e,t,n){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},145:function(e,t,n){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},146:function(e,t,n){e.exports={container:"index-module--container--1ecKf"}},147:function(e,t,n){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},148:function(e,t,n){e.exports=n.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},149:function(e,t,n){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},150:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(6),i=n.n(o),s=n(140),c=n(142),l=n.n(c),u=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],m=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],f=n(136),d=m.map(function(e){return a.a.createElement(f.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),p=u.map(function(e){return a.a.createElement("a",{key:e.url,className:l.a.navItem,href:e.url},e.title)}),h=function(e){return e.display?a.a.createElement("div",{className:l.a.overlay},p,a.a.createElement("div",{className:l.a.social},d),a.a.createElement("div",{className:l.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):a.a.createElement("div",null)},y=n(144),v=n.n(y),g=n(145),E=n.n(g),b=n(139),S=n(46),k=function(e){return a.a.createElement("div",{className:E.a.container,style:S({},e.style||{})},a.a.createElement("a",{style:{textDecoration:"none"},className:b.pulse,href:"/"},a.a.createElement("div",{className:E.a.logo200})))},C=n(4),x=n.n(C),D=n(146),N=n.n(D),w="white",M=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,n=e.toggleState;return a.a.createElement("a",{className:N.a.container,onClick:t},a.a.createElement("span",{className:"fa-stack fa-lg "+b.pulse},a.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:w,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?0:"1em"}}),a.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:w,transitionProperty:"font-size",transitionDuration:".5s",fontSize:n?"1em":0}})))},t}(a.a.Component);M.propTypes={onToggle:x.a.func},M.deafultProps={onToggle:function(){}};var P=n(138),T=n.n(P),A=m.map(function(e){return a.a.createElement(f.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),O=u.map(function(e){return a.a.createElement("div",{key:e.url,className:T.a.hoverDim},a.a.createElement("a",{className:v.a.navItem,href:e.url},e.title))}),j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return a.a.createElement("header",{className:v.a.header},a.a.createElement("div",{style:{}},a.a.createElement("nav",{style:{right:e?80:-1e4},className:""+v.a.navItemsContainer},O),a.a.createElement("nav",{style:{right:e?-1e4:64},className:""+v.a.socialButtonsContainer},A)))},t}(a.a.Component),Y=function(e){function t(t){var n;return(n=e.call(this)||this).state={toggleState:!1},n}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.state.toggleState;return a.a.createElement("div",null,a.a.createElement(s.a,{query:{maxWidth:1018}},a.a.createElement(h,{display:e})),a.a.createElement(s.a,{query:{minWidth:1018}},a.a.createElement(j,{showNavMenu:e})),a.a.createElement(k,{style:{position:"fixed"}}),a.a.createElement(M,{toggleState:e,onToggle:this.onToggle.bind(this)}))},n.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(a.a.Component),F={display:"block",width:"100%",height:70},I={display:"block",width:"100%",height:0},K=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement(s.a,{query:{maxWidth:1018}},a.a.createElement("div",{style:F})),a.a.createElement(s.a,{query:{minWidth:1018}},a.a.createElement("div",{style:I})))},t}(a.a.Component),L=n(147),W=n.n(L),q=m.map(function(e){return a.a.createElement(f.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),z=function(){return a.a.createElement("div",{className:W.a.footer},a.a.createElement("div",{className:W.a.social},q),a.a.createElement("div",{className:W.a.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},B=n(154),H=n.n(B),R=n(148),G=n.n(R),J=function(){return a.a.createElement(H.a,null,a.a.createElement("link",{rel:"icon",type:"image/png",href:G.a}),a.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),a.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),a.a.createElement("meta",{property:"og:type",content:"website"}))},Z=n(149),_=n.n(Z);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:_.a.site},a.a.createElement(J,null),a.a.createElement(Y,null),a.a.createElement(K,null),a.a.createElement("div",{className:_.a.content},t),a.a.createElement(z,null))}},151:function(e,t,n){e.exports={article:"style-module--article--3TXyA"}},152:function(e,t,n){e.exports={breadcrumbs:"style-module--breadcrumbs--1rmGG",breadcrumb:"style-module--breadcrumb--O0EDF"}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});n(28),n(157),n(158);var r=function(e){return function(e){return e.edges.map(function(e){return e.node}).filter(function(e){return e.frontmatter.setlist})}(e).reduce(function(e,t){return(t.frontmatter.setlist||[]).map(function(n){e[n]||(e[n]=[]),e[n].push(t.fields.date)}),e},{})},a=function(e,t){return e.edges.filter(function(e){return e.node.frontmatter.setlist}).filter(function(e){return e.node.frontmatter.setlist.includes(t)})},o=function(e){return e.edges.map(function(e){return e.node}).reduce(function(e,t){var n;return Object.assign({},e,((n={})[t.fields.basename]=t,n))},{})}},157:function(e,t,n){"use strict";var r=n(21),a=n(67)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},158:function(e,t,n){"use strict";var r=n(21),a=n(159);r(r.P+r.F*n(160)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},159:function(e,t,n){var r=n(68),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},160:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},161:function(e,t,n){"use strict";n(66);var r=n(153),a=n.n(r);t.a=function(e){var t="YYYY-MM-DD HH:mm:ss Z";if(!e)return null;e.match(/\d\d\d\d-\d\d-\d\d/)&&(t="YYYY-MM-DD");var n=a.a.utc(e,t);return n.isValid()?n:null}},164:function(e,t,n){"use strict";var r=n(21),a=n(25),o=n(29),i=n(22),s=[].sort,c=[1,2,3];r(r.P+r.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(170)(s)),"Array",{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),a(e))}})},168:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),s=n(169),c=n.n(s),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:0},n}return a()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:c.a.tabs},this.props.tabs.map(function(t,n){var r=e.state.activeTab===n?c.a.activeTab:c.a.tab;return i.a.createElement("div",{key:t.title,className:r,onClick:function(){e.setState({activeTab:n})}},t.title)})),i.a.createElement("div",null,this.props.tabs[this.state.activeTab].content()))},t}(i.a.Component)},169:function(e,t,n){e.exports={tabs:"styles-module--tabs--3owAb",tab:"styles-module--tab--1osZO",activeTab:"styles-module--activeTab--2Ievr styles-module--tab--1osZO"}},170:function(e,t,n){"use strict";var r=n(22);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},171:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(6),a=n.n(r),o=n(48),i=n.n(o),s=(n(69),n(164),n(0)),c=n.n(s),l=n(172),u=n.n(l),m=!0,f=function(e){var t=e.url,n=e.fields,r=e.attributes;return c.a.createElement("a",{href:t}," ",n.map(function(e){var t=r[e.key];return c.a.createElement("span",{key:e.key}," ",String(t||"")," ")}))},d=function(e,t,n){var r=e.fields,a=e.items,o=n===m?"ASC":"DESC",i=r.find(function(e){return e.key===t});i||console.error("Field Missing ",t);var s=i["sort"+o];return s?a.sort(s):a.sort(function(e,r){var a=e[t],o=r[t],i=0!==a&&!a,s=0!==a&&!a;return i&&s?0:n===m?i?1:s?-1:"string"==typeof a&&"string"==typeof o?a.localeCompare(o):a-o:s?1:i?-1:"string"==typeof a&&"string"==typeof o?o.localeCompare(a):o-a})},p=function(e){function t(t){var n;n=e.call(this,t)||this;var r=t.sortDefaultKey||t.fields[0].key,a=t.sortDefaultDirection||m,o=d(t,r,a);return n.state={sortKey:r,sortDirection:a,items:o},n.changeSort=n.changeSort.bind(i()(i()(n))),n}a()(t,e);var n=t.prototype;return n.changeSort=function(e){if(this.state.sortKey===e.key)return this.setState({sortDirection:!this.state.sortDirection});this.setState({sortKey:e.key,sortDirection:m})},n.render=function(){var e=this,t=this.props.fields,n=this.state.items;return c.a.createElement("div",{className:u.a.table},c.a.createElement("header",null,t.map(function(t){return c.a.createElement("span",{key:t.key,className:(n=e.state.sortKey,r=t,a=e.state.sortDirection,o=n===r.key,o&&a===m?u.a.titleSortingASC:o&&a!==m?u.a.titleSortingDESC:u.a.titleNotSorting),onClick:function(){return e.changeSort(t)}},t.title);var n,r,a,o})),n.map(function(e){return c.a.createElement(f,{key:e.key,url:e.url,fields:t,attributes:e})}))},n.componentDidUpdate=function(e,t){t.sortKey===this.state.sortKey&&t.sortDirection===this.state.sortDirection||this.setState({items:d(this.props,this.state.sortKey,this.state.sortDirection)})},n.componentWillReceiveProps=function(e){this.setState({items:d(e,this.state.sortKey,this.state.sortDirection)})},t}(c.a.Component)},172:function(e,t,n){e.exports={emptyField:"styles-module--emptyField--1_Vrs",table:"styles-module--table--2WI1a",titleSortingASC:"styles-module--titleSortingASC--3RbMu",titleSortingDESC:"styles-module--titleSortingDESC--308zs",titleNotSorting:"styles-module--titleNotSorting--2MF1S"}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=function(e,t){return e?t?e||t?e-t:0:-1:1},a=function(e){return function(t,n){return r(t[e],n[e])}},o=function(e){return function(t,n){return a=t[e],o=n[e],r(o,a);var a,o}}},174:function(e,t,n){e.exports={container:"style-module--container--1TCtv",postList:"style-module--postList--vdNE9",inactiveStack:"style-module--inactiveStack--4vnsy",controlBar:"style-module--controlBar--1D8nb"}}}]);
//# sourceMappingURL=component---src-pages-songs-js-8b9c14ded30ad5e8bee4.js.map