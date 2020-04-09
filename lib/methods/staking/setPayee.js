"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * (Re-)set the controller of a stash. Effects will be felt at the beginning of
 * the next era.
 *
 * @param info - Information required to construct the transaction.
 */
function setPayee(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'setPayee',
            pallet: 'staking',
        } }, info));
}
exports.setPayee = setPayee;
