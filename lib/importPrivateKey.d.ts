import { KeyringPair as KeyringPairBase } from '@polkadot/keyring/types';
/**
 * A keyring pair
 */
export declare type KeyringPair = KeyringPairBase;
/**
 * Import a private key and create a KeyringPair.
 * @param privateKey - The private key of the key pair.
 * @param ss58Format - The SS58 encoding of the address.
 */
export declare function importPrivateKey(privateKey: string | Uint8Array, ss58Format?: number): KeyringPair;
