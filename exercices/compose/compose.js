const  { reduce,compose, add,replace, last, prop, head } = require('rambda')

const toUpperCase = word => word.toUpperCase();

const exclam = word => word + '!';

const angry = compose(exclam, toUpperCase);

const get = propName => obj => prop(propName, obj);

const getLast = array => last(array);

const getFirst = array => head(array);

const avarage = xs => reduce(add, 0, xs) / xs.length;

module.exports = {
  angry,
  replaceTsWith: replace(/(T|t)/g),
  get,
  getLast,
  getFirst,
  avarage
}