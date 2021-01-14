# Currying Add

> https://theanubhav.com/2019/02/03/js-currying-in-interview/

Test:

```typescript
add(1, 2, 3, 4, 5) //15
add(1)(2)(3)(4)(5) // 15
add(1)(2, 3)(4) // 6
```

Interesting:

```typescript
function add(n: number){
  const addNext = (x: number) => add(n + x)
  addNext.valueOf = () => n
  return addNext
}
console.log(add(10)(10).valueOf())
```

```typescript
// function add(x: number) {
//   return function fun(y: number) {
//     if (typeof y !== 'undefined') {
//       x = x + y
//       return fun
//     } else {
//       return x
//     }
//   }
// }

// let result = add(1)
// typeof result === 'number'
//   ? console.log(result)
//   : console.log(result(2))
```

> related problem: (5).plus(3).minus(6)