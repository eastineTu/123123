(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{3547:function(t,i,n){t.exports=n.p+"img/phone.20f09b3f.png"},"3f52":function(t,i,n){},"51e1":function(t,i,n){t.exports=n.p+"img/login-back.0428876e.png"},"554f":function(t,i,n){t.exports=n.p+"img/login-error.49d1678e.png"},6432:function(t,i,n){t.exports=n.p+"img/people.4e0bef12.png"},"856c":function(t,i,n){t.exports=n.p+"img/login-bg.03c4c5d3.png"},"9e6b":function(t,i,n){"use strict";var o=n("3f52"),e=n.n(o);e.a},a55b:function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"all-login"},[o("img",{staticClass:"login-bg",attrs:{src:n("856c")}}),t.isLoginError?t._e():o("div",{staticClass:"login-info"},[o("div",{staticClass:"login-name"},[o("img",{attrs:{src:n("6432")}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"门店编号"},domProps:{value:t.code},on:{input:function(i){i.target.composing||(t.code=i.target.value)}}})]),o("div",{staticClass:"login-name"},[o("img",{attrs:{src:n("3547")}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.phone},on:{input:function(i){i.target.composing||(t.phone=i.target.value)}}})])]),t.isLoginError?o("div",{staticClass:"login-error"},[t._m(0),o("div",{staticClass:"error-info"},[t._v("1.您未入围")]),o("div",{staticClass:"error-info"},[t._v("2.门店编号或手机号输入有误")])]):t._e(),o("img",{staticClass:"login-submit",attrs:{src:t.src},on:{click:t.doLogin}})])},e=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"error-title"},[o("img",{attrs:{src:n("554f")}}),t._v(" 无法登陆\n        ")])}],s={name:"Login",data:function(){return{isLoginError:!1,longitude:0,latitude:0,code:"",phone:"",user:{},src:n("ddf6")}},methods:{getLocation:function(){var t=this,i=new BMap.Map("allmap"),n=new BMap.Point(116.331398,39.897445);i.centerAndZoom(n,12);var o=new BMap.Geolocation;o.getCurrentPosition(function(n){if(this.getStatus()==BMAP_STATUS_SUCCESS){var o=new BMap.Marker(n.point);i.addOverlay(o),i.panTo(n.point),t.longitude=n.point.lng,t.latitude=n.point.lat}},{enableHighAccuracy:!0})},loginBack:function(){this.src=n("ddf6"),this.isLoginError=!1},loginError:function(){this.src=n("51e1"),this.isLoginError=!0},doLogin:function(){var t=this;this.$bmob.initialize("5341f8e254942033b3dae717daa7eed5","4e0664824ca488cccad8fe1508a2baa0"),this.isLoginError?this.loginBack():this.$bmob.User.login(this.code,this.phone).then(function(i){t.user=i,t.loginSuccess(),console.log(i)}).catch(function(i){t.loginError(),console.log(i)})},loginSuccess:function(){this.$router.push({name:"rule",params:{code:this.user,longitude:this.longitude,latitude:this.latitude}})}},created:function(){this.getLocation()}},r=s,a=(n("9e6b"),n("2877")),c=Object(a["a"])(r,o,e,!1,null,"17ecf3c4",null);i["default"]=c.exports},ddf6:function(t,i,n){t.exports=n.p+"img/login-submit.b9a97c62.png"}}]);
//# sourceMappingURL=Login.1232f1c1.js.map