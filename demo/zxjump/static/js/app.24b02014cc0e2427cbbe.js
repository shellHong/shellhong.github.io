webpackJsonp([1],{"/bho":function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l("7+uW"),a=l("zL8q"),i=l.n(a),n={name:"App",components:{Input:a.Input,Select:a.Select},computed:{result:function(){return this.getResult()},jumpBtnStyleObj:function(){return{display:-1!==this.select.indexOf("zhaoxitech://packageName")?"none":"inline-block"}}},data:function(){return{dialogVisible:!1,title:"test",url:"",enableRefresh:"1",select:localStorage.getItem("utils_jump_storage_key")||"zhaoxitech://com.meizu.media.ebook/website?title="}},methods:{getResult:function(){return""+this.select+window.encodeURIComponent(this.title)+"&enableRefresh="+("1"===this.enableRefresh)+"&url="+window.encodeURIComponent(this.url)},handleBtn:function(){location.href=this.getResult()},reset:function(){this.url=""}},watch:{select:function(e){localStorage.setItem("utils_jump_storage_key",e)}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("el-form",{attrs:{"label-position":"top","label-width":"auto",size:"mini"}},[l("el-form-item",{attrs:{label:"页面标题"}},[l("el-input",{attrs:{placeholder:"请输入页面标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"app选择"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[l("el-option",{attrs:{label:"ebook-H5",value:"zhaoxitech://com.meizu.media.ebook/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"zhuigeng-H5",value:"zhaoxitech://com.zhaoxitech.cbook/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"sdk-H5",value:"zhaoxitech://com.android.browser/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"cbook-H5",value:"zhaoxitech://com.zhaoxitech.cbook/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"packageName",value:"zhaoxitech://packageName/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"miaogeng-H5",value:"zhaoxitech://com.zhaoxitech.miaogeng/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"huawei-H5",value:"zhaoxitech://com.zhaoxitech.cbook.huawei/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"sanctpalace",value:"sanctpalace://com.meizu.compaign/website?title="}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否允许刷新"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.enableRefresh,callback:function(t){e.enableRefresh=t},expression:"enableRefresh"}},[l("el-option",{attrs:{label:"允许刷新",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"不许刷新",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"H5页面路径"}},[l("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"textarea",row:2,placeholder:"请输入H5页面路径"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"scheme路径"}},[l("el-input",{attrs:{type:"textarea",row:4,placeholder:"此处内容可由上面的H5页面路径填写后生成",readonly:"readonly"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1),e._v(" "),l("el-form-item",[l("el-button",{style:e.jumpBtnStyleObj,attrs:{type:"primary"},on:{click:e.handleBtn}},[e._v("立即跳转")]),e._v(" "),l("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"98%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",[e._v("https://zxbook-res.zhaoxitech.com/cbook_h5/test/pages/android-api-test.html?code=console.log(NativeUtil);NativeUtil.getHeaderInfo()")]),e._v(" "),l("br"),e._v(" "),l("div",[e._v("https://zxbook-res.zhaoxitech.com/cbook_h5/credits-shop/pages/index.html?id=41&source=test&__inject_vconsole__=1")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("关闭")])],1)]),e._v(" "),l("el-button",{staticStyle:{position:"fixed",bottom:"0",right:"0",opacity:"0.01"},attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("点击打开 Dialog")])],1)},staticRenderFns:[]};var c=l("VU/8")(n,s,!1,function(e){l("/bho")},null,null).exports;l("tvR6");o.default.config.productionTip=!1,o.default.use(i.a),o.default.directive("focus",{inserted:function(e){e.focus()}}),new o.default({el:"#app",components:{App:c},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.24b02014cc0e2427cbbe.js.map