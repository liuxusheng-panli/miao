var liuxusheng_panli = {
  isNaN: function (val) {
    if (val != val && Number.isNaN(val)) {
      return true;
    } else if (typeof val == 'object') {
      return val.toString() === 'NaN';
    } else {
      return false;
    }
  },
  chunk: function (arr, size) {
    var arr2 = []
    for (i = 0; i < size; i++) {
      arr2.push(arr[i])
    }
    for (i = 0; i < size; i++) {
      arr.shift(arr[i])
    }
    var arr3 = []
    arr3.push(arr2)
    arr3.push(arr)
    return arr3
  },
  compact: function (arr) {
    var temp = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i]) {
        temp.push(arr[i])
      }
    }
    return temp
  },
  difference: function (ary1, ...ary2) {
    var result = []
    for (let i = 0; i < ary1.length; i++) {
      let res = ary2.includes(ary1[i])
      if (res) {
        result.push(ar2[i])
      }
    }
    return result
  },

  drop: function (Array, n = 1) {
    if (n == 0) {
      return Array
    }
    if (n >= Array.length) {
      return []
    }

    if (n < Array.length) {
      for (i = 0; i < n; i++) {
        Array.shift(i)
      }
      return Array
    }
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  flatten: function (ary) {
    return ary.flat()
    //flat()方法会按照一个可指定的深度递归遍历数组,默认深度为1，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
  },
  head: function (array) {
    if (array.length == 0) {
      return undefined
    }
    var newarray = []
    if (array.length !== 0) {
      newarray.push(array[0])
    }
    return newarray[0]
  },

  indexOf: function (array, num, target = 0) {
    if (isNaN(num)) {
      for (var i = target; i < array.length; i++) {
        if (isNaN(array[i])) {
          return i
        }
      }
    } else {
      for (var i = target; i < array.length; i++) {
        if (array[i] === num) {
          return i
        }
      }
    }
    return -1
  },
  initial: function (ary) {
    ary.pop()
    return ary
  },

  intersection: function (...ary) {
    var arg = Array.from(arguments)
    var result = []
    for (var i = 0; i < arg.length; i++) {
      for (var j = 1; j < arg[i].length; j++) {
        var tre = arg[0].includes(arg[j][i])
        if (tre) {
          result.push(arg[j][i])
        }
      }
    }
    return result
  },

  join: function (array, sparator = ',') {
    return array.join(sparator)
  },
  last: function (array) {
    let arr = array
    return arr.pop()
  },
  lastindexOf: function (array, value, fromIndex = array.length - 1) {
    let arr = array.slice(0, fromIndex + 1)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == value || arr[i] != arr[i] && value != value)
        return i
    }
    return -1
  },
  nth: function (ary, n = 0) {
    if (n >= 0) {
      return ary[n]
    } else {
      return ary[ary.length - Math.abs(n)]
    }
  },

  pull: function (ary, ...values) {
    var j = 0
    while (j < values.length) {
      for (i = 0; i < ary.length; i++) {
        if (ary[i] == values[j]) {
          ary.splice(i, 1)
        }
      }
      j++
    }
    return ary
  },
  pullAll: function (ary, array) {
    var j = 0
    while (j < array.length) {
      for (i = 0; i < ary.length; i++) {
        if (ary[i] == array[j]) {
          ary.splice(i, 1)
        }
      }
      j++
    }
    return ary
  },
  reverse: function (array) {
    var result = []
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i])
    }
    return result
  },
  sortedIndex: function (ary, value) {
    var low = 0
    var high = ary.length - 1
    var mid
    var element
    if (value >= ary[high]) {
      return ary.length
    }
    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      element = ary[mid]
      if (element === value) {
        return mid
      } else if (value < element) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return mid
  },

  tail: function (ary) {
    ary.shift() //删除数组中第一个元素
    return ary
  },
  take: function (ary, n = 1) {
    if (n == 0) {
      return []
    }
    if (n > ary.length) {
      return ary
    }
    if (n > 0 && n <= ary.length) {
      return ary.slice(0, n)
    }
  },
  takeRight: function (ary, n = 1) {
    if (n == 0) {
      return []
    }
    if (n > ary.length) {
      return ary
    }
    if (n > 0 && n <= ary.length) {
      var ary1 = ary.reverse().slice(0, n)
      var ary2 = ary1.reverse()
      return ary2
    }
  },



}








