1.垂直局中
#block{
  position:absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
}

方案二：flex

2.两列布局
.parent{
  display: flex;
}
.cloumn1{
  width: 200px;
}
.cloumn2{
  flex: 1;
}

3.借用组合继承

function parent () {
  // some code
}
function child () {
  // some code
}
child.prototype = new parent()

4. 使用JS实现一个repeat方法，
function repeat (func, times, wait) {
  var time = 0
  var handle = null
  return function(p) {
    handle = setInterval(function () {
      time++
      if (time > times) {
        clearInterval(handle)
        return
      }
      func && func(p)
    }, wait)
  }
}
const repeatedFunc = repeat(alert, 4, 3000);
repeatedFunc(); //
调用这个 repeatedFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒

5. 点击ul底下任意li，输出对应li里面的内容
document.querySelector('ul').addEventListener('click', function (e) {
  var el = e.target
  if (el.nodeName === 'li') {
    console.log(el.innerHTML)
  }
})
// 如果结构复杂，用event.path做处理，需要兼容ie等

6. 请为所有数组对象添加一个findDuplicate(n)方法，用于返回该数组中出现频率>=n的元素列表

Array.prototype.findDuplicate = function (n) {
  var map = {}
  this.forEach(function (item) {
    if (!map[item]) {
      map[item] = 1
    } else {
      map[item]++
    }
  })
  return Object.keys(map).map(function (key) {
    if (map[key] >= n) {
      return map[key]
    }
  })
}

7. 请用JS实现函数节流函数
提示：这题需要仔细审题，与传统的 throttle 有差异。
函数节流解释: 对函数执行增加一个控制层，保证100ms内只执行一次。此函数的作用是对函数执行进行频率控制，常用于用户频繁触发但可以以更低频率响应的场景

如上图，在一段时间内函数触发了9次，实际只执行了5次，且每次执行的时间间隔不小于100ms;前100ms内执行的是第三次出发，前两次触发失效。（"1"触发在0ms，立即执行，"2"触发在50ms，"3"触发在90ms，在100ms的时候，会把100ms内的最后一次触发"3"取出来执行）

function throttle(delay, fn) {
    var last = 0
    var handle = null
    return function (...p) {
        var cur = Date.now()
        if (cur - last > delay) {
            last = cur
            fn && fn(...p)
            clearTimeout(handle)
            handle = null
        } else {
          clearTimeout(handle)
          handle = setTimeout(function () {
            last = cur
            fn && fn(...p)
          }, delay - (cur - last))
        }
    }
}


8. 输入一维数组array和n，找出和值为0的任意两个元素。例如：
array = [2, 3, 1, 10, 4, 30]
n = 31
则结果应该输出[1, 30] 顺序不重要
如果有多个满足条件的，返回任意一对即可

function subFind (num, arr, limit) {
  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    if (num + arr[i] === limit) {
      return [num, arr[i]]
    }
  }
  return null
}
function mainFind (arr, limit) {
  var result = null
  for (var i = 0; i < arr.length; i++) {
    result = subFind(arr[i], arr.slice(i + 1), limit)
    if (result) {
      return result
    }
  }
}
