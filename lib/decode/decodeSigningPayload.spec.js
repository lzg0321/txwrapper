"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const createSigningPayload_1 = require("../createSigningPayload");
const methods = __importStar(require("../methods"));
const util_1 = require("../util");
const decodeSigningPayload_1 = require("./decodeSigningPayload");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper function to decode base tx info
 */
function decodeBaseTxInfo(txInfo) {
    [
        'blockHash',
        'genesisHash',
        'metadataRpc',
        'nonce',
        'specVersion',
        'tip'
    ].forEach(key => expect(txInfo[key]).toBe(util_1.TEST_BASE_TX_INFO[key]));
}
exports.decodeBaseTxInfo = decodeBaseTxInfo;
/**
 * Test the [[decodeSigningPayload]] function
 */
function testDecodeSigningPayload(pallet, name) {
    it(`should decode ${pallet}::${name}`, () => {
        const signingPayload = createSigningPayload_1.createSigningPayload(methods[pallet][name](util_1.TEST_METHOD_ARGS[pallet][name], util_1.TEST_BASE_TX_INFO));
        const txInfo = decodeSigningPayload_1.decodeSigningPayload(signingPayload, util_1.metadataRpc, util_1.KUSAMA_SS58_FORMAT);
        decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe(pallet);
        expect(txInfo.method.name).toBe(name);
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS[pallet][name]);
    });
}
describe('decodeSigningPayload', () => {
    util_1.getAllMethods().forEach(method => testDecodeSigningPayload(...method));
});
