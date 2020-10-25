// const add = (n, m) => m ? n + m : (o) => n + o
// console.log(add(1)(2, 3))

// function add(){
//   let args = [].slice.apply(arguments)
//   function resultFn() {
//     args = args.concat([].slice.apply(arguments))
//     if(args.length>=3){
//         return args.slice(0,3).reduce(function(acc,next){ return acc+next},0) //will only sum first 3 arguments
//     }
//     return resultFn
//   }
//   return resultFn()
// }
// console.log(add(10)(10)(20))

function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args)
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2))
        }
      }
    }
  }
  
  function add(a, b, c) {
    return a + b + c
  }
  
  let curriedAdd = curry(add)
  
  console.log(curriedAdd(10)(10)(20, 30))
  
  