# 游戏前端对接文档

## 关键参数获取

关键参数会拼接到游戏页面路径中，例如：`https://cp.com/game1.html?userId=123456&code=eyJ1c2VySWQiOjEyMzQ1NiwicGFydG5lciI6InlpbGV3YW4iLCJyYW5kb20iOiI4NzQ2OWU0YS1hNWM0LTRjYWQtYWU2MS1hZTE1NDgxNDE2MzAifQ==`

##服务端查询接口

https://dido.zhaoxitech.com/system/code/info.do

```
// 接口返回结果
{
  "code": 2000,
  "message": null,
  "value": {
    "nickName": "123456",
    "headImg": "123456"
  },
  "logLevel": null,
  "desc": null
}
```

## 付费

* 页面中引入：`<script src="https://zxbook-res.zhaoxitech.com/common/js/gamecpsdk.js" charset="utf-8"></script>`
* 付费接口调用

```
BuyUtil.init({
  lockFn: function () {
    console.log('lockFn') // 开始进行支付流程，进行界面锁定（loading等提示展示）
  },
  removeLockFn: function () {
    console.log('removeLockFn') // 支付流程结束，界面解锁
  }
}).then(function (res) { // 上次付钱成功后，由于未知原因（断网、app crash之类的）中断了后续的后台请求操作，从新进入页面后继续之前的操作；
  // res为结果，{code: -1, message: "用户金豆不足."}，code为-1表示失败，1表示成功，0表示啥都没做，失败的时候才会有message字段
  console.log('init,res--', res)
})

var params = {
  partner: 'yilewan', // 写死即可
  outTradeNo: 'abc3', // 购买方订单ID
  goldBean: 1000, // 实付价格，金豆
  originPrice: '10000', // 原价
  subject: 'subject', // 商品名
  body: 'body', // 商品描述
  notifyUrl: 'notifyUrl', // 充值成功回调地址
  extContent: 'extContent', // 购买方自定义扩展字段，回调时原样返回
  sign: 'md5', // 签名
  signType: 'sadfasdfasf', // 签名方式(md5)
  chargeOptionId: 0, // 写死即可
  img: '' // 商品图片，可为空字符串
}

// 付费接口调用
BuyUtil.buy(params).then(function (res) {
  // res为结果，{code: -1, message: "用户金豆不足."}，code为-1表示失败，1表示成功，0表示啥都没做，失败的时候才会有message字段
  console.log('buy,res--', res)
})
```

## 交互流程

![交互流程](images/yilewan.png)
