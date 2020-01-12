# Subset Sum - Naive Solver

This Repo provides a naive solver for the [Subset Sum Problem](https://en.wikipedia.org/wiki/Subset_sum_problem).

The solution is based on the following steps:

1. generate the power set of the given set
2. for every element in the power set calculate the sum, if any of the elements sums to zero, then that element is a solution to this problem

## Usage

You will need [node JS](https://nodejs.org/en/) installed.

### Option 1: clone this repo

You can clone this repo adn start by simply running:
```sh
node .
> .ssum 1,2,-7,2,3
{ res: true, subset: [ 3, 2, -7, 2 ] }
```

### Option 2: use npm

1. Install the library:
```sh
npm install naive-subset-sum
```
2. Create a file named index.js containing the below line:
```javascript
const ss = require('naive-subset-sum');
```
3. Simply run:
```sh
node .
```
