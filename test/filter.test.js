import {default as filter} from "../src/filter.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';

const simple_array = [0, -1, 3, 6, -2];
const users = [
     { 'user': 'emil', 'active': true },
     { 'user': 'melina','active': true},
     { 'user': 'teemu teekkari',   'active': false}
  ];
const empty_result =[[]]
describe("", () => {
  
  describe("Test with uniterable arrays", () => {
    it("Should return empty when array is null", () => {
      expect(filter(null, () => true)).to.deep.equal(empty_result);
    });
    it("Should return empty when array is undefined", () => {
      expect(filter(undefined, () => true)).to.deep.equal(empty_result);
    });
    it("Should return empty when array is empty", () => {
      expect(filter([], () => true)).to.deep.equal(empty_result);
    });
  });

  describe("Test with false predicates ", () => {
    it("Should return empty when predicate is always false", () => {
      expect(filter(users, ()=>false)).to.deep.equal(empty_result)
    });
    it("Should return empty when predicate cannot be resolved to anything", () => {
      expect(filter(users, ({hobbies})=>hobbies)).to.deep.equal(empty_result)
    });
    
  });

  describe("Test that correct values are filtered out", () => {
    it("Should return active users only", () => {
      expect(filter(users, ({active}) => active )).to.deep.equal([
      { 'user': 'emil', 'active': true },
      { 'user': 'melina','active': true}
      ]);
    });

    it("Should return users with given name only", () => {
      expect(filter(users, ({user}) => user==='teemu teekkari' )).to.deep.equal([
      { 'user': 'teemu teekkari', 'active': false }
      ]);
    });

    it("Should return inactive users only", () => {
      expect(filter(users, ({active}) => !active )).to.deep.equal([
      { 'user': 'teemu teekkari','active': false}
      ]);
    });
    it("Should return all the users correctly when predicate is true", () => {
      expect(filter(users, () => true )).to.deep.equal(users);
    });

    it("Should return positive values correctly from array", () => {
      expect(filter(simple_array, (number) => number >= 0 )).to.deep.equal([0, 3, 6]);
    });


  });
});

/*
filter
Takes array and function as param and filters the array based on function provided
returns new filtered array

Tests:
Number of different predicate functions is numerous but the prinnciple shoulld stay the same
regarding what is the predicate function. The ovjects resolving to true are kept
- Test that all values can be returned iterating the whole list and resolving to true

- Test with empty, undefined and Null arrays

- Test that values resolving to false are filtered

*/


