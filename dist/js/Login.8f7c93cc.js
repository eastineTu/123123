(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{3547:function(e,t,i){e.exports=i.p+"img/phone.20f09b3f.png"},"51e1":function(e,t,i){e.exports=i.p+"img/login-back.0428876e.png"},"554f":function(e,t,i){e.exports=i.p+"img/login-error.49d1678e.png"},6432:function(e,t,i){e.exports=i.p+"img/people.4e0bef12.png"},"68b9":function(e,t,i){"use strict";var n=i("a6ec"),o=i.n(n);o.a},"856c":function(e,t,i){e.exports=i.p+"img/login-bg.03c4c5d3.png"},a481:function(e,t,i){"use strict";var n=i("cb7c"),o=i("4bf8"),r=i("9def"),a=i("4588"),s=i("0390"),c=i("5f1b"),l=Math.max,u=Math.min,d=Math.floor,g=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};i("214f")("replace",2,function(e,t,i,h){return[function(n,o){var r=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r,o):i.call(String(r),n,o)},function(e,t){var o=h(i,e,this,t);if(o.done)return o.value;var d=n(e),g=String(this),p="function"===typeof t;p||(t=String(t));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var w=[];while(1){var x=c(d,g);if(null===x)break;if(w.push(x),!m)break;var k=String(x[0]);""===k&&(d.lastIndex=s(g,r(d.lastIndex),b))}for(var S="",_=0,y=0;y<w.length;y++){x=w[y];for(var C=String(x[0]),M=l(u(a(x.index),g.length),0),L=[],$=1;$<x.length;$++)L.push(f(x[$]));var E=x.groups;if(p){var T=[C].concat(L,M,g);void 0!==E&&T.push(E);var B=String(t.apply(void 0,T))}else B=v(C,g,M,L,E,t);M>=_&&(S+=g.slice(_,M)+B,_=M+C.length)}return S+g.slice(_)}];function v(e,t,n,r,a,s){var c=n+e.length,l=r.length,u=p;return void 0!==a&&(a=o(a),u=g),i.call(s,u,function(i,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return i;if(u>l){var g=d(u/10);return 0===g?i:g<=l?void 0===r[g-1]?o.charAt(1):r[g-1]+o.charAt(1):i}s=r[u-1]}return void 0===s?"":s})}})},a55b:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all-login"},[n("img",{staticClass:"login-bg",attrs:{src:i("856c")}}),e.isLoginError?e._e():n("div",{staticClass:"login-info"},[n("div",{staticClass:"login-name"},[n("img",{attrs:{src:i("6432")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"门店编号"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),n("div",{staticClass:"login-name"},[n("img",{attrs:{src:i("3547")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e.isLoginError?n("div",{staticClass:"login-error"},[e._m(0),n("div",{staticClass:"error-info"},[e._v("1.您未入围")]),n("div",{staticClass:"error-info"},[e._v("2.门店编号或手机号输入有误")])]):e._e(),n("img",{staticClass:"login-submit",attrs:{src:e.src},on:{click:e.doLogin}}),n("div",{staticClass:"login-bottom"},[e._v("请务必在您的门店内答题，我将全程对您实时定位")])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-title"},[n("img",{attrs:{src:i("554f")}}),e._v(" 无法登陆\n        ")])}],r=(i("4917"),i("a481"),{name:"Login",data:function(){return{isLoginError:!1,longitude:0,latitude:0,code:"",phone:"",user:{},src:i("ddf6")}},methods:{showToast:function(e,t){t=isNaN(t)?3e3:t;var i=document.createElement("div");i.innerHTML=e,i.style.cssText="width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;",document.body.appendChild(i),setTimeout(function(){var e=.5;i.style.webkitTransition="-webkit-transform "+e+"s ease-in, opacity "+e+"s ease-in",i.style.opacity="0",setTimeout(function(){document.body.removeChild(i)},1e3*e)},t)},getLocation:function(){var e=this,t=new BMap.Map("allmap"),i=new BMap.Point(116.331398,39.897445);t.centerAndZoom(i,12);var n=new BMap.Geolocation;n.getCurrentPosition(function(i){if(this.getStatus()==BMAP_STATUS_SUCCESS){var n=new BMap.Marker(i.point);t.addOverlay(n),t.panTo(i.point),e.longitude=i.point.lng,e.latitude=i.point.lat}else{var o=window.open("about:blank","_self");o.opener=null,o.close(),WeixinJSBridge.call("closeWindow")}},{enableHighAccuracy:!0})},loginBack:function(){this.src=i("ddf6"),this.isLoginError=!1},loginError:function(){this.src=i("51e1"),this.isLoginError=!0},doLogin:function(){var e=this;if(this.$bmob.initialize("5341f8e254942033b3dae717daa7eed5","4e0664824ca488cccad8fe1508a2baa0"),this.longitude)this.isLoginError?this.loginBack():this.$bmob.User.login(this.code,this.phone).then(function(t){e.checkHasQuestions(t.objectId)}).catch(function(t){e.loginError(),console.log(t)});else{WeixinJSBridge.call("closeWindow"),this.showToast("您没有开启权限！");var t=window.open("about:blank","_self");t.opener=null,t.close()}},checkHasQuestions:function(e){var t=this,i=this.$bmob.Pointer("_User"),n=i.set(e),o=this.$bmob.Query("question");o.equalTo("user","==",n),o.count().then(function(e){0===e?(t.user=e,t.loginSuccess()):t.showToast("你已经答过题了！")})},loginSuccess:function(){localStorage.setItem("userId",this.user.objectId),localStorage.setItem("longitude",this.longitude),localStorage.setItem("latitude",this.latitude),console.log("qqq>>>>>"+this.longitude),this.$router.replace({name:"empty"})},checkWx:function(){var e=navigator.userAgent;if("MicroMessenger"!=e.match(/MicroMessenger/i)){alert("已禁止本次访问：您必须使用微信内置浏览器访问本页面！");var t=window.open("about:blank","_self");t.opener=null,t.close()}}},created:function(){this.checkWx(),this.getLocation()}}),a=r,s=(i("68b9"),i("2877")),c=Object(s["a"])(a,n,o,!1,null,"dd86cd18",null);t["default"]=c.exports},a6ec:function(e,t,i){},ddf6:function(e,t,i){e.exports=i.p+"img/login-submit.b9a97c62.png"}}]);
//# sourceMappingURL=Login.8f7c93cc.js.map