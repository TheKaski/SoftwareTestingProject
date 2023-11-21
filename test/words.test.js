import {default as words} from "../src/words.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';


describe("Words", () => {
  describe("Testing with an empty string", () => {
    it("Should return an empty array with an empty string", () => {
      expect(words("")).to.deep.equal([]);
    });
  });

  describe("Testing with undefined null and Nan values", () => {
    it("Should return an empty array when value is undefined", () => {
      expect(words(undefined)).to.deep.equal([]);
    });
    it("Should return an empty array when value is null", () => {
      expect(words(null)).to.deep.equal([]);
    });
    it("Should return an empty array when value is NaN", () => {
      expect(words(NaN)).to.deep.equal([]);
    });
  });

  describe("Testing with different strings", () => {
    it("Should return an array with one element", () => {
      expect(words("hello")).to.deep.equal(["hello"]);
    });
    it("Should return an array with multiple elements", () => {
    expect(words("hello world jee")).to.deep.equal(["hello", "world", "jee"]);
    });
  });

  describe("Testing with strings that include special characters, no pattern", () => {
    it("Should return an empty array with special characters as value", () => {
      expect(words("@#$%")).to.deep.equal([]);
    });
    it("Should return without the special characters", () => {
      expect(words("Hello!")).to.deep.equal(["Hello"]);
    });
    it("Should return without the special characters", () => {
      expect(words("Hello! I'm tester")).to.deep.equal(["Hello", "I", "m", "tester"]);
    });
  });

  describe("Testing with strings that include special characters, with pattern", () => {
    it("Should return an empty array with special characters as value", () => {
      expect(words("@#$%", /[^, ]+/g)).to.deep.equal(["@#$%"]);
    });
    it("Should return without the special characters", () => {
      expect(words("Hello!", /[^, ]+/g)).to.deep.equal(["Hello!"]);
    });
    it("Should return without the special characters", () => {
      expect(words("Hello! I'm tester", /[^, ]+/g)).to.deep.equal(["Hello!", "I'm", "tester"]);
    });
  });

  describe("Testing with pattern", () => {
    it("Should return an array of matched words when string.match(pattern) is truthy", function () {
      const inputString = "apple, orange, banana";
      const pattern = /[^,]+/g;

      const result = words(inputString, pattern);

      expect(result).to.be.an("array").that.deep.equals(["apple", " orange", " banana"]);
    });

    it("Should return an empty array when string.match(pattern) is falsy", function () {
      const inputString = "apple, orange, banana";
      const pattern = /nonexistentpattern/;

      const result = words(inputString, pattern);

      // Assert that the result is an empty array
      expect(result).to.be.an("array").that.is.empty;
    });
  });
});
