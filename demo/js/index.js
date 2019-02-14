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