import {getRandomInteger} from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photosArrayLength = getRandomInteger(1, 5);
const getPhotosArray = function() {
  const PHOTOS = [];
  for(let i = 1; i <= photosArrayLength; i++) {
    const photoLink = `http://o0.github.io/assets/images/tokyo/hotel${i}.jpg`;
    PHOTOS.push(photoLink);
  }
  return PHOTOS;
};

const DESCRIPTIONS = [
  'Светло,уютно и идеально для отдыха и командировок!',
  'Проведите незабываемые выходные с комфортом!',
  'Комфортное жильё по доступной цене!',
];

const latitudeMin = 35.65;
const latitudeMax = 35.70;
const longitudeMin = 139.7;
const longitudeMax = 139.8;
const roundingDegree =  2;

const ADVERTISEMENTS_COUNT = 10;

export {TYPES, FEATURES, getPhotosArray,photosArrayLength, DESCRIPTIONS, ADVERTISEMENTS_COUNT, latitudeMin, latitudeMax, longitudeMin, longitudeMax, roundingDegree} ;