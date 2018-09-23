# Curry

### Currying is a way to call a function with less parameters than it usually need:

```javascript 

  const filterWith = filter => list => list.filter(filter);

  const filterWithMoreThan2 = filterWith(value => value > 2);

  filterWithMoreThan2([2,1,3,4]);
  // [3,4]

```