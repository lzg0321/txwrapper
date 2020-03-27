"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@polkadot/types");
const known_1 = require("@polkadot/types/known");
const constants_1 = require("./constants");
/**
 * Create a specific TypeRegistry for a current chain. The reason we have this
 * is, depending on different runtime versions, we have different types (e.g.:
 * session keys went from 4 to 5 keys). Here we hardcode which runtime
 * version's types we wish to use.
 *
 * @see https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts
 * @param chain - The chain to create the type registry for.
 */
function getRegistry(
// FIXME: Cater for Polkadot
specName = 'kusama', 
// FIXME: Make this hardcoded version user-customizable
specVersion = 1042) {
    const registry = new types_1.TypeRegistry();
    // Register types specific to chain/runtimeVersion
    registry.register(known_1.getSpecTypes(registry, types_1.createType(registry, 'Text'), // Unneeded for now
    types_1.createType(registry, 'RuntimeVersion', {
        specName,
        specVersion
    })));
    return registry;
}
exports.getRegistry = getRegistry;
exports.defaultOptions = {
    ss58Format: constants_1.KUSAMA_SS58_FORMAT,
    typeRegistry: getRegistry()
};
/**
 * Sanitize the options that the user pass in. In particular, the second
 * argument can either be a string (the metadata) or an Options object. Also
 * apply defaults for SS58 prefix and registry to Kusama.
 *
 * @param metadataOrOptions
 * @param ss58Format
 */
function sanitizeOptions(metadataOrOptions, ss58Format = constants_1.KUSAMA_SS58_FORMAT) {
    // Passing a string as second argument (for metadataRpc) is deprecated. We
    // still add the following check for backwards-compatibility.
    if (typeof metadataOrOptions === 'string') {
        return {
            metadata: metadataOrOptions,
            registry: getRegistry(),
            ss58Format
        };
    }
    else {
        return {
            metadata: metadataOrOptions.metadata,
            registry: metadataOrOptions.registry || getRegistry(),
            ss58Format: metadataOrOptions.ss58Format || constants_1.KUSAMA_SS58_FORMAT
        };
    }
}
exports.sanitizeOptions = sanitizeOptions;
