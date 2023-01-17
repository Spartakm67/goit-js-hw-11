

function loadMoreBtn() {
    const inputValue = form.elements.searchQuery.value;
    getGallery(inputValue);
  };


function  markupGallery() {};

/* <div class="photo-card">
        <img src="https://unsplash.com/s/photos/seeker" alt="Interesting pictures" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
          </p>
          <p class="info-item">
            <b>Views</b>
          </p>
          <p class="info-item">
            <b>Comments</b>
          </p>
          <p class="info-item">
            <b>Downloads</b>
          </p>
        </div>
        </div> */

  export default { loadMoreBtn, markupGallery };