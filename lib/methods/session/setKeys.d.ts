import { Args, BaseTxInfo, UnsignedTransaction } from '../../util';
export interface SessionSetKeysArgs extends Args {
    /**
     * The 5 keys to set.
     */
    keys: string[];
    /**
     * Proof (unused for now).
     */
    proof?: string;
}
/**
 * Sets the session key(s) of the function caller to `key`.
 *
 * @param info - Information required to construct the transaction.
 */
export declare function setKeys(args: SessionSetKeysArgs, info: BaseTxInfo): UnsignedTransaction;
