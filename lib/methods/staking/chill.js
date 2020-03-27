"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * @param info - Information required to construct the transaction.
 */
function chill(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'chill',
            pallet: 'staking'
        } }, info));
}
exports.chill = chill;
