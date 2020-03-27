import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface VestingVestOtherArgs extends Args {
    /**
     * The account whose vested funds should be unlocked. Must have funds still
     * locked under this module.
     */
    target: string;
}
/**
 * Unlock any vested funds of a `target` account.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function vestOther(args: VestingVestOtherArgs, info: BaseTxInfo): UnsignedTransaction;
