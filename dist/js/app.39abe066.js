(function(t){function e(e){for(var n,i,l=e[0],o=e[1],u=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,l=1;l<r.length;l++){var o=r[l];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-orange-500 w-full h-screen flex justify-center items-start",attrs:{id:"app"}},[r("Game")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-8 bg-gray-900 w-full h-full flex justify-start flex-col items-center"},[r("h1",{staticClass:"font-bold text-gray-300 text-3xl"},[t._v("Slip Click Vue Game")]),0===t.status?r("LevelSelection",{on:{startGame:t.startGame}}):1===t.status?r("div",{staticClass:"pt-8 flex flex-wrap w-1/2 md:w-11/12 sm:w-11/12 xl:w-1/2 mt-6"},[t._l(t.fruitsArray,(function(e,n){return r("Apple",{key:e,attrs:{isCurrent:t.random===n},on:{userSelected:t.userClick}})})),r("div",{staticClass:"mt-12 flex items-center justify-center w-full"},[r("button",{staticClass:"bg-green-900 text-white p-4 rounded leading-none text-center",on:{click:t.startOver}},[t._v("Too hard")])])],2):r("game-over",{attrs:{falseAttempts:t.falseAttempts,timing:t.timing},on:{startOver:t.startOver}})],1)},l=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"m-2 cursor-pointer",attrs:{"enable-background":"new 0 0 24 24",height:"70",viewBox:"0 0 24 24",width:"70"},on:{click:function(e){return t.$emit("userSelected",t.isCurrent)}}},[r("path",{attrs:{d:"m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z",fill:t.isCurrent?"#f0f8ff":"#f44336"}})])},u=[],c={props:{isCurrent:{type:Boolean,required:!0}}},f=c,d=r("2877"),m=Object(d["a"])(f,o,u,!1,null,null,null),v=m.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 flex flex-col w-1/4 py-6 rounded shadow justify-center items-center bg-gray-200"},[r("h2",{staticClass:"font-bold mt-2 mb-6 text-gray-700 text-2xl"},[t._v("Game Over")]),r("div",{staticClass:"bg-gray-500 mx-4 p-4 rounded shadow flex flex-row w-11/12 justify-around"},[r("button",{staticClass:"bg-purple-600 text-white p-2 rounded leading-none flex items-center",attrs:{type:"button"}},[t._v(" Wrong Clicks "),r("span",{staticClass:"bg-white p-1 rounded text-blue-600 text-xs ml-2"},[t._v(t._s(t.falseAttempts))])]),r("button",{staticClass:"bg-orange-600 text-white p-2 rounded leading-none flex items-center",attrs:{type:"button"}},[t._v(" Time "),r("span",{staticClass:"bg-white p-1 rounded text-blue-600 text-xs ml-2"},[t._v(t._s(t.timing))])])]),r("div",{staticClass:"flex flex-col pt-8"},[r("button",{staticClass:"bg-blue-900 text-white p-4 rounded leading-none text-center hover:bg-transparent hover:text-gray-800 hover:font-bold hover:underline",attrs:{type:"button"},on:{click:function(e){return t.$emit("startOver")}}},[t._v("Start Over")])])])},h=[],b={props:["falseAttempts","timing"]},x=b,g=Object(d["a"])(x,p,h,!1,null,null,null),w=g.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-red-100 w-1/2 md:w-11/12 sm:w-11/12 xl:w-1/2 mt-6 rounded shadow"},[r("h1",{staticClass:"mb-6 pt-6 mx-auto font-bold text-center"},[t._v("Make the right level choice")]),r("div",{staticClass:"mx-auto max-w-sm text-center flex flex-wrap justify-center"},[r("div",{staticClass:"flex items-center mr-4 mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"hidden",attrs:{id:"radio1",type:"radio",name:"radio",value:"1000"},domProps:{checked:t._q(t.level,"1000")},on:{change:function(e){t.level="1000"}}}),t._m(0)]),r("div",{staticClass:"flex items-center mr-4 mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"hidden",attrs:{id:"radio2",type:"radio",name:"radio",value:"700"},domProps:{checked:t._q(t.level,"700")},on:{change:function(e){t.level="700"}}}),t._m(1)]),r("div",{staticClass:"flex items-center mr-4 mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"hidden",attrs:{id:"radio3",type:"radio",name:"radio",value:"500"},domProps:{checked:t._q(t.level,"500")},on:{change:function(e){t.level="500"}}}),t._m(2)])]),r("div",{staticClass:"mt-6 mb-4 w-full flex items-center justify-center"},[r("button",{staticClass:"bg-green-400 text-gray-900 rounded px-3 shadow text-center py-3",on:{click:t.startGame}},[t._v("Start Game")])])])},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"radio1"}},[r("span",{staticClass:"w-4 h-4 inline-block mr-1 border border-grey"}),t._v(" Easy ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"radio2"}},[r("span",{staticClass:"w-4 h-4 inline-block mr-1 border border-grey"}),t._v(" Medium ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"radio3"}},[r("span",{staticClass:"w-4 h-4 inline-block mr-1 border border-grey"}),t._v(" Extream ")])}],_={data:function(){return{level:"700"}},methods:{startGame:function(){this.$emit("startGame",this.level)}}},O=_,k=(r("b05f"),Object(d["a"])(O,y,C,!1,null,"7bb8ad1f",null)),j=k.exports,A={name:"game",data:function(){return{fruitsCount:32,random:Math.floor(Math.random()*this.fruitsCount),falseAttempts:0,timer:0,interval:null,timerInterval:null,status:0,level:null}},computed:{fruitsArray:function(){return new Array(this.fruitsCount)},timing:function(){var t=Math.floor(this.timer/60),e=this.timer-60*t;return t+":"+e}},components:{Apple:v,GameOver:w,LevelSelection:j},methods:{randomize:function(t){var e=this;clearInterval(this.interval),this.interval=setInterval((function(){e.random=Math.floor(Math.random()*e.fruitsCount)}),t)},userClick:function(t){t?this.fruitsCount--:this.falseAttempts++},startOver:function(){clearInterval(this.timerInterval),clearInterval(this.interval),this.fruitsCount=32,this.random=Math.floor(Math.random()*this.fruitsCount),this.falseAttempts=0,this.timer=0,this.interval=null,this.timerInterval=null,this.status=0,this.level=null},startGame:function(t){var e=this;this.level=t,this.randomize(t),this.timerInterval=setInterval((function(){return e.timer++}),1e3),this.status=1}},beforeUpdate:function(){0===this.fruitsCount&&(this.$toasted.show("Game Over",{icon:"fa-check"}),this.status=2,clearInterval(this.timerInterval))},beforeDestroy:function(){clearInterval(this.interval)}},G=A,M=Object(d["a"])(G,i,l,!1,null,null,null),$=M.exports,I={name:"App",components:{Game:$}},S=I,P=Object(d["a"])(S,a,s,!1,null,null,null),E=P.exports,T=r("a65d"),q=r.n(T);n["a"].config.productionTip=!1,n["a"].use(q.a,{theme:"bubble",position:"bottom-left",duration:5e3,iconPack:"fontawesome"}),new n["a"]({render:function(t){return t(E)}}).$mount("#app")},a37e:function(t,e,r){},b05f:function(t,e,r){"use strict";var n=r("a37e"),a=r.n(n);a.a}});
//# sourceMappingURL=app.39abe066.js.map