import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface StakingSetControllerArgs extends Args {
    /**
     * The SS-58 encoded controller address.
     */
    controller: string;
}
/**
 * (Re-)set the controller of a stash. Effects will be felt at the beginning of
 * the next era.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function setController(args: StakingSetControllerArgs, info: BaseTxInfo): UnsignedTransaction;
