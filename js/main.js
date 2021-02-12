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

const ADVERTISEMENTS_COUNT = 10;

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

const DESCRIPTIONS = [
  'Светло,уютно и идеально для отдыха и командировок!',
  'Проведите незабываемые выходные с комфортом!',
  'Комфортное жильё по доступной цене!',
];

const getRandomArrayElement = (elemets) => {
  return elemets[getRandomInteger(0, elemets.length - 1)];
};



const createAdvertisement =() => {
  let avatarNum = getRandomInteger(1, 8);
  const avatar = 'img/avatars/user0 ${avatarNum} .png';
  author: 'avatar';

  const title = 'Добро пожаловать!';
  const address = 'x ${,} y';
  const price = getRandomNumber(1, 10);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomNumber(1, 10);
  const guests = getRandomNumber(1, 10);
  const checkin = getRandomArrayElement(TIME);
  const checkout = getRandomArrayElement(TIME);
  const features = FEATURES.splice(0, getRandomInteger(1, FEATURES.length));
  const description = getRandomArrayElement(DESCRIPTIONS);

  const shuffledPhotos = shuffle(PHOTOS);
  const photos = shuffledPhotos.splice(0, getRandomInteger(1, PHOTOS.length));
  offer: 'title ${address} ${price} ${type} ${rooms} ${guests} ${checkin} ${checkout} ${features} ${description} photos';

  const x = getRandomNumber(35.65, 35.70, 2);
  const y = getRandomNumber(139.70, 139.80, 2);
  location: 'x ${:} y';
}

const freshAdvertisements = new Array(ADVERTISEMENTS_COUNT).fill(null).map(() => createAdvertisement());

console.log(freshAdvertisements);