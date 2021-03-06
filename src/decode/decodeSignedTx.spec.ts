import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import * as methods from '../methods';
import {
  getAllMethods,
  KUSAMA_SS58_FORMAT,
  metadataRpc,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS
} from '../util';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: DecodedSignedTx): void {
  (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach(key =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );
  expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
    TEST_BASE_TX_INFO.validityPeriod
  );
}

/**
 * Test the [[decodeSignedTx]] function
 */
function testDecodeSignedTx(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, async done => {
    const unsigned = (methods as any)[pallet][name](
      (TEST_METHOD_ARGS as any)[pallet][name],
      TEST_BASE_TX_INFO
    );
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc, KUSAMA_SS58_FORMAT);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);

    done();
  });
}

describe('decodeSignedTx', () => {
  getAllMethods().forEach(method => testDecodeSignedTx(...method));
});
