var UndergroundSystem = function() {
  this.pending = {};
  this.records = {};
  this.map = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.map[id] = stationName;
  if (this.pending[stationName]) {
    this.pending[stationName][id] = t;
  } else {
    this.pending[stationName] = {};
    this.pending[stationName][id] = t;
  }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const start = this.map[id];
  if (this.records[`${start}-${stationName}`]) {
    this.records[`${start}-${stationName}`].push(t - this.pending[start][id]);
  } else {
    this.records[`${start}-${stationName}`] = [];
    this.records[`${start}-${stationName}`].push(t - this.pending[start][id]);
  }
  delete this.pending[start][id];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  // console.log('UndergroundSystem.prototype.getAverageTime -> this.records', this.records);
  const prev = this.records[`${startStation}-${endStation}`];
  let sum = 0;
  for (let i = 0; i < prev.length; i++) {
    const element = prev[i];
    sum += element;
  }
  // console.log('UndergroundSystem.prototype.getAverageTime -> sum / prev', sum / prev.length);
  // console.log('UndergroundSystem.prototype.getAverageTime -> sum', sum);
  // console.log('UndergroundSystem.prototype.getAverageTime -> prev.length', prev.length);
  return sum / prev.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, 'Leyton', 3);
undergroundSystem.checkIn(32, 'Paradise', 8);
undergroundSystem.checkIn(27, 'Leyton', 10);
undergroundSystem.checkOut(45, 'Waterloo', 15);
undergroundSystem.checkOut(27, 'Waterloo', 20);
undergroundSystem.checkOut(32, 'Cambridge', 22);
undergroundSystem.getAverageTime('Paradise', 'Cambridge'); // return 14.0. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 11.0. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.0
undergroundSystem.checkIn(10, 'Leyton', 24);
undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 11.0
undergroundSystem.checkOut(10, 'Waterloo', 38);
undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 12.0
