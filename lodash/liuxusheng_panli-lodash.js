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
}


