import {default as isEmpty} from "../src/isEmpty.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';


describe("isEmpty", () => {
  describe("Testing with undefined null and Nan values", () => {
    it("Should return true when value is undefined", () => {
      expect(isEmpty(undefined)).to.be.true;
    });
    it("Should return true when value is null", () => {
      expect(isEmpty(null)).to.be.true;
    });
    it("Should return true when value is NaN", () => {
      expect(isEmpty(NaN)).to.be.true;
    });
  });

  describe("Testing with boolean values", () => {
    it("Should return true when value is true", () => {
      expect(isEmpty(true)).to.be.true;
    });
    it("Should return false when value is false", () => {
      expect(isEmpty(false)).to.be.true;
    });
  });

  describe("Testing with numbers", () => {
    it("Should return true when value is an int", () => {
      expect(isEmpty(123)).to.be.true;
    });
    it("Should return true when value is a float", () => {
      expect(isEmpty(1.2345)).to.be.true;
    });
    it("Should return false when value is an array of ints", () => {
      expect(isEmpty([1,2,3])).to.be.false;
    });
  });

  describe("Testing with strings", () => {
    it("Should return true with an empty string", () => {
      expect(isEmpty("")).to.be.true;
    });
    it("Should return false with a word", () => {
      expect(isEmpty("hello")).to.be.false;
    });
    it("Should return false with an array of strings", () => {
      expect(isEmpty(["a","b","c"])).to.be.false;
    });
  });

  describe("Testing with empty instances of various types", () => {
    it("Should return true with an empty object", () => {
      const emptyObject = {};
      expect(isEmpty(emptyObject)).to.be.true;
    });
    it("Should return true with an empty array", () => {
      const emptyArray = [];
      expect(isEmpty(emptyArray)).to.be.true;
    });
    it("Should return true with an empty buffer", () => {
      const emptyBuffer = Buffer.alloc(0);
      expect(isEmpty(emptyBuffer)).to.be.true;
    });
    it("Should return true with an empty jQuery-like Collection", () => {
      const emptyJQueryCollection = [];
      expect(isEmpty(emptyJQueryCollection)).to.be.true;
    });
    it("Should return true with an empty set", () => {
      const emptySet = new Set();
      expect(isEmpty(emptySet)).to.be.true;
    });
    it("Should return true with an empty map", () => {
      const emptyMap = new Map();
      expect(isEmpty(emptyMap)).to.be.true;
    });
    it("Should return true with an undefined buffer", () => {
      const emptyBuffer = Buffer.allocUnsafe(10);
      expect(isEmpty(emptyBuffer)).to.be.true;
    });
    it("Should return true for an empty TypedArray", () => {
      const emptyTypedArray = new Int32Array(0);
      expect(isEmpty(emptyTypedArray)).to.be.true;
    });
    it("Should return true with an empty prototype", () => {
      expect(isEmpty(Object.prototype)).to.be.true;
    }); 
    it("Should return true for an empty arguments object", () => {
      const getArgumentsObject = function () {
        return arguments;
      };    
        expect(isEmpty(getArgumentsObject())).to.be.true;
    });
  });

  describe("Testing with non-empty instances of various types", () => {
    it("Should return false with an non-empty object", () => {
      const object = {key: "value"};
      expect(isEmpty(object)).to.be.false;
    });
    it("Should return false with an non-empty array", () => {
      const array = [1];
      expect(isEmpty(array)).to.be.false;
    });
    it("Should return false with an non-empty buffer", () => {
      const buffer = Buffer.from("a");
      expect(isEmpty(buffer)).to.be.false;
    });
    it("Should return false with an non-empty jQuery-like Collection", () => {
      const jQueryCollection = ["element1"];
      expect(isEmpty(jQueryCollection)).to.be.false;
    });
    it("Should return false with an non-empty set", () => {
      const set = new Set(["element"]);
      expect(isEmpty(set)).to.be.false;
    });
    it("Should return false with an non-empty map", () => {
      const map = new Map([["key", "value"]]);
      expect(isEmpty(map)).to.be.false;
    });
    it("Should return false for a non-empty arguments object", () => {
      const getArgumentsObject = function () {
        return arguments;
      };    
        expect(isEmpty(getArgumentsObject(1, 2, 3))).to.be.false;
    });
    it('should return false for a non-empty TypedArray', () => {
      const nonEmptyTypedArray = new Int32Array([1, 2, 3]);
      const result = isEmpty(nonEmptyTypedArray);
        expect(result).to.be.false;
    });
  });
});