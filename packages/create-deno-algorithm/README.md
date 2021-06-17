# Create Deno Algorithm (CDA)

With the help of CDA, you can quickly init algorithm challenge codegen and practice in console right now! Support LeetCode, freeCodeCamp and more.

## For Developing

* Support generate challenge in development

```
$ create-deno-algorithm dev --platform="leetCode"

> Welcome to Create Deno Algorithm!
>
> What's the LeetCode challenge number? 1
> What's the LeetCode challenge name? Two Sum
> What's the LeetCode challenge difficulty? Easy
>
> Generating README.md...
>   [loading...] It may takes a few seconds due to CDA are crawling LeetCode...
> Generating basic challenge code file...
>   [loading...]
>
> Success. Generated those files within folder 1-e-two-sum:
>   |- 1-e-two-sum
>     |- README.md
>     |- main.ts
>     |- main.test.ts
>     |- start-coding.ts
>     |- cda.config.ts
>
> Have fun in LeetCode #1!
```

## For Studying

* built upon Deno, use its build-in tools such as `test`, `lint` and more.
* using little command, start random challenge right now

```
$ create-deno-algorithm new challenge --platform="leetCode" --type="random"
# create-deno-algorithm new challenge --platform="leetCode" --number="1"
# create-deno-algorithm new challenge
#   what's the platform?
#   what's the number?

> (Welcome)
> (Generating...)
> (Generated: )
> (Have Fun in LeetCode#random)

$ cd $RANDOM

$ (---- coding 1st solution in editor)
$ (---- coded 1st solution)

$ create-deno-algorithm test

> ...
> test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (1ms)

$ (---- want to try another way)
$ create-deno-algorithm new solution --name=brute-force

$ (---- want to add another test case)
$ create-deno-algorithm new test-case
#  what's the input?
#  what's the output?

$ (---- want to just test the 1st test case)
$ create-deno-algorithm test --number="1"
# create-deno-algorithm test --number="1,3,5"
# create-deno-algorithm test --skip="1"
# create-deno-algorithm test --all (default)
```
