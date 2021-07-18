/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function (startTime, finishTime) {
  let [startH, startM] = startTime.split(':').map((n) => Number(n));
  let [finishH, finishM] = finishTime.split(':').map((n) => Number(n));
  if (startH > finishH || (startH === finishH && startM > finishM)) {
    finishH += 24;
  }
  const getNext = (h, min) => {
    if (min === 0) {
      return [h, 0];
    } else if (min > 0 && min <= 15) {
      return [h, 15];
    } else if (min <= 30) {
      return [h, 30];
    } else if (min <= 45) {
      return [h, 45];
    } else if (min <= 60) {
      return [h + 1, 0];
    }
  };
  const getPrev = (h, min) => {
    if (min === 0) {
      return [h, 0];
    } else if (min > 0 && min < 15) {
      return [h, 0];
    } else if (min < 30) {
      return [h, 15];
    } else if (min < 45) {
      return [h, 30];
    } else if (min < 60) {
      return [h, 45];
    } else {
      return [h, 60];
    }
  };
  [startH, startM] = getNext(startH, startM);
  [finishH, finishM] = getPrev(finishH, finishM);
  if (finishM < startM) {
    finishM += 60;
    finishH -= 1;
  }
  return (finishH - startH) * 4 + (finishM - startM) / 15;
};
