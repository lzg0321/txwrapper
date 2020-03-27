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
    const methodCall = types_1.createType(registry, 'Call', unsigned.method);
    const method = util_1.toTxMethod(registry, methodCall);
    return {
        address: unsigned.address,
        blockHash: unsigned.blockHash,
        blockNumber: types_1.createType(registry, 'BlockNumber', unsigned.blockNumber).toNumber(),
        genesisHash: unsigned.genesisHash,
        metadataRpc: metadata,
        method,
        nonce: types_1.createType(registry, 'Compact<Index>', unsigned.nonce).toNumber(),
        specVersion: types_1.createType(registry, 'u32', unsigned.specVersion).toNumber(),
        tip: types_1.createType(registry, 'Compact<Balance>', unsigned.tip).toNumber(),
        validityPeriod: types_1.createType(registry, 'MortalEra', unsigned.era).period.toNumber() *
            util_1.BLOCKTIME
    };
}
exports.decodeUnsignedTx = decodeUnsignedTx;
