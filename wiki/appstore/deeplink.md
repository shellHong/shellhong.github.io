# 外部应用-----跳转-----&gt;应用商店

## 一、跳转应用详情页
跳转应用详情有mstore、market、http三种方式，根据不同的业务场景，选用不同的方式跳转：

* Java代码跳转：优先使用mstore方式，请先查询当前系统是否存在mstore协议：boolean hasMstoreScheme = Intent.resolveActivity(mContext.getPackageManager()) != null
* Java代码跳转：mstore方式不可用时，使用market，并指定intent.setPackage("com.meizu.mstore");
* H5 JS跳转：优先使用mstore方式，跳转后判断页面是否成功，不成功时再用http方式（这时以H5页面打开应用详情）。

####  1.1 mstore方式打开应用详情 （版本限制：VersionCode >= 6002001 ）
```
//例如跳转到微博的详情页面：
mstore://details?package_name=com.sina.weibo【必填】&source_apkname=调用此接口的应用包名【必填】&source_info=预留的自定义信息【选填】&track_url=cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段【选填】&dplink=打开应用的deeplink链接【选填】
```
###### 参数说明：
* package_name 【必填】目标应用的名包
* source_apkname 【必填】调用此接口的应用包名
* track_url【选填】cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段
* source_info 【选填】预留的自定义信息，会上报到大数据
* dplink【选填】 打开应用的deeplink链接，需要经过UTF-8 Encode [在线Encode工具](http://tool.chinaz.com/tools/urlencode.aspx)，Java代码：String deepLink = URLEncoder.encode("这里就是你的URI","UTF-8");


#### 1.2 market方式打开应用详情 （Android标准方式：所有版本支持）
```java
//market为Android标准方式，必须指定包名com.meizu.mstore才能100%保证跳转到魅族的应用商店，否则可能会弹出选择应用宝、google play、豌豆荚的提示框。
String packageName = "com.sina.weibo";
Uri uri = Uri.parse(String.format("market://details?id=%s",packageName));//详情页
Intent intent = new Intent(Intent.ACTION_VIEW,uri);
intent.setPackage("com.meizu.mstore");//必须指定包名com.meizu.mstore才能避免跳转到其它市场如应用宝
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
intent.putExtra("track_url", "https://t-e.flyme.cn/api/v1/track?viewid=BC2FEB68C20F7366440DAB27");//cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段
startActivity(intent);
```

####   1.3 http方式打开应用详情 （不管是否指定商店客户端的包名，都会被魅族浏览器拦截）
Java打开
```java
String packageName = "com.meizu.flyme.dayu";
Uri uri = Uri.parse(String.format("http://app.meizu.com/apps/public/detail?package_name=%s",packageName));//详情页
Intent intent = new Intent(Intent.ACTION_VIEW,uri);
intent.setPackage("com.meizu.mstore");
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
intent.putExtra("track_url", "https://t-e.flyme.cn/api/v1/track?viewid=BC2FEB68C20F7366440DAB27");//cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段
startActivity(intent);
```

JavaScript打开
```
http://app.meizu.com/apps/public/detail?package_name=目标包名
```

## 二、搜索应用

####   2.1 mstore方式 （Version &gt;= 6.2.1 VersionCode &gt;= 6002001）

```
mstore://search?q=关键字&source_apkname=来源包名,必填&source_info=来源渠道自定义信息，必填
```
####  2.2 maket方式

```java
String searchKey = "魅族";
Uri uri = Uri.parse(String.format("market://search?q=%s",searchKey) );//搜索关键字 ,Intent intent = new Intent(Intent.ACTION_VIEW,uri);
intent.setPackage("com.meizu.mstore");
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
startActivity(intent);
```

## 三、下载应用(跳转到详情页面并下载)

发送 `com.meizu.flyme.appcenter.action.perform` 进行下载。

```java
String pkgName="";//【必填】包名
String appName="";//【选填】应用名
boolean bSearch=true;//【选填】根据包名找不到应用时，是否要跳到搜索页搜索应用名
String deepLink = URLEncoder.encode("这里就是你的URI","UTF-8");//【选填】应用下载完成后点击打开按钮跳到指定页面，需要经过UTF-8[EnCode](http://http://tool.chinaz.com/tools/urlencode.aspx)
Uri uri = Uri.parse(String.format("http://app.meizu.com/apps/public/detail?package_name=%s&app_name=%s&goto_search_page=%b&dplink=%s", pkgName,appName,bSearch,deepLink));
intent = new Intent("com.meizu.flyme.appcenter.action.perform", uri);
intent.setPackage("com.meizu.mstore");
intent.putExtra("result_app_action","download");//download触发自动下载,force_download触发自动下载并强制重新安装
intent.putExtra("perform_internal",false);//是否要关闭首页进入详情（ 如果是 true，则先跳到首页，再进入详情，在详情页面onBackPress之后，会先退到首页）
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
intent.putExtra("track_url", "https://t-e.flyme.cn/api/v1/track?viewid=BC2FEB68C20F7366440DAB27");//cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段
startActivity(intent);
```

发送此Intent需要和应用商店相同签名（flyme系统应用），并且需要添加权限

```
<uses-permission android:name="com.meizu.flyme.appcenter.permission.action.perform" />
```

## 四、下载应用（无页面跳转）

调用此接口只是发送广播，不会有任何回调信息

```java
String pkgName = "xxx";//包名
long appId = xxx;//应用商店服务端提供的应用 ID
Intent intent = new Intent("com.meizu.flyme.appcenter.intent.EXTERNAL_INSTALL");
Bundle bundle = new Bundle();
bundle.putString("source","调用者的包名");//必须传递此参数,不加不让下载
bundle.putString("package_name", pkgName);//必须传递此参数
bundle.putLong("app_id", appId);//此参数可以不传递，传递此参数可以减少一次网络请求
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
intent.putExtra("track_url", "https://t-e.flyme.cn/api/v1/track?viewid=BC2FEB68C20F7366440DAB27");//cpd上报数据请求url地址，服务端提供，仅cpd广告需要该字段
intent.putExtras(bundle);
sendBroadcast(intent);
```

发送此广播需要和应用商店相同的签名(flyme系统应用),并且添加权限

```
com.meizu.flyme.appcenter.permission.EXTERNAL_INSTALL
```

## 五、跳转活动页面

#### 5.1 ACTION 方式

```
//url：http://api-app.meizu.com/apps/public/activity/detail/1722(活动的id，根据实际情况修改，如需区分渠道来源，请添加?business=7)
//business的值，请参考：http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source

Intent intent = new Intent("com.meizu.flyme.appcenter.event");
Bundle bundle = new Bundle();
bundle.putString("url", "活动详情URL，注意并不是H5页面URL");//必填,这个 URL 后面要加上导量来源
intent.putExtra("source_apkname", "com.meizu.media.reader");//来源渠道应用包名
intent.putExtra("source_info", "/version_code/home_page/...");//来源渠道自定义信息,该数据会直接上报给大数据
intent.putExtras(bundle);
activity.startActivity(intent);
```

#### 5.2 SCHEME方式

```
//url：http://api-app.meizu.com/apps/public/activity/detail/1722(活动的id，根据实际情况修改，如需区分渠道来源，请添加?business=7)
//business的值，请参考：http://appff.meizu.com/front/wiki/#!specifications/track.md#flyme_business_source

mstore://goto/activity?url=【活动的详情地址】&source_apkname=【来源包名】&source_info=【来源附加信息】
```
##### 支持版本

*   5.4.0(VersionCode：312)
*   To Android开发者，建议不要根据应用商店版本号判断能不能跳转，而是直接在系统查询是否存在mstore://goto/h5_ext这个Intent即可.
*   To 前端开发者，根据以上版本号决定要不要显示此内容。

##### 参数说明

*   <span style="color:#FF0000;">**url 活动详情的地址，并不是H5页面的地址**</span>，注意url里有://$=等特殊符号时，要对 URL 进行转码（Encode with UTF-8），仅仅是url转码，不是整个URI转。这里附带一个[在线Encode工具](http://tool.chinaz.com/tools/urlencode.aspx)

## 六、跳转通用H5页面(福利、评测、红包等)

福利、评测使用的是通用H5页面，使用标准scheme方式。例如跳转到评测列表：

```
mstore://goto/h5_ext?url=http%3A%2F%2Fi3.res.meizu.com%2Fresources%2FappStore%2Freviews%2Fviews%2Flist.html&source_apkname=【来源包名】&source_info=【来源附加信息】
```

##### 支持版本

*   5.4.0(VersionCode：312)
*   To Android开发者，建议不要根据应用商店版本号判断能不能跳转，而是直接在系统查询是否存在mstore://goto/h5_ext这个Intent即可.
*   To 前端开发者，根据以上版本号决定要不要显示此内容。

##### 参数说明

*   url 可以是福利列表、福利详情、评测等活动除外的H5页面，注意url里有://$=等特殊符号时要转码（Encode with UTF-8），仅仅是url转码，不是整个URI转。这里附带一个[在线Encode工具](http://tool.chinaz.com/tools/urlencode.aspx)
*   source_apkname 来源渠道应用包名,必填
*   source_info 来源渠道自定义信息，选填

## 七、跳转标签列表页

如点击应用详情里的标签，能跳转到所属标签的排行页，需要的参数有：url，标题，来源包名（用于统计）：

```
mstore://tag_list?url=/apps/public/category/tags/apps/264&source_apkname=test&source_info=test&title=购物
```

##### 支持版本

*   6.16.0(VersionCode：6016000)
*   To Android开发者，建议不要根据应用商店版本号判断能不能跳转，而是直接在系统查询是否存在mstore://tag_list这个Intent即可.
*   To 前端开发者，根据以上版本号决定要不要显示此内容。

##### 参数说明

*   url 是除了域名外的相对路径+id，如：/apps/public/category/tags/apps/264，注意url里有://$=等特殊符号时要转码（Encode with UTF-8），仅仅是url转码，不是整个URI转。这里附带一个[在线Encode工具](http://tool.chinaz.com/tools/urlencode.aspx)
*   title 页面显示标题，必填
*   source_apkname 来源渠道应用包名,必填
*   source_info 来源渠道自定义信息，选填
