import { BaseTxInfo, UnsignedTransaction } from '../../util';
import { BalancesTransferArgs } from './transfer';
export declare type BalancesTransferKeepAliveArgs = BalancesTransferArgs;
/**
 * Construct a balance transfer transaction offline.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function transferKeepAlive(args: BalancesTransferKeepAliveArgs, info: BaseTxInfo): UnsignedTransaction;
