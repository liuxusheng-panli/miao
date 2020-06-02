var liuxusheng = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (val !== val) {
      return true
    } else {
      return false
    }
  },
  chunk: function (ary, size) {
    let result = [];

    for (let i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }

    return result;
  },
}
