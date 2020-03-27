"use strict";
/**
 * @ignore
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const util_1 = require("@polkadot/util");
const util_crypto_1 = require("@polkadot/util-crypto");
const util_2 = require("../util");
function decodeSignedTx(signedTx, metadataOrOptions, _ss58Format) {
    const { metadata, registry, ss58Format } = util_2.sanitizeOptions(metadataOrOptions, _ss58Format);
    registry.setMetadata(new types_1.Metadata(registry, metadata));
    util_crypto_1.setSS58Format(ss58Format);
    const tx = types_1.createType(registry, 'Extrinsic', util_1.hexToU8a(signedTx), {
        isSigned: true
    });
    const methodCall = types_1.createType(registry, 'Call', tx.method);
    const method = util_2.toTxMethod(registry, methodCall);
    return {
        address: tx.signer.toString(),
        metadataRpc: metadata,
        method,
        nonce: tx.nonce.toNumber(),
        tip: tx.tip.toNumber(),
        validityPeriod: tx.era.asMortalEra.period.toNumber() * util_2.BLOCKTIME
    };
}
exports.decodeSignedTx = decodeSignedTx;
