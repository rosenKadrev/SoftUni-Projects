const { expect } = require("chai");
const { sum } = require("./index.js");

describe("sumOfNumbers", () => {
  it("return whether take array", () => {
    expect([1, 2, 3]).to.be.an("array");
  });

  it("return whether take array with numbers", () => {
    expect(1, 2, 3).to.be.an("number");
  });

  it("return sum of all elements in array", () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
  });
});
