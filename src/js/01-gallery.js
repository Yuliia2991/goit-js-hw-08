import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    )
    .join('');
}
const markup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
