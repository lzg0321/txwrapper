"use strict";
/**
 * @ignore
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const util_crypto_1 = require("@polkadot/util-crypto");
const util_1 = require("../util");
/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
function decodeSigningPayload(signingPayload, metadataOrOptions, _ss58Format) {
    const { metadata, registry, ss58Format } = util_1.sanitizeOptions(metadataOrOptions, _ss58Format);
    registry.setMetadata(new types_1.Metadata(registry, metadata));
    util_crypto_1.setSS58Format(ss58Format);
    const payload = types_1.createType(registry, 'ExtrinsicPayload', signingPayload, {
        version: util_1.EXTRINSIC_VERSION
    });
    const methodCall = types_1.createType(registry, 'Call', payload.method);
    const method = util_1.toTxMethod(registry, methodCall);
    return {
        blockHash: payload.blockHash.toHex(),
        genesisHash: payload.genesisHash.toHex(),
        metadataRpc: metadata,
        method,
        nonce: payload.nonce.toNumber(),
        specVersion: payload.specVersion.toNumber(),
        tip: payload.tip.toNumber(),
        validityPeriod: payload.era.asMortalEra.period.toNumber() * util_1.BLOCKTIME
    };
}
exports.decodeSigningPayload = decodeSigningPayload;
