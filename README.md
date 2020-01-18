# Subset Sum - Naive Solver

This Repo provides a naive solver for the [Subset Sum Problem](https://en.wikipedia.org/wiki/Subset_sum_problem).

The solution is based on the following steps:

1. generate the power set of the given set
2. for every element in the power set calculate the sum, if any of the elements sums to zero, then that element is a solution to this problem

## Usage

### Option 1: online

Using runkit. Simply click [here](https://runkit.com/embed/hqqivkf4o6qh)!

### Option 2: use npm

You will need [node JS](https://nodejs.org/en/) installed.

1. Install the library:
```sh
npm install naive-subset-sum
```
2. Run the below command:
```sh
npm start
> .ssum 1,2,-7,2,3
{ res: true, subset: [ 3, 2, -7, 2 ] }
```

### Option 3: clone this repo

You will need [node JS](https://nodejs.org/en/) installed.

You can clone this repo and start by simply running:
```sh
node index.js
> .ssum 1,2,-7,2,3
{ res: true, subset: [ 3, 2, -7, 2 ] }
```
