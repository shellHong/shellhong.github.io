webpackJsonp([1],{NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("7+uW"),o=l("zL8q"),i=l.n(o),n={name:"App",components:{Input:o.Input,Select:o.Select},computed:{result:function(){return this.getResult()}},data:function(){return{title:"test",url:"",enableRefresh:"1",select:localStorage.getItem("utils_jump_storage_key")||"zhaoxitech://com.meizu.media.ebook/website?title="}},methods:{getResult:function(){return""+this.select+window.encodeURIComponent(this.title)+"&enableRefresh="+("1"===this.enableRefresh)+"&url="+window.encodeURIComponent(this.url)},handleBtn:function(){location.href=this.getResult()}},watch:{select:function(e){localStorage.setItem("utils_jump_storage_key",e)}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("el-form",{attrs:{"label-position":"top","label-width":"auto",size:"mini"}},[l("el-form-item",{attrs:{label:"页面标题"}},[l("el-input",{attrs:{placeholder:"请输入页面标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"app选择"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[l("el-option",{attrs:{label:"ebook-H5",value:"zhaoxitech://com.meizu.media.ebook/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"cbook-H5",value:"zhaoxitech://com.zhaoxitech.cbook/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"miaogeng-H5",value:"zhaoxitech://com.zhaoxitech.miaogeng/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"huawei-H5",value:"zhaoxitech://com.zhaoxitech.cbook.huawei/website?title="}}),e._v(" "),l("el-option",{attrs:{label:"sanctpalace",value:"sanctpalace://com.meizu.compaign/website?title="}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否允许刷新"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.enableRefresh,callback:function(t){e.enableRefresh=t},expression:"enableRefresh"}},[l("el-option",{attrs:{label:"允许刷新",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"不许刷新",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"H5页面路径"}},[l("el-input",{attrs:{type:"textarea",row:2,placeholder:"请输入H5页面路径"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"scheme路径"}},[l("el-input",{attrs:{type:"textarea",row:4,placeholder:"此处内容可由上面的H5页面路径填写后生成",readonly:"readonly"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.handleBtn}},[e._v("立即跳转")])],1)],1)],1)},staticRenderFns:[]};var s=l("VU/8")(n,r,!1,function(e){l("id3r")},null,null).exports;l("tvR6");a.default.config.productionTip=!1,a.default.use(i.a),new a.default({el:"#app",components:{App:s},template:"<App/>"})},id3r:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.54a9a4e3469696908072.js.map