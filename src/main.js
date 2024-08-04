// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

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
    .then(({ results }) => {
      if (results.length === 0) {
        iziToast.error({
          message: 'За вашим запитом, зображень не знайдено!',
          position: 'topRight',
        });

        searchFormEl.reset();

        return;
      }

      const galleryCardsTemplate = results
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);