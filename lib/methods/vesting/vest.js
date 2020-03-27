"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Unlock any vested funds of the sender account.
 *
 * @param info - Information required to construct the transaction.
 */
function vest(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vest',
            pallet: 'vesting'
        } }, info));
}
exports.vest = vest;
