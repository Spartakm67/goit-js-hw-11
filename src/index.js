import './css/styles.css';
import Notiflix from 'notiflix'; 
import Fetch from './js/fetch';
import Markup from './js/markup';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', userSearch);
loadMoreBtn.addEventListener('click', loadMore);

function userSearch(event) {
  event.preventDefault();
  Markup.loadStop.classList.add('hidden');
  
  const inputValue = event.currentTarget.elements.searchQuery.value.trim();
  Markup.galleryDiv.innerHTML = '';
  Markup.loadStop.innerHTML = '';
  Fetch.getGallery(inputValue);
};

function loadMore() {
  const inputValue = form.elements.searchQuery.value;
  Fetch.getGallery(inputValue);
};

Notiflix.Notify.init({
  position: 'right-top',
  width: '380px',
  distance: '30px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
});