"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const util_1 = require("./util");
/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing").
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 */
function createSigningPayload(unsigned, options) {
    const { registry } = util_1.sanitizeOptions(Object.assign({ metadata: unsigned.metadataRpc }, options));
    return types_1.createType(registry, 'ExtrinsicPayload', unsigned, {
        version: unsigned.version
    }).toHex();
}
exports.createSigningPayload = createSigningPayload;
