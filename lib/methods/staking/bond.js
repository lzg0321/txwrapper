"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param info - Information required to construct the transaction.
 */
function bond(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'bond',
            pallet: 'staking'
        } }, info));
}
exports.bond = bond;
