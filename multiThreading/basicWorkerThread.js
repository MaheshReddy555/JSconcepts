// in the main thread it will executes all the way end and
// executes all the worker threads parallely

// const {
//   Worker,
//   isMainThread,
//   parentPort,
//   workerData,
// } = require("worker_threads");

// // if (isMainThread) {
// //   // This code is executed in the main thread and not in the worker.
// //   // Create the worker.
// //   const worker = new Worker(__filename);
// //   // Listen for messages from the worker and print them.
// //   worker.on("message", (msg) => {
// //     console.log(msg);
// //   });
// // } else {
// //   // This code is executed in the worker and not in the main thread.

// //   // Send a message to the main thread.
// //   parentPort.postMessage("Hello world!");
// // }

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
if (isMainThread) {
  // This code is executed in the main thread and not in the worker.

  // Create the worker.
  for (let i = 0; i < 10; i++) {
    // Create the worker.
    const worker = new Worker(__filename, {
      workerData: { id: "coming1 " + i },
    });
    // Listen for messages from the worker and print them.
    worker.on("message", (msg) => {
      console.log(msg);
    });
  }
  console.log("finished end line");
} else {
  // This code is executed in the worker and not in the main thread.

  // Send a message to the main thread.
  parentPort.postMessage("Hello world!" + workerData.id);
}
