import './css/styles.css';

import Notiflix from 'notiflix'; 
import axios, {isCancel, AxiosError} from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const keyPixabay = '32703006-cccd8a05397b9c29232fd5c43';
const BASE_URL = 'https://pixabay.com/api';

// function getGallery() {
     
//   return fetch(`https://pixabay.com/api/?key=32703006-cccd8a05397b9c29232fd5c43&q=black+cats&image_type=photo&pretty=true`).then(
//         response => {
//             if (response.status === 404) {
//                 throw new Error();
//             } else return response.json();
//     }
//   )
//     .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
// };


async function getGallery() {
  try {
    const response = await axios.get('${BASE_URL}/api/?key=32703006-cccd8a05397b9c29232fd5c43&q=black+cats&image_type=photo&pretty=true');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

getGallery();