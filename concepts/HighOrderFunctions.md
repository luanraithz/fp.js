# High order functions

## This kind of function is a function that takes or returns a function, as the example below

```javascript

  const callFunctionWithArray = (actionFunction) => actionFunction(['A',2]);

  const gettingAFunction = (value) => () => value;


```