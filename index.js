class Graph {
  constructor() {
    this.startTime = new Date().getTime();

    this.totalPushCount = 0;
    this.totalPopCount = 0;
  }

  push (count) {
    this.totalPushCount += count;
  };

  pop (count) {
    this.totalPopCount += count;
  }

  estimate () {
    const duration = new Date().getTime() - this.startTime;
    const popSpeed = this.totalPopCount / duration;

    const totalDuration = this.totalPushCount / popSpeed;
    const remainingDuration = totalDuration - duration;
    const finishTime = this.startTime + totalDuration;
    return {
      totalDuration: totalDuration,
      remainingDuration: remainingDuration,
      finishTime: new Date(finishTime)
    };
  }

}

exports.createGraph = () => {
  return new Graph();
}
