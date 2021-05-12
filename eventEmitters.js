// https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2

import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();

// listen to the event
eventEmitter.on("myEvent", () => {
  console.log("Data Received");
});

// publish an event
eventEmitter.emit("myEvent");
