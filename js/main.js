import { createPhotoDescriptions } from './createPhotoDescriptions.js';
import { renderPhotos } from './render.js';

const photoDescriptions = createPhotoDescriptions();

renderPhotos(photoDescriptions);
