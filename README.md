# esti
estimate finish time

## usage
~~~js
const async = require("async");
const esti = require("./index");
const graph = esti.createGraph();

var queue = async.queue(async task => {
  await execTask(task);

  graph.pop(1); // finish task count
  console.log(graph.estimate())
  // => {
  //      totalDuration: 100997,
  //      remainingDuration: 0,
  //      finishTime: 2019-12-26T10:46:10.999Z
  //    }
}, 10);

const taskNumList = new Array(10000).fill().map((_, i) => i);
await Promise.all(taskNumList.map(taskNum => {
  var task = await getTask(taskNum);
  queue.push(task);

  graph.push(1); // created task count
}));
~~~
