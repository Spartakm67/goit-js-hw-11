import './css/styles.css';

import Notiflix from 'notiflix'; 
import axios, {isCancel, AxiosError} from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const KEY_PIXABAY = '332702624-2e762d8c87a3cafce881a5f67';            
const BASE_URL = 'https://pixabay.com/api/';

// const form = document.querySelector('#search-form');
const input = document.querySelector('.text');
input.addEventListener('input', debounce(getGallery, DEBOUNCE_DELAY));


const per_page = 40;
let page = 1;

async function getGallery() {
  try {
    // const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=black+dogs&image_type=photo&pretty=true`);
    const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`);
    return response;
    
  } catch (error) {
    Notiflix.Notify.failure(`${error}`);;
  }
};

// getGallery();

