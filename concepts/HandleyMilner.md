# Handle Milner

### Anotation for type definition with functions

```javascript
//  capitalize :: String -> String
var capitalize = function(s) {
  return toUpperCase(head(s)) + toLowerCase(tail(s));
}

capitalize("smurf");
//=> "Smurf"

```

### With curry
```javascript 

  //  join :: String -> [String] -> String
  const join = curry((what, xs) =>  xs.join(what));
  
});
```