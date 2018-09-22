# Chapter 3: Pure Happines with Pure Functions

> "A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect."

### Example with Javascript's splice and slice.

### Slice is a pure function, splice isn't.

```javascript

  const sliceArray = [1, 2, 3, 4, 5];

  // pure
  sliceArray.slice(0, 3);
  //=> [1, 2, 3]

  sliceArray.slice(0, 3);
  //=> [1, 2, 3]


  let spliceArray = [1, 2, 3, 4, 5];

  // impure
  spliceArray.splice(0, 3);
  //=> [1, 2, 3]

  spliceArray.splice(0, 3);
  //=> [4, 5]

```

### Pure functions must always return the same value for the same input.
> representing it with sets;

## Valid results

###![Valid Pure Function Image](../resources/valid-pure-function.png)

## Invalid results

###![Invalid Pure Function Image](../resources/invalid-pure-function.png)

### One of the many advantages of use pure functions is the cacheability.
