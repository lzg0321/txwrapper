"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const decodeSignedTx_1 = require("./decodeSignedTx");
const decodeSigningPayload_1 = require("./decodeSigningPayload");
const decodeUnsignedTx_1 = require("./decodeUnsignedTx");
function decode(data, metadataOrOptions, _ss58Format) {
    const options = util_1.sanitizeOptions(metadataOrOptions, _ss58Format);
    if (typeof data === 'string') {
        let decodedInfo;
        try {
            decodedInfo = decodeSigningPayload_1.decodeSigningPayload(data, options);
        }
        catch (_a) {
            decodedInfo = decodeSignedTx_1.decodeSignedTx(data, options);
        }
        return decodedInfo;
    }
    return decodeUnsignedTx_1.decodeUnsignedTx(data, options);
}
exports.decode = decode;
