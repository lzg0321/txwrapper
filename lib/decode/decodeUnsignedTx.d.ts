/**
 * @ignore
 */ /** */
import { Options, TxInfo, UnsignedTransaction } from '../util';
export declare type DecodedUnsignedTx = TxInfo;
/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeUnsignedTx(unsigned: UnsignedTransaction, options: Options): DecodedUnsignedTx;
/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export declare function decodeUnsignedTx(unsigned: UnsignedTransaction, metadataRpc: string, ss58Format: number): DecodedUnsignedTx;
