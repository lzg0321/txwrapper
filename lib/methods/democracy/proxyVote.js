"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Vote in a referendum on behalf of a stash.
 *
 * @param info - Information required to construct the transaction.
 */
function proxyVote(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'proxyVote',
            pallet: 'democracy'
        } }, info));
}
exports.proxyVote = proxyVote;
