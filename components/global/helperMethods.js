'use strict';
var Global = {
  // Change javascript array into object
  arrToObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }
}


module.exports = Global;
