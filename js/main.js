//Функция,выдающая целочисленные значения в заданном интервале
let getRandomInteger = function (min, max) {
  let from = Math.ceil(min);
  let to = Math.floor(max)+1;
  let randomInt = Math.random()*(to-from)+from;
  return Math.floor(randomInt);
}

let getRandomNumber = function (min, max, roundingDegree) {
  let randomNum = Math.random()*(max-min)+min;
  let roundedValue  = Math.round(Math.pow(10, roundingDegree)*randomNum)/Math.pow(10, roundingDegree);
  return (roundedValue);
}

const positiveNum = getRandomNumber(1, Infinity);

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getRandomArrayElement = (elemets) => {
  return elemets[getRandomInteger(0, elemets.length - 1)];
};

const createAdvertisement =() => {
  let avatar = 'img/avatars/user0' + getRandomInteger(1, 8) + '.png';
  author: 'avatar';

  let title = 'Добро пожаловать!';
  let address = getRandomNumber(35.65000, 35.70000, 5) + "," + getRandomNumber(139.70000, 139.80000, 5);
  let price = positiveNum;
  let type = getRandomArrayElement(TYPES);
  let rooms = positiveNum;
  let guests = positiveNum;
  let checkin = getRandomArrayElement(TIME);
  let checkout = getRandomArrayElement(TIME);
  let features = FEATURES.splice(0, getRandomInteger(1, FEATURES.length));
  let description = 'Светло,уютно и идеально для отдыха и командировок!';
  let photos = PHOTOS.splice(0, getRandomInteger(1, PHOTOS.length));
  offer: title+ '' + address + '' + price + '' + type + '' + rooms + '' + guests + '' + checkin +
   '' + checkout + '' + features + '' + description + '' + photos;

  let x = getRandomNumber(35.65000, 35.70000, 5);
  let y = getRandomNumber(139.70000, 139.80000, 5);
  location: getRandomNumber(35.65000, 35.70000, 5) + ":" + getRandomNumber(139.70000, 139.80000, 5);
}
const ADVERTISEMENTS_COUNT = 10;

const freshAdvertisements = new Array(ADVERTISEMENTS_COUNT).fill(null).map(() => createAdvertisement());

console.log(freshAdvertisements);