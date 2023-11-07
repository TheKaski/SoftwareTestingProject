import {default as at} from "../src/at.js";
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import "mocha";

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('Testing At from Software-testing-assignment', () => {
  it("at.js ", () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4]);
 });
});



