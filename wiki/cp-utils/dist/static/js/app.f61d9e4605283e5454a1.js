webpackJsonp([1],{"0+ma":function(e,t){},"4WVa":function(e,t){},"7xxz":function(e,t){},"8Pit":function(e,t){},"9EY4":function(e,t){},A8ak:function(e,t){},DHLf:function(e,t){},EfFH:function(e,t){},Gsj7:function(e,t){},L73y:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("zL8q"),r=n.n(o),i=(n("tvR6"),{data:function(){return{activeUrl:"",list:[{url:"./cpcustomization",name:"cp定制化接入文档"},{title:"多-应用配置",group:[{url:"./mulreadme",name:"说明文档"},{url:"./mulcodeconfig",name:"注入代码获取"},{url:"./mulurlconfig",name:"页面路径配置"},{url:"./mulschemeconfig",name:"scheme配置"}]},{title:"快-应用配置",group:[{url:"./fastreadme",name:"说明文档"},{url:"./fastcodeconfig",name:"注入代码获取"},{url:"./fasturlconfig",name:"页面路径配置"}]},{title:"单-应用配置",group:[{url:"./singlereadme",name:"说明文档"},{url:"./singletest",name:"流程模拟测试"},{url:"./singleurlconfig",name:"页面路径配置"}]},{title:"导航页配置",group:[{url:"./navreadme",name:"说明文档"},{url:"./navcodeconfig",name:"注入代码获取"}]},{title:"工具箱",group:[{url:"./devicestest",name:"多机型适配"},{url:"./schemecheck",name:"scheme有效性校验"}]},{url:"./scenenotice",name:"配置技巧"}]}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){}},mounted:function(){this.activeUrl="."+location.hash.replace("#","")}}),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.activeUrl,router:!0,"unique-opened":!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.list,function(t,a){return[t.group?[n("el-submenu",{key:a,attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",[e._v(e._s(t.title))])]),e._v(" "),n("el-menu-item-group",e._l(t.group,function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.url}},[e._v(e._s(t.name))])}))],2)]:e._e(),e._v(" "),t.group?e._e():[n("el-menu-item",{key:a,attrs:{index:t.url}},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])]]})],2)},staticRenderFns:[]};var l={name:"App",components:{LeftNav:n("VU/8")(i,s,!1,function(e){n("A8ak")},null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",{staticClass:"row-container"},[t("el-col",{staticClass:"left-nav",attrs:{span:4}},[t("LeftNav")],1),this._v(" "),t("el-col",{staticClass:"right-field",attrs:{span:20}},[t("router-view")],1)],1)},staticRenderFns:[]};var p=n("VU/8")(l,c,!1,function(e){n("0+ma")},null,null).exports,u=n("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("p",[this._v("用于对多个应用（也支持一个）的页面进行配置")]),this._v(" "),t("img",{attrs:{src:n("Txl5"),alt:""}}),this._v(" "),t("hr"),this._v(" "),t("img",{attrs:{src:n("UT21"),alt:""}})])}]};var d=n("VU/8")(null,m,!1,function(e){n("Gsj7")},null,null).exports,f=n("EVWP"),v=n.n(f),h=n("GhJf"),g=n.n(h),_={props:{label:String,name:String,tip:String}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cp-form_item"},[n("label",{staticClass:"cp-form_label",attrs:{for:e.name}},[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.tip?n("span",{staticClass:"cp-form_tip",domProps:{innerHTML:e._s(e.tip)}}):e._e()],2)},staticRenderFns:[]};var y=n("VU/8")(_,k,!1,function(e){n("EfFH")},null,null).exports,b={props:{value:String,placeholder:{type:String,default:""}}},I={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"cp-form_input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})},staticRenderFns:[]};var C=n("VU/8")(b,I,!1,function(e){n("XT35")},null,null).exports,x={props:{options:Array,value:String},methods:{handleChange:function(e){this.$emit("input",e.target.value)},isSelected:function(e){return e===this.value?"selected":""}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"cp-form_input",on:{change:e.handleChange}},e._l(e.options,function(t){return n("option",{key:t.v,domProps:{value:t.v,selected:e.isSelected(t.v)}},[e._v(e._s(t.k))])}))},staticRenderFns:[]};var M=n("VU/8")(x,w,!1,function(e){n("L73y")},null,null).exports,E=n("71e1"),S=n.n(E),U={name:"app",data:function(){return{formItems:[{type:"select",label:"应用平台",name:"turnTo",options:[{k:"浏览器",v:"b"},{k:"应用商店",v:"a"}],default:"a"},{type:"select",label:"安装完成打开方式",name:"openType",options:[{k:"手动打开",v:"0"},{k:"直接打开",v:"1"}],default:"0"},{type:"input",label:"中转页url",name:"gameUrl",tip:"cp自定义页面，不填则默认使用简单页面"},{type:"input",label:"页面标题",name:"title"},{type:"input",label:"埋点（页面来源）",name:"business",tip:'<a target="_blank" href="http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source">参考埋点文档(flyme_business_source字段)</a>'}],params:{},plusParams:[]}},computed:{console:function(){var e="https://i3.mzres.com/resources/appStore/cp/p-mul.html?",t=[],n=this.params.gameUrl&&v.a.encode(this.params.gameUrl),a=this.params.scheme&&v.a.encode(this.params.scheme);for(var o in this.params)if(this.params.hasOwnProperty(o)&&-1===["scheme","gameUrl"].indexOf(o)){var r=this.params[o];~o.indexOf("Color")&&~r.indexOf("#")&&(r="rgb("+g()(r).join(",")+")"),r&&t.push(o+"="+r)}return n&&t.push("gameUrl="+n),a&&t.push("scheme="+a),this.plusParams.length>0&&this.plusParams.forEach(function(e){e.key&&e.value&&t.push(e.key+"="+e.value)}),e+=t.join("&")}},watch:{console:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=document.getElementById("qrcode");S.a.toCanvas(t,e,function(e){e?console.error(e):console.log("success!")})})},methods:{addParam:function(){this.plusParams.push({key:"",value:""})},removeParam:function(e){this.plusParams.splice(e,1)}},created:function(){var e=this;this.formItems.map(function(t){e.$set(e.params,t.name,t.default||"")})},components:{FormItem:y,CpInput:C,CpSelect:M}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.console,expression:"console"}],staticClass:"cp-console",domProps:{value:e.console},on:{input:function(t){t.target.composing||(e.console=t.target.value)}}}),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.formItems,function(t){return n("form-item",{key:t.name,attrs:{label:t.label,name:t.name,tip:t.tip}},["input"==t.type?n("CpInput",{model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e(),e._v(" "),"select"==t.type?n("CpSelect",{attrs:{options:t.options},model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e()],1)})),e._v(" "),n("canvas",{attrs:{id:"qrcode",width:"500",height:"500"}})])},staticRenderFns:[]};var T=n("VU/8")(U,$,!1,function(e){n("arel")},null,null).exports,N=n("mvHQ"),P=n.n(N),R=n("kX7f"),V=(n("h636"),n("eKfU"),""),j=null,F={name:"app",data:function(){return{formItems:[{type:"input",label:"deeplink链接",name:"scheme",placeholder:"可为空，默认为打开应用"},{type:"input",label:"packageName",name:"packageName"},{type:"input",label:"versionCode",name:"versionCode"},{type:"input",label:"appId",name:"appId"},{type:"input",label:"installText",name:"installText",placeholder:"可为空，默认为：安装"},{type:"input",label:"updateText",name:"updateText",placeholder:"可为空，默认为：更新"},{type:"input",label:"installCompleteText",name:"installCompleteText",placeholder:"可为空，默认为：打开"},{type:"input",label:"failureText",name:"failureText",placeholder:"可为空，默认为：重试"}],list:[]}},computed:{},watch:{list:{handler:function(e){j&&j.setValue(this.getCode())},deep:!0}},methods:{getCode:function(){var e={};return this.list.forEach(function(t){t.appId=""!==t.appId?parseInt(t.appId):"",t.versionCode=""!==t.versionCode?parseInt(t.versionCode):"",e[t.packageName]=t}),V.replace(/var appInfoMap = \{\};/m,"var appInfoMap = "+P()(e)+";")},addGroup:function(){var e={};this.formItems.map(function(t){"versionCode"===t.name?e[t.name]=0:e[t.name]=""}),this.list.push(e)},deleteGroup:function(e){this.list.splice(e,1)}},created:function(){this.addGroup()},mounted:function(){(j=R.edit("javascript-editor")).getSession().setMode("ace/mode/javascript"),j.setTheme("ace/theme/monokai"),V=document.getElementById("code").innerText},components:{FormItem:y,CpInput:C,CpSelect:M}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"button-field"},[n("button",{staticClass:"add-btn",attrs:{id:"add-btn",type:"button",name:"button"},on:{click:e.addGroup}},[e._v("增加")])]),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.list,function(t,a){return n("div",{key:a,staticClass:"group"},[e._l(e.formItems,function(a,o){return n("form-item",{key:o,attrs:{label:a.label,name:a.name,tip:a.tip}},["input"==a.type?n("CpInput",{attrs:{placeholder:a.placeholder},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e(),e._v(" "),"select"==a.type?n("CpSelect",{attrs:{options:a.options},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e()],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n          按钮URL：javascript:void('"+e._s(t.packageName)+"')\n        ")]),e._v(" "),n("button",{staticClass:"delete-btn",attrs:{type:"button",name:"button"},on:{click:function(t){e.deleteGroup(a)}}},[e._v("删除")])],2)})),e._v(" "),n("div",{staticClass:"javascript-editor",attrs:{id:"javascript-editor"}}),e._v(" "),n("pre",{staticStyle:{display:"none"},attrs:{id:"code"}},[e._v("(function(){\n  var appInfoMap = {};\n  var appInfoHistory = {};\n  var keys = Object.keys(appInfoMap);\n  parent.postMessage({event: 'initAppInfoMap', appInfoMap: appInfoMap},'*');\n  window.addEventListener('message', function(e){\n    var data = e.data;\n    if(data.event == 'mzAppDownloadProgress') {\n      appInfoHistory[data.packageName] = data.text;\n      $('[data-url=\"javascript:void(\\''+data.packageName+'\\')\"]').find('.ele').html(data.text);\n    }\n  }, false);\n  var addClickHandle = function(isText){\n    keys.forEach(function(packageName){\n      var btn = $('[data-url=\"javascript:void(\\''+packageName+'\\')\"]').unbind().click(function(){\n        parent.postMessage({event: 'mzDownloadApp', packageName: packageName},'*');\n        return false;\n      });\n      if(isText){\n        btn.find('.ele').html(appInfoHistory[packageName]);\n      }\n    });\n  };\n  window.addEventListener('orientationchange', function() {\n    addClickHandle(true);\n  });\n  addClickHandle(false);\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    );\n  }\n  var timeout = null;\n  function exposurePosition() {\n    keys.forEach(function(packageName){\n      var appInfo = appInfoMap[packageName];\n      if(appInfo.hasExposure){\n        return;\n      }\n      var el = document.querySelector('[data-url=\"javascript:void(\\''+packageName+'\\')\"]');\n      if(!el){\n        clearTimeout(timeout);\n        timeout = setTimeout(exposurePosition, 3000);\n        return;\n      }\n      if (isElementInViewport(el)) {\n        parent.postMessage({\n          event: 'mzDoTrack',\n          trackInfo: {\n            action: 'exposure_position',\n            apkname: appInfo.packageName,\n            appid: appInfo.appId\n          }\n        },'*');\n        appInfo.hasExposure = true;\n      }\n    });\n  }\n  window.addEventListener('scroll', exposurePosition, true);\n  exposurePosition();\n})();\n    ")])])},staticRenderFns:[]};var L=n("VU/8")(F,H,!1,function(e){n("UvUl")},null,null).exports,z="",G=null,O={name:"app",data:function(){return{formItems:[{type:"input",label:"deeplink链接",name:"scheme",placeholder:"可为空，默认为打开应用"},{type:"input",label:"packageName",name:"packageName"},{type:"input",label:"versionCode",name:"versionCode"}],list:[],index:1}},computed:{},watch:{list:{handler:function(e){G&&G.setValue(this.getCode())},deep:!0}},methods:{getCode:function(){var e={};return this.list.forEach(function(t){t.versionCode=""!==t.versionCode?parseInt(t.versionCode):"",e[t.packageName+"_"+t.index+"_scheme"]=t}),z.replace(/var schemeInfoMap = \{\};/m,"var schemeInfoMap = "+P()(e)+";")},addGroup:function(){var e={index:this.index++};this.formItems.map(function(t){"versionCode"===t.name?e[t.name]=0:e[t.name]=""}),this.list.push(e)},deleteGroup:function(e){this.list.splice(e,1)}},created:function(){this.addGroup()},mounted:function(){(G=R.edit("javascript-editor")).getSession().setMode("ace/mode/javascript"),G.setTheme("ace/theme/monokai"),z=document.getElementById("code").innerText},components:{FormItem:y,CpInput:C,CpSelect:M}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"button-field"},[n("button",{staticClass:"add-btn",attrs:{id:"add-btn",type:"button",name:"button"},on:{click:e.addGroup}},[e._v("增加")])]),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.list,function(t,a){return n("div",{key:a,staticClass:"group"},[e._l(e.formItems,function(a,o){return n("form-item",{key:o,attrs:{label:a.label,name:a.name,tip:a.tip}},["input"==a.type?n("CpInput",{attrs:{placeholder:a.placeholder},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e(),e._v(" "),"scheme"==a.name?n("a",{attrs:{target:"_blank",href:"//blog.shellhong.com/wiki/#!appstore/deeplink.md"}},[e._v("商店deeplink链接生成规则查看")]):e._e(),e._v(" "),"select"==a.type?n("CpSelect",{attrs:{options:a.options},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e()],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n          URL：javascript:void('"+e._s(t.packageName)+"_"+e._s(t.index)+"_scheme')\n        ")]),e._v(" "),n("button",{staticClass:"delete-btn",attrs:{type:"button",name:"button"},on:{click:function(t){e.deleteGroup(a)}}},[e._v("删除")])],2)})),e._v(" "),n("div",{staticClass:"javascript-editor",attrs:{id:"javascript-editor"}}),e._v(" "),n("pre",{staticStyle:{display:"none"},attrs:{id:"code"}},[e._v("(function(){\n  var schemeInfoMap = {};\n  var appInfoHistory = {};\n  var keys = Object.keys(schemeInfoMap);\n  parent.postMessage({event: 'initSchemeInfoMap', schemeInfoMap: schemeInfoMap},'*');\n  var addClickHandle = function(){\n    keys.forEach(function(key){\n      var btn = $('[data-url=\"javascript:void(\\''+key+'\\')\"]').unbind().click(function(){\n        parent.postMessage({event: 'openScheme', key: key},'*');\n        return false;\n      });\n    });\n  };\n  window.addEventListener('orientationchange', function() {\n    addClickHandle();\n  });\n  addClickHandle();\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    );\n  }\n  var timeout = null;\n  function exposurePosition() {\n    keys.forEach(function(key){\n      var schemeInfo = schemeInfoMap[key];\n      if(schemeInfo.hasExposure){\n        return;\n      }\n      var el = document.querySelector('[data-url=\"javascript:void(\\''+key+'\\')\"]');\n      if(!el){\n        clearTimeout(timeout);\n        timeout = setTimeout(exposurePosition, 3000);\n        return;\n      }\n      if (isElementInViewport(el)) {\n        parent.postMessage({\n          event: 'mzDoTrack',\n          trackInfo: {\n            action: 'exposure_scheme_position',\n            scheme: schemeInfo.scheme\n          }\n        },'*');\n        schemeInfo.hasExposure = true;\n      }\n    });\n  }\n  window.addEventListener('scroll', exposurePosition, true);\n  exposurePosition();\n})();\n    ")])])},staticRenderFns:[]};var B=n("VU/8")(O,q,!1,function(e){n("8Pit")},null,null).exports,A="",W=null,D={name:"app",data:function(){return{formItems:[{type:"input",label:"rpkMasterUrl",name:"rpkMasterUrl"},{type:"input",label:"packageName",name:"packageName"},{type:"input",label:"versionCode",name:"versionCode"}],list:[],moreInfoMap:{url:"https://i3.mzres.com/resources/appStore/fast-app/special.html?special_id=2&source_raw_url_web=/resources/appStore/classification/views/cats45.html&source_page_name_web=cats&t=1526610103537",title:"快应用",pager_name:"快应用宣传页",source_page:"快应用宣传页",source_page_id:"快应用宣传页-10000"}}},computed:{},watch:{list:{handler:function(e){W&&W.setValue(this.getCode())},deep:!0},moreInfoMap:{handler:function(e){W&&W.setValue(this.getCode())},deep:!0}},methods:{getCode:function(){var e={};return this.list.forEach(function(t){t.versionCode=""!==t.versionCode?parseInt(t.versionCode):"",e[t.packageName]=t}),A.replace(/var appInfoMap = \{\};/m,"var appInfoMap = "+P()(e)+";").replace(/var moreInfoMap = \{\};/m,"var moreInfoMap = "+P()(this.moreInfoMap)+";")},addGroup:function(){var e={};this.formItems.map(function(t){e[t.name]=""}),this.list.push(e)},deleteGroup:function(e){this.list.splice(e,1)}},created:function(){this.addGroup()},mounted:function(){(W=R.edit("javascript-editor")).getSession().setMode("ace/mode/javascript"),W.setTheme("ace/theme/monokai"),A=document.getElementById("code").innerText},components:{FormItem:y,CpInput:C,CpSelect:M}},Q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"cp-form"},[n("div",{staticClass:"button-field"},[n("button",{staticClass:"add-btn",attrs:{id:"add-btn",type:"button",name:"button"},on:{click:e.addGroup}},[e._v("增加")])]),e._v(" "),e._l(e.list,function(t,a){return n("div",{key:a,staticClass:"group"},[e._l(e.formItems,function(a,o){return n("form-item",{key:o,attrs:{label:a.label,name:a.name,tip:a.tip}},["input"==a.type?n("CpInput",{attrs:{placeholder:a.placeholder},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e(),e._v(" "),"select"==a.type?n("CpSelect",{attrs:{options:a.options},model:{value:t[a.name],callback:function(n){e.$set(t,a.name,n)},expression:"group[item.name]"}}):e._e()],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n          按钮URL：javascript:void('"+e._s(t.packageName)+"')\n        ")]),e._v(" "),n("button",{staticClass:"delete-btn",attrs:{type:"button",name:"button"},on:{click:function(t){e.deleteGroup(a)}}},[e._v("删除")])],2)})],2),e._v(" "),n("div",{staticClass:"moreField"},[e._l(e.moreInfoMap,function(t,a){return n("form-item",{key:a,attrs:{label:a,name:a}},[n("CpInput",{model:{value:e.moreInfoMap[a],callback:function(t){e.$set(e.moreInfoMap,a,t)},expression:"moreInfoMap[key]"}})],1)}),e._v(" "),n("div",{staticStyle:{color:"red","font-size":"12px","margin-bottom":"10px","margin-top":"10px","text-align":"center"}},[e._v("\n        按钮URL：javascript:void('more')\n      ")])],2),e._v(" "),n("div",{staticClass:"javascript-editor",attrs:{id:"javascript-editor"}}),e._v(" "),n("pre",{staticStyle:{display:"none"},attrs:{id:"code"}},[e._v("(function(){\n  var appInfoMap = {};\n  var moreInfoMap = {};\n  var keys = Object.keys(appInfoMap);\n  parent.postMessage({event: 'initAppInfoMap', appInfoMap: appInfoMap},'*');\n  parent.postMessage({event: 'initMoreInfoMap', moreInfoMap: moreInfoMap},'*');\n  var addClickHandle = function(){\n    keys.forEach(function(packageName){\n      $('[data-url=\"javascript:void(\\''+packageName+'\\')\"]').unbind().click(function(){\n        parent.postMessage({event: 'doClick', packageName: packageName},'*');\n        return false;\n      });\n    });\n    var $moreBtn = $('[data-url=\"javascript:void(\\'more\\')\"]');\n    if($moreBtn.length){\n      $moreBtn.unbind().click(function(){\n        parent.postMessage({event: 'doMore'},'*');\n        return false;\n      });\n    }\n  };\n  addClickHandle();\n  window.addEventListener('orientationchange', function() {\n    addClickHandle();\n  });\n  function isElementInViewport(el) {\n    var rect = el.getBoundingClientRect();\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    );\n  }\n  var timeout = null;\n  function exposurePosition() {\n    keys.forEach(function(packageName){\n      var appInfo = appInfoMap[packageName];\n      if(appInfo.hasExposure){\n        return;\n      }\n      var el = document.querySelector('[data-url=\"javascript:void(\\''+packageName+'\\')\"]');\n      if(!el){\n        clearTimeout(timeout);\n        timeout = setTimeout(exposurePosition, 3000);\n        return;\n      }\n      if (isElementInViewport(el)) {\n        parent.postMessage({\n          event: 'mzDoTrack',\n          trackInfo: {\n            action: 'exposure_position',\n            apkname: appInfo.packageName,\n            versionCode: appInfo.versionCode\n          }\n        },'*');\n        appInfo.hasExposure = true;\n      }\n    });\n  }\n  if(location.search.indexOf('notOverFlow') == -1){\n    $(document.body).css('overflow-x', 'hidden');\n  }\n  window.addEventListener('scroll', exposurePosition, true);\n  exposurePosition();\n})();\n    ")])])},staticRenderFns:[]};var Y=n("VU/8")(D,Q,!1,function(e){n("YwIH")},null,null).exports,X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("p",[this._v("用于对多个快应用（也支持一个）的页面进行配置")]),this._v(" "),t("img",{attrs:{src:n("U+2z"),alt:""}}),this._v(" "),t("hr"),this._v(" "),t("img",{attrs:{src:n("UT21"),alt:""}})])}]};var J=n("VU/8")(null,X,!1,function(e){n("SdoC")},null,null).exports,K={name:"app",data:function(){return{formItems:[{type:"select",label:"应用平台",name:"turnTo",options:[{k:"浏览器",v:"b"},{k:"应用商店",v:"a"}],default:"a"},{type:"input",label:"中转页url",name:"gameUrl",tip:"cp自定义页面，不填则默认使用简单页面"},{type:"input",label:"页面标题",name:"title"},{type:"input",label:"埋点（页面来源）",name:"business",tip:'<a target="_blank" href="http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source">参考埋点文档(flyme_business_source字段)</a>'}],params:{},plusParams:[]}},computed:{console:function(){var e="https://i3.mzres.com/resources/appStore/cp/p-fast.html?",t=[],n=this.params.gameUrl&&v.a.encode(this.params.gameUrl),a=this.params.scheme&&v.a.encode(this.params.scheme);for(var o in this.params)if(this.params.hasOwnProperty(o)&&-1===["scheme","gameUrl"].indexOf(o)){var r=this.params[o];~o.indexOf("Color")&&~r.indexOf("#")&&(r="rgb("+g()(r).join(",")+")"),r&&t.push(o+"="+r)}return n&&t.push("gameUrl="+n),a&&t.push("scheme="+a),this.plusParams.length>0&&this.plusParams.forEach(function(e){e.key&&e.value&&t.push(e.key+"="+e.value)}),e+=t.join("&")}},watch:{console:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=document.getElementById("qrcode");S.a.toCanvas(t,e,function(e){e?console.error(e):console.log("success!")})})},methods:{addParam:function(){this.plusParams.push({key:"",value:""})},removeParam:function(e){this.plusParams.splice(e,1)}},created:function(){var e=this;this.formItems.map(function(t){e.$set(e.params,t.name,t.default||"")})},components:{FormItem:y,CpInput:C,CpSelect:M}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.console,expression:"console"}],staticClass:"cp-console",domProps:{value:e.console},on:{input:function(t){t.target.composing||(e.console=t.target.value)}}}),e._v(" "),n("div",{staticClass:"cp-form"},e._l(e.formItems,function(t){return n("form-item",{key:t.name,attrs:{label:t.label,name:t.name,tip:t.tip}},["input"==t.type?n("CpInput",{model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e(),e._v(" "),"select"==t.type?n("CpSelect",{attrs:{options:t.options},model:{value:e.params[t.name],callback:function(n){e.$set(e.params,t.name,n)},expression:"params[item.name]"}}):e._e()],1)})),e._v(" "),n("canvas",{attrs:{id:"qrcode",width:"500",height:"500"}})])},staticRenderFns:[]};var ee=n("VU/8")(K,Z,!1,function(e){n("7xxz")},null,null).exports,te={props:{url:String},data:function(){return{showLoading:!0}},mounted:function(){var e=this;document.querySelector("iframe").onload=function(){e.showLoading=!1},document.querySelector(".right-field").style.overflow="hidden"},destroyed:function(){document.querySelector(".right-field").style.overflow="auto"}},ne={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:this.showLoading,expression:"showLoading",modifiers:{lock:!0}}],staticClass:"iframe-container",attrs:{"element-loading-target":"iframe"}},[t("iframe",{attrs:{src:this.url}})])},staticRenderFns:[]};var ae=n("VU/8")(te,ne,!1,function(e){n("Q+uC")},null,null).exports,oe={props:{url:String},components:{MyIframe:ae}},re={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!business/deeplink.md"}})},staticRenderFns:[]};var ie=n("VU/8")(oe,re,!1,function(e){n("pdOV")},null,null).exports,se={props:{url:String},components:{MyIframe:ae}},le={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene_nav.md"}})},staticRenderFns:[]};var ce=n("VU/8")(se,le,!1,function(e){n("RFeQ")},null,null).exports,pe={props:{url:String},components:{MyIframe:ae}},ue={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/nav/index.html"}})},staticRenderFns:[]};var me=n("VU/8")(pe,ue,!1,function(e){n("DHLf")},null,null).exports,de={props:{url:String},components:{MyIframe:ae}},fe={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/devicestest.html"}})},staticRenderFns:[]};var ve=n("VU/8")(de,fe,!1,function(e){n("r9jg")},null,null).exports,he={props:{url:String},components:{MyIframe:ae}},ge={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/schemecheck.html"}})},staticRenderFns:[]};var _e=n("VU/8")(he,ge,!1,function(e){n("9EY4")},null,null).exports,ke={props:{url:String},components:{MyIframe:ae}},ye={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene.md"}})},staticRenderFns:[]};var be=n("VU/8")(ke,ye,!1,function(e){n("TSk+")},null,null).exports,Ie={props:{url:String},components:{MyIframe:ae}},Ce={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/singletest.html"}})},staticRenderFns:[]};var xe=n("VU/8")(Ie,Ce,!1,function(e){n("tIuT")},null,null).exports,we={props:{url:String},components:{MyIframe:ae}},Me={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"../output/single/index.html"}})},staticRenderFns:[]};var Ee=n("VU/8")(we,Me,!1,function(e){n("4WVa")},null,null).exports,Se={props:{url:String},components:{MyIframe:ae}},Ue={render:function(){var e=this.$createElement;return(this._self._c||e)("my-iframe",{attrs:{url:"//blog.shellhong.com/wiki/#!appstore/scene-notice.md"}})},staticRenderFns:[]};var $e=n("VU/8")(Se,Ue,!1,function(e){n("pcrP")},null,null).exports;a.default.use(u.a);var Te=new u.a({routes:[{path:"/cpcustomization",name:"CpCustomization",component:ie},{path:"/mulreadme",name:"MulReadMe",component:d},{path:"/mulurlconfig",name:"MulUrlConfig",component:T},{path:"/mulcodeconfig",name:"MulCodeConfig",component:L},{path:"/mulschemeconfig",name:"MulSchemeConfig",component:B},{path:"/fastreadme",name:"FastReadMe",component:J},{path:"/fastcodeconfig",name:"FastCodeConfig",component:Y},{path:"/fasturlconfig",name:"FastUrlConfig",component:ee},{path:"/navreadme",name:"NavReadme",component:ce},{path:"/navcodeconfig",name:"NavCodeConfig",component:me},{path:"/devicestest",name:"DevicesTest",component:ve},{path:"/schemecheck",name:"SchemeCheck",component:_e},{path:"/singlereadme",name:"SingleReadMe",component:be},{path:"/singletest",name:"SingleTest",component:xe},{path:"/singleurlconfig",name:"SingleUrlConfig",component:Ee},{path:"/scenenotice",name:"SceneNotice",component:$e}]});a.default.use(r.a),new a.default({el:"#app",router:Te,components:{App:p},template:"<App/>"})},"Q+uC":function(e,t){},RFeQ:function(e,t){},SdoC:function(e,t){},"TSk+":function(e,t){},Txl5:function(e,t,n){e.exports=n.p+"static/img/1.c7e02ed.png"},"U+2z":function(e,t,n){e.exports=n.p+"static/img/3.9c897c2.png"},UT21:function(e,t,n){e.exports=n.p+"static/img/2.d0fcab1.png"},UvUl:function(e,t){},XT35:function(e,t){},YwIH:function(e,t){},arel:function(e,t){},pcrP:function(e,t){},pdOV:function(e,t){},r9jg:function(e,t){},tIuT:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f61d9e4605283e5454a1.js.map