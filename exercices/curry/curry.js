const breakWordWith = breakWith => word => word.split(breakWith);

const filterWith = filter => list => list.filter(filter)

const getElementsUntil = index => list => list.slice(0,index);

const curryWithReduce = (reduceAction, initialValue) => list => list.reduce(reduceAction, initialValue);

module.exports = {
    breakWordWith,
    filterWith,
    getElementsUntil,
    curryWithReduce
}