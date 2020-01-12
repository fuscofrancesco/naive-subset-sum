/*
 * Solves the subset sum problem for a given array.
 *
 * @param { array } set - the array for which to solve the subset sum problem
 * @returns { Object } - describing the solution
 *
 */
const subsetSum = (set) => {
  const ps = powerSet(set);
  let res = false;
  let ss = [];
  ps.filter(e => e.length > 0).forEach(subset => {
    let sum = 0;
    subset.map(e => sum = sum + e);
    if (sum === 0) {
      res = true;
      ss = subset;
    };
  });
  return {
    res: res,
    subset: ss
  };
};

/*
 * Calculates the power set of a given array.
 *
 * @param { array } set - the array for which to calculate the power set
 * @returns { array } - the power set of the input array
 *
 */
const powerSet = (set) => {
  if (set.length === 0) {
    let res = [];
    res.push(set);
    return res;
  } else {
    const e = set.shift();
    const t = set;
    const pt = powerSet(t);
    const fept = [];
    pt.forEach(element => {
      const el = [...element];
      el.push(e);
      fept.push(el);
    });
    return pt.concat(fept);
  }
};

module.exports = {
  powerSet: powerSet,
  subsetSum: subsetSum
};
