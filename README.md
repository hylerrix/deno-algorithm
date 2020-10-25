# Deno Algorithm

> Current Status: Learnning & Coding...

To Learn Algorithm using TypeScript / JavaScript and Run with Deno!

## TOC and its progress

- [ ] \[Basic\] \[0%\] Data Structure
- [ ] \[Basic\] \[0%\] Design Pattern
- [ ] \[Platform\] \[0%\] LeetCode
- [ ] \[Platform\] \[0%\] FreeCodeCamp
- [ ] ...and more!

And each TOC contains some files as below:

* `README.md`: to introduce this chapter\'s goal and how to challenge it.
* **`.ts`**: The solution in the TypeScript version for this chapter. It will contain strict types as much as possible.
* **`.test.ts`**: test file for `.ts` source.
* `.js`: The solution in JavaScript version for this chapter. It focuses on the hacking trick which can not pass in the strict type check.
* `.test.js`: test file for `.js` source.

<!--

## Terminal Command

When the content is ready, maby a command can explore more from local terminal.

- [ ] Support a command something like `deal` to explore this repo.
  - [ ] `deal list`: list different TOC and we can select futher to the problem.
  - [ ] `deal search ${name}`: search and select related problem solution we want to solve.

## VS Code Extensions

Your can search the repo on VS code in [here](...)

-->

## i18n

If you feel helpful, welcome to make translations to this repo. Now, support: English, (Chinese)...

## Develop

To join this repo, you need to use these techniques:

* Fro runtime: [Deno](deno.land).
* For test: [Deno std Testing](https://deno.land/std/testing).

```base
$ deno test tests/example.test.ts
```

```typescript
const tStart: number = performance.now()
const tEnd: number = performance.now()
console.log('Execution Time: ', tEnd - tStart + 'ms')
```

## License

MIT License