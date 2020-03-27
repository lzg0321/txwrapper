import { TypeRegistry } from '@polkadot/types';
/**
 * Create a specific TypeRegistry for a current chain. The reason we have this
 * is, depending on different runtime versions, we have different types (e.g.:
 * session keys went from 4 to 5 keys). Here we hardcode which runtime
 * version's types we wish to use.
 *
 * @see https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts
 * @param chain - The chain to create the type registry for.
 */
export declare function getRegistry(specName?: 'kusama', specVersion?: number): TypeRegistry;
/**
 * Runtime-specific options for encoding and decoding transactions.
 */
export interface Options {
    /**
     * The metadata of the runtime.
     */
    metadata: string;
    /**
     * The type registry of the runtime. Defaults to Kusama's type registry
     */
    registry?: TypeRegistry;
    /**
     * The SS58 prefix of the chain. Defaults to 2 (Kusama).
     */
    ss58Format?: number;
}
export declare const defaultOptions: {
    ss58Format: number;
    typeRegistry: TypeRegistry;
};
/**
 * Sanitize the options that the user pass in. In particular, the second
 * argument can either be a string (the metadata) or an Options object. Also
 * apply defaults for SS58 prefix and registry to Kusama.
 *
 * @param metadataOrOptions
 * @param ss58Format
 */
export declare function sanitizeOptions(metadataOrOptions: string | Options, ss58Format?: number): Required<Options>;
