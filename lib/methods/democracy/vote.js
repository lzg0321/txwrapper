"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Vote in a referendum.
 *
 * @param info - Information required to construct the transaction.
 */
function vote(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vote',
            pallet: 'democracy'
        } }, info));
}
exports.vote = vote;
