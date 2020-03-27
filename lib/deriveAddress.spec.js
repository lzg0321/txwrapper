"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deriveAddress_1 = require("./deriveAddress");
describe('deriveAddress', () => {
    it('should work', () => {
        const address = deriveAddress_1.deriveAddress('0x96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d');
        expect(address).toBe('Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s');
    });
});
