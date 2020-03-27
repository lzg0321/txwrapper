"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyring_1 = require("@polkadot/keyring");
const constants_1 = require("./util/constants");
/**
 * Derive an address from a cryptographic public key offline.
 *
 * @param publicKey - The public key to derive from
 * @param ss58Format - The SS58 format to use
 */
function deriveAddress(publicKey, ss58Format = constants_1.KUSAMA_SS58_FORMAT) {
    return keyring_1.encodeAddress(publicKey, ss58Format);
}
exports.deriveAddress = deriveAddress;
