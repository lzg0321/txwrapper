import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
import { Vote } from './types';
export interface DemocracyProxyVoteArgs extends Args {
    refIndex: number;
    /**
     * Vote
     */
    vote: Vote;
}
/**
 * Vote in a referendum on behalf of a stash.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function proxyVote(args: DemocracyProxyVoteArgs, info: BaseTxInfo): UnsignedTransaction;
