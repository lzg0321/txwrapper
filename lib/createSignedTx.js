"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const util_1 = require("./util");
/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer.
 */
function createSignedTx(unsigned, signature, options) {
    const { metadata, registry } = util_1.sanitizeOptions(Object.assign(Object.assign({}, options), { metadata: unsigned.metadataRpc }));
    registry.setMetadata(new types_1.Metadata(registry, metadata));
    const extrinsic = types_1.createType(registry, 'Extrinsic', { method: unsigned.method }, { version: unsigned.version });
    extrinsic.addSignature(unsigned.address, signature, unsigned);
    return extrinsic.toHex();
}
exports.createSignedTx = createSignedTx;
