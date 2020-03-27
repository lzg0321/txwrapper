"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Deactivate the proxy, but leave open to this account. Called by the stash.
 * The proxy must already be active.
 *
 * @param info - Information required to construct the transaction.
 */
function deactivateProxy(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'deactivateProxy',
            pallet: 'democracy'
        } }, info));
}
exports.deactivateProxy = deactivateProxy;
