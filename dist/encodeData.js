'use strict';

var aggregateCalls = require('./aggregateCalls.js');
var encodeCalls = require('./encodeCalls.js');

function encodeData() {
    var contexts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        contexts[_i] = arguments[_i];
    }
    var _a = aggregateCalls.aggregateCalls.apply(void 0, contexts), result = _a[0], calls = _a[1];
    var data = encodeCalls.encodeCalls(calls);
    return [result, calls, data];
}

exports.encodeData = encodeData;
