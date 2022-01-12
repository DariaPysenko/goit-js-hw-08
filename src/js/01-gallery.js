
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';



const galleryRef = document.querySelector('.gallery');

const createMarkup = ({ original, preview, description }) => {
    return `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      
      alt=${description}
    />
  </a>
`
        ;
};



const renderGallery = () => {
    const markup = galleryItems.map((item) => 
        createMarkup(item)).join('');
    return markup;

    
};



galleryRef.insertAdjacentHTML('beforeend', renderGallery());

var gallery = new SimpleLightbox('.gallery a',{
    captionsData: `alt`,
    captionDelay: 250,
    captionSelector: `img`,
    
});







