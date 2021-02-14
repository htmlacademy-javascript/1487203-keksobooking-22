import {getRandomInteger, getRandomNumber, getRandomArrayElement} from './util.js';
import {TYPES, TIME, FEATURES, PHOTOS, DESCRIPTIONS, ADVERTISEMENTS_COUNT} from './advertisements-data.js';

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

export {freshAdvertisements};