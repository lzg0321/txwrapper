"use strict";
/**
 * @ignore
 */ /** */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorated_1 = __importDefault(require("@polkadot/metadata/Decorated"));
const types_1 = require("@polkadot/types");
const util_1 = require("@polkadot/util");
const constants_1 = require("./constants");
const options_1 = require("./options");
/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
    /**
     * Don't add any tip by default
     */
    tip: 0,
    /**
     * Construct a mortal extrinsic of ~5 minutes
     */
    validityPeriod: 5 * 60
};
/**
 * Helper function to construct an offline method. This function is used in all
 * method in the `methods/` folder.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
function createMethod(info, options) {
    const { metadata: metadataRpc, registry } = options_1.sanitizeOptions(Object.assign({ metadata: info.metadataRpc, registry: info.registry }, options));
    const metadata = new Decorated_1.default(registry, metadataRpc);
    const methodFunction = metadata.tx[info.method.pallet][info.method.name];
    const method = methodFunction(...methodFunction.meta.args.map(arg => {
        if (info.method.args[util_1.stringCamelCase(arg.name.toString())] === undefined) {
            throw new Error(`Method ${info.method.pallet}::${info.method.name} expects argument ${arg.toString()}, but got undefined`);
        }
        return info.method.args[util_1.stringCamelCase(arg.name.toString())];
    })).toHex();
    return {
        address: info.address,
        blockHash: info.blockHash,
        blockNumber: types_1.createType(registry, 'BlockNumber', info.blockNumber).toHex(),
        era: types_1.createType(registry, 'ExtrinsicEra', {
            current: info.blockNumber,
            period: constants_1.ONE_SECOND * (info.validityPeriod || DEFAULTS.validityPeriod)
        }).toHex(),
        genesisHash: info.genesisHash,
        metadataRpc: info.metadataRpc,
        method,
        nonce: types_1.createType(registry, 'Compact<Index>', info.nonce).toHex(),
        specVersion: types_1.createType(registry, 'u32', info.specVersion).toHex(),
        tip: types_1.createType(registry, 'Compact<Balance>', info.tip || DEFAULTS.tip).toHex(),
        version: constants_1.EXTRINSIC_VERSION
    };
}
exports.createMethod = createMethod;
/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
function toTxMethod(registry, method) {
    // Mapping of argName->argType
    const argsDef = JSON.parse(method.Type.args);
    // Mapping of argName->argValue
    const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
        const codec = types_1.createTypeUnsafe(registry, argsDef[key], [
            method.args[index]
        ]);
        accumulator[util_1.stringCamelCase(key)] = codec.toJSON();
        return accumulator;
    }, {});
    return {
        args,
        name: method.methodName,
        pallet: method.sectionName
    };
}
exports.toTxMethod = toTxMethod;
