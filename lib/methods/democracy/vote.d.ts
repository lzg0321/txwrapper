import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
import { Vote } from './types';
export interface DemocracyVoteArgs extends Args {
    refIndex: number;
    /**
     * Vote
     */
    vote: Vote;
}
/**
 * Vote in a referendum.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function vote(args: DemocracyVoteArgs, info: BaseTxInfo): UnsignedTransaction;
