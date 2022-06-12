const { expect } = require("chai");
const { lookupChar } = require("./index.js");

describe("Whether passed params are corect", () => {
  it("Whether first passed param is undefined", () => {
    expect(lookupChar(1234, 3)).to.be.undefined;
  });
  it("Whether second passed param is undefined", () => {
    expect(lookupChar('1234', '3')).to.be.undefined;
  });
  it("Whether passed idnex is incorrect", () => {
    expect(lookupChar('1234', -1)).to.equal("Incorrect index");
  });
  it("Whether passed idnex is incorrect", () => {
    expect(lookupChar('1234', 5)).to.equal("Incorrect index");
  });
  it("Whether return char at the specified index", () => {
    expect(lookupChar('12434', 3)).to.equal('3');
  });
  it("Whether first passed param is undefined", () => {
    expect(lookupChar('1234', 3.3)).to.be.undefined;
  });
});

