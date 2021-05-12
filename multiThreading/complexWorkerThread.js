/*
In the following example, Worker is the constructor for a worker.
 It requires an argument which is the path to a file containing the code for the worker to execute. 
 In this case, we send it __filename so that the code that launches the worker and the code for the worker itself are in the same file. 
 The constructor also takes an optional second options argument, but we do not use it here.


 https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6
*/

("use strict");
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const min = 2;
let primes = [];
function generatePrimes(start, range) {
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}
if (isMainThread) {
  const max = 1e7;
  const threadCount = +process.argv[2] || 2;
  const threads = new Set();
  console.log(`Running with ${threadCount} threads...`);
  const range = Math.ceil((max - min) / threadCount);
  let start = min;
  for (let i = 0; i < threadCount - 1; i++) {
    const myStart = start;
    threads.add(
      new Worker(__filename, { workerData: { start: myStart, range } })
    );
    start += range;
  }
  threads.add(
    new Worker(__filename, {
      workerData: { start, range: range + ((max - min + 1) % threadCount) },
    })
  );
  for (let worker of threads) {
    worker.on("error", (err) => {
      throw err;
    });
    worker.on("exit", () => {
      threads.delete(worker);
      console.log(`Thread exiting, ${threads.size} running...`);
      if (threads.size === 0) {
        console.log(primes.join("\n"));
      }
    });
    worker.on("message", (msg) => {
      primes = primes.concat(msg);
    });
  }
} else {
  generatePrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}
