"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Construct a balance transfer transaction offline.
 *
 * @param info - Information required to construct the transaction.
 */
function transferKeepAlive(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'transferKeepAlive',
            pallet: 'balances'
        } }, info));
}
exports.transferKeepAlive = transferKeepAlive;
