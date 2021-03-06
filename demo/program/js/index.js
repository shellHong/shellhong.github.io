/**
 * promise模拟
 */
// class VPromise {
//   constructor(fn) {
//     this.result = null
//     this.fns = []
//     this.status = 'pending'
//     fn && fn(this.resolve.bind(this))
//   }
//   then(fn) {
//     switch (this.status) {
//       case 'pending':
//         this.fns.push(fn)
//         break
//       case 'fulfilled':
//         this.result = fn(this.result)
//         break
//     }
//     return this
//   }
//   resolve(result) {
//     this.status = 'fulfilled'
//     if (!this.fns.length) {
//       return
//     }
//     var fn = this.fns.splice(0, 1)[0]
//     debugger
//     var fnRes = fn(result)
//     if (fnRes instanceof this.constructor) {
//       fnRes.then(this.resolve.bind(this))
//     } else {
//       this.resolve(fnRes)
//     }
//   }
// }

class VPromise { 
  constructor (fn) {
    this.resolveFnArr = []
    this.rejectFnArr = []
    this.status = 'pending'
    fn(this.resolve.bind(this), this.reject)
  }
  then (resolveFn, rejectFn) {
    if (this.status === 'fulfilled') {
      this.resolveResult = resolveFn(this.resolveResult)
    } else if (this.status === 'fail') {
      this.rejectResult = rejectFn(this.rejectResult)
    } else {
      this.resolveFnArr.push(resolveFn)
      this.rejectFnArr.push(rejectFn)
    }
    return this
  }
  resolve (val) {
    this.status = 'fulfilled'
    if (this.resolveFnArr.length > 0) {
      var fn = this.resolveFnArr.shift()
      var result = fn(val)
      if (result instanceof VPromise) {
        result.then(this.resolve.bind(this), this.reject.bind(this))
      } else {
        this.resolve(result)
      }
    }
  }
  reject (val) {
    this.status = 'fail'
    if (this.rejectFnArr.length > 0) {
      var fn = this.rejectFnArr.shift()
      var result = fn(val)
      if (result instanceof VPromise) {
        result.then(this.resolve.bind(this), this.reject.bind(this))
      } else {
        this.reject(result)
      }
    }
  }
}

new VPromise(function(resolve) {
  setTimeout(function() {
    resolve(1)
  }, 1000)
}).then(function(res) {
  return ++res
}).then(function(res) {
  console.log(res)
  return res
}).then(function(res) {
  return new VPromise(function(resolve) {
    setTimeout(function() {
      resolve(++res)
    }, 1000)
  })
}).then(function(res) {
  return new VPromise(function(resolve) {
    setTimeout(function() {
      resolve(++res)
    }, 1000)
  })
}).then(function(res) {
  console.log(res)
})

/**
 * Promise.all实现
 */
Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let index = 0
    let result = []
    if (promises.length === 0) {
      resolve(result)
    } else {
      setTimeout(() => {
        function processValue(i, data) {
          result[i] = data
          if (++index === promises.length) {
            resolve(result)
          }
        }
        for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then((data) => {
            processValue(i, data)
          }, (err) => {
            reject(err)
            return
          });
        }
      })
    }
  });
}

/**
 * Promise.finally实现
 */
Promise.prototype.finally = function(callback) {
  return this.then((value) => {
    return Promise.resolve(callback()).then(() => {
      return value
    })
  }, (err) => {
    return Promise.resolve(callback()).then(() => {
      throw err
    })
  });
}

/**
 * 斐波那契函数(台阶问题)
 */
function iterFib(n) {
  let last = 1;
  let prevLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = last + prevLast;
    prevLast = last;
    last = result;
  }
  return result;
}

function fib(max) {
  var a = 0,
    b = 1,
    arr = [0, 1];
  while (arr.length < max) {
    [a, b] = [b, a + b];
    arr.push(b);
  }
  return arr;
}

iterFib(55)

/**
 * 动态规划背包问题
 * https://www.cnblogs.com/Christal-R/p/Dynamic_programming.html
 * 状态转移方程：result[i][w] = result[i-1][w] or max{result[i-1][w], result[i-1][w-weights[i]]+values[i]}
 */
function dealMaxValue(value, weight, maxWeight) {
  var n = value.length;
  var result = [];
  var use = [];

  use = Array.from({
    length: n + 1
  }, () => 0)
  result = Array.from({
    length: n + 1
  }, () => [0])
  result[0] = Array.from({
    length: maxWeight + 1
  }, () => 0)
  value.unshift(0); //第0件物品，价值为0
  weight.unshift(0); //第0件物品，重量为0

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= maxWeight; j++) {
      if (j < weight[i]) {
        result[i][j] = result[i - 1][j];
      } else {
        result[i][j] = Math.max(result[i - 1][j], result[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  var j = maxWeight;
  for (var i = n; i > 0; i--) {
    if (result[i][j] > result[i - 1][j]) {
      use[i] = 1;
      j = j - weight[i];
    }
  }

  console.log(use.slice(1));
  console.log(result[n][maxWeight]);
}

dealMaxValue([6, 3, 5, 4, 6], [2, 5, 4, 2, 3], 10)

/**
 * 动态规划之最短编辑距离问题
 * https://www.cnblogs.com/sumuncle/p/5632032.html
 */

function dealMinPath(srcArr, toArr) {
  var table = Array.from({
    length: srcArr.length + 1
  }, function(item, index) {
    if (index === 0) {
      return Array.from({
        length: toArr.length + 1
      }, function(item, index) {
        return index
      })
    }
    return [index]
  })
  for (var i = 1, ilen = srcArr.length; i <= ilen; i++) {
    for (var j = 1, jlen = toArr.length; j <= jlen; j++) {
      table[i][j] = Math.min(
        table[i - 1][j] + 1,
        table[i][j - 1] + 1,
        table[i - 1][j - 1] + (srcArr[i - 1] === toArr[j - 1] ? 0 : 1)
      )
    }
  }
  return table[ilen][jlen]
}

dealMinPath('jerry'.split(''), 'jary'.split(''))

/**
 * 冒泡排序，时间复杂度（O(n^2)）
 */
function bubbleSort(arr) {
  var period = 0
  for (var i = 1, ilen = arr.length; i < ilen; i++) {
    for (var n = 0, nlen = arr.length - period - 1; n < nlen; n++) {
      if (arr[n] < arr[n + 1]) {
        arr.splice(n, 2, arr[n + 1], arr[n])
      }
    }
    period++
  }
  return arr
}

bubbleSort([3, 1, 4, 2, 5])

/**
 * 全排序
 */
function getSubOrder(arr, num) {
  var result = []
  var temp = null
  for (var i = 0, ilen = arr.length; i <= ilen; i++) {
    temp = [].concat(arr)
    temp.splice(i, 0, num)
    result.push(temp)
  }
  return result
}

function handleReduce(arr, cur) {
  var result = []
  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    result = result.concat(getSubOrder(arr[i], cur))
  }
  return result
}

function getTotalOrder(arr) {
  arr.splice(0, 1, [
    [arr[0]]
  ])
  return arr.reduce(handleReduce)
}

getTotalOrder([1, 2, 3, 4])

/**
 * 选择排序，时间复杂度（O(n^2)）
 * 每轮遍历都会标记出最小的数，然后在每轮结束的时候，把这个数放到较左边
 */
function selectionSort(arr) {
  var len = arr.length
  var minIndex
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j // 将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
var arr = [3, 1, 4, 2, 5]
selectionSort(arr)


/**
 * 插入排序，时间复杂度（O(n^2)）
 * 从第一个数开始，默认其最大。然后每一轮前i个数进行排位，比它大的往右边，一轮结束后，它插入到适合它的位置（即比它小的数的右手边）
 */
function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i]
    var j = i - 1
    while (array[j] > key) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }
  return array
}

/**
 * 归并排序，时间复杂度（O(n log n)）
 */
function merge(left, right) {
  var result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  }
  var mid = Math.floor(arr.length / 2)
  var left_arr = arr.slice(0, mid),
    right_arr = arr.slice(mid)
  return merge(mergeSort(left_arr), mergeSort(right_arr))
}

mergeSort([3, 1, 4, 2, 5])

/**
 * 快速排序，时间复杂度（O(n log n)）
 */
function quickSort(arr, from, to) {
  var i = from
  var j = to
  var standard = arr[from]
  if (from >= to) {
    return
  }
  while (i < j) {
    while (arr[j] > standard && i < j) {
      j--
    }
    while (arr[i] <= standard && i < j) {
      i++
    }
    if (i < j) {
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  arr[from] = arr[i]
  arr[i] = standard
  quickSort(arr, from, i - 1)
  quickSort(arr, i + 1, to)
  return arr
}

var arr = [3, 1, 4, 2, 5]
quickSort(arr, 0, arr.length - 1)

/**
 * 数组中，只有一个数字是单个的，其他都是成对的；求单身数字
 */
function findSingleNum(arr) {
  return arr.reduce(function(a, b) {
    return a ^ b
  })
}
findSingleNum([1, 2, 3, 1, 5, 3, 2])

/**
 *	从一个数组中找出 N 个数，其和为 M 的所有可能
 * 参考：https://mp.weixin.qq.com/s/7PioUmjqF_52cE6iadyzHw
 */
function search(arr, count, amount) {
  var total = 1 << arr.length
  var len = 0
  var result = []

  var getOneAmount = function(num) { // 从低位开始，每次剔除一个1
    var count = 0
    while (num !== 0) {
      num = num & (num - 1)
      count++
    }
    return count
  }

  for (var i = 0; i < total; i++) {
    // len =  i.toString(2).replace(/0/g, '').length
    len = getOneAmount(i)
    if (len === count) {
      var subResult = []
      var innerAmount = 0
      for (var n = 0, nlen = arr.length; n < nlen; n++) {
        if (((1 << n) & i) !== 0) { // 判断该位置的数字是否为1
          subResult.push({
            [n]: arr[n]
          })
          innerAmount += arr[n]
        }
      }
      if (innerAmount === amount) {
        result.push(subResult)
      }
    }
  }
  return result
}

console.log(search([1, 2, 3, 4, 5, 1, 2, 3, 4], 4, 10))

/**
 * 防抖
 */
function debounce(idle, fn) {
  var timeoutHandle = null
  return function(...p) {
    clearTimeout(timeoutHandle)
    timeoutHandle = setTimeout(function() {
      fn && fn(...p)
    }, idle)
  }
}

var fn = debounce(500, function(p) {
  console.log('debounce', p)
})
fn(1)
fn(2)
fn(3)
setTimeout(function() {
  fn(4)
}, 1000)

/**
 * 节流
 */
function throttle(delay, fn) {
  var last = 0
  return function(...p) {
    var cur = Date.now()
    if (cur - last > delay) {
      last = cur
      fn && fn(...p)
    }
  }
}

var fn = throttle(500, function(p) {
  console.log('throttle', p)
})
fn(1)
fn(2)
setTimeout(function() {
  fn(3)
}, 500)
setTimeout(function() {
  fn(4)
}, 600)
setTimeout(function() {
  fn(5)
}, 1050)

/**
 * 函数柯里化
 */

function curry(fn, args = []) {
  return function() {
    let rest = [...args, ...arguments]
    if (rest.length < fn.length) {
      return curry.call(this, fn, rest)
    } else {
      return fn.apply(this, rest)
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}
let sumFn = curry(sum)
console.log(sumFn(1)(2)(3)) // 6
console.log(sumFn(1)(2, 3)) // 6

/**
 * 函数柯里化
 */
function add(...p) {
  var _args = []

  function _add(...a) {
    _args = _args.concat(...a)
    return _add
  }
  _add.toString = function() {
    return _args.reduce(function(a, b) {
      return a + b
    })
  }
  return _add(...p)
}

console.log(add(1, 2, 3, 4, 5)); // 15
console.log(add(1, 2, 3, 4)(5)); // 15
console.log(add(1)(2)(3)(4)(5)); // 15

/**
 * Math.round(num)
 */

function getRound(num) {
  return (0.5 + num) | 0
}

/**
 * generator 模拟 async/await
 */
function* aysncFn() {
  var one = yield packFn(1)
  console.log(one)
  var two = yield packFn(2)
  console.log(two)
  var three = yield packFn(3)
  console.log(three)
}

function reqFn(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(`delay-${num}`)
    }, 1000 * num)
  })
}

function packFn(num) {
  reqFn(num).then(function(res) {
    gen.next(res)
  })
}

var gen = aysncFn()
gen.next()

/**
 * 实现async/await中的async函数
 * https://mp.weixin.qq.com/s/qavrUL0m7EzMinCmm46W4Q
 */

// function spawn(genF) {
//   return new Promise(function(resolve, reject) {
//     const gen = genF()

//     function step (nextF) {
//       let next
//       try {
//         next = nextF()
//       } catch (e) {
//         return reject(e)
//       }
//       if (next.done) {
//         return resolve(next.value)
//       }
//       Promise.resolve(next.value).then(
//         function (v) {
//           step(function () {
//             return gen.next(v)
//           })
//         },
//         function (e) {
//           step(function () {
//             return gen.throw(e)
//           })
//         }
//       )
//     }
//     step(function() {
//       return gen.next(undefined)
//     })
//   })
// }
function spawn(genF) {
  return new Promise (function (resolve, reject) {
    var gen = genF()
    function step (val) {
      try {
        var result = gen.next(val)
      } catch (error) {
        reject()
      }
      if (result.done) {
        resolve(result.value)
      }
      Promise.resolve().then(function () {
        step(result.value)
      })
    }
    step()
  })
}
/**
 * Event Loop
 * http://www.cnblogs.com/jiasm/p/9482443.html
 */

async function test() {
  console.log('1')
  await test1()
  console.log('5')
  await test2()
  console.log('8')
}
async function test1() {
  console.log('2')
}
async function test2() {
  console.log('6')
}
test()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(function(resolve, reject) {
  console.log('3')
  resolve()
}).then(function() {
  console.log('7')
})
console.log('4')

/**
 * 解构、rest运算符、扩展运算符
 */

var {
  a1,
  b1
} = {
  a1: 1,
  b1: {
    c1: 2
  }
}
var {
  a2,
  ...b2
} = {
  a2: 1,
  b2: {
    c2: 2
  },
  d2: 3
}
var [a3, b3] = [1, 2]
var [a4, ...b4] = [1, 2, 3]

console.log(a1, b1) // 1 {c1: 2}
console.log(a2, b2) // 1 {b2: {c2: 2}, d2: 3}
console.log(a3, b3) // 1 2
console.log(a4, b4) // 1 [2, 3]
console.log(...b4) // 2 3

var obj = {
  a: 1,
  b: 2
}
var arr = [1, 2]

console.log({...obj
  }) // {...obj}方式，无需可迭代
console.log({...arr})
console.log(...arr) // ...obj方式，需可迭代
console.log([...arr]) // [...obj]方式，需可迭代

/**
 * 15000000 -> 15,000,000
 */

function formatNum(num, range) {
  var arr = (num + '').split('')
  for (var i = arr.length - range; i > 0; i -= range) {
    arr.splice(i, 0, ',')
  }
  return arr.join('')
}
console.log(formatNum(15023203020, 3))


/**
 * 寄生组合继承
 */
function Animal(name) {
  this.name = name || 'Animal'
  this.sleep = function() {
    console.log(this.name + '正在睡觉！')
  }
}
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food)
}

function Cat(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
// var Super = function() {}
// Super.prototype = Animal.prototype
// Cat.prototype = new Super()
Cat.prototype = Object.create(Animal.prototype)

Cat.prototype.constructor = Cat

var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Animal) // true
console.log(cat instanceof Cat) //true

/**
 * 获取url参数
 */
function getParams(key) {
  var result = location.search.match(new RegExp(`${key}=([^?&#=]*)`))
  if (result && result.length > 1) {
    return result[1]
  }
  return null
}
console.log(getParams('tn'))

/**
 * 获取出现次数最多的单词
 */
function getMaxLenWord(arr) {
  var map = {}
  var max = 0
  var maxWord = null
  var one = null
  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    one = arr[i]
    map[one] = 1 + map[one] || 0
    if (max < map[one]) {
      max = map[one]
      maxWord = one
    }
  }
  return maxWord
}

getMaxLenWord(['a', 'b', 'abc', 'cd', 'abc', 'ee', 'cd', 'cd', '1'])

/**
 * 大数相加
 */
function add (str1, str2) {
  let arr1 = Array.from(str1)
  let arr2 = Array.from(str2)
  let result = []
  let notice = 0
  let temp
  for (let i1 = arr1.length - 1, i2 = arr2.length - 1; i1 >= 0 || i2 >= 0; i1--, i2--) {
    temp = parseInt(i1 >= 0 ? arr1[i1] : 0) + parseInt(i2 >= 0 ? arr2[i2] : 0) + notice
    if (temp >= 10) {
      notice = 1
      temp -= 10
    } else {
      notice = 0
    }
    result.unshift(temp)
  }
  if (notice === 1) {
    result.unshift(1)
  }
  return result.join('')
}

console.log(parseInt(add('111', '222')) === 111 + 222)
console.log(parseInt(add('1', '9')) === 1 + 9)
console.log(parseInt(add('111', '999')) === 111 + 999)
console.log(parseInt(add('1111111', '999')) === 1111111 + 999)
console.log(parseInt(add('1232', '999999')) === 1232 + 999999)

/**
 * Stack 整数栈
 * pop
 * push
 * max // 栈内最大值，平均时间复杂度O（1）
 */
class Stack {
  constructor() {
    this.data = []
    this.maxData = []
    this.max = Number.MIN_VALUE
  }
  push(value) {
    this.data.push(value)
    this.max = Math.max(this.max, value)
    this.maxData.push(this.max)
  }
  pop() {
    this.maxData.pop()
    return this.data.pop()
  }
  max() {
    return this.maxData[this.maxData.length - 1]
  }
}

var stack = new Stack()
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(6)
console.log(stack.max())
stack.pop()
console.log(stack.max())
stack.pop()
console.log(stack.max())
stack.pop()
console.log(stack.max())
stack.pop()
console.log(stack.max())


/**
 * 实现所有请求的耗时统计
 */


/**
 * v-model实现
 */
var obj = {}
var temp = undefined
Object.defineProperties(obj, {
  key1: {
    set(val) {
      inputEl.value = val
      temp = val
    },
    get() {
      return temp
    }
  }
})

var inputEl = document.createElement('input')
inputEl.style = 'position:absolute;top:0;left:0;width:200px;height:30px;border:1px solid red;'
document.body.appendChild(inputEl)
inputEl.oninput = function() {
  obj.key1 = this.value
}

/**
 * 深度克隆
 */
function deepClone(obj) {
  if (obj === null) return null
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (typeof obj !== 'object') {
    return obj
  }
  /**
   * 如果 obj 是数组，那么 obj.constructor 是 [Function: Array]
   * 如果 obj 是对象，那么 obj.constructor 是 [Function: Object]
   */
  let t = new obj.constructor()
  for (let key in obj) {
    t[key] = deepClone(obj[key])
  }
  return t
}
var obj1 = [{
  a: {
    b: 1
  }
}]
var obj2 = {
  a: [1, {
    b: 2
  }]
}
var cobj1 = deepClone(obj1)
var cobj2 = deepClone(obj2)

var obj3 = obj1
var obj4 = obj2

obj1[0].a.b = 'a.b'
obj2.a[1].d = 'd'

console.log('obj1--', obj1)
console.log('obj2--', obj2)
console.log('obj3--', obj3)
console.log('obj4--', obj4)
console.log('cobj1--', cobj1)
console.log('cobj2--', cobj2)

// 数组去重
https://mp.weixin.qq.com/s/ipxCQRZ1rj6VJXIP659IBg