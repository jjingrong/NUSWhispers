'use strict';

/**
  * This file is for including helper methods when needed
  * Especially for frequently used javascript methods that will be used across files
*/


var GlobalMethods = {
  /** Change javascript array into object
    * @params: array
    * @return: object
  */
  arrToObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }
}

module.exports = GlobalMethods;
