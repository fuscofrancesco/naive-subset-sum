const subsetSum = require('./NaiveSubsetSum').subsetSum;

const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });

replServer.defineCommand('ssum', {
  help: 'try typing: .ssum <list>, where <list> is a comma separates list of integers, ex. 1,-3,2,14',
  action(l) {
    this.clearBufferedCommand();
    console.log(subsetSum(l.split(',').map(el => parseInt(el))));
    this.displayPrompt();
  }
});
