"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * @param info - Information required to construct the transaction.
 */
function withdrawUnbonded(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'withdrawUnbonded',
            pallet: 'staking'
        } }, info));
}
exports.withdrawUnbonded = withdrawUnbonded;
