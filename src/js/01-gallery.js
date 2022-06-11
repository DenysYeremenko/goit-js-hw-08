// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(({preview, original, description}) => 
    `<a href="${original}" class="gallery__item"><img src="${preview}" alt="${description}" class="gallery__image bla"></a>`
).join('') 

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup)

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
