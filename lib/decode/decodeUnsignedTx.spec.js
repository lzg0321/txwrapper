"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const methods = __importStar(require("../methods"));
const util_1 = require("../util");
const decodeUnsignedTx_1 = require("./decodeUnsignedTx");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper function to decode base tx info
 */
function decodeBaseTxInfo(txInfo) {
    [
        'address',
        'blockHash',
        'blockNumber',
        'genesisHash',
        'metadataRpc',
        'nonce',
        'specVersion',
        'tip'
    ].forEach(key => expect(txInfo[key]).toBe(util_1.TEST_BASE_TX_INFO[key]));
    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(util_1.TEST_BASE_TX_INFO.validityPeriod);
}
exports.decodeBaseTxInfo = decodeBaseTxInfo;
/**
 * Test the [[decodeUnsignedTx]] function
 */
function testDecodeUnsignedTx(pallet, name) {
    it(`should decode ${pallet}::${name}`, () => {
        const unsigned = methods[pallet][name](util_1.TEST_METHOD_ARGS[pallet][name], util_1.TEST_BASE_TX_INFO);
        const txInfo = decodeUnsignedTx_1.decodeUnsignedTx(unsigned, util_1.metadataRpc, util_1.KUSAMA_SS58_FORMAT);
        decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe(pallet);
        expect(txInfo.method.name).toBe(name);
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS[pallet][name]);
    });
}
describe('decodeUnsignedTx', () => {
    util_1.getAllMethods().forEach(method => testDecodeUnsignedTx(...method));
});
