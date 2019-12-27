# esti
estimate finish time

## usage
~~~shell
$ npm i soe-j/esti
~~~
~~~js
const async = require("async");
const esti = require("esti");
const graph = esti.createGraph();

var queue = async.queue(async task => {
  await execTask(task);

  graph.pop(1); // finish task count
  console.log(graph.estimate())
  // =>
  // { totalDuration: 101098.0980980981,
  //   remainingDuration: 101.09809809809667,
  //   finishTime: 2019-12-26T10:46:11.100Z }

}, 10);

const taskNumList = new Array(10000).fill().map((_, i) => i);
await Promise.all(taskNumList.map(taskNum => {
  var task = await getTask(taskNum);
  queue.push(task);

  graph.push(1); // created task count
}));
~~~
