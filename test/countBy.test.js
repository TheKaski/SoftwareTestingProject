import {default as countBy} from "../src/countBy.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';

const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'fred', 'active': false }
];

const numbers = [1, 2, 3, 4, 5];

const words = ["apple", "banana", "orange", "pear"];



describe("CountBy", () => {
  describe("Basic test with an array of objects using a key for iteration", () => {
    it("Should return counts of different active values", () => {
      expect(countBy(users, value => value.active)).to.deep.equal({ "true": 2, "false": 1 })
   });
  });

  describe("Test with an array of numbers", () => {
    it("Chcking for odd or even", () => {
      expect(countBy(numbers, value => (value % 2 === 0 ? 'even' : 'odd'))).to.deep.equal({ 'odd': 3, 'even': 2 })
   });
  });

  describe("Testing with an array of strings", () => {
    it("Should return string lengths", () => {
      expect(countBy(words, value => value.length)).to.deep.equal({ '4': 1, '5': 2, '6': 2 })
   });
  });

  describe("Testing with an empty array", () => {
    it("Should return an empty object", () => {
      expect(countBy([], value => value)).to.deep.equal({})
   });
  });
});