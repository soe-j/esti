const async = require("async");
const esti = require("./index")
const graph = esti.createGraph();

var queue = async.queue(async item => {
  await exec(item);
}, 10);

var exec = item => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        graph.pop(1);
        console.log("complete", item, graph.estimate());
        resolve(item);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

var items = new Array(1000).fill().map((_, i) => i);
var timer = setInterval(() => {
  items.splice(0, 10).forEach(item => {
    console.log('push', item);
    graph.push(1);
    queue.push(item);
  })

  if (!items.length) clearInterval(timer);
}, 500);
