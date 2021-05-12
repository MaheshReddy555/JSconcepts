/**SET IMMEDIATE
 * another alternative for threads is 'setImmediate(heavyTaskFunctionName)'
 for example chopping array and calling recursively setImmediate
imeediatley it will be added to the event loop
*/

/** BACKGROUND PROCESSESS
 * another one is 'backgorund processess' by forking the process which will increase cost, memory
 * by forking data will be exchanged via messages,
 * this is heavy stuff when implementing
 *
 * If fork porcecss got killed for any reason, the data never comes back
 */

/**
 * WORKER FARM
 * solution is pool of processess just like a pool of database connections
 * which we can keep reusing
 *
 * In case if the woker is killed before returning the data,
 * worker farm will make sure, the miss data was computed by another worker
 * and the result is back to the original process
 *
 */

let workerFarm = require("worker-farm");
let workers = workerFarm(require.resolve("./child"));

var ret = 0;

// var workerFarm = require("worker-farm"),
//   workers = workerFarm(require.resolve("./child")),
//   ret = 0;
debugger;
for (let i = 0; i < 10; i++) {
  workers("#" + i + " FOO", function (err, outp) {
    console.log(outp);
    if (++ret == 10) {
      workerFarm.end(workers);
    }
  });
}
console.log(workers);
console.log("finishsed");

//but it has one issue each worker farm is full fledged process
//so it uses way more memory

//so final solution is using worker threads
// worker threds available after node version 10.5.0
//worker threads can share memory

// //main file initiating
// const { workerData, parentPort } = require("worker_threads");
// //may be child file
// const { heavComputation } = require("heavy-compute");
// let result = heavComputation(workerData);
// parentPort.postMessage({ result });

// //may be this is child file
// const { Worker } = require("worker_threads");

// function runService(workerData) {
//   return new Promise((resolve, reject) => {
//     const worker = new Worker("./service.js", { workerData });
//     worker.on("message", resolve);
//     worker.on("error", reject);
//     worker.on("exit", (code) => {
//       if (code !== 0) {
//         reject(new Error(`Worker stopped with exit code ${code}`));
//       }
//     });
//   });
// }
