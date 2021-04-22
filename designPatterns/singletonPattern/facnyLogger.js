/**
 * The singleton pattern is one of the most controversial yet easiest to implement design patterns.
 * Many people say you should never use the singleton design pattern,
 * but there are still plenty of cases where the singleton pattern is the perfect solution.
 */

//before

export default class FancyLogger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

//after

class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;
