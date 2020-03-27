"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const transfer_1 = require("./transfer");
describe('balances::transfer', () => {
    it('should work', () => {
        const unsigned = transfer_1.transfer(util_1.TEST_METHOD_ARGS.balances.transfer, util_1.TEST_BASE_TX_INFO);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
});
