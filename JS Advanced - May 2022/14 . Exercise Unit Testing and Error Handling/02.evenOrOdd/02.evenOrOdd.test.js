const { expect } = require("chai");
const { isOddOrEven } = require("./index.js");

describe("Whether passed params are string (even/odd) or not", () => {
    it("Whether passed params are string", () => {
      expect(isOddOrEven(12345)).to.be.undefined;
    });

    it("Whether passed params are odd", () => {
      expect(isOddOrEven('12345')).to.equal('odd');
    });

    it("Whether passed params are even", () => {
      expect(isOddOrEven('1234')).to.equal('even');
    });

    it("Whether passing multiple different strings in a row to ensure the function works correctly", () => {
      expect(isOddOrEven('1234','abcd','12345')).to.equal('even');
    });
});