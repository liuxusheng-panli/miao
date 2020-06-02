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
  // difference: function(arr,values){
  //   var temp = arr
  //   var temp2 = values
  //   var temp3 = arr.concat(values)
  //   var map = {}
  //   for (i = 0; i < temp3.length; i++){
  //     var con = temp[i]
  //     if (con in map){
  //       map[con]++
  //     } else{
  //       map[con] = 1
  //     }
  //   }
  //   for (i = 0; i < temp3.length; i++){
  //     var con = temp[i]
  //     if (map[c] == )
  //   }

  difference: (array, ...args) {
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
  }

}


