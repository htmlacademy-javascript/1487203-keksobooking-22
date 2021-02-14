//Функция,выдающая случайные целочисленные значения в заданном интервале
let getRandomInteger = function (min, max) {
  let from = Math.ceil(min);
  let to = Math.floor(max)+1;
  let randomInt = Math.random()*(to-from)+from;
  return Math.floor(randomInt);
}

//Функция,выдающая случайные значения с плавающей точкой в заданном интервале
let getRandomNumber = function (min, max, roundingDegree) {
  let randomNum = Math.random()*(max-min)+min;
  let roundedValue  = Math.round(Math.pow(10, roundingDegree)*randomNum)/Math.pow(10, roundingDegree);
  return (roundedValue);
}

//Функция,выдающая случайный элемент массива
const getRandomArrayElement = (elemets) => {
  return elemets[getRandomInteger(0, elemets.length - 1)];
};

export {getRandomInteger, getRandomNumber, getRandomArrayElement};