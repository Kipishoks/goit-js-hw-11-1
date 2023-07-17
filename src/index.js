
import { getImage } from './js/getapi';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
let queryToFetch = '';
let pageSearch;
let inputSearch;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

loadMore.classList.add('unvisible')


form.addEventListener('submit', onSubmin);

function onSubmin(evt) {
    evt.preventDefault();
    inputSearch = form.searchQuery.value;
    if (!inputSearch.trim() || inputSearch === queryToFetch) {
        gallery.innerHTML = '';
        loadMore.classList.add('unvisible');
        return;
  }
    gallery.innerHTML = '';
     pageSearch = 1;
    getImage(inputSearch, pageSearch);
    form.reset();
};

loadMore.addEventListener('click', onBtnLoadMoreClick);

function onBtnLoadMoreClick() {
  pageSearch += 1;
  getImage(inputSearch, pageSearch);
}

export {gallery, lightbox, loadMore}





    

