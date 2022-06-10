const { expect } = require("chai");
const { createCalculator } = require("./index.js");

describe("It should return module(object)", () => {
  it("Whether contain add property", () => {
    expect(createCalculator()).to.have.property("add");
  });

  it("Whether add property is a function", () => {
    expect(typeof createCalculator().add).to.equal("function");
  });

  it("Whether contain subtract property", () => {
    expect(createCalculator()).to.have.property("subtract");
  });

  it("Whether subtract property is a function", () => {
    expect(typeof createCalculator().subtract).to.equal("function");
  });

  it("Whether contain get property", () => {
    expect(createCalculator()).to.have.property("get");
  });

  it("Whether get property is a function", () => {
    expect(typeof createCalculator().get).to.equal("function");
  });

  it("Whether function createCalculator returns object", () => {
    expect(typeof createCalculator()).to.equal("object");
  });
});

describe("Add and subtract properties take number or string number param and add or subtract from internal sum", () => {
  it("Whether add parse string as number", () => {
    let obj = createCalculator();
    obj.add('5');
    expect(obj.get()).to.equal(5);
  });

  it("Whether subtract parse string as number", () => {
    let obj = createCalculator();
    obj.subtract('5');
    expect(obj.get()).to.equal(-5);
  });

  it("Whether add parse number as number", () => {
    let obj = createCalculator();
    obj.add(5);
    expect(obj.get()).to.equal(5);
  });

  it("Whether subtract parse number as number", () => {
    let obj = createCalculator();
    obj.subtract(5);
    expect(obj.get()).to.equal(-5);
  });

  it("Whether string can't parse to number", () => {
    let obj = createCalculator();
    obj.add('five');
    expect(obj.get()).to.be.NaN;
  });
});

describe("Get returns value of internal sum", () => {
    it("Whether get return value", () => {
      let obj = createCalculator();
      obj.add('5');
      expect(typeof obj.get()).to.equal('number');
      expect(obj.get()).to.equal(5);
    });
});