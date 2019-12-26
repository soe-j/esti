const async = require("async");

var queue = async.queue(async item => {
  await exec(item);
}, 10);

var exec = item => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("complete", item);
        resolve(item);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

["A", "B"].forEach(type => {
  new Array(100)
    .fill()
    .map((_, i) => `${type}${i}`)
    .forEach(item => {
      console.log("push", item);
      queue.push(item);
    });
});

console.log("loaded!");
