(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"be363165","chunk-39b2c54a":"f117b3a3","chunk-6d8ed82c":"e1d2efc3","chunk-af411f78":"91c78b6f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-39b2c54a":1,"chunk-6d8ed82c":1,"chunk-af411f78":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"8c21e62f","chunk-39b2c54a":"c6d545f8","chunk-6d8ed82c":"b8e28bd9","chunk-af411f78":"79d9169d"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===i))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===o||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var o=n("2b0e"),r=n("2f62"),i=(n("96cf"),n("1da1")),a={namespaced:!0,state:{email:"",stayLoggedIn:!1,sessionToken:""},mutations:{setEmail:function(e,t){e.email=t},setStayLoggedIn:function(e,t){console.log("switch"+t),e.stayLoggedIn=t},setSessionToken:function(e,t){e.sessionToken=t}},actions:{init:function(e){var t=e.commit,n=localStorage.getItem("sessionToken");null===n&&(n=""),t("setSessionToken",n)},login:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var o,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.state,r=t.commit,console.log("Login with "+o.email+" and "+n+"; stay logged in: "+o.stayLoggedIn),i="dummyToken",o.stayLoggedIn&&localStorage.setItem("sessionToken",i),r("setSessionToken","anyToken");case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,o=t.commit,localStorage.removeItem("sessionToken"),o("setSessionToken",""),console.log("Logout with "+n.stayLoggedIn);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{isLoggedIn:function(e){return""!==e.sessionToken}}},s=a,c=(n("a434"),n("2909")),u={namespaced:!0,state:{id:"",items:[]},mutations:{addItem:function(e,t){e.items.push(t)},addItems:function(e,t){var n;(n=e.items).push.apply(n,Object(c["a"])(t))},removeItem:function(e,t){e.items.splice(t,1)},setId:function(e,t){e.id=t}},actions:{loadList:function(e,t){e.commit},saveList:function(e){var t=e.state;console.log("Saving the shopingList "+t.id+": "+JSON.stringify(t.items))}}},d=u;o["a"].use(r["a"]);t["a"]=new r["a"].Store({state:{},mutations:{},actions:{},modules:{userModule:s,editShopingListModule:d}})},3501:function(e,t,n){e.exports=n.p+"img/wirvsvirus_alt.3cbcb6aa.png"},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"5c64":function(e,t,n){"use strict";var o=n("d32a"),r=n.n(o);r.a},"7dd9":function(e,t,n){e.exports=n.p+"img/wirvsvirus_white.e33dc7b9.svg"},"9c0c":function(e,t,n){},a6f7:function(e,t,n){},afbc:function(e,t,n){"use strict";n("45fc"),n("b0c0"),n("d3b7");var o=n("2b0e"),r=n("8c4f"),i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("NeighborhoodAid")]),o("hr"),o("div",{staticClass:"description"},[o("div",[o("h2",[e._v("Was ist NeighborhoodAid?")]),o("div",[e._v(" NeighborhoodAid ist eine Anwendung, die es Menschen, welche nicht selbst einkaufen können, weil sie zum Beispiel zur Risikogruppe für "),o("a",{attrs:{href:"https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Risikobewertung.html"}},[e._v("COVID-19")]),e._v(", SARS oder andere Krankheiten gehören, ermöglicht, ihren Einkaufszettel online auf unserer Webseite zu erstellen. Über unsere Webseite haben andere Personen, welche helfen wollen, dann die Möglichkeit Einkaufslisten von betroffenen Personen in der Nähe zu sehen und den Einkauf für diese zu erledigen. ")])]),o("div",[o("h2",[e._v("Wie ist das Projekt zustande gekommen?")]),o("div",[o("a",{attrs:{href:"https://wirvsvirushackathon.org/",target:"_blank",rel:"noopener"}},[o("img",{attrs:{src:n("3501"),alt:"Hackathon der Bundesregierung mit dem Slogan #wirvscorona"}})])])]),o("div",[o("h2",[e._v("Wie kann man dieses Projekt unterstützen?")]),o("div",[e._v(" Es gibt 2 Möglichkeiten dieses Projekt zu unterstützen."),o("br"),o("u",[e._v("Nachbarschaftshilfe")]),o("br"),e._v(" Sie können sich registrieren und Nachbarn in Ihrer Umgebung helfen beim Einkaufen."),o("br"),o("u",[e._v("Beteilung an der Entwicklung des Projekts")]),o("br"),e._v(" Wie Sie vielleicht mitbekommen haben, ist dieses Projekt noch relativ jung. Wenn Sie sich an dem Quellcode des Projektes beteiligen möchten, besuchen Sie unsere "),o("a",{attrs:{href:"https://github.com/neighboraid/"}},[e._v("GitHub Organisation")]),e._v(". ")])])])])}],s={name:"Home",components:{}},c=s,u=(n("f571"),n("2877")),d=Object(u["a"])(c,i,a,!1,null,"75dce5d7",null),l=d.exports,f=n("0613");o["a"].use(r["a"]);var h=[{path:"/",name:"Home",component:l},{path:"/profile",name:"Profile",meta:{requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"c66d"))}},{path:"/createList",name:"CreateList",meta:{requiresAuth:!0},component:function(){return n.e("chunk-39b2c54a").then(n.bind(null,"dcef"))}},{path:"/buyList",name:"BuyList",meta:{requiresAuth:!0},component:function(){return n.e("chunk-af411f78").then(n.bind(null,"c237"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-6d8ed82c").then(n.bind(null,"73cf"))}},{path:"/logout",name:"Logout",component:function(){return n.e("about").then(n.bind(null,"c100"))}}],m=new r["a"]({mode:"history",base:"/",routes:h});m.beforeEach((function(e,t,n){"Logout"===e.name?(f["a"].dispatch("userModule/logout"),n()):e.matched.some((function(e){return e.meta.requiresAuth}))?f["a"].getters["userModule/isLoggedIn"]?n():n({path:"/login",params:{nextUrl:e.fullPath}}):n()}));t["a"]=m},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{class:e.menuOpen?"nav responsive":"nav"},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"home","fixed-width":""}}),e._v(" Startseite")],1),e.$store.getters["userModule/isLoggedIn"]?[n("router-link",{attrs:{to:"/profile"}},[n("font-awesome-icon",{attrs:{icon:"user-edit","fixed-width":""}}),e._v(" Profil")],1),n("router-link",{attrs:{to:"/createList"}},[n("font-awesome-icon",{attrs:{icon:"cart-plus","fixed-width":""}}),e._v(" Liste erstellen")],1),n("router-link",{attrs:{to:"/buyList"}},[n("font-awesome-icon",{attrs:{icon:"check","fixed-width":""}}),e._v(" Liste erledigen")],1),n("router-link",{staticStyle:{"margin-left":"auto"},attrs:{to:"/logout"}},[n("font-awesome-icon",{attrs:{icon:"user","fixed-width":""}}),e._v(" Logout")],1)]:[n("router-link",{style:e.menuOpen?"":"margin-left: auto; float: right;",attrs:{to:"/login"}},[n("font-awesome-icon",{attrs:{icon:"user","fixed-width":""}}),e._v(" Login")],1),n("router-link",{style:e.menuOpen?"":"margin-left: auto;float: right;",attrs:{to:"/register"}},[n("font-awesome-icon",{attrs:{icon:"user-plus","fixed-width":""}}),e._v(" Registrieren")],1)],n("a",{staticClass:"icon",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.mobileMenu()}}},[n("i",{staticClass:"fa fa-bars"})])],2),n("div",{attrs:{id:"placeholderBehindNavbar"}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticStyle:{"padding-bottom":"80px"}})],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"footer"}},[e._v(" © NeighborhoodAid Team 2020 - Alle Rechte vorbehalten. "),o("span",{staticClass:"badges"},[o("img",{attrs:{src:n("7dd9")}})])])}],a=o["a"].extend({mounted:function(){this.$store.dispatch("userModule/init"),this.$store.dispatch("editShopingListModule/init")},data:function(){return{menuOpen:!1}},methods:{mobileMenu:function(){0==this.menuOpen?this.menuOpen=!0:this.menuOpen=!1}}}),s=a,c=(n("5c0b"),n("5c64"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null),d=u.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("afbc"),h=n("0613"),m=n("ad3d"),g=n("ecee"),p=n("c074");g["c"].add(p["a"]),g["c"].add(p["b"]),g["c"].add(p["c"]),g["c"].add(p["d"]),g["c"].add(p["f"]),g["c"].add(p["e"]),g["c"].add(p["g"]),g["c"].add(p["h"]),g["c"].add(p["i"]),g["c"].add(p["j"]),g["c"].add(p["k"]),g["c"].add(p["l"]),g["c"].add(p["m"]),g["c"].add(p["n"]),o["a"].component("font-awesome-icon",m["a"]),o["a"].config.productionTip=!1,new o["a"]({router:f["a"],store:h["a"],render:function(e){return e(d)}}).$mount("#app")},d32a:function(e,t,n){},f571:function(e,t,n){"use strict";var o=n("a6f7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.96fb84c4.js.map