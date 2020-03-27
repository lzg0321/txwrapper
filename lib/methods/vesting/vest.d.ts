import { BaseTxInfo, UnsignedTransaction } from '../../util';
/**
 * Unlock any vested funds of the sender account.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function vest(args: {}, info: BaseTxInfo): UnsignedTransaction;
