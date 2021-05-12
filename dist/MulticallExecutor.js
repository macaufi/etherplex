'use strict';

var _tslib = require('./_virtual/_tslib');
var aggregateCalls = require('./aggregateCalls.js');
var decodeCalls = require('./decodeCalls.js');
var decodeFunctionResults = require('./decodeFunctionResults.js');
var encodeCalls = require('./encodeCalls.js');
var multicallAddresses = require('./multicallAddresses.js');
var prepareTransaction = require('./prepareTransaction.js');

var debug = require('debug')('etherplex:MulticallExecutor');
var MulticallExecutor = /** @class */ (function () {
    function MulticallExecutor(provider) {
        this.provider = provider;
    }
    MulticallExecutor.prototype.executeCallers = function () {
        var contexts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            contexts[_i] = arguments[_i];
        }
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var _a, result, calls, _b, blockNumber, returnValues, decoded;
            return _tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = aggregateCalls.aggregateCalls.apply(void 0, contexts), result = _a[0], calls = _a[1];
                        return [4 /*yield*/, this.executeCalls(calls)];
                    case 1:
                        _b = _c.sent(), blockNumber = _b[0], returnValues = _b[1];
                        decoded = decodeFunctionResults.decodeFunctionResults(result, calls, returnValues);
                        return [2 /*return*/, decoded];
                }
            });
        });
    };
    MulticallExecutor.prototype.executeCalls = function (calls) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var data, result, values;
            var _this = this;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.multicallSupported()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        debug("Multicall is supported");
                        data = encodeCalls.encodeCalls(calls);
                        debug("Encoded data: " + data);
                        debug(calls);
                        return [4 /*yield*/, this.executeMulticallData(data)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, decodeCalls.decodeCalls(result)];
                    case 3: return [4 /*yield*/, Promise.all(calls.map(function (call) { return _tslib.__awaiter(_this, void 0, void 0, function () { return _tslib.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.provider.call({ to: call.to, data: call.data })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                    case 4:
                        values = _a.sent();
                        return [2 /*return*/, [null, values]];
                }
            });
        });
    };
    MulticallExecutor.prototype.multicallSupported = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var network;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getNetwork()];
                    case 1:
                        network = _a.sent();
                        return [4 /*yield*/, multicallAddresses.networkSupportsMulticall(network.chainId)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MulticallExecutor.prototype.executeMulticallData = function (data) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var network, tx, result;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getNetwork()];
                    case 1:
                        network = _a.sent();
                        return [4 /*yield*/, prepareTransaction.prepareTransaction(network.chainId, data)];
                    case 2:
                        tx = _a.sent();
                        return [4 /*yield*/, this.provider.call(tx)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MulticallExecutor.prototype.executeRegularCalls = function (calls) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var values;
            var _this = this;
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(calls.map(function (call) { return _tslib.__awaiter(_this, void 0, void 0, function () { return _tslib.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.provider.call({ to: call.to, data: call.data })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                    case 1:
                        values = _a.sent();
                        return [2 /*return*/, values];
                }
            });
        });
    };
    return MulticallExecutor;
}());

exports.MulticallExecutor = MulticallExecutor;
