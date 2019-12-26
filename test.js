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

var items = new Array(10000).fill().map((_, i) => i);
var timer = setInterval(() => {
  items.splice(0, 10).forEach(item => {
    console.log('push', item);
    queue.push(item);
  })

  if (!items.length) clearInterval(timer);
}, 500);
