import './css/styles.css';
import Notiflix from 'notiflix'; 
// import Fetch from './js/fetch';
// import Markup from './js/markup';
import axios, {isCancel, AxiosError} from 'axios';
// import Markup from './markup';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPositions: 'bottom',
  nav: true,
  close: true,
  captionDelay: 250,
});

const KEY_PIXABAY = '32702624-2e762d8c87a3cafce881a5f67';            
const BASE_URL = 'https://pixabay.com/api/';
const addLoadBtn = document.querySelector('.load-more-btn');

const per_page = 40;
let page = 0;
let maxLoadQ = 500;
const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', userSearch);
loadMoreBtn.addEventListener('click', loadMore);

const galleryDiv = document.querySelector('.gallery');

function userSearch(event) {
  event.preventDefault();
  page = 0; 
  maxLoadQ = 500;
  const inputValue = event.currentTarget.elements.searchQuery.value.trim();
  galleryDiv.innerHTML = '';
  getGallery(inputValue);
};

async function getGallery(inputValue) {

  try {
    maxLoadQ -= 40;
    page += 1;
    const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`);
        
    let hits = response.data.hits;
    const totalHits = response.data.totalHits;
    console.log(response);
    

    if (hits.length) {
        markupGallery(response.data.hits);
    } else {
      addLoadBtn.classList.add('hidden');
      page = 0;
      Notiflix.Notify.warning(
        `Sorry, there are no images matching your search query. Please try again.`
      )}

    if (maxLoadQ < per_page) {
      addLoadBtn.classList.add('hidden');

      Notiflix.Notify.warning(
        `We're sorry, but you've reached the end of search results.`
      )
    }

    if (page === 1 && hits.length) {
      Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
    }

    if (page > 1) {
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
    return response;
    
    } catch (error) {
  Notiflix.Notify.failure(`${error}`);
  }
};

function loadMore() {
  const inputValue = form.elements.searchQuery.value;
  getGallery(inputValue);
};

function  markupGallery(userSearchArray) {
  const markup = userSearchArray
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads,
      }) => `<a class="gallery-box" href="${largeImageURL}"><div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments: ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div></a>`
    )
    .join('');
  galleryDiv.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
  addLoadBtn.classList.remove('hidden');
}

Notiflix.Notify.init({
  position: 'right-top',
  width: '380px',
  distance: '30px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
});