//
//
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class ="gallery__image" src="${preview}" alt="${description}">
      </a>
      </div>`;
  })
  .join('');

galleryEl.innerHTML = createGallery;

function onLinkUrlClick(event) {
  event.preventDefault();
  if (event.target.parentElement.nodeName !== 'A') {
    return;
  } else {
    const linkelement = event.target.closest('.gallery__link').href;

    const instance = SimpleLightbox(`
    <img src="${linkelement}" width="800" height="600">`);
    instance.show();

    window.addEventListener('keydown', onKeyPress);

    function onKeyPress(event) {
      if (event.code === 'Escape') {
        window.removeEventListener('keydown', onKeyPress);
        instance.close();
      }
    }
  }
}

galleryEl.addEventListener('click', onLinkUrlClick);

const basicLightbox = new SimpleLightbox('.gallery a');
