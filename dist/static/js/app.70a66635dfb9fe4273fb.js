webpackJsonp([0],[,,,function(t,n,e){t.exports=e.p+"static/img/banner44.8d343ad.jpg"},function(t,n,e){"use strict";var r=e(1),i=e(42),s=e(34),a=e.n(s),o=e(30),c=e.n(o),u=e(31),l=e.n(u),f=e(32),v=e.n(f),_=e(33),p=e.n(_);r.default.use(i.a),n.a=new i.a({routes:[{path:"/search",component:a.a,children:[{path:"character",component:c.a},{path:"musicList",component:l.a},{path:"radio",component:v.a},{path:"ranking",component:p.a}]}]})},function(t,n){},function(t,n){},function(t,n,e){e(22);var r=e(0)(e(9),e(40),null,null);t.exports=r.exports},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",components:{}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{index:1,distance:0,startX:0,endX:0,isTrans:!0,timer:null}},mounted:function(){var t=this;this.$nextTick(function(){t.timer=setInterval(t.autoPlay,1500),t.$refs.bannerUl.addEventListener("webkitTransitionEnd",function(){t.index>=4&&(t.isTrans=!1,t.index=0,t.play(20*-t.index))})})},methods:{autoPlay:function(){this.isTrans=!0,this.index++,this.play(20*-this.index)},play:function(t){this.$refs.bannerUl.style.transform="translate("+t+"%)"},start:function(t){this.startX=t.touches[0].clientX},move:function(t){this.distance=t.touches[0].clientX-this.startX,console.log(this.distance)},toggleTransition:function(){this.isTrans=!this.isTrans}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(29),i=e.n(r);n.default={components:{banner:i.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(2);e.n(r);n.default={name:"search",data:function(){return{}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),i=e(7),s=e.n(i),a=e(4),o=e(2),c=e.n(o),u=e(5),l=(e.n(u),e(6));e.n(l);r.default.use(c.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){t.exports=e.p+"static/img/banner11.3a409d7.jpg"},function(t,n,e){t.exports=e.p+"static/img/banner22.b393750.jpg"},function(t,n,e){t.exports=e.p+"static/img/banner33.69ffd9b.jpg"},,function(t,n,e){e(19);var r=e(0)(e(10),e(37),"data-v-459361f9",null);t.exports=r.exports},function(t,n,e){e(18);var r=e(0)(e(11),e(36),null,null);t.exports=r.exports},function(t,n,e){e(21);var r=e(0)(e(12),e(39),null,null);t.exports=r.exports},function(t,n,e){e(17);var r=e(0)(e(13),e(35),null,null);t.exports=r.exports},function(t,n,e){e(20);var r=e(0)(e(14),e(38),null,null);t.exports=r.exports},function(t,n,e){e(23);var r=e(0)(e(15),e(41),"data-v-804f62e2",null);t.exports=r.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\t我是radio\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("banner")],1)},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("ul",{ref:"bannerUl",class:{trans:t.isTrans},on:{touchmove:t.move,touchstart:t.start}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("li",[r("img",{attrs:{src:e(3),alt:""}})])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("li",[r("img",{attrs:{src:e(25),alt:""}})])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("li",[r("img",{attrs:{src:e(26),alt:""}})])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("li",[r("img",{attrs:{src:e(27),alt:""}})])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("li",[r("img",{attrs:{src:e(3),alt:""}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",[e("li")])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\ti'm ranking\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{},[t._v("\n\t我是musicList\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("div",{staticClass:"nav-main"},[e("ul",[e("li",{staticClass:"current"},[e("router-link",{attrs:{to:"/search"}},[e("p",[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("span",[t._v("发现音乐")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/"}},[e("p",[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("span",[t._v("我的音乐")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/"}},[e("p",[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("span",[t._v("朋友")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/"}},[e("p",[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("span",[t._v("账号")])])],1)])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("mt-header",[e("mt-button",{slot:"right"},[e("i",{staticClass:"iconfont"},[t._v("")])])],1),t._v(" "),e("div",{staticClass:"search-nav"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/search/character"}},[t._v("个性推荐")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/search/musicList"}},[t._v("歌单")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/search/radio"}},[t._v("主播电台")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/search/ranking"}},[t._v("排行榜")])],1)])]),t._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.70a66635dfb9fe4273fb.js.map