(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3a7673"],{2814:function(t,s,i){},"2d68":function(t,s,i){"use strict";var o=i("2814"),a=i.n(o);a.a},"81c5":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"goods-detail"},[i("navbar",{attrs:{text:t.goods.title}}),t.goods.id?i("scroller",[i("div",{staticClass:"slide"},[i("van-swipe",{attrs:{"show-indicators":""},on:{change:t.toggleSwiper}},[t._l(t.slides,function(s,o){return i("van-swipe-item",{key:o},[i("a",{staticClass:"slide-url pic-align-center",on:{click:function(s){t.pvwImg(o)}}},[i("lazy-component",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s,expression:"item"}],staticClass:"slide-image",attrs:{mode:"aspectFill"}})])],1)])}),i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v(t._s(t.current+1)+"/"+t._s(t.slides.length))])],2),t.activeTime?i("div",{staticClass:"u-time-bar"},[t._v("距结束还有 "+t._s(t.activeTime))]):i("div",{staticClass:"u-time-bar due"},[t._v("活动已到期")])],1),i("div",{staticClass:"goods-detail__info"},[i("p",{staticClass:"goods-detail__price s-red"},[i("span",{staticClass:"icon-price"},[t._v("¥")]),t._v("\n        "+t._s(t.goods.sale_price)+"\n      ")]),t.goods.market_price>t.goods.sale_price?i("p",{staticClass:"goods__price-cost"},[t._v("¥"+t._s(t.goods.market_price))]):t._e(),i("p",{staticClass:"u-float-r u-badge u-badge--xs"},[t._v("秒杀")]),i("p",{staticClass:"active-hint",on:{click:function(s){t.isPopup=!t.isPopup}}},[i("span",{staticClass:"iconfont icon-gantanhao"}),t._v("活动说明\n      ")]),i("p",{staticClass:"goods-detail__tt"},[t._v(t._s(t.goods.title))])]),t.goods.tab?i("div",{staticClass:"m-list link g-flex",on:{click:function(s){t.jump(t.goods.id,t.goods.tab)}}},[i("div",{staticClass:"m-list__l g-flex__item"},[t._v("同款")]),i("i",{staticClass:"iconfont icon-fanhui right"})]):t._e(),t.goods.goods_param?i("div",{staticClass:"switch-card"},[i("div",{staticClass:"switch-card__hd"},[i("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),i("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir,on:{click:t.toggleArrow}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goods.goods_param,function(s,o){return i("div",{key:o,staticClass:"switch-card__item"},[i("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(s.title))]),i("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(s.param_value))])])}),0)]):t._e(),t.goods?i("div",{staticClass:"goods-detail__pic"},[i("div",{domProps:{innerHTML:t._s(t.goodsDetail)}})]):t._e()]):t._e(),i("div",{staticClass:"u-button__bar"},[i("button",{staticClass:"u-button u-button--square",on:{click:t.buy}},[t._v("立即秒杀")])]),i("van-popup",{staticClass:"hint-popup",model:{value:t.isPopup,callback:function(s){t.isPopup=s},expression:"isPopup"}},[t.activeInfo.content?i("div",{staticClass:"hint-popup__box",domProps:{innerHTML:t._s(t.activeInfo.content)}}):t._e()])],1)},a=[],e=i("ed08"),c=i("9d8d"),n=i("fade"),r={data:function(){return{data:[],current:0,slides:[],goods:[],arrowDir:"top",selfSwiperNum:1,detailPic:"",activeInfo:[],activeTime:"",isPopup:!1,goodsDetail:""}},components:{navbar:c["a"]},computed:{totalSwiperNum:function(){return this.slides.length}},methods:{toggleSwiper:function(t){this.current=t},countTime:function(){var t=this,s=t.activeInfo.end_time,i=s-Date.parse(new Date)/1e3,o=parseInt(i/60/60/24),a=parseInt(i/60/60%24),e=parseInt(i/60%60),c=parseInt(i%60);t.activeTime="".concat(o,"天").concat(a,"时").concat(e,"分").concat(c,"秒"),setTimeout(function(){t.countTime()},1e3)},jump:function(t,s){this.$router.push({name:"lists",params:{id:t,tab:s}})},buy:function(){var t=this;Object(e["h"])("seckill/api/bug_now",{PHPSESSID:window.localStorage.getItem("PHPSESSID"),goods_id:this.goods.goods_id}).then(function(s){if(console.log(s),""!=s.msg)return Object(n["d"])(s.msg),!1;var i=/event_type\/(\d+)\/event_id\/(\d+)\/shop_order_id\/(\d+)\/pbid\/(\d+)/.exec(s.url);console.log(i);var o=i[1],a=i[2],e=i[3],c=i[4],r=t.goods.shop_goods_id,d=t.goods.sale_price,l={event_type:o,event_id:a,shop_order_id:e,pbid:c,goods_id:r,activePrice:d};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(l)}),t.$router.push("/confirm_order/"+r)})},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"},pvwImg:function(t){Object(n["b"])({images:this.slides,startPosition:t})}},created:function(){var t=this,s=this.$route.params.id;Object(e["h"])("seckill/api/goods_detail",{id:s}).then(function(s){if(0==s.code&&""!=s.msg)return Object(n["d"])(s.msg),!1;t.data=s,t.slides=s.goods.goods.imgs_url,t.goods=s.goods,t.goodsDetail=s.goods.goods.content,t.activeInfo=s.event_info}),this.countTime()}},d=r,l=(i("2d68"),i("048f")),_=Object(l["a"])(d,o,a,!1,null,"c6bd2d2e",null);_.options.__file="index.vue";s["default"]=_.exports}}]);