import Notiflix from 'notiflix';
import axios, {isCancel, AxiosError} from 'axios';

const KEY_PIXABAY = '32702624-2e762d8c87a3cafce881a5f67';            
const BASE_URL = 'https://pixabay.com/api/';

const per_page = 40;
let page = 1;

async function getGallery(inputValue) {

//   const inputValue = input.value.trim();
  
  try {
    // const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=black+dogs&image_type=photo&pretty=true`);
    const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`);
    return response;
    
  } catch (error) {
    Notiflix.Notify.failure(`${error}`);;
  }
};


export default { getGallery };