(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(6),o=a.n(n),r=a(0),i=a.n(r),l=a(46),s=a.n(l),c=a(142),u=a(137),m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return o()(t,e),t.prototype.render=function(){return i.a.createElement("li",{className:c.container+" "+u.hoverDim,style:s()({listStyle:"none"},this.props.style)},i.a.createElement("a",{title:this.props.service,href:this.props.href,className:c.a},i.a.createElement("i",{className:"fa fa-"+this.props.service}),i.a.createElement("span",null,this.props.children)))},t}(i.a.Component)},137:function(e,t,a){e.exports={hoverDim:"hoverDim-module--hoverDim--EcLTo"}},138:function(e,t,a){e.exports={pulse:"pulse-module--pulse--39LUu"}},139:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l});var n=a(0),o=a.n(n),r=a(152),i=function(e){return e.href?o.a.createElement("a",{className:r.breadcrumb,href:e.href},e.children):o.a.createElement("span",{className:r.breadcrumb},e.children)},l=function(e){return o.a.createElement("section",{className:r.breadcrumbs},e.children)}},141:function(e,t,a){e.exports={overlay:"style-module--overlay--1V03_",navItem:"style-module--navItem--2GWv0",social:"style-module--social--2prH_",copyright:"style-module--copyright--2y2Le"}},142:function(e,t,a){e.exports={container:"style-module--container--329_2",a:"style-module--a--2DIBw"}},143:function(e,t,a){e.exports={header:"index-module--header--26jGI",navItem:"index-module--navItem--xT14K",navItemsContainer:"index-module--navItemsContainer--16JWs",socialButtonsContainer:"index-module--socialButtonsContainer--3JFos"}},144:function(e,t,a){e.exports={container:"index-module--container--1ecKf"}},145:function(e,t,a){e.exports={container:"index-module--container--2wPjm",logo200:"index-module--logo200--3qSh9"}},146:function(e,t,a){e.exports={footer:"style-module--footer--lKfPg",social:"style-module--social--3LW7h",copyright:"style-module--copyright--3OONF"}},147:function(e,t,a){e.exports=a.p+"static/favicon-d0042f69c36c282112e8a2e58576013c.png"},148:function(e,t,a){e.exports={site:"index-module--site--JpZyE",content:"index-module--content--3q0HM"}},149:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(6),i=a.n(r),l=a(140),s=[{url:"/posts",title:"Posts"},{url:"/albums",title:"Albums"},{url:"/songs",title:"Songs"},{url:"/events",title:"Events"}],c=[{service:"spotify",href:"https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O"},{service:"soundcloud",href:"https://soundcloud.com/richsoni"},{service:"play",href:"https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q"},{service:"twitter",href:"https://twitter.com/richsoni"},{service:"facebook",href:"https://www.facebook.com/richsonimusic/"},{service:"github",href:"https://github.com/richsoni"},{service:"envelope",href:"http://richsoni.com/subscribe",value:" Sign Up"}],u=a(136),m=a(141),p=c.map(function(e){return o.a.createElement(u.a,{key:e.service,service:e.service,href:e.href},e.value||"")}),d=s.map(function(e){return o.a.createElement("a",{key:e.url,className:m.navItem,href:e.url},e.title)}),f=function(e){return e.display?o.a.createElement("div",{className:m.overlay},d,o.a.createElement("div",{className:m.social},p),o.a.createElement("div",{className:m.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC")):o.a.createElement("div",null)},h=a(143),y=a(137),g=c.map(function(e){return o.a.createElement(u.a,{key:e.href,service:e.service,href:e.href},e.value||"")}),v=s.map(function(e){return o.a.createElement("div",{key:e.url,className:y.hoverDim},o.a.createElement("a",{className:h.navItem,href:e.url},e.title))}),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return i()(t,e),t.prototype.render=function(){var e=this.props.showNavMenu;return o.a.createElement("header",{className:h.header},o.a.createElement("div",{style:{}},o.a.createElement("nav",{style:{right:e?80:-1e4},className:""+h.navItemsContainer},v),o.a.createElement("nav",{style:{right:e?-1e4:64},className:""+h.socialButtonsContainer},g)))},t}(o.a.Component),b="white",w=a(144),x=a(138).pulse,k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggle,a=e.toggleState;return o.a.createElement("a",{className:w.container,onClick:t},o.a.createElement("span",{className:"fa-stack fa-lg "+x},o.a.createElement("i",{style:{color:"black"},className:"fa fa-circle fa-stack-2x"}),o.a.createElement("i",{className:"fa fa-reorder fa-stack-1x",style:{color:b,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?0:"1em"}}),o.a.createElement("i",{className:"fa fa-close fa-stack-1x",style:{color:b,transitionProperty:"font-size",transitionDuration:".5s",fontSize:a?"1em":0}})))},t}(o.a.Component),I=a(145),N=a(46),S=a(138).pulse,T=function(e){return o.a.createElement("div",{className:I.container,style:N({},e.style||{})},o.a.createElement("a",{style:{textDecoration:"none"},className:S,href:"/"},o.a.createElement("div",{className:I.logo200})))},C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={toggleState:!1},t}i()(t,e);var a=t.prototype;return a.render=function(){var e=this.state.toggleState;return o.a.createElement("div",null,o.a.createElement(l.a,{query:{maxWidth:1018}},o.a.createElement(f,{display:e})),o.a.createElement(l.a,{query:{minWidth:1018}},o.a.createElement(E,{showNavMenu:e})),o.a.createElement(T,{style:{position:"fixed"}}),o.a.createElement(k,{toggleState:e,onToggle:this.onToggle.bind(this)}))},a.onToggle=function(){this.setState({toggleState:!this.state.toggleState})},t}(o.a.Component),D={display:"block",width:"100%",height:70},O={display:"block",width:"100%",height:0},L=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{query:{maxWidth:1018}},o.a.createElement("div",{style:D})),o.a.createElement(l.a,{query:{minWidth:1018}},o.a.createElement("div",{style:O})))},t}(o.a.Component),M=a(146),P=c.map(function(e){return o.a.createElement(u.a,{service:e.service,href:e.href,key:e.href,style:{marginBottom:"none !important"}},e.value||"")}),_=function(){return o.a.createElement("div",{className:M.footer},o.a.createElement("div",{className:M.social},P),o.a.createElement("div",{className:M.copyright}," Copyright ",(new Date).getFullYear()," RichSoni, LLC"))},j=a(153),q=a.n(j),z=a(147),F=function(){return o.a.createElement(q.a,null,o.a.createElement("link",{rel:"icon",type:"image/png",href:z}),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1"}),o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),o.a.createElement("meta",{property:"og:type",content:"website"}))},A=a(148);t.a=function(e){return o.a.createElement("div",{className:A.site},o.a.createElement(F,null),o.a.createElement(C,null),o.a.createElement(L,null),o.a.createElement("div",{className:A.content},e.children),o.a.createElement(_,null))}},150:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(149),i=a(151);t.a=function(e){return o.a.createElement(r.a,null,o.a.createElement("article",{className:i.article},e.children))}},151:function(e,t,a){e.exports={article:"style-module--article--2ROOO"}},152:function(e,t,a){e.exports={breadcrumbs:"style-module--breadcrumbs--1rmGG",breadcrumb:"style-module--breadcrumb--O0EDF"}},171:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(185),i=a.n(r),l=a(184);t.a=function(e){var t=e.overlay?o.a.createElement("div",{className:l.overlay},o.a.createElement("div",{className:l.title},e.data.frontmatter.title),o.a.createElement("div",{className:l.year},e.data.frontmatter.releaseYear)):o.a.createElement("div",null),a=o.a.createElement(i.a,{src:"/images/releases/"+e.data.fields.basename+".png",fallbackImage:"/images/releases/default.png",className:l.image});return e.clickable?o.a.createElement("a",{className:l.wrapper+" "+e.className,href:e.data.fields.url},a,t):o.a.createElement("div",{className:l.wrapper+" "+e.className},a,t)}},184:function(e,t,a){e.exports={wrapper:"styles-module--wrapper--1IdwA",image:"styles-module--image--4H-fT",overlay:"styles-module--overlay--FYL6v"}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=c(a(4)),i=a(0),l=c(i),s=c(a(186));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={imageSource:null},a.setDisplayImage=a.setDisplayImage.bind(a),a.handleInitialTimeout=a.handleInitialTimeout.bind(a),a.isLoaded=!1,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"handleInitialTimeout",value:function(){var e=this;this.props.initialTimeout&&this.props.initialTimeout>0?setTimeout(function(){e.isLoaded||e.setState({imageSource:e.props.initialImage})},this.props.initialTimeout):this.setState({imageSource:this.props.initialImage})}},{key:"componentDidMount",value:function(){this.handleInitialTimeout(),this.displayImage=new window.Image,this.setDisplayImage({image:this.props.src,fallbacks:this.props.fallbackImage})}},{key:"componentWillReceiveProps",value:function(e){e.src!==this.props.src&&(this.isLoaded=!1,e.initialImage&&this.handleInitialTimeout(),this.setDisplayImage({image:e.src,fallbacks:e.fallbackImage}))}},{key:"componentWillUnmount",value:function(){this.displayImage&&(this.displayImage.onerror=null,this.displayImage.onload=null,this.displayImage=null)}},{key:"setDisplayImage",value:function(e){var t=this,a=e.image,n=e.fallbacks,o=[a].concat(n).filter(function(e){return!!e});this.displayImage.onerror=function(){if(o.length>2&&"string"==typeof o[1]){var e=o.slice(2);t.setDisplayImage({image:o[1],fallbacks:e})}else t.isLoaded=!0,t.setState({imageSource:o[1]||null},function(){t.props.onError&&t.props.onError(t.props.src)})},this.displayImage.onload=function(){t.isLoaded=!0,t.setState({imageSource:o[0]},function(){t.props.onLoad&&t.props.onLoad(o[0])})},"string"==typeof o[0]?this.displayImage.src=o[0]:this.setState({imageSource:o[0]},function(){t.props.onLoad&&t.props.onLoad(o[0])})}},{key:"render",value:function(){return"string"==typeof this.state.imageSource?l.default.createElement("img",n({},(0,s.default)(this.props),{src:this.state.imageSource})):this.state.imageSource}}]),t}();t.default=u,u.displayName="ReactImageFallback",u.propTypes={src:r.default.string,fallbackImage:r.default.oneOfType([r.default.string,r.default.element,r.default.array]).isRequired,initialImage:r.default.oneOfType([r.default.string,r.default.element]),onLoad:r.default.func,onError:r.default.func,initialTimeout:r.default.number},u.defaultProps={initialImage:null}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&l(a)&&(t[a]=e[a]);return t};var n,o=a(187),r=(n=o)&&n.__esModule?n:{default:n};var i={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function l(e){return i[e]||r.default[e]}},187:function(e,t,a){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}}}]);
//# sourceMappingURL=2-b6ed2414eb93ba0f0e26.js.map