(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,n){"use strict";var r=n(72),o={data:function(){return{user:!1}},created:function(){var t=this;r.a.onAuthStateChanged(function(e){t.user=e,e.refreshToken})},methods:{cerrarSesion:function(){r.a.signOut()}}},c=n(19),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{variant:"dark",type:"dark",toggleable:"lg"}},[n("b-navbar-brand",{attrs:{href:"/"}},[t._v("PAPELERIA ITP")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"menu"}}),t._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"menu"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/contacto"}},[t._v("Contacto")]),t._v(" "),n("b-nav-item",{attrs:{href:"/productos"}},[t._v("Productos")]),t._v(" "),n("b-nav-item",{attrs:{href:"/categoria"}},[t._v("Categorias")]),t._v(" "),n("b-nav-item",{attrs:{href:"/carrito"}},[t._v("Carrito de compras")]),t._v(" "),t.user?t._e():n("b-nav-item",{attrs:{href:"/inicio"}},[t._v("Iniciar sesion")]),t._v(" "),t.user?t._e():n("b-nav-item",{attrs:{href:"/registro"}},[t._v("Registro")]),t._v(" "),t.user?n("b-dropdown",{attrs:{text:t.user.displayName}},[n("b-dropdown-item",{on:{click:t.cerrarSesion}},[t._v("Cerrar sesion")])],1):t._e()],1),t._v(" "),n("b-navbar-nav",[n("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),t._v(" "),n("b-button",[t._v("Buscar")])],1)],1)],1)},[],!1,null,null,null);e.a=component.exports},185:function(t,e,n){t.exports=n(375)},224:function(t,e,n){"use strict";var r=n(70);n.n(r).a},225:function(t,e,n){(t.exports=n(63)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},226:function(t,e,n){"use strict";var r=n(71);n.n(r).a},227:function(t,e,n){(t.exports=n(63)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},375:function(t,e,n){"use strict";n.r(e);n(75),n(81),n(84);var r=n(44),o=(n(73),n(194),n(16)),c=(n(117),n(118),n(62),n(43),n(122),n(90),n(74),n(121),n(199),n(211),n(4)),l={},h=(n(212),n(127),n(128),n(214),n(216),n(217),n(220),n(222),n(24));function f(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function d(t){return t.then(function(t){return t.default||t})}function m(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(h.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function y(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(y(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=v(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function w(t){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",Object(h.a)({},e,{meta:x(e).map(function(t,n){return Object(h.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function k(t,e){return $.apply(this,arguments)}function $(){return($=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=L(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,w(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,w(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function E(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function O(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?A:encodeURIComponent,l=0;l<t.length;l++){var h=t[l];if("string"!=typeof h){var f=data[h.name||"pathMatch"],d=void 0;if(null==f){if(h.optional){h.partial&&(path+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(Array.isArray(f)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var m=0;m<f.length;m++){if(d=c(f[m]),!e[l].test(d))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===m?h.prefix:h.delimiter)+d}}else{if(d=h.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(f),!e[l].test(d))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+d+'"');path+=h.prefix+d}}else path+=h}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=S.exec(t));){var h=n[0],f=n[1],d=n.index;if(path+=t.slice(c,d),c=d+h.length,f)path+=f[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],_=n[5],w=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===w||"*"===w,R="?"===w||"*"===w,E=n[2]||l,pattern=y||_;r.push({name:x||o++,prefix:v||"",delimiter:E,optional:R,repeat:$,partial:k,asterisk:!!C,pattern:pattern?P(pattern):C?".*":"[^"+N(E)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function j(t,e){var n={},r=Object(h.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function T(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(h.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function P(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function L(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}var D=n(182),I=n.n(D),M=n(106),B=function(){return d(n.e(2).then(n.bind(null,386)))},U=function(){return d(n.e(3).then(n.bind(null,376)))},z=function(){return d(n.e(4).then(n.bind(null,379)))},K=function(){return d(n.e(6).then(n.bind(null,383)))},H=function(){return d(n.e(7).then(n.bind(null,385)))},J=function(){return d(n.e(9).then(n.bind(null,384)))},F=function(){return d(n.e(11).then(n.bind(null,387)))},Q=function(){return d(n.e(13).then(n.bind(null,382)))},V=function(){return d(n.e(5).then(n.bind(null,381)))},X=function(){return d(n.e(10).then(n.bind(null,380)))},W=function(){return d(n.e(12).then(n.bind(null,377)))},Y=function(){return d(n.e(8).then(n.bind(null,378)))};c.a.use(M.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var G=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var Z=n(183),tt=n.n(Z),et=Object(h.a)({},tt.a,{name:"NoSsr"}),nt={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,h=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&h++,n=n.$parent;data.nuxtChildDepth=h;var f=c[h]||l,d={};ot.forEach(function(t){void 0!==f[t]&&(d[t]=f[t])});var m={};at.forEach(function(t){"function"==typeof f[t]&&(m[t]=f[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:d,on:m},x)}},ot=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],at=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],it={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},st=(n(224),n(19)),ut=Object(st.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,ct={name:"Nuxt",components:{NuxtChild:nt,NuxtError:ut},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||O(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},pt={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},lt=(n(226),Object(st.a)(pt,void 0,void 0,!1,null,null,null).exports),ht=(n(228),n(230),n(107)),ft={data:function(){return{mail:"dayron1794@gmail.com",phone:"3227838557",mention:"2019 | terminos légales"}}},mt=Object(st.a)(ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"contacts"}},[n("div",{attrs:{id:"contacts--contact"}},[n("p",[t._v(t._s(t.mail))]),t._v(" "),n("p",[t._v(t._s(t.phone))])])]),t._v(" "),n("div",{attrs:{id:"mentions"}},[n("p",[t._v(t._s(t.mention))])])])},[],!1,null,null,null).exports,vt={components:{navbar:ht.a,foother:mt}},xt={_default:Object(st.a)(vt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("nuxt")],1)],1)},[],!1,null,null,null).exports},gt={head:{meta:[],link:[],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&xt["_"+t]||(t="default"),this.layoutName=t,this.layout=xt["_"+t],this.layout},loadLayout:function(t){return t&&xt["_"+t]||(t="default"),Promise.resolve(xt["_"+t])}},components:{NuxtLoading:lt}},bt=n(184),yt=n.n(bt);c.a.use(yt.a),c.a.component(et.name,et),c.a.component(nt.name,nt),c.a.component("NChild",nt),c.a.component(ct.name,ct),c.a.use(I.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var _t={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function wt(){return(wt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,l,path;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new M.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:G,routes:[{path:"/busquedad",component:B,name:"busquedad",children:[{path:":slug?",component:U,name:"busquedad-slug"}]},{path:"/carrito",component:z,name:"carrito"},{path:"/categoria",component:K,name:"categoria"},{path:"/contacto",component:H,name:"contacto"},{path:"/inicio",component:J,name:"inicio"},{path:"/productos",component:F,name:"productos"},{path:"/registro",component:Q,name:"registro"},{path:"/categoria/crearCategoria",component:V,name:"categoria-crearCategoria"},{path:"/productos/crear",component:X,name:"productos-crear"},{path:"/productos/index_producto",component:W,name:"productos-index_producto"},{path:"/",component:Y,name:"index"}],fallback:!1});case 2:return n=t.sent,r=Object(h.a)({router:n,nuxt:{defaultTransition:_t,transitions:[_t],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},_t,{name:t}):Object.assign({},_t,t):_t}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?T(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},gt),o=e?e.next:function(t){return r.router.push(t)},e?l=n.resolve(e.url).route:(path=E(n.options.base),l=n.resolve(path).route),t.next=8,k(r,{route:l,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Ct=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},kt=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),$t={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||Ct(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(kt.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){kt&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),kt.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){kt.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;try{l(),l.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component($t.name,$t),c.a.component("NLink",$t);var Rt,Et,Ot=[],jt=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var Tt=c.a.config.errorHandler||console.error;function St(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function At(t,e,n){return Nt.apply(this,arguments)}function Nt(){return(Nt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,h,f=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Rt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?j(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,_(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return f._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading chunk (\d)+ failed\./.test(h)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Pt(t,e){return jt.serverRendered&&e&&m(t,e),t._Ctor=t,t}function Lt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=v(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof l[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():R(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function qt(t,e,n){return Dt.apply(this,arguments)}function Dt(){return(Dt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,h,d,v,y,_,w,C,$,E,j,T,S,A,N=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ot=e===n?[]:x(n,o=[]).map(function(t,i){return O(n.matched[o[i]].path)(n.params)}),c=!1,l=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,k(Rt,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=Rt.nuxt.dateErr,this._hadError=!!Rt.nuxt.err,(d=x(e,h=[])).length){t.next=25;break}return t.next=14,Lt.call(this,d,Rt.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof ut.layout?ut.layout(Rt.context):ut.layout);case 18:return v=t.sent,t.next=21,Lt.call(this,d,Rt.context,v);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Rt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return d.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(St(d,e,n)),t.prev=27,t.next=30,Lt.call(this,d,Rt.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Rt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(y=d[0].options.layout)&&(y=y(Rt.context)),t.next=38,this.loadLayout(y);case 38:return y=t.sent,t.next=41,Lt.call(this,d,Rt.context,y);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Rt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:_=!0,t.prev=46,w=!0,C=!1,$=void 0,t.prev=50,E=d[Symbol.iterator]();case 52:if(w=(j=E.next()).done){t.next=64;break}if("function"==typeof(T=j.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,T.options.validate(Rt.context);case 58:if(_=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:w=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,$=t.t0;case 70:t.prev=70,t.prev=71,w||null==E.return||E.return();case 73:if(t.prev=73,!C){t.next=76;break}throw $;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(_){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(d.map(function(t,i){if(t._path=O(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==Ot[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return N._diffQuery[t]}))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var f=R(t.options.asyncData,Rt.context).then(function(e){m(t,e),N.$loading.increase&&N.$loading.increase(l)});r.push(f)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Rt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){N.$loading.increase&&N.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return Ot=[],f(S),"function"==typeof(A=ut.layout)&&(A=A(Rt.context)),t.next=103,this.loadLayout(A);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function It(t,e){y(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function Mt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?ut.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Rt.context)),this.setLayout(e)}function Bt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=x(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),Mt.call(n,t)})}function Ut(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Et.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function zt(){return(zt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,l,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Rt=e.app,Et=e.router,t.next=4,Promise.all((path=void 0,path=E((f=Et).options.base,f.options.mode),y(f.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=Pt(v(e),jt.data?jt.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new c.a(Rt),l=jt.layout||"default",t.next=9,r.loadLayout(l);case 9:if(r.setLayout(l),h=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){Ut(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(St(n,Et.currentRoute)),Ot=Et.currentRoute.matched.map(function(t){return O(t.path)(Et.currentRoute.params)})),r.$loading={},jt.error&&r.error(jt.error),Et.beforeEach(At.bind(r)),Et.beforeEach(qt.bind(r)),Et.afterEach(It),Et.afterEach(Bt.bind(r)),!jt.serverRendered){t.next=22;break}return h(),t.abrupt("return");case 22:qt.call(r,Et.currentRoute,Et.currentRoute,function(path){if(!path)return It(Et.currentRoute,Et.currentRoute),Mt.call(r,Et.currentRoute),void h();Et.push(path,function(){return h()},function(t){if(!t)return h();Tt(t)})});case 23:case"end":return t.stop()}var f,path},t)}))).apply(this,arguments)}(function(t){return wt.apply(this,arguments)})().then(function(t){return zt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Tt(t)})},70:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("b675d82e",content,!0,{sourceMap:!1})},71:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("17cfdfa9",content,!0,{sourceMap:!1})},72:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"a",function(){return h});var r=n(37),o=n.n(r);n(252),n(253);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyBT0ynr0e86xHRkHUK0iuFxrTOYqI_9Mqg",authDomain:"nuxt-6397b.firebaseapp.com",databaseURL:"https://nuxt-6397b.firebaseio.com",projectId:"nuxt-6397b",storageBucket:"nuxt-6397b.appspot.com",messagingSenderId:"533892599090"});var c=o.a.firestore(),l=o.a.storage().ref(),h=o.a.auth();o.a}},[[185,14,1,15]]]);