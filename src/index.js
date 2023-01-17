import './css/styles.css';

import Notiflix from 'notiflix'; 
import axios, {isCancel, AxiosError} from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import Fetch from './js/userfetch';
import Markup from './js/markup';

// const KEY_PIXABAY = '332702624-2e762d8c87a3cafce881a5f67';            
// const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');

const gallery = document.querySelector('.gallery');

const loadMoreBtn = document.querySelector('.load-more');
const addedbtn = document.querySelector('.load-more-btn');
// const endedInfo = document.querySelector('.ended-info');

form.addEventListener('submit', gallerySearch);
loadMoreBtn.addEventListener('click', Markup.loadMoreBtn);

// const input = document.querySelector('.text');
// const inputValue = input.value.trim();


function gallerySearch(event) {
  event.preventDefault();
  addedbtn.classList.add('hidden');
  currentPage = 0;
  const inputValue = event.currentTarget.elements.searchQuery.value;
  gallery.innerHTML = '';
  // endedInfo.innerHTML = '';
  Fetch.getGallery(inputValue);
}

Notiflix.Notify.init({
  position: 'center-top',
  width: '380px',
  distance: '30px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
});