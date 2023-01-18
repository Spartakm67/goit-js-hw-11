
import Fetch from './fetch';


  const galleryDiv = document.querySelector('.gallery');
  const loadStop = document.querySelector('.load-stop');

        function  markupGallery(userSearchArray) {
            const markup = userSearchArray
              .map(
                ({
                  webformatURL,
                  largeImageURL,
                  tags,
                  likes,
                  views,
                  comments,
                  downloads,
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
          
            Fetch.gallery.refresh();
            Fetch.addLoadBtn.classList.remove('hidden');
          }
          

  export default { loadStop, galleryDiv, markupGallery };