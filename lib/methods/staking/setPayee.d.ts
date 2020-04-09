import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface StakingSetPayeeArgs extends Args {
    /**
     * The rewards destination. Can be "Stash", "Staked", or "Controller".
     */
    payee: string;
}
/**
 * (Re-)set the controller of a stash. Effects will be felt at the beginning of
 * the next era.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function setPayee(args: StakingSetPayeeArgs, info: BaseTxInfo): UnsignedTransaction;
