"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
/**
 * Declare the desire to validate for the origin controller.
 *
 * @param info - Information required to construct the transaction.
 */
function validate(args, info) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'validate',
            pallet: 'staking'
        } }, info));
}
exports.validate = validate;
