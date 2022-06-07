// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');

const galerryImgAdd = array => {
    array.map(({preview, original, description}) => {
        const newImageEl = document.createElement('img');
            newImageEl.src = preview
            newImageEl.alt = description
            newImageEl.classList.add('gallery__image')
            

        const newLinkEl = document.createElement('a')
            newLinkEl.href = original
            newLinkEl.classList.add("gallery__item")
            newLinkEl.append(newImageEl)

        galleryEl.append(newLinkEl)
    }) 
}

galerryImgAdd(galleryItems)

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
