(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],f=0,m=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0825":function(t,e,n){},4509:function(t,e,n){},5317:function(t,e,n){"use strict";var a=n("0825"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[this.$store.state.isLoading?n("div",{staticClass:"loading-container"},[n("div",{staticClass:"loading"},[n("div",{staticClass:"circle"}),n("h3",[t._v("Loading . . .")])])]):t._e()]),n("router-view")],1)},o=[],r={methods:{getWeatherData:function(){var t=this,e="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization="+this.$store.state.weatherToken;this.axios.get(e).then((function(e){t.$store.commit("weatherDataUpdate",e.data.records.location),t.$store.commit("loadingSwich",!1)})).catch((function(e){alert("取得資料時發生錯誤"),t.$store.commit("loadingSwich",!1)}))}},created:function(){this.getWeatherData()}},c=r,s=(n("cb22"),n("2877")),l=Object(s["a"])(c,i,o,!1,null,"047f4ce9",null),u=l.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather"},[n("nav-bar"),n("div",{staticClass:"content"},[n("location-list"),n("weather-detail")],1)],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"title"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"sun"}}),n("h2",[t._v("天氣預報")])],1)])},p=[],v={},b=v,w=(n("b320"),Object(s["a"])(b,h,p,!1,null,"8ede89b2",null)),g=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade2",appear:""}},[n("div",{staticClass:"mobile",class:{"list-active":t.screenWidth}},[n("ul",{staticClass:"location-list"},t._l(t.locationListData,(function(t){return n("location-item",{key:t.location,attrs:{locationName:t.location,maxT:t.maxT,minT:t.minT}})})),1),n("button",{staticClass:"mobile-btn",on:{click:function(e){return t.listBtn()}}},[n("font-awesome-icon",{attrs:{icon:["fas",t.mobileSw?"chevron-left":"chevron-right"]}})],1)])])},T=[],C=(n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item",class:{active:t.itemActive},on:{click:function(e){return t.locationHandler()}}},[n("h2",[t._v(t._s(t.locationName))]),n("h2",[t._v(t._s(t.minT)+"⁰C~"+t._s(t.maxT)+"⁰C")])])}),x=[],y={props:{locationName:{type:String,default:""},minT:{type:String,default:"0"},maxT:{type:String,default:"0"}},computed:{itemActive:function(){var t=this.$store.state.currentLocation;return this.locationName===t}},methods:{locationHandler:function(){this.$store.commit("locationChange",this.locationName)}}},S=y,$=(n("ead5"),Object(s["a"])(S,C,x,!1,null,"5d8e81c8",null)),E=$.exports,O={components:{LocationItem:E},data:function(){return{mobileSw:!1}},computed:{locationListData:function(){var t=this.$store.state.weatherData.map((function(t){var e=t.weatherElement.find((function(t){return"MinT"===t.elementName})).time[0].parameter.parameterName,n=t.weatherElement.find((function(t){return"MaxT"===t.elementName})).time[0].parameter.parameterName;return{location:t.locationName,minT:e,maxT:n}}));return t},screenWidth:function(){var t=document.documentElement.clientWidth;return!(t<600||this.mobileSw)||this.mobileSw}},methods:{listBtn:function(){this.mobileSw=!this.mobileSw}}},j=O,L=(n("a764"),Object(s["a"])(j,_,T,!1,null,"43493b06",null)),D=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-content"},[n("h1",[t._v(t._s(t.location))]),n("transition",{attrs:{name:"down",appear:""}},[n("div",{staticClass:"weather-list-container"},t._l(t.dataList,(function(t,e){return n("interval-content",{key:e,attrs:{startTime:t.sTime,endTime:t.eTime,pop:t.PoP,wx:t.Wx,ci:t.CI,maxT:t.MaxT,minT:t.MinT}})})),1)])],1)},P=[],M=n("7618"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",{staticClass:"time"},[t._v(t._s(t.startTime)+"~"+t._s(t.endTime))]),n("h2",{staticClass:"tem"},[t._v("溫度："+t._s(t.minT)+"⁰C~"+t._s(t.maxT)+"⁰C")]),n("h3",{staticClass:"ci"},[t._v("體感："+t._s(t.ci))]),n("h3",{staticClass:"wx"},[t._v("天氣狀況："+t._s(t.wx))]),n("h2",{staticClass:"pop"},[t._v("降雨機率："+t._s(t.pop)+"%")])])},W=[],A={props:{startTime:{type:String,default:""},endTime:{type:String,default:""},maxT:{type:String,default:"20"},minT:{type:String,default:"25"},pop:{type:String,default:"60"},wx:{type:String,default:"cxvcx"},ci:{type:String,default:"ddfsfds"}}},F=A,B=(n("c5c3"),Object(s["a"])(F,k,W,!1,null,"6c77f71b",null)),I=B.exports,H={components:{IntervalContent:I},data:function(){return{datalocation:"",datalist:[]}},computed:{location:function(){return this.$store.state.currentLocation},dataList:function(){var t=this;if(!this.$store.state.isLoading){var e=function(){for(var e=["MinT","MaxT","PoP","CI","Wx"],n=t.$store.state.currentLocation,a=t.$store.state.weatherData.find((function(t){return t.locationName===n})),i=[],o=function(n){var o={sTime:a.weatherElement[0].time[n].startTime.slice(5,16),eTime:a.weatherElement[0].time[n].endTime.slice(5,16)};e.forEach((function(e){o[e]=t.itemDataFilter(e,a.weatherElement,n)})),i.push(o)},r=0;r<3;r++)o(r);return{v:i}}();return"object"===Object(M["a"])(e)?e.v:void 0}}},methods:{itemDataFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.find((function(e){return e.elementName===t})),i=a.time[n].parameter.parameterName;return i},getlocation:function(){this.datalocation=this.$store.state.currentLocation}},mounted:function(){this.getlocation()}},J=H,U=(n("5317"),Object(s["a"])(J,N,P,!1,null,"19ec776e",null)),z=U.exports,q={components:{NavBar:g,LocationList:D,WeatherDetail:z}},G=q,K=(n("778f"),Object(s["a"])(G,m,d,!1,null,"c466b220",null)),Q=K.exports;a["a"].use(f["a"]);var R=new f["a"]({routes:[{path:"/",redirect:"/weather"},{path:"/weather",name:"weather",component:Q},{path:"/about",name:"about"}]}),V=n("2f62");a["a"].use(V["a"]);var X=new V["a"].Store({state:{isLoading:!0,weatherToken:"CWB-7119ECA8-257C-4ECF-ADF1-86E97EAE5463",weatherData:[],currentLocation:"臺北市"},mutations:{weatherDataUpdate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.weatherData=e},loadingSwich:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.isLoading=e},locationChange:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.currentLocation=e}},actions:{}}),Y=n("bc3a"),Z=n.n(Y),tt=n("a7fe"),et=n.n(tt),nt=(n("c67a"),n("ecee")),at=n("c074"),it=n("ad3d");nt["c"].add(at["f"],at["c"],at["e"],at["d"],at["b"],at["a"]),a["a"].config.productionTip=!1,a["a"].use(et.a,Z.a),a["a"].component("font-awesome-icon",it["a"]),new a["a"]({router:R,store:X,render:function(t){return t(u)}}).$mount("#app")},"5b29":function(t,e,n){},6073:function(t,e,n){},"778f":function(t,e,n){"use strict";var a=n("9033"),i=n.n(a);i.a},9033:function(t,e,n){},9200:function(t,e,n){},a764:function(t,e,n){"use strict";var a=n("5b29"),i=n.n(a);i.a},b320:function(t,e,n){"use strict";var a=n("e784"),i=n.n(a);i.a},c5c3:function(t,e,n){"use strict";var a=n("9200"),i=n.n(a);i.a},c67a:function(t,e,n){},cb22:function(t,e,n){"use strict";var a=n("4509"),i=n.n(a);i.a},e784:function(t,e,n){},ead5:function(t,e,n){"use strict";var a=n("6073"),i=n.n(a);i.a}});
//# sourceMappingURL=app.c824d541.js.map