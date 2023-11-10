import {default as map} from "../src/map.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';

const users = [
  {name: "Alice", age: 30},
  {name: "Bob", age: 25},
  {name: "Charlie", age: 35}
]

function square(n) {
  return n*n;
}

function addEd(str) {
  return str + "ed";
}

function getName(user) {
  return user.name;
}

describe("Map", () => {
  describe("Testing with null, Nan, undefined", () => {
    it("Should return array with null", () => {
      expect(map([null], square)).to.deep.equal([null])
    });
    it("Should return array with undefined", () => {
      expect(map([undefined], square)).to.deep.equal([undefined])
    });
    it("Should return array with NaN", () => {
      expect(map([NaN], square)).to.deep.equal([NaN])
    });
  });
  describe("Testing with numbers", () => {
    it("Should return values squared", () => {
      expect(map([4,8], square)).to.deep.equal([16, 64])
    });
    it("Should return empty array", () => {
      expect(map([], square)).to.deep.equal([])
    });
  });
  describe("Testing with strings", () => {
    it("Should return values with suffixes", () => {
      expect(map(["jump", "play"], addEd)).to.deep.equal(["jumped","played"])
    });
    it("Should add suffix to empty string value", () => {
      expect(map(["", "walk"], addEd)).to.deep.equal(["ed","walked"])
    });
    it("Should return empty array", () => {
      expect(map([], addEd)).to.deep.equal([])
    });
  });
  describe("Testing with an array of objects", () => {
    it("Should return names in array", () => {
      expect(map(users, getName)).to.deep.equal(["Alice","Bob","Charlie"])
    });
    it("Should add suffix to empty string value", () => {
      expect(map(["", "walk"], addEd)).to.deep.equal(["ed","walked"])
    });
    it("Should return empty array", () => {
      expect(map([], addEd)).to.deep.equal([])
    });
  });
});