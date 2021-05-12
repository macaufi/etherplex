'use strict';

var ethers = require('ethers');
var abi = require('@ethersproject/abi');

function encodeCalls(calls) {
    return ethers.ethers.utils.defaultAbiCoder.encode([
        abi.ParamType.fromObject({
            components: [
                { name: 'target', type: 'address' },
                { name: 'callData', type: 'bytes' }
            ],
            name: 'data',
            type: 'tuple[]'
        })
    ], [calls.map(function (call) { return [call.to, call.data]; })]);
}

exports.encodeCalls = encodeCalls;
