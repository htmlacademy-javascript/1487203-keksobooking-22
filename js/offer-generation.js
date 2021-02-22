import {makeElement} from './util.js';
import {photosArrayLength} from './advertisements-data.js';

//Функция,создающая одно объявление
const createOffer = function (offerArr) {
  const advertisement = offerArr.offer;
  let listItem = makeElement('article', 'popup');

  const title = makeElement('h3', 'popup__title', advertisement.title);
  listItem.appendChild(title);

  const address = makeElement('p', 'popup__text--address', advertisement.address);
  listItem.appendChild(address);

  const price = makeElement('p', 'popup__text--price', advertisement.price+'₽/ночь');
  listItem.appendChild(price);

  const  type = makeElement('h4', 'popup__type', advertisement.type);
  listItem.appendChild(type);

  const capacity = makeElement('p', 'popup__text--capacity');
  if(advertisement.rooms>=5) {
    var capacityText = document.createTextNode(advertisement.rooms + ' комнат для ' + advertisement.guests + ' гостей');
  } else {
    if (advertisement.rooms === 1) {
      capacityText = document.createTextNode(advertisement.rooms + ' комната для ' + advertisement.guests + ' гостей');
    } else {
      capacityText = document.createTextNode(advertisement.rooms + ' комнаты для ' + advertisement.guests + ' гостей');
    }
  }
  if (advertisement.guests === 1) {
    capacityText = document.createTextNode(advertisement.rooms + ' комнаты для ' + advertisement.guests + ' гостя');
    if (advertisement.rooms === 1) {
      capacityText = document.createTextNode(advertisement.rooms + ' комнаты для ' + advertisement.guests + ' гостя');
    } else {
      capacityText = document.createTextNode(advertisement.rooms + ' комнат для ' + advertisement.guests + ' гостя');
    }
  }
  capacity.appendChild(capacityText);
  listItem.appendChild(capacity);

  const time = makeElement('p', 'popup__text--time', 'Заезд после ' + advertisement.checkin + ', выезд до ' + advertisement.checkout);
  listItem.appendChild(time);

  const  features = makeElement('ul', 'popup__features');
    
  for (let i = 0; i < (advertisement.features).length; i++) {
    const featuresItem = makeElement('li', 'popup__feature--item', advertisement.features[i]);
    features.appendChild(featuresItem);
  }
  listItem.appendChild(features);

  const description = makeElement('p', 'popup__description', advertisement.description);
  listItem.appendChild(description);

  const photos = makeElement('div', 'popup__photos');
  for (let i = 0; i < photosArrayLength; i++) {
    const photo = makeElement('img', 'popup__photo');
    photo.src = advertisement.photos[i];
    photos.appendChild(photo);
  }
    
  listItem.appendChild(photos);

  const author = offerArr.author;
  const avatar = makeElement('img', 'popup__avatar');
  avatar.src = author.avatar;
  listItem.appendChild(avatar);

  return (listItem);
};

//Функция,создающая объявления из сгенерированного обьекта
const createOffers = function(advertisementsArray) {
  let cards = document.getElementById('card');
  for (let i = 0; i < advertisementsArray.length; i++) {
    const popupOffer = createOffer(advertisementsArray[i]);
    cards.appendChild(popupOffer);
  }
  return (cards);
};


export {createOffer, createOffers};