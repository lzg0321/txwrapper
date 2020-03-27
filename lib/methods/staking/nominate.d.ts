import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface StakingNominateArgs extends Args {
    /**
     * The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
     * nominations are allowed.
     *
     * Warning: This provides no checks as to whether these targets are actual validators.
     */
    targets: Array<string>;
}
/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function nominate(args: StakingNominateArgs, info: BaseTxInfo): UnsignedTransaction;
