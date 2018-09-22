const curry = require('./curry')


test('Break word testing - With whitespace', () => {
    const breakWithWhiteSpace = curry.breakWordWith(' ');
    const word = "OPEN THE GATES"

    expect(breakWithWhiteSpace).toEqual(expect.any(Function))

    expect(breakWithWhiteSpace(word)).toEqual(['OPEN', 'THE', 'GATES']);

    expect(word).toBe('OPEN THE GATES');
})

test('Break word testing - With T', () => {
    const breakWithT = curry.breakWordWith(/T|t/);
    const word = "Lets Take The Hobbits To Isengard";

    
    expect(breakWithT(word)).toEqual(['Le','s ','ake ', 'he Hobbi','s ', 'o Isengard']);

})