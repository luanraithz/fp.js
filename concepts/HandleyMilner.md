# Handle Milner

## Anotation for type definition with functions

```javascript
//  capitalize :: String -> String
var capitalize = function(s) {
  return toUpperCase(head(s)) + toLowerCase(tail(s));
}

capitalize("smurf");
//=> "Smurf"

```

## With curry

```javascript

  //  join :: String -> [String] -> String
  const join = curry((what, xs) =>  xs.join(what));
  
});
```

### Another examples

```javascript
  //  head :: [a] -> a
  const head = xs => xs[0];

  //  filter :: (a -> Bool) -> [a] -> [a]
  var filter = curry((f, xs) => xs.filter(f));

  //  reduce :: (b -> a -> b) -> b -> [a] -> b
  var reduce = curry((f, x, xs) => xs.reduce(f, x));
```

### Constraints

```javascript
// sort :: Ord a => [a] -> [a]

```

> Above, where are saying that the function sort receives a parameter `a` that implements `Ord`