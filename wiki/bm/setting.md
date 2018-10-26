# bm管理平台

## 后台表字段配置属性说明

### 示例

* [字段配置接口示例](/wiki/project/ebook/bm/javaBeanTest.json)
* [精简版字段配置接口示例](/wiki/project/ebook/bm/javaBeanTestSimple.json)
* [列表数据接口示例](/wiki/project/ebook/bm/getList.json)

### 通用字段说明

```
  {
    "name": "name", // 设置字段名称
    "inputType": "text", // 设置该字段对应的输入类型（搜索、新增、修改）
    "javaType": "String", // 设置该字段对应的显示类型（列表）
    "comment": "名称", // 设置该字段对应的中文名称（搜索、新增、修改、列表）
    "canSearch":false, // 设置该字段是否可搜索（默认为false）
    "isShowInTable": false // 设置该字段是否显示在列表中（hidden除外，其他默认都为true）
  }
```

### 其他字段说明

* remoteUrl: 远程请求路径，多用于下拉选择列表数据请求，文件上传等
* searchRange: 用于日期和时间点组件，设置其搜索区间（具体可参考:[日期选择组件](#date)，需自行保证其顺序，如“日期选择组件”例子中，需保证"birthdayStart"在"birthdayEnd"之前）

  * 如若缺乏该字段，其值默认为`${name}Start,${name}End`，即如果该字段名称为:`birthday`，则searchRange默认设置为`"birthdayStart,birthdayEnd"`

* group: 用于日期和时间区间组件，关联两个不同的字段形成区间(具体可参考:[日期区间选择组件](#daterange)，需自行保证其顺序，如“日期区间选择组件”例子中，需保证"startDate"在"endDate"之前，但是不一定要相邻)

  * 优先匹配有group字段的
  * 无group字段的，如果只有两个，自动组成一个group
  * 无group字段的，超过两个，采用名称模糊匹配，例如
* isOther: 用于标识这是一个自定义组件，规避在公共组件列表中找不到然后采用默认处理(具体可参考:[自定义组件](#自定义组件))

```
[{
  name: "checkout"
},{
  name: "travelStart"
},{
  name: "travelEnd"
},{
  name: "a-goHomeStart"
},{
  name: "checkin"
},{
  name: "goHomeEnd"
}]

//公共字符串最大化匹配结果
[checkout,checkin]
[travelStart,travelEnd]
[a-goHomeStart,goHomeEnd]
```

### 举例说明

#### hidden
用于修改弹框中隐藏字段的设置，例如不可改动，无效显示，又必须上报的id

```
{
  "name": "id",
  "inputType": "hidden",
  "javaType": "long",
  "comment": "id"
}
```

#### text
普通文本输入框

```
{
  "name": "name",
  "inputType": "text",
  "javaType": "String",
  "comment": "名称"
}
```

#### number
数字输入框

```
{
  "name": "age",
  "inputType": "number",
  "javaType": "number",
  "comment": "年龄"
}
```

#### password
密码输入框

```
{
  "name": "password",
  "inputType": "password",
  "javaType": "String",
  "comment": "密码",
  "canSearch":false,
  "isShowInTable": false
}
```

#### textarea
多行文本输入框

```
{
  "name": "remark",
  "inputType": "textarea",
  "javaType": "String",
  "comment": "备注",
  "canSearch": false
}
```

#### dropdown
本地下拉选择框，其选项永久不变

```
{
  "name": "sex",
  "inputType": "dropdown",
  "javaType": "enum",
  "comment": "性别",
  "options": {
    "maps": {
      "1": "男",
      "2": "女"
    }
  }
}
```

#### asyncDropdown
远程下拉选择框

```
{
  "name": "position",
  "inputType": "asyncDropdown",
  "javaType": "asyncEnum",
  "comment": "职位",
  "remoteUrl": "/json/position.json" //选项数据请求路径
}

//选项请求数据例子
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": [{
      "name": "开发",
      "value": 1
  },{
      "name": "测试",
      "value": 2
  },{
      "name": "产品",
      "value": 3
  },{
      "name": "运营",
      "value": 4
  },{
      "name": "商务",
      "value": 5
  }]
}
```

#### cascader
原创级联下拉选择框

```
{
  "name": "station",
  "inputType": "cascader",
  "javaType": "cascader",
  "comment": "岗位细节",
  "remoteUrl": "/json/cascade.json" //选项数据请求路径
}

//选项请求数据例子
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": [{
      "label": "开发",
      "value": 1,
      "children": [{
          "label": "小弟1号",
          "value": 1
      },{
          "label": "小弟2号",
          "value": 2
      },{
          "label": "小弟3号",
          "value": 3
      },{
          "label": "小弟4号",
          "value": 4
      },{
          "label": "小弟5号",
          "value": 5
      }]
  },{
      "label": "测试",
      "value": 2,
      "children": [{
          "label": "小弟1号",
          "value": 1
      },{
          "label": "小弟2号",
          "value": 2
      },{
          "label": "小弟3号",
          "value": 3
      },{
          "label": "小弟4号",
          "value": 4
      },{
          "label": "小弟5号",
          "value": 5
      }]
  },{...},{...}]
}
```

#### 图片上传

```
{
  "name": "photo",
  "inputType": "upload",
  "javaType": "image",
  "comment": "头像",
  "remoteUrl": "/json/uploadImage.json" //图片上传接口路径
}

// 图片上传接口返回数据
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": "http://localhost:8334/json/image/2.jpg" //图片上传成功后，返回图片的远程路径
}
```

#### 文件上传

```
{
  "name": "infoZip",
  "inputType": "upload",
  "javaType": "String",
  "comment": "资料",
  "remoteUrl": "/json/uploadFile.json" //文件上传接口路径
}

// 文件上传接口返回数据
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": "http://localhost:8334/json/file/1.zip" //文件上传成功后，返回文件的远程路径
}
```

#### date
日期选择组件（2018-12-12）

```
{
  "name": "birthday",
  "inputType": "date",
  "javaType": "date",
  "comment": "出生日期",
  "searchRange": "birthdayStart,birthdayEnd" //用于设置搜索时，其对应的区间字段，例如搜索：生日在1990-12-11到2000-12-11期间的数据；需自行保证顺序的正确性，即"birthdayStart,birthdayEnd"，而非"birthdayEnd,birthdayStart"
}
```

#### datetime
时间选择组件（2018-12-12 12:12:12）

```
{
  "name": "breakfastTime",
  "inputType": "datetime",
  "javaType": "time",
  "comment": "早饭时间",
  "searchRange": "breakfastTimeStart,breakfastTimeEnd" //用于设置搜索时，其对应的区间字段，例如搜索：早餐时间在2018-12-12 8:00:00到2018-12-12 9:00:00期间的数据
}
```

#### daterange
日期区间选择组件，需自行保证其顺序（如下例，需保证"startDate"在"endDate"之前，但是不一定要相邻）

```
{
  "name": "startDate",
  "inputType": "daterange",
  "javaType": "date",
  "comment": "入学日期",
  "group": "上学区间" //该字段的值一样的两个字段形成一个日期区间，同时其值作为对应的搜索、新增、修改时的中文名称
},{
  "name": "endDate",
  "inputType": "daterange",
  "javaType": "date",
  "comment": "毕业日期",
  "group": "上学区间"
}
```

#### datetimerange
时间区间选择组件

```
{
  "name": "checkin",
  "inputType": "datetimerange",
  "javaType": "time",
  "comment": "入住时间",
  "group": "住店区间" //该字段的值一样的两个字段形成一个时间区间，同时其值作为对应的搜索、新增、修改时的中文名称
},{
  "name": "checkout",
  "inputType": "datetimerange",
  "javaType": "time",
  "comment": "离店时间",
  "group": "住店区间"
}
```

#### color
颜色选择组件

```
{
  "name": "skinColor",
  "inputType": "color",
  "javaType": "color",
  "comment": "肤色",
  "canSearch": false
}
```

#### switch
开关组件（1表示是，0表示否）

```
{
  "name": "isHandsome",
  "inputType": "switch",
  "javaType": "switch",
  "comment": "帅吗"
}
```

#### search-input
联想输入框，用户输入的过程中，会自动请求后台接口进行匹配，并在下拉框中显示匹配数据

```
{
  "name": "schoolName",
  "inputType": "search-input",
  "javaType": "search-input",
  "comment": "心仪学校",
  "remoteUrl": "/json/schoolList.json" //用户输入的过程中，用于请求匹配内容的接口，接口参数为query
}

// 请求匹配内容的接口数据
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": [{
      "name": "清华",
      "value": 1
  },{
      "name": "北大",
      "value": 2
  },{
      "name": "人大",
      "value": 3
  },{
      "name": "中大",
      "value": 4
  },{
      "name": "暨大",
      "value": 5
  }]
}
```

#### checkbox-group
远程复选框组件

```
{
  "name": "fav",
  "inputType": "checkbox-group",
  "javaType": "checkbox-group",
  "comment": "喜好",
  "remoteUrl": "/json/favList.json" //用于请求对应的数据
}

//接口数据
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": [{
      "name": "喝茶",
      "value": 1
  },{
      "name": "喝酒",
      "value": 2
  },{
      "name": "饮料",
      "value": 3
  },{
      "name": "水果",
      "value": 4
  },{
      "name": "烧烤",
      "value": 5
  }]
}
```

#### radio-group
远程单选框组件

```
{
  "name": "height",
  "inputType": "radio-group",
  "javaType": "radio-group",
  "comment": "身高",
  "remoteUrl": "/json/height.json" //用于请求对应的数据
}

//接口数据
{
  "code": 200,
  "message": "",
  "redirect": "",
  "value": [{
      "name": "1.5m ~ 1.6m",
      "value": 1
  },{
      "name": "1.6m ~ 1.7m",
      "value": 2
  },{
      "name": "1.7 ~ 1.8m",
      "value": 3
  },{
      "name": "1.8m ~ 1.9m",
      "value": 4
  },{
      "name": "1.9m ~ 2.0m",
      "value": 5
  }]
}
```

#### rich-text
富文本输入框

```
{
  "name": "des",
  "inputType": "rich-text",
  "javaType": "rich-text",
  "comment": "简介"
}
```

#### 自定义组件

* 此类组件不具普遍公用性，所以属于针对业务进行的定制化的组件
* 需添加`isOther`并设置为true来规避默认处理
* 此处的`remoteUrl`为非必须，根据具体的组件来定

```
{
  "name": "otherStation",
  "inputType": "dialogCascade",
  "javaType": "columnCascade",
  "isOther": true, //用于标识这是一个自定义组件，规避在公共组件列表中找不到然后采用默认处理
  "comment": "岗位细则",
  "remoteUrl": "/json/cascade0.json"
}
```
