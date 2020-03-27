"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const createSignedTx_1 = require("../createSignedTx");
const createSigningPayload_1 = require("../createSigningPayload");
const methods = __importStar(require("../methods"));
const util_1 = require("../util");
const decodeSignedTx_1 = require("./decodeSignedTx");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper function to decode base tx info
 */
function decodeBaseTxInfo(txInfo) {
    ['address', 'metadataRpc', 'nonce', 'tip'].forEach(key => expect(txInfo[key]).toBe(util_1.TEST_BASE_TX_INFO[key]));
    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(util_1.TEST_BASE_TX_INFO.validityPeriod);
}
exports.decodeBaseTxInfo = decodeBaseTxInfo;
/**
 * Test the [[decodeSignedTx]] function
 */
function testDecodeSignedTx(pallet, name) {
    it(`should decode ${pallet}::${name}`, (done) => __awaiter(this, void 0, void 0, function* () {
        const unsigned = methods[pallet][name](util_1.TEST_METHOD_ARGS[pallet][name], util_1.TEST_BASE_TX_INFO);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned);
        const signature = yield util_1.signWithAlice(signingPayload);
        const signedTx = createSignedTx_1.createSignedTx(unsigned, signature);
        const txInfo = decodeSignedTx_1.decodeSignedTx(signedTx, util_1.metadataRpc, util_1.KUSAMA_SS58_FORMAT);
        decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe(pallet);
        expect(txInfo.method.name).toBe(name);
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS[pallet][name]);
        done();
    }));
}
describe('decodeSignedTx', () => {
    util_1.getAllMethods().forEach(method => testDecodeSignedTx(...method));
});
