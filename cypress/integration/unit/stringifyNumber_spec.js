let utility = require("../../../utility");

context("Stringify Number function", () => {
  it("should convert 5ms into 0005", () => {
    expect(utility.stringifyNumber(5)).to.equal("0005");
  });
});
