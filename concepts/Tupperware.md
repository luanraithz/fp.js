# Tupperware
## The mignty Container
> Control flor, error handling, asynchronous actions, state and effects.

### Container: 

```javascript
  let Container = function(value) {
    this.__value = value;
  }

  Container.of = function(value) { 
    return new Container(x); 
  };

```

## My First Functor

### Using the container to run functions in it's value.
```javascript
  // (a -> b) -> Container a -> Container b
  Container.prototype.map = function(f) {
    return Container.of(f(this.__value));
  }

  Container.of(2).map(two => two + 2);
  //=> Container(4)
```

## Functor been shown as Optional
```javascript
  let Optional = function(value) {
    this.__value = value;
  }

  Optional.of = value => new Optional(value);

  Optional.prototype.exists = function() {
    return !(this.__value === null || this.__value === undefined);
  }

  Optional.prototype.map = function(mapFunction) {
    return Optional.of(this.exists() ? mapFunction(this.__value): null);
  };

```