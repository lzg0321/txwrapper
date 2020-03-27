/**
 * @ignore
 */ /** */
import { Options, TxInfo } from '../util';
export declare type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;
/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeSigningPayload(signingPayload: string, options: Options): DecodedSigningPayload;
/**
 * Parse the transaction information from a signing payload.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param signingPayload - The signing payload, in hex.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decodeSigningPayload(signingPayload: string, metadataRpc: string, ss58Format?: number): DecodedSigningPayload;
