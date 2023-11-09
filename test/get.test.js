import {default as get} from "../src/get.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';

const object = { "a": [{ "b": { "c": 3 } }, 4, null, undefined] }

describe("Get", () => {
  describe("Correct values should be found with string", () => {
    it("Should return the correct value", () => {
      expect(get(object, "a[0].b.c")).to.equal(3);
    });
    it("Should return the null value ", () => {
      expect(get(object, "a[2]")).to.deep.equal(null);
    });
    it("Should return the value object", () => {
      expect(get(object, "a[0]")).to.deep.equal({ "b": { "c": 3 } });
    });
    it("Should return the array value", () => {
      expect(get(object, "a")).to.deep.equal([{ "b": { "c": 3 } }, 4, null, undefined]);
    });
 });
 describe("Correct values should be found with array", () => {
  it("Should return the correct value", () => {
    expect(get(object, ["a", "0","b", "c"])).to.equal(3);
  });
  it("Should return the null value ", () => {
    expect(get(object, ["a", "2"])).to.deep.equal(null);
  });
  it("Should return the value object", () => {
    expect(get(object, ["a", "0"])).to.deep.equal({ "b": { "c": 3 } });
  });
  it("Should return the value array", () => {
    expect(get(object, ["a"])).to.deep.equal([{ "b": { "c": 3 } }, 4, null, undefined]);
  });
  it("Should return with empty list when path is empty", () => {
    expect(get(object, [])).to.deep.equal(undefined);
  });
});

describe("Testing with undefined string paths", () => {
  describe("Should return undefined", () => {
    it("Should return undefined when the value is not found", () => {
      expect(get(object, "a[0].ö")).to.deep.equal(undefined);
    });
    it("Should return undefined when the value index is out of bounds", () => {
      expect(get(object, "a[10]")).to.deep.equal(undefined);
    });
    it("Should respond with undefined", () => {
      expect(get(object, undefined)).to.deep.equal(undefined);
    });
    it("Should respond with undefined", () => {
      expect(get(object, null)).to.deep.equal(undefined);
    });
  });

  describe("Should return the defaultValue", () => {
    it("Should return undefined when the value is not found", () => {
      expect(get(object, "a[0].ö", "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should return undefined when the value index is out of bounds", () => {
      expect(get(object, "a[10]", "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should respond with undefined", () => {
      expect(get(object, undefined, "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should respond with undefined", () => {
      expect(get(object, null, "defaultValue")).to.deep.equal("defaultValue");
    });
  });
});


describe("Testing with undefined array paths", () => {
  describe("Should return undefined", () => {
    it("Should return undefined when the value is not found", () => {
      expect(get(object, ["a", "0", "ö"])).to.deep.equal(undefined);
    });
    it("Should return undefined when the value index is out of bounds", () => {
      expect(get(object, ["a","10"])).to.deep.equal(undefined);
    });
    it("Should return undefined when the value is not found", () => {
      expect(get(object, ["a", "0", "ö"])).to.deep.equal(undefined);
    });
    it("Should respond with undefined", () => {
      expect(get(object, undefined)).to.deep.equal(undefined);
    });
    it("Should respond with undefined", () => {
      expect(get(object, null)).to.deep.equal(undefined);
    });
  });
  describe("Should return the defaultValue", () => {
    it("Should return undefined when the value is not found", () => {
      expect(get(object, ["a", "0", "ö"], "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should return undefined when the value index is out of bounds", () => {
      expect(get(object, ["a","10"], "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should return undefined when the value is not found", () => {
      expect(get(object, ["a", "0", "ö"], "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should respond with undefined", () => {
      expect(get(object, undefined, "defaultValue")).to.deep.equal("defaultValue");
    });
    it("Should respond with undefined", () => {
      expect(get(object, null, "defaultValue")).to.deep.equal("defaultValue");
    });
  });



});


describe("Testing with undefined objects", () => {
  it("Should return undefined when the value is not found", () => {
    expect(get(undefined, ["a", "0"])).to.deep.equal(undefined);
    expect(get(undefined, "a[0]")).to.deep.equal(undefined);
  });
  it("Should return undefined when the value index is out of bounds", () => {
    expect(get(null, ["a","0"])).to.deep.equal(undefined);
    expect(get(null, "a[0]")).to.deep.equal(undefined);
  });
  it("Should return undefined when the value is not found", () => {
    expect(get(NaN, ["a", "0"])).to.deep.equal(undefined);
    expect(get(NaN, "a[0]")).to.deep.equal(undefined);
  });
});
});
/*
get
Takes an object, array, string and any defaultValue as parameter
Object is searched with path(single) provided in string(similar to at) or with array
If the resolved value(single) is undefined defaultValue is returned instead

Tests for Get:
- Test search with strings similar to at
- Test search similarly with array
- test with undefined/null objects
- test with invalid paths with and without defaultValue parameter

*/