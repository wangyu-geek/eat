(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2e6d":function(t,e,n){"use strict";n("d84d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"tabbar"},[n("div",[n("router-link",{attrs:{to:{name:"eat"},replace:""}},[n("span",[t._v("首页")])])],1),n("div",[n("router-link",{attrs:{to:{name:"list"},replace:""}},[n("span",[t._v("列表")])])],1),n("div",[n("router-link",{attrs:{to:{name:"about"},replace:""}},[n("span",[t._v("我的")])])],1)])],1)},r=[],s={name:"App"},i=s,c=(n("034f"),n("2877")),l=Object(c["a"])(i,o,r,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"switch_tags"},[n("span",[t._v("午餐列表")]),n("div",{staticClass:"history"},[t._v("历史")])]),n("div",{staticClass:"show_foods"}),n("button",[t._v("开始")])])}],v={name:"toEat"},m=v,b=(n("2e6d"),Object(c["a"])(m,p,f,!1,null,"296bd355",null)),h=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"food_list"},[n("div",{staticClass:"title"},t._l(t.tags,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"list_box"},[t._l(t.items,(function(e,a){return n("div",{key:a,staticClass:"item_card"},[n("span",[t._v(t._s(e))]),n("span",{staticClass:"item_delete",on:{click:function(e){return t.delItem(a)}}})])})),n("div",{staticClass:"add"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addFood,expression:"addFood"}],attrs:{type:"text",maxlength:"20",placeholder:"加入清单"},domProps:{value:t.addFood},on:{input:function(e){e.target.composing||(t.addFood=e.target.value)}}}),n("span",{on:{click:t.addItem}})])],2)])},g=[],y=(n("a434"),{name:"foodList",data:function(){return{addFood:"",tags:["午餐列表","晚饭"],items:["魏家凉皮","油泼面","山西刀削面","高小松","张亮麻辣烫","驴肉火烧"]}},methods:{delItem:function(t){this.items.splice(t,1)},addItem:function(){this.addFood&&(this.items.push(this.addFood),this.addFood="")}}}),C=y,w=(n("7024"),Object(c["a"])(C,_,g,!1,null,"8c697b74",null)),x=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[t._m(0),a("img",{attrs:{src:n("ab58"),alt:""}}),a("div",{staticClass:"more_func"},[a("span",{on:{click:t.popClass}},[t._v("功能说明")]),a("span",{on:{click:t.popClass}},[t._v("软件下载")]),a("span",{on:{click:t.popClass}},[t._v("关于我们")])])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("What to eat?")])])}],j={name:"aboutMe",methods:{popClass:function(){alert("哇咔咔")}}},E=j,F=(n("bab3"),Object(c["a"])(E,O,k,!1,null,"aea4090c",null)),P=F.exports;a["a"].use(d["a"]);var $=new d["a"]({mode:"hash",linkExactActiveClass:"active",routes:[{path:"/",redirect:"/eat"},{path:"/eat",name:"eat",component:h},{path:"/list",name:"list",component:x},{path:"/about",name:"about",component:P}]}),M=$;a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(u)}}).$mount("#app")},"5a26":function(t,e,n){},7024:function(t,e,n){"use strict";n("b53a")},"85ec":function(t,e,n){},ab58:function(t,e,n){t.exports=n.p+"img/eat.2e54be3d.png"},b53a:function(t,e,n){},bab3:function(t,e,n){"use strict";n("5a26")},d84d:function(t,e,n){}});
//# sourceMappingURL=app.b9c318b3.js.map