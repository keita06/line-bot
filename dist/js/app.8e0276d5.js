(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)o=i[d],n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-liff-bot/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pt-3 pd-3",attrs:{id:"app"}},[a("input-form",{attrs:{ttl:e.title}})],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"text-center pb-2"},[e._v(e._s(e.ttl))]),a("form",{on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("名前")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.data.name},on:{change:function(t){e.createMessage()},input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"reason"}},[e._v("遅刻理由")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.data.reason,expression:"data.reason"}],staticClass:"form-control",attrs:{id:"reason"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.data,"reason",t.target.multiple?a:a[0])},function(t){e.createMessage()}]}},e._l(e.reasons,function(t,r){return a("option",{key:r},[e._v(e._s(t))])}),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"その他"==e.data.reason,expression:"data.reason=='その他'"}],staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.reason_other,expression:"data.reason_other"}],staticClass:"form-control",attrs:{type:"text",id:"reson_other",placeholder:"その他の場合は理由を書いてください。"},domProps:{value:e.data.reason_other},on:{change:function(t){e.createMessage()},input:function(t){t.target.composing||e.$set(e.data,"reason_other",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("種別")]),e._l(e.types,function(t,r){return a("div",{key:r,staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.schedule,expression:"data.schedule"}],staticClass:"form-check-input",attrs:{type:"radio",id:r},domProps:{value:t,checked:0!=r?"":"checked",checked:e._q(e.data.schedule,t)},on:{change:[function(a){e.$set(e.data,"schedule",t)},function(t){e.createMessage()}]}}),a("label",{staticClass:"form-check-label",attrs:{for:r}},[e._v(e._s(t))])])})],2),a("div",{directives:[{name:"show",rawName:"v-show",value:"遅刻します"==e.data.schedule,expression:"data.schedule == '遅刻します'"}],staticClass:"form-group"},[a("label",[e._v("遅刻時間")]),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"col-5 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.data.time1,expression:"data.time1"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.data,"time1",t.target.multiple?a:a[0])},function(t){e.createMessage()}]}},e._l(e.createTimes(0,12),function(t,r){return a("option",{key:r},[e._v(e._s(t))])}),0)]),e._m(0),a("div",{staticClass:"col-5 form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.data.time2,expression:"data.time2"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.data,"time2",t.target.multiple?a:a[0])},function(t){e.createMessage()}]}},e._l(e.createTimes(1,13),function(t,r){return a("option",{key:r},[e._v(e._s(t))])}),0)])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[e._v("メッセージ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data.message,expression:"data.message"}],staticClass:"form-control",attrs:{id:"message",rows:"5"},domProps:{value:e.data.message},on:{input:function(t){t.target.composing||e.$set(e.data,"message",t.target.value)}}})]),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2 text-center form-group"},[a("span",[e._v("～")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group pt-2"},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{id:"send",type:"submit"}},[e._v("送信")])])}],c=(a("7f7f"),{name:"InputForm",props:{ttl:String},data:function(){return{data:{name:"",reason:"",reason_other:"",schedule:"",time1:"",time2:"",message:""},reasons:["電車遅延","体調不良","忘れ物","その他"],types:["遅刻します","全休をいただきます","午前休をいただきます","午後休をいただきます"],text1:"おはようございます。",text2:"よろしくお願いします。"}},methods:{createTimes:function(e,t){for(var a=[],r=e;r<t;r++)a.push("".concat(5*r,"分"));return a},createMessage:function(){var e,t,a;t="その他"==this.data.reason?this.data.reason_other:this.data.reason,a="遅刻します"==this.data.schedule?"".concat(this.data.time1,"～").concat(this.data.time2,"ほど").concat(this.data.schedule):this.data.schedule,e="".concat(this.text1).concat(this.data.name,"です。").concat(t,"のため").concat(a,"。").concat(this.text2),this.data.message=e}}}),l=c,u=a("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null),m=d.exports,p={name:"app",components:{InputForm:m},data:function(){return{title:"退勤連絡 BOT"}}},f=p,v=(a("034f"),Object(u["a"])(f,n,s,!1,null,null,null)),h=v.exports,g=a("9f7b");a("f9e3"),a("2dd8");r["a"].config.productionTip=!1,r["a"].use(g["a"]),new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,a){}});
//# sourceMappingURL=app.8e0276d5.js.map