type Leaf = {
  data: number
  left?: Leaf
  right?: Leaf
}

const tree: Leaf = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: {
        data: 8,
      },
      right: {
        data: 9
      }
    },
    right: {
      data: 5,
      left: {
        data: 10,
      },
      right: {
        data: 11
      }
    }
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: {
        data: 12
      }
    },
    right: {
      data: 7
    }
  }
}

function dfsPreorderByRcs(tree: Leaf) {
  const output: number[] = []
  const visitLoop = (node: Leaf) => {
    if (node) {
      output.push(node.data)
      node.left && visitLoop(node.left)
      node.right && visitLoop(node.right)
    }
  }
  visitLoop(tree)
  return output
}

console.log(dfsPreorderByRcs(tree))
// [ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7 ]

// /**
//  * simple stack
//  */
// class Stack {
//   constructor() {
//     this.stackArr = []
//   }
//   push(data) {
//     this.stackArr.unshift(data)
//     return this.stackArr.length
//   }
//   pop() {
//     const popData = this.stackArr.shift()
//     return popData
//   }
//   getItem(index) {
//     return this.stackArr[index]
//   }
//   clear() {
//     this.stackArr = []
//   }
//   get isEmpty() {
//     return this.stackArr.length <= 0
//   }
// }

// /**
//  * Non-recursive preorder traversal.
//  * Since the traversal process is first-in-last-out, the stack structure is used.
//  */
// function dfsPreorderNonRcs(tree) {
//   const stack = new Stack()
//   const output = []
//   stack.push(tree)
//   while (!stack.isEmpty) {
//     const pop = stack.pop()
//     if (pop) {
//       output.push(pop.data)
//       if (pop.right) {
//         stack.push(pop.right)
//       }
//       if (pop.left) {
//         stack.push(pop.left)
//       }
//     }
//   }
//   return output
// }

// console.log(dfsPreorderNonRcs(tree))
// // [ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7 ]