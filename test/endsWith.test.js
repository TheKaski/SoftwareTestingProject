import {default as endsWith} from "../src/endsWith.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';


describe("EndsWith", () => {
  describe("Test with strings that end with the target", () => {
    it("Should return true when string ends with given target", () => {
      expect(endsWith("abc", "c")).to.be.true;
    });
    it("Should return true when empty string ends with empty target", () => {
      expect(endsWith("", "")).to.be.true;
    });
    it("Should return true when string ends with special character target", () => {
      expect(endsWith("\n", "\n" )).to.be.true;
    });
    it("Should return true when string and given target are empty", () => {
      expect(endsWith("", "")).to.be.true;
    });
  });

  describe("Test with strings that dont't end with the target", () => {
    it("Should return false when string does not end with given target", () => {
      expect(endsWith("abc", "b")).to.be.false;
    });
    it("Should return false when empty string does not end with given target", () => {
      expect(endsWith("", "a")).to.be.false;
    });
     //Special case because every character also contains the "" string
    // I chose here that it is true but it might be controversial depending on usecase
    it("Should return false when given target is empty", () => {
      expect(endsWith("abc", "")).to.be.false;
    });
  });

  describe("Test with strings that have the target in given position", () => {
    it("Should return true when string ends with given target in position", () => {
      expect(endsWith("abc", "c", 3)).to.be.true;
    });
    it("Should return true when string ends with target in position", () => {
      expect(endsWith("abc", "a", 1)).to.be.true;
    });
    it("Should return true when string ends with target and position is greater than length", () => {
      expect(endsWith("abc", "c", 4)).to.be.true;
    });
    it("Should return true when string and given target are empty and position is any", () => {
      expect(endsWith("", "", 0)).to.be.true;
    });
    it("Should return true when string ends with target and position is undefined", () => {
      expect(endsWith("abc", "c", undefined)).to.be.true;
    });
    it("Should return true when string ends with target and position is null", () => {
      expect(endsWith("abc", "c", null)).to.be.true;
    });
    it("Should return true when string ends with target and position is NaN", () => {
      expect(endsWith("abc", "c", NaN)).to.be.true;
    });
  });

  describe("Test with strings that don't have the target in given position", () => {
    it("Should return false when string does not end with given target in position", () => {
      expect(endsWith("abc", "b", 3)).to.be.false;
    });
    it("Should return false when position is less than one", () => {
      expect(endsWith("abc", "a", 0)).to.be.false;
    });
    it("Should return false when position is negative", () => {
      expect(endsWith("abc", "a", -1)).to.be.false;
    });
    it("Should return false when given target is empty", () => {
      expect(endsWith("abc", "", 3)).to.be.false;
    });
    it("Should return false when string does not end with target and position is undefined", () => {
      expect(endsWith("abc", "b", undefined)).to.be.false;
    });
    it("Should return false when string does not end with target and position is null", () => {
      expect(endsWith("abc", "b", null)).to.be.false;
    });
    it("Should return false when string does not end with target and position is NaN", () => {
      expect(endsWith("abc", "b", NaN)).to.be.false;
    });
  });
});

/*
endsWith

Takes string target, string search, number position
Return true if string(target) endswith target, otherwise returns false

Tests for endsWith:
- Test with strings that end with the target -> should return true
- Test with strings that don't end with the target -> should return false
- Test with strings that have the target on given position -> should return true
- Test with strings that don't have the target on given position -> should return false
*/