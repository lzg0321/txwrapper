"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * @param info - Information required to construct the transaction.
 */
function nominate(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'nominate',
            pallet: 'staking'
        } }, info));
}
exports.nominate = nominate;
