//before
import FancyLogger from "./fancyLogger.js";

const logger = new FancyLogger();

export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second file");
  logger.printLogCount();
}

//after

import logger from "./fancyLogger.js";

export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}
