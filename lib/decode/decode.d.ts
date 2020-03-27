import { Options, UnsignedTransaction } from '../util';
import { DecodedSignedTx } from './decodeSignedTx';
import { DecodedSigningPayload } from './decodeSigningPayload';
import { DecodedUnsignedTx } from './decodeUnsignedTx';
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(unsignedTx: UnsignedTransaction, options: Options): DecodedUnsignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decode(unsignedTx: UnsignedTransaction, metadataRpc: string, ss58Format?: number): DecodedUnsignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(signedTx: string, options: Options): DecodedSignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decode(signedTx: string, metadataRpc: string, ss58Format?: number): DecodedSignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(signingPayload: string, options: Options): DecodedSigningPayload;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decode(signingPayload: string, metadataRpc: string, ss58Format?: number): DecodedSigningPayload;
