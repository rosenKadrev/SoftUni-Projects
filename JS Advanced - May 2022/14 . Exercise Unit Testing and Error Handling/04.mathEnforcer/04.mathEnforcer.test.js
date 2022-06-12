const { expect } = require("chai");
const { mathEnforcer } = require("./index.js");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("Whether passed param is not a number", () => {
      expect(typeof mathEnforcer.addFive("1234")).to.equal("undefined");
    });
    it("Whether passed param is a number", () => {
      expect(typeof mathEnforcer.addFive(1234)).to.equal("number");
    });
    it("Whether returned param is number", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
    });
    it("Whether returned param is number whith negative pass", () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4);
    });
    it("Whether returned param is number whith floating-point pass", () => {
      expect(mathEnforcer.addFive(0.01)).to.equal(0.01 + 5);
    });
  });
  describe("subtractTen", () => {
    it("Whether passed param is not a number", () => {
      expect(typeof mathEnforcer.subtractTen("1234")).to.equal("undefined");
    });
    it("Whether passed param is a number", () => {
      expect(typeof mathEnforcer.subtractTen(1234)).to.equal("number");
    });
    it("Whether returned param is number", () => {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
    });
    it("Whether returned param is number whith negative pass", () => {
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
    });
    it("Whether returned param is number whith floating-point pass", () => {
      expect(mathEnforcer.subtractTen(10.01)).equal(10.01 - 10);
    });
  });
  describe("sum", () => {
    it("Whether one of passed params is not a number", () => {
      expect(typeof mathEnforcer.sum("1", 2)).to.equal("undefined");
    });
    it("Whether two of passed params is not a number", () => {
      expect(typeof mathEnforcer.sum(1, "2")).to.equal("undefined");
    });
    it("Whether one and two of passed params is not a number", () => {
      expect(typeof mathEnforcer.sum("1", "2")).to.equal("undefined");
    });
    it("Whether return sum of two nums", () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
    });
    it("Whether return sum of negative two nums", () => {
      expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
    });
    it("Whether return sum of floating-point two nums", () => {
      expect(mathEnforcer.sum(1.01, 1.01)).equal(2.02);
    });
  });
});
