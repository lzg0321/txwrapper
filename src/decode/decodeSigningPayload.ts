/**
 * @ignore
 */ /** */

import { Metadata } from '@polkadot/types';
import { setSS58Format } from '@polkadot/util-crypto';

import {
  BLOCKTIME,
  EXTRINSIC_VERSION,
  Options,
  sanitizeOptions,
  toTxMethod,
  TxInfo
} from '../util';

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
  signingPayload: string,
  options: Options
): DecodedSigningPayload;

/**
 * Parse the transaction information from a signing payload.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param signingPayload - The signing payload, in hex.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeSigningPayload(
  signingPayload: string,
  metadataRpc: string,
  ss58Format?: number
): DecodedSigningPayload;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeSigningPayload(
  signingPayload: string,
  metadataOrOptions: string | Options,
  _ss58Format?: number
): DecodedSigningPayload {
  const { metadata, registry, ss58Format } = sanitizeOptions(
    metadataOrOptions,
    _ss58Format
  );

  registry.setMetadata(new Metadata(registry, metadata));
  setSS58Format(ss58Format);

  const payload = registry.createType('ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION
  });
  const methodCall = registry.createType('Call', payload.method);
  const method = toTxMethod(registry, methodCall);

  return {
    blockHash: payload.blockHash.toHex(),
    genesisHash: payload.genesisHash.toHex(),
    metadataRpc: metadata,
    method,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    validityPeriod: payload.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}
