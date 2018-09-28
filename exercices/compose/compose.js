const  { compose, replace } = require('rambda')

const toUpperCase = word => word.toUpperCase();

const exclam = word => word + '!';

const angry = compose(exclam, toUpperCase);

module.exports = {
  angry,
  replaceTsWith: replace(/(T|t)/g)
}