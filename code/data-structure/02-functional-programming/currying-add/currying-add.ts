function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

let curriedAdd = curry(add);

console.log(curriedAdd(10)(10)(20, 30)(-20))
  