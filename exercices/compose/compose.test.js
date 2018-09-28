const compose = require('./compose.js');
const rambda = require('rambda');

test('Testing compose with angry', () => {
  expect(compose.angry('hi there')).toBe('HI THERE!')
})

test('Testing compose with new composes', () => {
  const text = "the new hi there";

  const replaceTsWithXAndAgry = rambda.compose(compose.angry, compose.replaceTsWith('X'));

  expect(replaceTsWithXAndAgry(text)).toBe('XHE NEW HI XHERE!');
})