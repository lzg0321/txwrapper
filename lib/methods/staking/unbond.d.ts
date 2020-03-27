import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface StakingUnbondArgs extends Args {
    /**
     * The number of tokens to unbond.
     */
    value: number;
}
/**
 * Construct a transaction to unbond funds from a Stash account. This must be called
 * by the _Controller_ account.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function unbond(args: StakingUnbondArgs, info: BaseTxInfo): UnsignedTransaction;
