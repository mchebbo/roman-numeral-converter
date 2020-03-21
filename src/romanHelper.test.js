import RomanHelper from "./romanHelper";

describe("toRoman function ", () => {
  it("should return an empty string if the given value is greater than 3999", () => {
    const givenValue = 4000;
    const expectedValue = "";
    expect(RomanHelper.toRoman(givenValue)).toEqual(expectedValue);
  });
  it("should return an empty string if the given value is lower than 0", () => {
    const givenValue = -1;
    const expectedValue = "";
    expect(RomanHelper.toRoman(givenValue)).toEqual(expectedValue);
  });
  it("should return an empty string if the given value is not a number", () => {
    const givenValue = "h";
    const expectedValue = "";
    expect(RomanHelper.toRoman(givenValue)).toEqual(expectedValue);
  });
});

describe("fromRoman function", () => {
  it("should return 0 if the given value is not a string", () => {
    const givenValue = 8;
    const expectedValue = 0;
    expect(RomanHelper.fromRoman(givenValue)).toEqual(expectedValue);
  });
  it("should return I if the given value is 1", () => {
    const givenValue = "I";
    const expectedValue = 1;
    expect(RomanHelper.fromRoman(givenValue)).toEqual(expectedValue);
  });
});
