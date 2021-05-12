'use strict';

var _tslib = require('./_virtual/_tslib');

var MULTICALL_ADDRESSES = {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    4: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    5: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    42: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    56: '0xbEDe4875F56aaAB7a6aBbF9E423e0ba9E0a90b2A',
    100: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
    137: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
    80001: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc' // MULTICALL_ADDRESS_MUMBAI
};
function multicallAddressOrThrow(chainId) {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        var address, msg;
        return _tslib.__generator(this, function (_a) {
            address = MULTICALL_ADDRESSES[chainId];
            if (address === undefined) {
                msg = "multicall is not available on the network " + chainId;
                console.error(msg);
                throw new Error(msg);
            }
            return [2 /*return*/, address];
        });
    });
}
function networkSupportsMulticall(chainId) {
    return _tslib.__awaiter(this, void 0, void 0, function () {
        var address;
        return _tslib.__generator(this, function (_a) {
            address = MULTICALL_ADDRESSES[chainId];
            return [2 /*return*/, address !== undefined];
        });
    });
}

exports.MULTICALL_ADDRESSES = MULTICALL_ADDRESSES;
exports.multicallAddressOrThrow = multicallAddressOrThrow;
exports.networkSupportsMulticall = networkSupportsMulticall;
