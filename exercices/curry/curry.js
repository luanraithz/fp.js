
const rambda = require('rambda');

const breakWordWith = rambda.curry((breakWith, word) => word.split(breakWith));

const filterWith = rambda.curry((filter,list) => list.filter(filter));

const getElementsUntil = rambda.curry((index, list) => list.slice(0,index));

const curryWithReduce = rambda.curry((reduceAction, initialValue, list) => list.reduce(reduceAction, initialValue))

module.exports = {
    breakWordWith,
    filterWith,
    getElementsUntil,
    curryWithReduce
}