/**
 * @ignore
 */ /** */
import { Options, TxInfo } from '../util';
export declare type DecodedSignedTx = Omit<TxInfo, 'blockHash' | 'blockNumber' | 'genesisHash' | 'specVersion' | 'version'>;
/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeSignedTx(signedTx: string, options: Options): DecodedSignedTx;
/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decodeSignedTx(signedTx: string, metadataRpc: string, ss58Format?: number): DecodedSignedTx;
