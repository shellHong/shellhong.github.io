webpackJsonp([1],{"4WVa":function(e,t){},"7xxz":function(e,t){},"9EY4":function(e,t){},DHLf:function(e,t){},EfFH:function(e,t){},IsT4:function(e,t){},JdLZ:function(e,t){},L73y:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("zL8q"),o=n.n(r),s=(n("tvR6"),{data:function(){return{activeUrl:"",list:[{url:"./cpcustomization",name:"cp定制化接入文档"},{title:"多应用配置",group:[{url:"./mulreadme",name:"说明文档"},{url:"./mulcodeconfig",name:"注入代码获取"},{url:"./mulurlconfig",name:"页面路径配置"}]},{title:"快应用配置",group:[{url:"./fastreadme",name:"说明文档"},{url:"./fastcodeconfig",name:"注入代码获取"},{url:"./fasturlconfig",name:"页面路径配置"}]},{title:"导航页配置",group:[{url:"./navreadme",name:"说明文档"},{url:"./navcodeconfig",name:"注入代码获取"}]},{title:"单应用配置",group:[{url:"./singlereadme",name:"说明文档"},{url:"./singletest",name:"流程模拟测试"},{url:"./singleurlconfig",name:"页面路径配置"}]},{title:"工具箱",group:[{url:"./devicestest",name:"多机型适配"},{url:"./schemecheck",name:"scheme有效性校验"}]},{url:"./scenenotice",name:"配置技巧"}]}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){}},mounted:function(){this.activeUrl="."+location.hash.replace("#","")}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.activeUrl,router:!0,"unique-opened":!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.list,function(t,a){return[t.group?[n("el-submenu",{key:a,attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",[e._v(e._s(t.title))])]),e._v(" "),n("el-menu-item-group",e._l(t.group,function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.url}},[e._v(e._s(t.name))])}))],2)]:e._e(),e._v(" "),t.group?e._e():[n("el-menu-item",{key:a,attrs:{index:t.url}},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])]]})],2)},staticRenderFns:[]};var l={name:"App",components:{LeftNav:n("VU/8")(s,i,!1,function(e){n("JdLZ")},null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",{staticClass:"row-container"},[t("el-col",{staticClass:"left-nav",attrs:{span:4}},[t("LeftNav")],1),this._v(" "),t("el-col",{staticClass:"right-field",attrs:{span:20}},[t("router-view")],1)],1)},staticRenderFns:[]};var p=n("VU/8")(l,c,!1,function(e){n("ggSA")},null,null).exports,u=n("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("p",[this._v("用于对多个应用（也支持一个）的页面进行配置")]),this._v(" "),t("img",{attrs:{src:n("Txl5"),alt:""}}),this._v(" "),t("hr"),this._v(" "),t("img",{attrs:{src:n("UT21"),alt:""}})])}]};var d=n("VU/8")(null,m,!1,function(e){n("Y74r")},null,null).exports,f=n("EVWP"),v=n.n(f),h=n("GhJf"),g=n.n(h),_={props:{label:String,name:String,tip:String}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cp-form_item"},[n("label",{staticClass:"cp-form_label",attrs:{for:e.name}},[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.tip?n("span",{staticClass:"cp-form_tip",domProps:{innerHTML:e._s(e.tip)}}):e._e()],2)},staticRenderFns:[]};var k=n("VU/8")(_,y,!1,function(e){n("EfFH")},null,null).exports,b={props:{value:String,placeholder:{type:String,default:""}}},x={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"cp-form_input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})},staticRenderFns:[]};var C=n("VU/8")(b,x,!1,function(e){n("XT35")},null,null).exports,I={props:{options:Array,value:String},methods:{handleChange:function(e){this.$emit("input",e.target.value)},isSelected:function(e){return e===this.value?"selected":""}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"cp-form_input",on:{change:e.handleChange}},e._l(e.options,function(t){return n("option",{key:t.v,domProps:{value:t.v,selected:e.isSelected(t.v)}},[e._v(e._s(t.k))])}))},staticRenderFns:[]};var S=n("VU/8")(I,E,!1,function(e){n("L73y")},null,null).exports,w=n("71e1"),U=n.n(w),M={name:"app",data:function(){return{formItems:[{type:"select",label:"应用平台",name:"turnTo",options:[{k:"浏览器",v:"b"},{k:"应用商店",v:"a"}],default:"a"},{type:"select",label:"安装完成打开方式",name:"openType",options:[{k:"手动打开",v:"0"},{k:"直接打开",v:"1"}],default:"0"},{type:"input",label:"中转页url",name:"gameUrl",tip:"cp自定义页面，不填则默认使用简单页面"},{type:"input",label:"页面标题",name:"title"},{type:"input",label:"埋点（页面来源）",name:"business",tip:'<a target="_blank" href="http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source">参考埋点文档(flyme_business_source字段)</a>'}],params:{},plusParams:[]}},computed:{console:function(){var e="https://i3.mzres.com/resources/appStore/cp/p-mul.html?",t=[],n=this.params.gameUrl&&v.a.encode(this.params.gameUrl),a=this.params.scheme&&v.a.encode(this.params.scheme);for(var r in this.params)if(this.params.hasOwnProperty(r)&&-1===["scheme","gameUrl"].indexOf(r)){var o=this.params[r];~r.indexOf("Color")&&~o.indexOf("#")&&(o="rgb("+g()(o).join(",")+")"),o&&t.push(r+"="+o)}return n&&t.push("gameUrl="+n),a&&t.push("scheme="+a),this.plusParams.length>0&&this.plusParams.forEach(function(e){e.key&&e.value&&t.push(e.key+"="+e.value)}),e+=t.join("&")}},watch:{console:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=document.getElementById("qrcode");U.a.toCanvas(t,e,function(e){e?console.error(e):console.log("success!")})})},methods:{addParam:function(){this.plusParams.push({key:"",value:""})},removeParam:function(e){this.plusParams.splice(e,1)}},created:function(){var e=this;this.formItems.map(function(t){e.$set(e.params,t.name,t.default||"")})},components:{FormItem:k,CpInput:C,CpSelect:S}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.console,expression:"console"}],staticClass:"cp-console",domProps:{value:e.console},on:{input:function(t){t.target.composing||(e.console=t.target.value)}}}),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.formItems,function(t){return n("form-item",{key:t.name,attrs:{label:t.label,name:t.name,tip:t.tip}},["input"==t.type?n("CpInput",{model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e(),e._v(" "),"select"==t.type?n("CpSelect",{attrs:{options:t.options},model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e()],1)})),e._v(" "),n("canvas",{attrs:{id:"qrcode",width:"500",height:"500"}})])},staticRenderFns:[]};var N=n("VU/8")(M,$,!1,function(e){n("arel")},null,null).exports,T=n("mvHQ"),R=n.n(T),F=n("kX7f"),P=(n("h636"),n("eKfU"),""),V=null,L={name:"app",data:function(){return{formItems:[{type:"input",label:"deeplink链接",name:"scheme",placeholder:"可为空，默认为打开应用"},{type:"input",label:"packageName",name:"packageName"},{type:"input",label:"versionCode",name:"versionCode"},{type:"input",label:"appId",name:"appId"},{type:"input",label:"installText",name:"installText",placeholder:"可为空，默认为：安装"},{type:"input",label:"updateText",name:"updateText",placeholder:"可为空，默认为：更新"},{type:"input",label:"installCompleteText",name:"installCompleteText",placeholder:"可为空，默认为：打开"},{type:"input",label:"failureText",name:"failureText",placeholder:"可为空，默认为：重试"}],list:[]}},computed:{},watch:{list:{handler:function(e){V&&V.setValue(this.getCode())},deep:!0}},methods:{getCode:function(){var e={};return this.list.forEach(function(t){t.appId=""!==t.appId?parseInt(t.appId):"",t.versionCode=""!==t.versionCode?parseInt(t.versionCode):"",e[t.packageName]=t}),P.replace(/var appInfoMap = \{\};/m,"var appInfoMap = "+R()(e)+";")},addGroup:function(){var e={};this.formItems.map(function(t){"versionCode"===t.name?e[t.name]=0:e[t.name]=""}),this.list.push(e)},deleteGroup:function(e){this.list.splice(e,1)}},created:function(){this.addGroup()},mounted:function(){(V=F.edit("javascript-editor")).getSession().setMode("ace/mode/javascript"),V.setTheme("ace/theme/monokai"),P=document.getElementById("code").innerText},components:{FormItem:k,CpInput:C,CpSelect:S}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"button-field"},[n("button",{staticClass:"add-btn",attrs:{id:"add-btn",type:"button",name:"button"},on:{click:e.addGroup}},[e._v("增加")])]),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.list,function(t,a){return n("div",{key:a,staticClass:"group"},[e._l(e.formItems,function(a,r){return n("form-item",{key:r,attrs:{label:a.label,name:a.name,tip:a.tip}},["input"==a.type?n("CpInput",{attrs:{placeholder:a.placeholder},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e(),e._v(" "),"select"==a.type?n("CpSelect",{attrs:{options:a.options},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e()],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n          按钮URL：#"+e._s(t.packageName)+"\n        ")]),e._v(" "),n("button",{staticClass:"delete-btn",attrs:{type:"button",name:"button"},on:{click:function(t){e.deleteGroup(a)}}},[e._v("删除")])],2)})),e._v(" "),n("div",{staticClass:"javascript-editor",attrs:{id:"javascript-editor"}}),e._v(" "),n("pre",{staticStyle:{display:"none"},attrs:{id:"code"}},[e._v("(function(){\n  var appInfoMap = {};\n  var keys = Object.keys(appInfoMap);\n  parent.postMessage({event: 'initAppInfoMap', appInfoMap: appInfoMap},'*');\n  window.addEventListener('message', function(e){\n    var data = e.data;\n    if(data.event == 'mzAppDownloadProgress') {\n      $('[data-url=\"#'+data.packageName+'\"]').find('.ele').html(data.text);\n    }\n  }, false);\n  keys.forEach(function(packageName){\n    $('[data-url=\"#'+packageName+'\"]').unbind().click(function(){\n      parent.postMessage({event: 'mzDownloadApp', packageName: packageName},'*');\n      return false;\n    });\n  });\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    );\n  }\n  exposurePosition() {\n    keys.forEach(function(packageName){\n      var appInfo = appInfoMap[packageName];\n      if(appInfo.hasExposure){\n        return;\n      }\n      var el = document.querySelector('[data-url=\"#'+packageName+'\"]');\n      if (isElementInViewport(el)) {\n        parent.postMessage({\n          event: 'mzDoTrack',\n          trackInfo: {\n            action: 'exposure_position',\n            apkname: appInfo.packageName,\n            appid: appInfo.appId\n          }\n        },'*');\n        appInfo.hasExposure = true;\n      }\n    });\n  }\n  window.addEventListener('scroll', exposurePosition, true);\n  exposurePosition();\n})();\n    ")])])},staticRenderFns:[]};var z=n("VU/8")(L,j,!1,function(e){n("vcr+")},null,null).exports,O="",q=null,H={name:"app",data:function(){return{formItems:[{type:"input",label:"rpkMasterUrl",name:"rpkMasterUrl"},{type:"input",label:"packageName",name:"packageName"},{type:"input",label:"versionCode",name:"versionCode"}],list:[]}},computed:{},watch:{list:{handler:function(e){q&&q.setValue(this.getCode())},deep:!0}},methods:{getCode:function(){var e={};return this.list.forEach(function(t){t.versionCode=""!==t.versionCode?parseInt(t.versionCode):"",e[t.packageName]=t}),O.replace(/var appInfoMap = \{\};/m,"var appInfoMap = "+R()(e)+";")},addGroup:function(){var e={};this.formItems.map(function(t){e[t.name]=""}),this.list.push(e)},deleteGroup:function(e){this.list.splice(e,1)}},created:function(){this.addGroup()},mounted:function(){(q=F.edit("javascript-editor")).getSession().setMode("ace/mode/javascript"),q.setTheme("ace/theme/monokai"),O=document.getElementById("code").innerText},components:{FormItem:k,CpInput:C,CpSelect:S}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"button-field"},[n("button",{staticClass:"add-btn",attrs:{id:"add-btn",type:"button",name:"button"},on:{click:e.addGroup}},[e._v("增加")])]),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.list,function(t,a){return n("div",{key:a,staticClass:"group"},[e._l(e.formItems,function(a,r){return n("form-item",{key:r,attrs:{label:a.label,name:a.name,tip:a.tip}},["input"==a.type?n("CpInput",{attrs:{placeholder:a.placeholder},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e(),e._v(" "),"select"==a.type?n("CpSelect",{attrs:{options:a.options},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e()],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n          按钮URL：#"+e._s(t.packageName)+"\n        ")]),e._v(" "),n("button",{staticClass:"delete-btn",attrs:{type:"button",name:"button"},on:{click:function(t){e.deleteGroup(a)}}},[e._v("删除")])],2)})),e._v(" "),n("div",{staticClass:"javascript-editor",attrs:{id:"javascript-editor"}}),e._v(" "),n("pre",{staticStyle:{display:"none"},attrs:{id:"code"}},[e._v("(function(){\n  var appInfoMap = {};\n  var keys = Object.keys(appInfoMap);\n  parent.postMessage({event: 'initAppInfoMap', appInfoMap: appInfoMap},'*');\n  keys.forEach(function(packageName){\n    $('[data-url=\"#'+packageName+'\"]').unbind().click(function(){\n      parent.postMessage({event: 'doClick', packageName: packageName},'*');\n      return false;\n    });\n  });\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    );\n  }\n  exposurePosition() {\n    keys.forEach(function(packageName){\n      var appInfo = appInfoMap[packageName];\n      if(appInfo.hasExposure){\n        return;\n      }\n      var el = document.querySelector('[data-url=\"#'+packageName+'\"]');\n      if (isElementInViewport(el)) {\n        parent.postMessage({\n          event: 'mzDoTrack',\n          trackInfo: {\n            action: 'exposure_position',\n            apkname: appInfo.packageName,\n            versionCode: appInfo.versionCode\n          }\n        },'*');\n        appInfo.hasExposure = true;\n      }\n    });\n  }\n  window.addEventListener('scroll', exposurePosition, true);\n  exposurePosition();\n})();\n    ")])])},staticRenderFns:[]};var A=n("VU/8")(H,G,!1,function(e){n("sNQ4")},null,null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("p",[this._v("用于对多个应用（也支持一个）的页面进行配置")]),this._v(" "),t("img",{attrs:{src:n("Txl5"),alt:""}}),this._v(" "),t("hr"),this._v(" "),t("img",{attrs:{src:n("UT21"),alt:""}})])}]};var D=n("VU/8")(null,W,!1,function(e){n("IsT4")},null,null).exports,Q={name:"app",data:function(){return{formItems:[{type:"select",label:"应用平台",name:"turnTo",options:[{k:"浏览器",v:"b"},{k:"应用商店",v:"a"}],default:"a"},{type:"input",label:"中转页url",name:"gameUrl",tip:"cp自定义页面，不填则默认使用简单页面"},{type:"input",label:"页面标题",name:"title"},{type:"input",label:"埋点（页面来源）",name:"business",tip:'<a target="_blank" href="http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source">参考埋点文档(flyme_business_source字段)</a>'}],params:{},plusParams:[]}},computed:{console:function(){var e="https://i3.mzres.com/resources/appStore/cp/p-fast.html?",t=[],n=this.params.gameUrl&&v.a.encode(this.params.gameUrl),a=this.params.scheme&&v.a.encode(this.params.scheme);for(var r in this.params)if(this.params.hasOwnProperty(r)&&-1===["scheme","gameUrl"].indexOf(r)){var o=this.params[r];~r.indexOf("Color")&&~o.indexOf("#")&&(o="rgb("+g()(o).join(",")+")"),o&&t.push(r+"="+o)}return n&&t.push("gameUrl="+n),a&&t.push("scheme="+a),this.plusParams.length>0&&this.plusParams.forEach(function(e){e.key&&e.value&&t.push(e.key+"="+e.value)}),e+=t.join("&")}},watch:{console:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=document.getElementById("qrcode");U.a.toCanvas(t,e,function(e){e?console.error(e):console.log("success!")})})},methods:{addParam:function(){this.plusParams.push({key:"",value:""})},removeParam:function(e){this.plusParams.splice(e,1)}},created:function(){var e=this;this.formItems.map(function(t){e.$set(e.params,t.name,t.default||"")})},components:{FormItem:k,CpInput:C,CpSelect:S}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.console,expression:"console"}],staticClass:"cp-console",domProps:{value:e.console},on:{input:function(t){t.target.composing||(e.console=t.target.value)}}}),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.formItems,function(t){return n("form-item",{key:t.name,attrs:{label:t.label,name:t.name,tip:t.tip}},["input"==t.type?n("CpInput",{model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e(),e._v(" "),"select"==t.type?n("CpSelect",{attrs:{options:t.options},model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e()],1)})),e._v(" "),n("canvas",{attrs:{id:"qrcode",width:"500",height:"500"}})])},staticRenderFns:[]};var J=n("VU/8")(Q,B,!1,function(e){n("7xxz")},null,null).exports,Y={props:{url:String},data:function(){return{showLoading:!0}},mounted:function(){var e=this;document.querySelector("iframe").onload=function(){e.showLoading=!1},document.querySelector(".right-field").style.overflow="hidden"},destroyed:function(){document.querySelector(".right-field").style.overflow="auto"}},X={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:this.showLoading,expression:"showLoading",modifiers:{lock:!0}}],staticClass:"iframe-container",attrs:{"element-loading-target":"iframe"}},[t("iframe",{attrs:{src:this.url}})])},staticRenderFns:[]};var Z=n("VU/8")(Y,X,!1,function(e){n("Q+uC")},null,null).exports,K={props:{url:String},components:{MyIframe:Z}},ee={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!business/deeplink.md"}})},staticRenderFns:[]};var te=n("VU/8")(K,ee,!1,function(e){n("pdOV")},null,null).exports,ne={props:{url:String},components:{MyIframe:Z}},ae={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene_nav.md"}})},staticRenderFns:[]};var re=n("VU/8")(ne,ae,!1,function(e){n("RFeQ")},null,null).exports,oe={props:{url:String},components:{MyIframe:Z}},se={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/nav/index.html"}})},staticRenderFns:[]};var ie=n("VU/8")(oe,se,!1,function(e){n("DHLf")},null,null).exports,le={props:{url:String},components:{MyIframe:Z}},ce={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/devicestest.html"}})},staticRenderFns:[]};var pe=n("VU/8")(le,ce,!1,function(e){n("r9jg")},null,null).exports,ue={props:{url:String},components:{MyIframe:Z}},me={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/schemecheck.html"}})},staticRenderFns:[]};var de=n("VU/8")(ue,me,!1,function(e){n("9EY4")},null,null).exports,fe={props:{url:String},components:{MyIframe:Z}},ve={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene.md"}})},staticRenderFns:[]};var he=n("VU/8")(fe,ve,!1,function(e){n("TSk+")},null,null).exports,ge={props:{url:String},components:{MyIframe:Z}},_e={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/singletest.html"}})},staticRenderFns:[]};var ye=n("VU/8")(ge,_e,!1,function(e){n("tIuT")},null,null).exports,ke={props:{url:String},components:{MyIframe:Z}},be={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/single/index.html"}})},staticRenderFns:[]};var xe=n("VU/8")(ke,be,!1,function(e){n("4WVa")},null,null).exports,Ce={props:{url:String},components:{MyIframe:Z}},Ie={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene-notice.md"}})},staticRenderFns:[]};var Ee=n("VU/8")(Ce,Ie,!1,function(e){n("pcrP")},null,null).exports;a.default.use(u.a);var Se=new u.a({routes:[{path:"/cpcustomization",name:"CpCustomization",component:te},{path:"/mulreadme",name:"MulReadMe",component:d},{path:"/mulurlconfig",name:"MulUrlConfig",component:N},{path:"/mulcodeconfig",name:"MulCodeConfig",component:z},{path:"/fastreadme",name:"FastReadMe",component:D},{path:"/fastcodeconfig",name:"FastCodeConfig",component:A},{path:"/fasturlconfig",name:"FastUrlConfig",component:J},{path:"/navreadme",name:"NavReadme",component:re},{path:"/navcodeconfig",name:"NavCodeConfig",component:ie},{path:"/devicestest",name:"DevicesTest",component:pe},{path:"/schemecheck",name:"SchemeCheck",component:de},{path:"/singlereadme",name:"SingleReadMe",component:he},{path:"/singletest",name:"SingleTest",component:ye},{path:"/singleurlconfig",name:"SingleUrlConfig",component:xe},{path:"/scenenotice",name:"SceneNotice",component:Ee}]});a.default.use(o.a),new a.default({el:"#app",router:Se,components:{App:p},template:"<App/>"})},"Q+uC":function(e,t){},RFeQ:function(e,t){},"TSk+":function(e,t){},Txl5:function(e,t,n){e.exports=n.p+"static/img/1.3ddbf5f.png"},UT21:function(e,t,n){e.exports=n.p+"static/img/2.d0fcab1.png"},XT35:function(e,t){},Y74r:function(e,t){},arel:function(e,t){},ggSA:function(e,t){},pcrP:function(e,t){},pdOV:function(e,t){},r9jg:function(e,t){},sNQ4:function(e,t){},tIuT:function(e,t){},tvR6:function(e,t){},"vcr+":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.43e1848be0764c2ea1ca.js.map