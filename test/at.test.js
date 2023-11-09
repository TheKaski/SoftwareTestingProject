import {default as at} from "../src/at.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import "mocha";

const object = { 'a': [{ 'b': { 'c': 3 } }, 4, null] }
// THis test is copied from the example in the file at.js
describe('Testing At from Software-testing-assignment', () => {

  describe("Call with one path valid inputs", () => {
    it("Should return the number value in array ", () => {
      expect(at(object, ['a[0].b.c'])).to.deep.equal([3]);
    });
    it("Should return the null value in array ", () => {
      expect(at(object, ['a[2]'])).to.deep.equal([null]);
    });
    it("Should return null when value is not found", () => {
      expect(at(object, ['a[0].ö'])).to.deep.equal([undefined]);
    });
    it("Should return object in array ", () => {
      expect(at(object, ['a[0]'])).to.deep.equal([{ 'b': { 'c': 3 } }]);
    });
    it("Should return array in array ", () => {
      expect(at(object, ['a'])).to.deep.equal([[{ 'b': { 'c': 3 } }, 4, null]]);
    });
  });
  describe("Call with one path invalid inputs", () => {
    it("Should return undefined in array when value is not found ", () => {
      expect(at(object, ['b'])).to.deep.equal([undefined]);
    });
    it("Should return undefined when Index is out of bounds", () => {
      expect(at(object, ['a[3]'])).to.deep.equal([undefined]);
    });
    it("Should return undefined when value is not found", () => {
      expect(at(object, ['a[0].ö'])).to.deep.equal([undefined]);
    });
    it("Should respond with undefined when object is null", () => {
      expect(at(null, [])).to.deep.equal([]);
    });
   
  });

  describe("Call with multiple valid paths", () => {
    it("Should respond with correct values in array ", () => {
      expect(at(object, ['a[0].b.c', 'a[1]', 'a'])).to.deep.equal([3, 4, [{ 'b': { 'c': 3 } }, 4, null]]);
    });
  });

  describe("CallS with invalid objects", () => {
    it("Should respond with undefined when object is undefined", () => {
      expect(at(undefined, ['a[0].b.c', 'a[1]', 'a'])).to.deep.equal([undefined, undefined, undefined]);
    });
    it("Should respond with undefined when object is null", () => {
      expect(at(null, ['a[0].b.c', 'a[1]', 'a'])).to.deep.equal([undefined, undefined, undefined]);
    });

  });



});

/*
AT function
always return Array of values
Is given object as parameter
Is given a string or list of strings string[] to be picked from
AT tests
1. Call with only one path string
2. Call with multiple paths string[]
3. pick first level object
4. pick second level object
5. pick first level value
6. pick second level value





*/



