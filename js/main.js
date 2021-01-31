//Функция,выдающая целочисленные значения в заданном интервале
let getRandomNumber = function (a, b) {
  let c = Math.ceil(a);
  let d = Math.floor(b)+1;
  let n = Math.random()*(d-c)+c;
  return Math.floor(n);
  
  if (a=b) {
  	n = a;
  }
  if (a>b) {
  	n = Math.random()*(c-d)+d;
  }
}

//Функция,выдающая значения в заданном интервале с известным кол-вом знаков после запятой
let getRandomNumber = function (a, b, k) {
  let m = Math.random()*(b-a)+a;
  let n = Math.round(Math.pow(10, k)*m)/Math.pow(10, k);
  return (n);
  
  if (a=b) {
  	n = a;
  }
  if (a>b) {
  	m = Math.random()*(c-d)+d;
  }
}