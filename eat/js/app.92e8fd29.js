(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2325:function(t,e,n){"use strict";n("864b")},"39ff":function(t,e,n){},"3e03":function(t,e,n){"use strict";n("39ff")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"tabbar"},[n("div",[n("router-link",{attrs:{to:{name:"eat"}}},[t._v("首页")])],1),n("div",[n("router-link",{attrs:{to:{name:"list"}}},[t._v("列表")])],1),n("div",[n("router-link",{attrs:{to:{name:"about"}}},[t._v("我的")])],1)])],1)},o=[],i={name:"App"},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,a,o,!1,null,null,null),l=c.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"history"},[t._v("历史")]),n("div",{staticClass:"switch_tags"},[n("span",[t._v("午餐列表 ▼")])]),n("div",{staticClass:"show_foods"},[n("p",[t._v("展示区域")])]),n("button",[t._v("开始")])])}],d={name:"toEat"},_=d,b=(n("3e03"),Object(u["a"])(_,p,v,!1,null,"115a7ab8",null)),m=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"food_list"},[n("div",{staticClass:"title"},t._l(t.tags,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"list_box"},[t._l(t.items,(function(e,r){return n("div",{key:r,staticClass:"item_card"},[n("span",[t._v(t._s(e))]),n("span",[t._v("删除")])])})),t._m(0)],2)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add"},[n("button",[t._v("+")])])}],g={name:"foodList",data:function(){return{tags:["午餐列表","晚饭"],items:["魏家凉皮","油泼面","山西刀削面","高小松","张亮麻辣烫","魏家凉皮","油泼面","山西刀削面","高小松","张亮麻辣烫"]}}},w=g,O=(n("2325"),Object(u["a"])(w,h,y,!1,null,"69ffebc6",null)),j=O.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n("ab58"),alt:""}}),r("p",[t._v("关于我们")])])}],k={name:"aboutMe"},E=k,$=Object(u["a"])(E,x,C,!1,null,null,null),P=$.exports;r["a"].use(f["a"]);var M=new f["a"]({routes:[{path:"/",name:"eat",component:m},{path:"/list",name:"list",component:j},{path:"/about",name:"about",component:P}]});r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},"864b":function(t,e,n){},ab58:function(t,e,n){t.exports=n.p+"img/eat.2e54be3d.png"}});
//# sourceMappingURL=app.92e8fd29.js.map