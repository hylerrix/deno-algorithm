# Deno Algorithm <img align="right" alt="Profile Hits" src="https://komarev.com/ghpvc/?username=hylerrix-deno-algorithm&style=flat-square">

[简体中文版](./README-zh-CN.md)

> Current Status: Learning & Coding...

> Temporary Chinese name: 《我用 Deno 刷算法》

> My deno circle: https://github.com/hylerrix?tab=repositories&q=deno

To Learn Algorithm using TypeScript and Run with Deno! LeetCode, freeCodeCamp and more to challenge!

## TOC and its progress

- [ ] Platform: LeetCode - 3/1500
- [ ] Platform: FreeCodeCamp - 0%
- [ ] Basic: Data Structure - 1%
- [ ] Basic: Design Pattern - 0%
- [ ] ...and more!

And each TOC contains some files as below:

* `README.md`: to introduce this chapter\'s goal and how to challenge it.
* **`/solutions/.ts`**: The solution in the TypeScript version for this chapter. It will contain strict types as much as possible.
* `/solutions/*.js`: The solution in JavaScript version for this chapter. It focuses on the hacking trick which can not pass in the strict type check.
* **`.test.ts`**: test file for `.ts` source.
* `.test.js`: test file for `.js` source.

<!--

## 2. Terminal Command

When the content is ready, maby a command can explore more from local terminal.

- [ ] Support a command something like `deal` to explore this repo.
  - [ ] `deal list`: list different TOC and we can select futher to the problem.
  - [ ] `deal search ${name}`: search and select related problem solution we want to solve.

## 3. VS Code Extensions

Your can search the repo on VS code in [here](...)

## 4. i18n

If you feel helpful, welcome to make translations to this repo. Now, support: English, (Chinese)...
-->

## Develop

To join this repo, you need to use these techniques:

* Fro runtime: [Deno](deno.land).
* For test: [Deno std Testing](https://deno.land/std/testing).

```bash
$ deno test --import-map=import_map.json src/challenges/leetcode
$ deno lint --unstable src/challenges/
```

```typescript
const tStart: number = performance.now()
const tEnd: number = performance.now()
console.log('Execution Time: ', tEnd - tStart + 'ms')
```

## Test

-> Github Action

```bash
$ deno test --coverage=./cov challenges/leetcode
$ deno coverage --lcov ./cov > cov.lcov
$ genhtml cov.lcov
```

## License

MIT License
