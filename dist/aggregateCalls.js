'use strict';

var debug = require('debug')('etherplex:PayloadAggregator');
var aggregateCalls = function () {
    var contexts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        contexts[_i] = arguments[_i];
    }
    var result = {};
    var calls = [];
    contexts.forEach(function (caller) {
        result[caller.contract.__name] = {};
        calls = calls.concat(caller.flush());
    });
    debug("Result " + result + "...");
    debug("Found " + calls.length + " calls...");
    return [result, calls];
};

exports.aggregateCalls = aggregateCalls;
