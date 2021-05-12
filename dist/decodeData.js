'use strict';

var decodeCalls = require('./decodeCalls.js');
var decodeFunctionResults = require('./decodeFunctionResults.js');

function decodeData(result, calls, callResponse) {
    var _a = decodeCalls.decodeCalls(callResponse), returnValues = _a[1];
    var decodedData = decodeFunctionResults.decodeFunctionResults(result, calls, returnValues);
    return decodedData;
}

exports.decodeData = decodeData;
