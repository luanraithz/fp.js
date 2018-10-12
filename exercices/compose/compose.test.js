const compose = require('./compose.js');
const cars = require('./compose.data.js');
const rambda = require('rambda');

test('Testing compose with angry', () => {
  expect(compose.angry('hi there')).toBe('HI THERE!')
})

test('Testing compose with new composes', () => {
  const text = "the new hi there";

  const replaceTsWithXAndAgry = rambda.compose(compose.angry, compose.replaceTsWith('X'));

  expect(replaceTsWithXAndAgry(text)).toBe('XHE NEW HI XHERE!');
});

test('Last Car stock', () =>{
  const getLastCarStock = rambda.compose(compose.get('in_stock'),compose.getLast);

  const isLastCarinStock = getLastCarStock(cars);

  expect(isLastCarinStock).toBe(false);
});

test('Name of the first car', () => {
  const getFirstCarName = rambda.compose(compose.get('name'),compose.getFirst);

  const firstCarName = getFirstCarName(cars);

  expect(firstCarName).toBe('Ferrari FF');
});

test('Car price avarege', () => {
  const carPrices = rambda.map(compose.get('dollar_value'),cars);
  
  const avarage = compose.avarage(carPrices);

  expect(avarage).toBe(790700);

})

