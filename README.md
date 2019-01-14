# State Machine Kata
====================================

(README inspired by and parts borrowed from a similar kata on CodeWars)

## Problem Description
Create a finite machine that has three states.

Our simple machine accepts the language of A, defined as {0, 1} and should have three states: `blue`, `green`, and `red`. Here is the description if the states:

`blue` is our start state, we begin reading commands from here
`green` is our accept state, we return true if this is our last state

And the transitions:

`blue` moves to `green` when given a 1, and stays at `blue` when given a 0
`green` moves to `red` when given a 0, and stays at `green` when given a 1
`red` moves to `green` when given a 0 or 1

The method `machine.read()` should return whether we end in our accepted state (`green`), or not (true/false).

You will have to design your state objects, and how your machine handles transitions. Also make sure you set up the three states, `blue`, `green`, and `red` for the machine instance.

Finally, the machine accepts an array of strings, rather than just numbers.

Here are some resources on DFAs (the machine this Kata asks you to create):

http://en.wikipedia.org/wiki/Deterministic_finite_machine
http://www.cs.odu.edu/~toida/nerzic/390teched/regular/fa/dfa-definitions.html
http://www.cse.chalmers.se/~coquand/AUTOMATA/o2.pdf

Example
```javascript
const machine = new StateMachine();
// Do anything you need to set up this machine's states.
const isAccepted = machine.read(["1", "0", "0", "1", "0"]);
const state = machine.state;
```

We make these transitions:

```
input: ["1", "0", "0", "1", "0"]

1: blue -> green
0: green -> red
0: red -> green
1: green -> green
0: green -> red
```

We end in `red`, which is not our accept state, so we return `false`

r
## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
npm install
```

## Linting your code

Check your code for style issues:

```bash
npm run lint
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
