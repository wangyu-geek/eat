(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1),n("div",{staticClass:"tabbar"},[n("div",[n("router-link",{attrs:{to:{name:"home"},replace:""}},[n("span",[t._v("首页")])])],1),n("div",[n("router-link",{attrs:{to:{name:"list"},replace:""}},[n("span",[t._v("列表")])])],1),n("div",[n("router-link",{attrs:{to:{name:"about"},replace:""}},[n("span",[t._v("我的")])])],1)])],1)},i=[],a={name:"App"},r=a,c=(n("034f"),n("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"switch_tags"},[n("span",[t._v("午餐列表")]),n("div",{staticClass:"history",on:{click:t.toHistory}})]),n("div",{staticClass:"food_menu"},[t.isShow?n("p",{staticClass:"choice"},[t._v(t._s(t.choice))]):n("div",{staticClass:"menu_list"},t._l(t.list,(function(e){return n("span",{key:e,staticClass:"show_item"},[t._v(" "+t._s(e)+" ")])})),0)]),n("span",{staticClass:"click_me",on:{click:t.toEat}},[t._v("Click Me !")])])},f=[],m=o["a"].observable({items:["魏家凉皮","油泼面","山西刀削面","高小松","张亮麻辣烫","驴肉火烧"]}),h={name:"Home",data:function(){return{isShow:!1,list:m.items,choice:""}},methods:{toHistory:function(){alert("History")},toEat:function(){var t=this;this.isShow=!0;var e=1,n=0,o=this.list.length;setInterval((function(){e<50&&(n=Math.floor(10*Math.random())%o,t.choice=t.list[n],console.log(t.list[n])),e++}),20)}}},v=h,_=(n("6dd6"),Object(c["a"])(v,p,f,!1,null,"7395fe46",null)),b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"food_tags"},t._l(t.tags,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"list_box"},[t._l(t.items,(function(e,o){return n("div",{key:e,staticClass:"item_card"},[n("span",[t._v(t._s(e))]),n("span",{staticClass:"del_item",on:{click:function(e){return t.delItem(o)}}})])})),n("div",{staticClass:"add_item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addFood,expression:"addFood"}],attrs:{type:"text",maxlength:"20",placeholder:"加入清单"},domProps:{value:t.addFood},on:{input:function(e){e.target.composing||(t.addFood=e.target.value)}}}),n("span",{on:{click:t.addItem}})])],2)])},g=[],C=(n("a434"),{name:"List",data:function(){return{addFood:"",tags:["午餐列表"],items:m.items}},methods:{delItem:function(t){this.items.splice(t,1)},addItem:function(){this.addFood&&(this.items.push(this.addFood),this.addFood="")}}}),k=C,w=(n("ec21"),Object(c["a"])(k,y,g,!1,null,"501cb3e6",null)),P=w.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("img",{attrs:{src:n("ab58"),alt:"logo"}}),o("div",{staticClass:"more_func"},[o("span",{on:{click:t.switchTheme}},[t._v(t._s(t.themeName))]),o("span",{on:{click:t.popClass}},[t._v("功能说明")]),o("span",{on:{click:t.popClass}},[t._v("软件下载")]),o("span",{on:{click:t.popClass}},[t._v("关于我们")])])])},O=[],j={name:"About",data:function(){return{isNight:!1}},mounted:function(){var t=document.documentElement,e=getComputedStyle(t),n=e.getPropertyValue("--main-background");"#fff"===n&&(this.isNight=!1),"#06090F"===n&&(this.isNight=!0)},methods:{popClass:function(){alert("哇咔咔")},switchTheme:function(){console.log(this.isNight);var t=document.documentElement;this.isNight?(t.style.setProperty("--main-color","#333"),t.style.setProperty("--main-background","#fff"),t.style.setProperty("--main-active","#fdc90b"),t.style.setProperty("--main-border","#eee")):(t.style.setProperty("--main-color","#C9D1D9"),t.style.setProperty("--main-background","#06090F"),t.style.setProperty("--main-active","#6E40C9"),t.style.setProperty("--main-border","#222")),this.isNight=!this.isNight}},computed:{themeName:function(){return this.isNight?"日常模式":"夜间模式"}}},N=j,E=(n("61c1"),Object(c["a"])(N,x,O,!1,null,"4321fed8",null)),F=E.exports;o["a"].use(d["a"]);var S=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:b},{path:"/list",name:"list",component:P},{path:"/about",name:"about",component:F}],M=new d["a"]({mode:"hash",linkExactActiveClass:"active",routes:S}),I=M;o["a"].config.productionTip=!1,new o["a"]({router:I,render:function(t){return t(u)}}).$mount("#app")},"61c1":function(t,e,n){"use strict";n("7cad")},"6dd6":function(t,e,n){"use strict";n("8ce0")},"7cad":function(t,e,n){},"85ec":function(t,e,n){},"8ce0":function(t,e,n){},ab58:function(t,e,n){t.exports=n.p+"img/eat.2e54be3d.png"},c3cc:function(t,e,n){},ec21:function(t,e,n){"use strict";n("c3cc")}});
//# sourceMappingURL=app.bc0ef44e.js.map