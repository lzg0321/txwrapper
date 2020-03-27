"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Specify a proxy that is already open to us. Called by the stash.
 *
 * @param info - Information required to construct the transaction.
 */
function activateProxy(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'activateProxy',
            pallet: 'democracy'
        } }, info));
}
exports.activateProxy = activateProxy;
