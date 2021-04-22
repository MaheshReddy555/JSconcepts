/**
 *
 * The command pattern is probably my favorite design pattern, because of all the fun things you can do with it.
 * The idea of the command pattern is to create an abstraction between the operations an object can do, its commands,
 * and the actual commands themselves. This makes it really easy to combine together or chain different
 * commands without having to change the code. The program can dynamically chain and combine these actions.
 * The best part is since each command is its own object you can easily implement and undo function for each command
 * and make a set of undo-able actions.
 */

//before

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
}

//after

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }

  undo(currentValue) {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}
