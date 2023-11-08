import {default as capitalize} from "../src/capitalize.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';


describe("Capitalize", () => {

  describe("Testing with different cases", () => {
    it("All lowercase letters", () => {
      expect(capitalize("abcd")).to.equal("Abcd");
    });
    it("All uppercase letters", () => {
      expect(capitalize("ABCD")).to.equal("Abcd");
    });
    it("First letter is lowercase", () => {
      expect(capitalize("aBCD")).to.equal("Abcd");
    });
    it("Mixed letters", () => {
      expect(capitalize("aBcD")).to.equal("Abcd");
    });
  });
 
  describe("Testing with empty string", () => {
    it("Empty", () => {
      expect(capitalize("")).to.equal("");
    })
  });
  
  describe("Testing with one character string", () => {
    it("One uppercase character", () => {
      expect(capitalize("A")).to.equal("A");
    })
    it("One lowercase character", () => {
      expect(capitalize("a")).to.equal("A");
    })
    it("One special character", () => {
      expect(capitalize(" ")).to.equal(" ");
    })
    it("One number character", () => {
      expect(capitalize("3")).to.equal("3");
    })
    it("Testing with line break", () => {
      expect(capitalize("\n")).to.equal("\n");
    })
  });
  
  describe("Testing with strings that include numbers or special characters", () => {
    it("String that starts with special character, second character lowercase", () => {
      expect(capitalize("@abcd")).to.equal("@abcd")
    })
    it("String that starts with special character, second charcater uppercase", () => {
      expect(capitalize("@Abcd")).to.equal("@abcd")
    })
    it("String that includes a special character", () => {
      expect(capitalize("ab@cd")).to.equal("Ab@cd")
    })
    it("String that starts with number, second charcater lowercase", () => {
      expect(capitalize("1abcd")).to.equal("1abcd")
    })
    it("String that starts with number, second charcater uppercase", () => {
      expect(capitalize("1Abcd")).to.equal("1abcd")
    })
    it("String that includes a number", () => {
      expect(capitalize("ab1cd")).to.equal("Ab1cd")
    })
    it("String that starts with line break", () => {
      expect(capitalize("\nabc")).to.equal("\nabc");
    })
  });
});



/*PLANNING THE TEST CASES FOR THIS TEST:

input: "string" -> Converted to String -> Converted to Form Xxxx...
From any forms:

Possible test cases:
input = XXXX ALL CAPS
input= Xxxx   Correct form 
input = xxxX  Wrong form

-	all uppercase
-	all lowercase
-	mixed case string
-	empty string
-	one character string
-	string that starts with number
-	string that starts with special character
-	sentence with multiple words all lowercase


If input is/has a number(or specialcase character)(Number cannot be set to lower):
input = 1111 
input = 1abcd
input = abcd1
input = !abcd
input = abcd!


Equivalence classes:




*/