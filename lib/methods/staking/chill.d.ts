import { BaseTxInfo, UnsignedTransaction } from '../../util';
/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function chill(args: {}, info: BaseTxInfo): UnsignedTransaction;
