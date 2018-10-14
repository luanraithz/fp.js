# Compose

>"Composition feels like function husbandry. You, breeder of functions, select two with traits you'd like to combine and mash them together to spawn a brand new one. Usage is as follows:"

```javascript

  const toUpperCase = function(x) {
    return x.toUpperCase();
  };
  const exclaim = function(x) {
    return x + '!';
  };
  const shout = compose(exclaim, toUpperCase);

  shout("send in the clowns");

```

## Pointfree

### a pointfree function means that the function never mention the data upon which they operate.