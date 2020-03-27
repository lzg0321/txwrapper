import { Options, UnsignedTransaction } from './util';
/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing").
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 */
export declare function createSigningPayload(unsigned: UnsignedTransaction, options?: Partial<Options>): string;
