import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      message: 'Поле для пошуку не має бути порожнім!',
      position: 'topRight',
    });

    searchFormEl.reset();

    return;
  }

  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchedValue)
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    })
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message: 'За вашим запитом, зображень не знайдено!',
          position: 'topRight',
        });

        searchFormEl.reset();

        return;
      }
      const galleryCardsTemplate = hits
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;
      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        }).refresh();

    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
