import {makeElement} from './util.js';
import {freshAdvertisements, createAdvertisement} from './advertisements.js';

//Функция,создающая одно объявление
const createOffer = function (offer) {
    let listItem = makeElement('article', 'popup');

    const title = makeElement('h3', 'popup__title', (offer.title);
    listItem.appendChild(title);

    const address = makeElement('p', 'popup__text--address', offer.address);
    listItem.appendChild(address);

    const price = makeElement('p', 'popup__text--price', offer.price+'₽/ночь');
    listItem.appendChild(price);

    const  type = makeElement('h4', 'popup__type', offer.type);
    listItem.appendChild(type);

    const capacity = makeElement('p', 'popup__text--capacity', offer.rooms + 'комнаты для' + offer.guests + 'гостей');
    listItem.appendChild(capacity);

    const time = makeElement('p', 'popup__text--time', 'Заезд после' + offer.checkin + ', выезд до' + offer.checkout);
    listItem.appendChild(time);

    const  features = makeElement('ul', 'popup__features', offer.features);
    
    for (var i = 0; i < offer.features.length; i++) {
        const featuresItem = makeElement('li', 'popup__feature--item', offer.features[i]);
        features.appendChild(featuresItem);
    }
    listItem.appendChild(features);

    const description = makeElement('p', 'popup__description', offer.description);
    listItem.appendChild(description);

    const photos = makeElement('div', 'popup__photos');
    const photo = makeElement('img', 'popup__photo');
    photo.src = offer.photos[0];
    // for (var i = 0; i < offer.photos.length; i++) {
    //  let photo = makeElement('img', 'popup__photo');
    //  photo.src = offer.photos[i];
    // }
    photos.appendChild(photo);
    listItem.appendChild(photos);
    return listItem;
    // const avatar = makeElement('img', 'popup__avatar');
    // avatar.src = author.avatar;
    // listItem.appendChild(author.avatar);
};

export {createOffer};