"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Unlock any vested funds of a `target` account.
 *
 * @param info - Information required to construct the transaction.
 */
function vestOther(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vestOther',
            pallet: 'vesting'
        } }, info));
}
exports.vestOther = vestOther;
