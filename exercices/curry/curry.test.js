const curry = require('./curry')


test('Break word testing - With whitespace', () => {
    const breakWithWhiteSpace = curry.breakWordWith(' ');
    const word = 'OPEN THE GATES'

    expect(breakWithWhiteSpace).toEqual(expect.any(Function))

    expect(breakWithWhiteSpace(word)).toEqual(['OPEN', 'THE', 'GATES']);

    // Testing purity
    expect(word).toBe('OPEN THE GATES');
});

test('Break word testing - With T', () => {
    const breakWithT = curry.breakWordWith(/T|t/);
    const word = 'Lets Take The Hobbits To Isengard';

    
    expect(breakWithT(word)).toEqual(['Le','s ','ake ', 'he Hobbi','s ', 'o Isengard']);

});

test('Filtering words with an \'A\' ', () => {
    const filterWithA = item => item.indexOf('A') > -1;

    const filterFunction = curry.filterWith(filterWithA);

    const arrayOfStrings = ['ABc', 'xxxA', 'mymyA', 'minemine', 'Idk'];
    expect(filterFunction(arrayOfStrings)).toEqual(['ABc','xxxA', 'mymyA']);

    // Testing purity
    expect(arrayOfStrings).toEqual(['ABc', 'xxxA', 'mymyA', 'minemine', 'Idk']);
})

test('Get elements until n', () => {
    const getUntil2 = curry.getElementsUntil(2);

    const smallArray = ['ABc', 2, {x:'hey'}, [1,1,1]];

    const result = getUntil2(smallArray);

    expect(result).toEqual(['ABc',2]);
})

test('Keep Highest', () => {
    const keepHighestFunction = (last, actual) => last > actual ? last : actual;

    const keepHighest = curry.curryWithReduce(keepHighestFunction, -Infinity);

    expect(keepHighest([1,3,5,2,4])).toBe(5)

    expect(keepHighest([6,1,3,3,4])).toBe(6)

    expect(keepHighest([0,1,1,1,1])).toBe(1)

})