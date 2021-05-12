'use strict';

function decodeFunctionResults(result, calls, returnValues) {
    for (var i = 0; i < returnValues.length; i++) {
        var call = calls[i];
        var decoded = call.caller.__interface.decodeFunctionResult(call.fd, returnValues[i]);
        result[call.caller.__name][call.fd.name] = decoded;
        result[call.caller.__name][call.fd.format()] = decoded;
    }
    return result;
}

exports.decodeFunctionResults = decodeFunctionResults;
