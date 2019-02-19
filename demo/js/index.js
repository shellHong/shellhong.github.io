/**
 * 全排序
 */
function getSubOrder (arr, num) {
  var result = []
  var temp = null
  for (var i = 0, ilen = arr.length; i <= ilen; i++) {
    temp = [].concat(arr)
    temp.splice(i, 0, num)
    result.push(temp)
  }
  return result
}
function handleReduce (arr, cur) {
  var result = []
  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    result = result.concat(getSubOrder(arr[i], cur))
  }
  return result
}
function getTotalOrder (arr) {
  arr.splice(0, 1, [[arr[0]]])
  return arr.reduce(handleReduce)
}

getTotalOrder([1,2,3,4])

/**
 * promise模拟
 */
class VPromise{
  constructor (fn) {
    this.result = null
    this.fns = []
    this.status = 'pending'
    fn && fn(this.resolve.bind(this))
  }
  then (fn) {
    switch (this.status) {
      case 'pending':
        this.fns.push(fn)
        break
      case 'fulfilled':
        this.result = fn(this.result)
        break
    }
    return this
  }
  resolve (result) {
    this.status = 'fulfilled'
    if (!this.fns.length) {
      return
    }
    var fn = this.fns.splice(0, 1)[0]
    var fnRes = fn(result)
    if (fnRes instanceof this.constructor) {
      fnRes.then(this.resolve.bind(this))
    } else {
      this.resolve(fnRes)
    }
  }
}

new VPromise(function (resolve) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
}).then(function (res) {
  return ++res
}).then(function (res) {
  console.log(res)
  return res
}).then(function (res) {
  return new VPromise(function (resolve) {
    setTimeout(function () {
      resolve(++res)
    }, 1000)
  })
}).then(function (res) {
  return new VPromise(function (resolve) {
    setTimeout(function () {
      resolve(++res)
    }, 1000)
  })
}).then(function (res) {
  console.log(res)
})

/**
 * 斐波那契函数
 */
function iterFib (n) {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

iterFib(55)

/**
 * 动态规划背包问题
 * 状态转移方程：result[i][w] = result[i-1][w] or max{result[i-1][w], result[i-1][j-weights[i]]+values[i]}
 */
function dealMaxValue (value, weight, maxWeight) {
  var n = value.length;
  var result = [];
  var use = [];
  
  use = Array.from({length: n + 1}, () => 0)
  result = Array.from({length: n + 1}, () => [0])
  result[0] = Array.from({length: maxWeight + 1}, () => 0)
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