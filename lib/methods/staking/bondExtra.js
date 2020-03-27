"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Add some extra amount that have appeared in the stash `free_balance` into
 * the balance up for staking.
 *
 * @param info - Information required to construct the transaction.
 */
function bondExtra(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'bondExtra',
            pallet: 'staking'
        } }, info));
}
exports.bondExtra = bondExtra;
