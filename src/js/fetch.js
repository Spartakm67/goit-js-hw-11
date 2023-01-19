// import '../css/styles.css';

// import Notiflix from 'notiflix';
// import axios, {isCancel, AxiosError} from 'axios';
// import Markup from './markup';

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// let gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionsPositions: 'bottom',
//   nav: true,
//   close: true,
//   captionDelay: 250,
// });


// const KEY_PIXABAY = '32702624-2e762d8c87a3cafce881a5f67';            
// const BASE_URL = 'https://pixabay.com/api/';
// const addLoadBtn = document.querySelector('.load-more-btn');

// const per_page = 40;
// let page = 0;
// let maxLoadQ = 500;

// async function getGallery(inputValue) {

//   try {
//     maxLoadQ -= 40;
//     page += 1;
//     const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`);
        
//     let hits = response.data.hits;
//     const totalHits = response.data.totalHits;

//     if (hits.length) {
//         Markup.markupGallery(response.data.hits);
//     } else
//       Notiflix.Notify.warning(
//         `Sorry, there are no images matching your search query. Please try again.`
//       )

//     if ((hits.length && per_page > hits.length) || maxLoadQ < 40) {
//       addLoadBtn.classList.add('hidden');

//       Notiflix.Notify.warning(
//         `We're sorry, but you've reached the end of search results.`
//       )
//     }

//     if (per_page === 1 && hits.length) {
//       Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
//     }

//     if (per_page > 1) {
//       const { height: cardHeight } = document
//         .querySelector('.gallery')
//         .firstElementChild.getBoundingClientRect();

//       window.scrollBy({
//         top: cardHeight * 2,
//         behavior: 'smooth',
//       });
//     }
//     return response;
    
//     } catch (error) {
//   Notiflix.Notify.failure(`${error}`);
//   }
// };


// export default { getGallery };