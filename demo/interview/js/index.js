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
 * promise模拟
 */
class VPromise {
  constructor(fn) {
    this.result = null
    this.fns = []
    this.status = 'pending'
    fn && fn(this.resolve.bind(this))
  }
  then(fn) {
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
  resolve(result) {
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
 * 斐波那契函数(台阶问题)
 */
function iterFib(n) {
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
 * 冒泡排序，不稳定，时间复杂度（O(n^2)）
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
 * 归并排序，稳定，时间复杂度（O(n log n)）
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
 * 快速排序，不稳定，时间复杂度（O(n log n)）
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
 function findSingleNum (arr) {
   return arr.reduce(function (a, b) {
     return a ^ b
   })
 }
 findSingleNum([1,2,3,1,5,3,2])

 /**
  *	从一个数组中找出 N 个数，其和为 M 的所有可能
  * 参考：https://mp.weixin.qq.com/s/7PioUmjqF_52cE6iadyzHw
  */
function search (arr, count, amount) {
  var total = 1 << arr.length
  var len = 0
  var result = []

  var getOneAmount = function (num) {
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
      for (var n = 0, nlen = arr.length; n < nlen; n ++) {
        if (((1 << n) & i) !== 0) {
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

console.log(search([1,2,3,4,5,1,2,3,4], 4, 10))
