const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],   // [ AWCFQUAL ]
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],  // [ SEINFELD ]
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});

it("should return false if the word is not present (vertical)", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'COSMO');

  assert.isFalse(result);
});

it("should return true if the word is present (vertical)", function() {
  const result = wordSearch([
    ['V', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['A', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['N', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['D', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['L', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['A', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['Y', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'VANDELAY');

  assert.isTrue(result);
});
