// type Node = {
//   key: number
//   children: Node[]
// } 

// const Tree: Node = { 
//   key: 1,
//   children: [
//     { key: 2, children: [
//       {key: 4, children: [] },
//       {key: 5, children: [] },
//     ] },
//     { key: 3, children: [] }
//   ]
// }

// function bfsChildrenByRcs(node: Node) {
//   const nodes: number[] = []
//   let i = 0
//   if (node) {
//     nodes.push(node)
//     bfsChildrenByRcs(node.left)
//   }
// }

// console.log(bfsChildren(Tree))

// type Leaf = {
//   data: number
//   left: Tree
//   right: Tree
// }

// function bfsLRByRcs(tree: Leaf) {
//   const queue: Leaf[] = []
//   const output: Leaf[] = []
//   const visitLoop = (node: Node) => {
//     if (node) {
//       output.push(node.data)
//       if (node.left) {
//         queue.unshift(node.left)
//       }
//       if (node.right) {
//         queue.unshift(node.right)
//       }
//       visitLoop(queue.pop())
//     }
//   }
//   visitLoop(tree)
//   return output
// }

// function bfsLRNonRcs(tree: Leaf) {
//   const queue: Leaf[] = []
//   const output: Leaf[] = []
//   queue.push(tree)
//   while (queue.length > 0) {
//     const pop = queue.pop()
//     if (pop) {
//       output.push(pop.data)
//       if (pop.left) {
//         queue.unshift(pop.left)
//       }
//       if (pop.right) {
//         queue.unshift(pop.right)
//       }
//     }
//   }
//   return output
// }

// console.log('Recursion: ' bfsByRcs(tree))
// console.log('None-Recursion: ', bfsNonRcs(tree))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
