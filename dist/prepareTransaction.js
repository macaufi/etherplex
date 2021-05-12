'use strict';

var _tslib = require('./_virtual/_tslib');
var multicallAddresses = require('./multicallAddresses.js');

var AGGREGATE_SELECTOR = '0x252dba42';
function prepareTransaction(chainId, data) {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        var address, callData;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, multicallAddresses.multicallAddressOrThrow(chainId)];
                case 1:
                    address = _a.sent();
                    callData = AGGREGATE_SELECTOR + data.substr(2);
                    return [2 /*return*/, {
                            to: address,
                            data: callData
                        }];
            }
        });
    });
}

exports.AGGREGATE_SELECTOR = AGGREGATE_SELECTOR;
exports.prepareTransaction = prepareTransaction;
