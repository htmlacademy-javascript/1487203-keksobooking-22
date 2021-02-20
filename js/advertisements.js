import {getRandomInteger, getRandomNumber, getRandomArrayElement, shuffleArr} from './util.js';
import {TYPES, FEATURES, PHOTOS, DESCRIPTIONS, ADVERTISEMENTS_COUNT, latitudeMin, latitudeMax, longitudeMin, longitudeMax, roundingDegree} from './advertisements-data.js';


const createAdvertisement = function() {
  const avatarNum = getRandomInteger(1, 8);
  const title = 'Добро пожаловать!';
  const x = getRandomNumber(latitudeMin, latitudeMax, roundingDegree);
  const y = getRandomNumber(longitudeMin, longitudeMax, roundingDegree);
  const address = `${x},${y}`;
  const price = getRandomInteger(1, 10, 0);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomInteger(1, 10, 0);
  const guests = getRandomInteger(1, 10, 0);
  const checkIn = `${getRandomInteger(12, 14)}:00`;
  const checkOut = `${getRandomInteger(12, 14)}:00`;
  const shuffledFeatures = shuffleArr(FEATURES);
  const features = shuffledFeatures.splice(0, getRandomInteger(1, FEATURES.length));
  const description = getRandomArrayElement(DESCRIPTIONS);
  const shuffledPhotos = shuffleArr(PHOTOS);
  const photos = shuffledPhotos.splice(0, getRandomInteger(1, PHOTOS.length));

  const author = {
    avatar: `img/avatars/user0${avatarNum}.png`,
  }

  const  offer = {
    title: title,
    address: address,
    price: price,
    type: type,
    rooms: rooms,
    guests: guests,
    checkin: checkIn,
    checkout: checkOut,
    features: features,
    description: description,
    photos: photos,
  }

  const  location = {
    x: x,
    y: y,
};
  const advertisement = [author, offer, location];
  return advertisement;
}

const freshAdvertisements = new Array(ADVERTISEMENTS_COUNT).fill(null).map(() => createAdvertisement());

export {freshAdvertisements, createAdvertisement};