import {default as defaultTo} from "../src/defaultTo.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';


describe("DefaultTo", () => {
  describe("Testing with undefined null and Nan values", () => {
    it("Should return the default value when value is undefined", () => {
      expect(defaultTo(undefined, "default")).to.equal("default");
    });
    
    it("Should return the default value when value is null", () => {
      expect(defaultTo(null, "default")).to.equal("default");
    });
    
    it("Should return the default value when value is undefined", () => {
      expect(defaultTo(NaN, "default")).to.equal("default");
    });
  });

  describe("Testing with defined values", () => {
    it("Should return the value when string is defined", () => {
      expect(defaultTo("TestiArvo", "default")).to.equal("TestiArvo");
    });
    
    it("Should return the value when number is defined", () => {
      expect(defaultTo(8, "default")).to.equal(8);
    });
    
    it("Should return the default value when empty list is given", () => {
      const empty_list = [];
      expect(defaultTo(empty_list, "default")).to.equal(empty_list);
    });
  });
});

/*
defaultTo:
Takes any value and any defaultValue as param
Returns defaultValue if value = null/undefined/NaN
otherwise returns value

Tests for defaultTo:
- Test that value is returned when its not undefined
- Test that defaultValue is returned when value is undefined/null/NaN
*/