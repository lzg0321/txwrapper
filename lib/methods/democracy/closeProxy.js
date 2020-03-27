"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Clear the proxy. Called by the proxy.
 *
 * @param info - Information required to construct the transaction.
 */
function closeProxy(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'closeProxy',
            pallet: 'democracy'
        } }, info));
}
exports.closeProxy = closeProxy;
