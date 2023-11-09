import {default as at} from "../src/at.js";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
import "mocha";

const object = { "a": [{ "b": { "c": 3 } }, 4, null] }
// THis test is copied from the example in the file at.js
describe("Testing At from Software-testing-assignment", () => {

  describe("Correct values should be found", () => {
    it("Should return the correct value in array", () => {
      expect(at(object, ["a[0].b.c"])).to.deep.equal([3]);
    });
    it("Should return the null value in array ", () => {
      expect(at(object, ["a[2]"])).to.deep.equal([null]);
    });
    it("Should return the value object in array", () => {
      expect(at(object, ["a[0]"])).to.deep.equal([{ "b": { "c": 3 } }]);
    });
    it("Should return the value array in array", () => {
      expect(at(object, ["a"])).to.deep.equal([[{ "b": { "c": 3 } }, 4, null]]);
    });
    it("Should return with empty list when path is empty", () => {
      expect(at(object, [])).to.deep.equal([]);
    });
  });
  describe("Values cannot be found but return should be handled correctly", () => {
    it("Should return undefined when the value is not found", () => {
      expect(at(object, ["a[0].ö"])).to.deep.equal([undefined]);
    });
    it("Should return undefined when the value index is out of bounds", () => {
      expect(at(object, ["a[3]"])).to.deep.equal([undefined]);
    });   
    it("Should respond with undefined in array", () => {
      expect(at(object, undefined)).to.deep.equal([undefined]);
    });
    it("Should respond with undefined in array", () => {
      expect(at(object, null)).to.deep.equal([undefined]);
    });
    it("Should respond with aray of undefined values", () => {
      expect(at(object, [undefined, null])).to.deep.equal([undefined, undefined ]);
    });
  });

  describe("Call with multiple valid paths", () => {
    it("Should respond with  the correct values in array ", () => {
      expect(at(object, ["a[0].b.c", "a[1]", "a"])).to.deep.equal([3, 4, [{ "b": { "c": 3 } }, 4, null]]);
    });
  });

  describe("Calls with unsearchable objects", () => {
    it("Should return with array of undefined values when object is undefined", () => {
      expect(at(undefined, ["a[0].b.c", "a[1]", "a"])).to.deep.equal([undefined, undefined, undefined]);
    });
    it("Should return with array of undefined values when object is null", () => {
      expect(at(null, ["a[0].b.c", "a[1]", "a"])).to.deep.equal([undefined, undefined, undefined]);
    });
    it("Should return with array of undefined values when object is empty", () => {
      expect(at({}, ["a[0].b.c", "a[1]", "a"])).to.deep.equal([undefined, undefined, undefined]);
    });
    it("Should return with empty array when object is undefined and path is empty", () => {
      expect(at(undefined, [])).to.deep.equal([]);
    });
    it("Should return with empty array when object is null and path is empty", () => {
      expect(at(null, [])).to.deep.equal([]);
    });
    it("Should return with empty array when object is empty and path is empty", () => {
      expect(at({}, [])).to.deep.equal([]);
    });
  });
});

/*
AT function
always return Array of values
Is given object as parameter
Is given a string or list of strings string[] to be picked from
AT tests
- Call with only one path string
- Call with multiple paths string[]
- pick first level objects
- pick second level objects
- pick first level values
- pick second level values
- Search with invalid and valid paths
- Search with invalid and valid objects




*/



