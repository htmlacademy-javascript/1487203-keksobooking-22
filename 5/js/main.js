import {createOffer, createOffers} from'./offer-generation.js';
import {freshAdvertisements, createAdvertisement} from './advertisements.js';
// console.log(freshAdvertisements);
createOffers(freshAdvertisements);