"use strict";
/**
 * @ignore
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const util_crypto_1 = require("@polkadot/util-crypto");
const util_1 = require("../util");
function decodeUnsignedTx(unsigned, metadataOrOptions, _ss58Format) {
    const { metadata, registry, ss58Format } = util_1.sanitizeOptions(metadataOrOptions, _ss58Format);
    registry.setMetadata(new types_1.Metadata(registry, metadata));
    util_crypto_1.setSS58Format(ss58Format);
    const methodCall = registry.createType('Call', unsigned.method);
    const method = util_1.toTxMethod(registry, methodCall);
    return {
        address: unsigned.address,
        blockHash: unsigned.blockHash,
        blockNumber: registry
            .createType('BlockNumber', unsigned.blockNumber)
            .toNumber(),
        genesisHash: unsigned.genesisHash,
        metadataRpc: metadata,
        method,
        nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
        specVersion: registry.createType('u32', unsigned.specVersion).toNumber(),
        tip: registry.createType('Compact<Balance>', unsigned.tip).toNumber(),
        validityPeriod: registry.createType('MortalEra', unsigned.era).period.toNumber() *
            util_1.BLOCKTIME
    };
}
exports.decodeUnsignedTx = decodeUnsignedTx;
