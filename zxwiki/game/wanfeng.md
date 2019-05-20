# 游戏前端对接文档

## 关键参数获取

关键参数会拼接到游戏页面路径中，例如：`https://cp.com/game1.html?userPin=123456&token=eyJ1c2VySWQiOjEyMzQ1NiwicGFydG5lciI6IndhbmZlbmciLCJyYW5kb20iOiJlYzNiMmI4OC1jNzAxLTRhOTktODViYy1hYzIyNDdiNDY2OWYifQ==`

## jssdk引入

* 页面中引入：`<script src="https://dido-h5-cdn.sanctpalace.com/static/sdk/gamecpsdk.js" charset="utf-8"></script>`

## 回退
```
if (window.ZXUtil) {
  ZXUtil.default.back()
}
```

## 充值

```
// 供参考监听代码
var beginRecharge = false
var orientation = 'landscape' // 横屏
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && beginRecharge) {
        // 调用后台接口，更新金豆
        beginRecharge = false // 变量重置
    }
})

function recharge (gameId, orientation) { // landscape：横屏；portrait：竖屏（默认值，不传则为竖屏）
    beginRecharge = true
    if (window.ZXUtil) {
      ZXUtil.default.toRecharge(gameId, orientation)
    }
}
```

## getUserUniqueSign

```
if (window.ZXUtil) {
  ZXUtil = ZXUtil.default
  ZXUtil.getUserUniqueSign('wanfeng').then(function (result) {
    if (result.status === 1) { // 成功
      console.log('result.res.query--', result.res.query) // 此处打印结果与拼在路径上的参数一样
    } else { // 失败
      console.log('getUserUniqueSign,message--', ZXUtil.getMessage(result))
    }
  })
}
```

## 下架游戏联调

* 在魅族浏览器中打开链接：https://dido-h5-cdn.sanctpalace.com/static/jumpGame.html?cp=wanfeng
* 填写对应的游戏url和id
* 点击按钮

## 交互流程

![交互流程](images/wanfeng.png)
