# Deno Algorithm - 《我用 Deno 刷算法》

> Current Status: Learning & Coding...
> 当前状态：学习 & 编码

> 我的 Deno 生态圈: https://github.com/hylerrix?tab=repositories&q=deno

在 Deno 中使用 TypeScript 学习算法！LeetCode、freeCodeCamp 等更多内容同步中。

## TOC and its progress

- [ ] 平台: LeetCode - 3/1500
- [ ] 平台: FreeCodeCamp - 0%
- [ ] 基础: 数据结构 - 1%
- [ ] 基础: 设计模式  - 0%
- [ ] ...以及更多！

每个目录包含一些文件，如下所示：

* `README(*-zh-CN).md`: 介绍本章的目标以及如何挑战它。
* **`/solutions/*.ts`**: 本章 TypeScript 版本中的解决方案。 它将尽可能包含严格类型。
* `/solutions/*.js`: 本章JavaScript版本的解决方案。 它重点关注无法通过严格类型检查的黑客技巧。
* **`.test.ts`**: `.ts` 答案的测试文件。
* `.test.js`: `.js` 答案的测试文件。

## 开发

想要使用当前仓库，你需要如下技术：

* 运行时 [Deno](deno.land): Mac 中推荐使用 Hombrew 安装

```bash
$ deno test challenges/leetcode
$ deno lint challenges/leetcode
```

```typescript
const tStart: number = performance.now()
const tEnd: number = performance.now()
console.log('Execution Time: ', tEnd - tStart + 'ms')
```

## 测试

-> Github Action

```bash
$ deno test --coverage=./cov challenges/leetcode
$ deno coverage --lcov ./cov > cov.lcov
$ genhtml cov.lcov
```

## 开源协议

MIT 协议
