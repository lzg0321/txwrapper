"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Sets the session key(s) of the function caller to `key`.
 *
 * @param info - Information required to construct the transaction.
 */
function setKeys(args, info) {
    const { keys, proof = '0x' } = args;
    return util_1.createMethod(Object.assign({ method: {
            args: {
                keys,
                proof
            },
            name: 'setKeys',
            pallet: 'session'
        } }, info));
}
exports.setKeys = setKeys;
