class CustomPromise {
  state = "PENDING";
  value = undefined;
  thenCallbacks = [];
  errorCallbacks = [];

  constructor(action) {
    action(this.resolver.bind(this), this.reject.bind(this));
  }

  resolver(value) {
    console.log("3");
    this.state = "RESOLVED";
    this.value = value;
    this.thenCallbacks.forEach((callback) => {
      callback(this.value);
    });
  }

  reject(value) {
    console.log("4");
    this.state = "REJECTED";
    this.value = value;
    this.errorCallbacks.forEach((callback) => {
      callback(this.value);
    });
  }

  then(callback) {
    console.log("1");
    this.thenCallbacks.push(callback);
    return this;
  }

  catch(callback) {
    console.log("2");
    this.errorCallbacks.push(callback);
    return this;
  }
}

let promise = new CustomPromise((resolver, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6);
    if (rand > 2) {
      resolver("Success");
    } else {
      reject("Error");
    }
  }, 1000);
});

promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
