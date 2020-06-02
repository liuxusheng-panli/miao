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
  difference: function (array, ...args) {
    let map = {};
    let ans = [];
    for (let i = 0; i < array.length; i++) {
      map[array[i]] = true;
    }
    for (let i in args) {
      for (let j in args[i]) {
        if (map[args[i][j]]) map[args[i][j]] = false;
      }
    }
    for (let i in array) {
      if (map[array[i]]) {
        ans[ans.length] = array[i];
      }
    }
    return ans;
  },

  drop: function (Array, number) {
    if (number == 0) {
      return Array
    }
    if (number >= Array.length) {
      return []
    }
    if (number == 1) {
      Array.shift(1)
      return Array
    }
    if (number < Array.length) {
      for (i = 0; i < number; i++) {
        Array.shift(i)
      }
      return Array
    }
  },
}


