(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(t,e,n){},204:function(t,e,n){"use strict";var o=n(25),r=n(6),c=n(31),l=n(99),_=n(100),f=n(18),h=n(205),v=n(101);r(r.S+r.F*!n(95)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,m,d=c(t),C="function"==typeof this?this:Array,y=arguments.length,k=y>1?arguments[1]:void 0,w=void 0!==k,x=0,P=v(d);if(w&&(k=o(k,y>2?arguments[2]:void 0,2)),null==P||C==Array&&_(P))for(n=new C(e=f(d.length));e>x;x++)h(n,x,w?k(d[x],x):d[x]);else for(m=P.call(d),n=new C;!(r=m.next()).done;x++)h(n,x,w?l(m,k,[r.value,x],!0):r.value);return n.length=x,n}})},205:function(t,e,n){"use strict";var o=n(9),r=n(32);t.exports=function(object,t,e){t in object?o.f(object,t,r(0,e)):object[t]=e}},206:function(t,e,n){"use strict";var o=n(6),r=n(207)(6),c="findIndex",l=!0;c in[]&&Array(1)[c](function(){l=!1}),o(o.P+o.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(65)(c)},207:function(t,e,n){var o=n(25),r=n(64),c=n(31),l=n(18),_=n(208);t.exports=function(t,e){var n=1==t,f=2==t,h=3==t,v=4==t,m=6==t,d=5==t||m,C=e||_;return function(e,_,y){for(var k,w,x=c(e),P=r(x),A=o(_,y,3),N=l(P.length),V=0,B=n?C(e,N):f?C(e,0):void 0;N>V;V++)if((d||V in P)&&(w=A(k=P[V],V,x),t))if(n)B[V]=w;else if(w)switch(t){case 3:return!0;case 5:return k;case 6:return V;case 2:B.push(k)}else if(v)return!1;return m?-1:h||v?v:B}}},208:function(t,e,n){var o=n(209);t.exports=function(t,e){return new(o(t))(e)}},209:function(t,e,n){var o=n(8),r=n(97),c=n(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},210:function(t,e,n){"use strict";var o=n(156);n.n(o).a},223:function(t,e,n){"use strict";n.r(e);n(61),n(204),n(206);function o(element){var rect=element.getBoundingClientRect();return rect.top<=(window.innerHeight||document.documentElement.clientHeight)||rect.bottom<=0}var r={name:"HomePage",data:function(){return{}},mounted:function(){this.toggleNextButtonVisibility(),window.addEventListener("scroll",this.toggleNextButtonVisibility)},destroyed:function(){window.removeEventListener("scroll",this.toggleNextButtonVisibility)},methods:{toggleNextButtonVisibility:function(){var t=document.querySelector(".homePage__next-button-wrapper");o(Array.from(document.querySelectorAll(".homePage > div.tile")).pop())?t.classList.add("hidden"):t.classList.remove("hidden")},scrollNext:function(){var t=function(t,e){return e[e.findIndex(t)+1]||!1}(o,Array.from(document.querySelectorAll(".homePage > div.tile")));!1!==t&&t.scrollIntoView({behavior:"smooth"})}}},c=(n(210),n(17)),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"homePage"},[e("div",{staticClass:"homePage__next-button-wrapper"},[e("a",{staticClass:"homePage__next-button-wrapper__next-button",on:{click:this.scrollNext}},[this._v("⇣")])]),this._v(" "),this._m(0)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile is-parent is-transparent homePage__cover",attrs:{id:"home-top"}},[n("div",{staticClass:"tile is-child homePage__cover__inner"},[n("figure",{staticClass:"image is-square homePage__logo"},[n("img",{staticClass:"homePage__logo__image",attrs:{src:"https://hkoscon.org/logo.png"}})]),t._v(" "),n("p",{staticClass:"has-text-primary homePage__cover__text"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("\n            calendar_today\n          ")])]),t._v(" 17 Jul, 2021 (Fri)\n      ")]),t._v(" "),n("p",{staticClass:"has-text-primary homePage__cover__text"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("\n            add_location\n          ")])]),t._v(" Virtual\n      ")]),t._v(" "),n("div",{staticClass:"homePage__ticketing"},[n("a",{staticClass:"homePage__ticketing__button button is-primary",attrs:{href:"https://bit.ly/HKOSCon2021",target:"_blank"}},[t._v("Get Ticket Now")])]),t._v(" "),n("div",{staticClass:"homePage__social"},[n("a",{staticClass:"homePage__social__link",attrs:{href:"https://info.hkoscon.org/",target:"_blank"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-info"})])]),t._v(" "),n("a",{staticClass:"homePage__social__link",attrs:{href:"https://facebook.com/hkoscon/",target:"_blank"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("a",{staticClass:"homePage__social__link",attrs:{href:"https://twitter.com/hkoscon/",target:"_blank"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("a",{staticClass:"homePage__social__link",attrs:{href:"https://www.linkedin.com/company/hkoscon",target:"_blank"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),n("a",{staticClass:"homePage__social__link",attrs:{href:"mailto:conference@opensource.hk"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-envelope"})])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=9bc75cc0789d28248192.js.map