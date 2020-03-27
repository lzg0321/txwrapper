import { BaseTxInfo, UnsignedTransaction } from '../../util';
/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function withdrawUnbonded(args: {}, info: BaseTxInfo): UnsignedTransaction;
