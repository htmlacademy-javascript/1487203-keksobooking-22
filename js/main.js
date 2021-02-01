//Функция,выдающая целочисленные значения в заданном интервале
let getRandomInteger = function (min, max) {
  let from = Math.ceil(min);
  let to = Math.floor(max)+1;
  let randomInt = Math.random()*(to-from)+from;
  
  if (min===max) {
    randomInt = min;
  }
  if (min>max) {
    randomInt = Math.random()*(from-to)+to;
  }
  return Math.floor(randomInt);
}

//Функция,выдающая значения в заданном интервале с известным кол-вом знаков после запятой
let getRandomNumber = function (min, max, roundingDegree) {
  let randomNum = Math.random()*(max-min)+min;
  let roundedValue  = Math.round(Math.pow(10, roundingDegree)*randomNum)/Math.pow(10, roundingDegree);
  
  if (min===max) {
    randomNum = min;
  }
  if (min>max) {
    randomNum = Math.random()*(min-max)+max;
  }
  return (roundedValue);
}

getRandomInteger(2, 5);
getRandomNumber(1, 6, 2);