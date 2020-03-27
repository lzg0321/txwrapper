"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Become a proxy. This must be called prior to a later `activateProxy`.
 *
 * @param info - Information required to construct the transaction.
 */
function openProxy(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'openProxy',
            pallet: 'democracy'
        } }, info));
}
exports.openProxy = openProxy;
