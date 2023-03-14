import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const card = (galleryItemCreate(galleryItems));
console.log(card);

galleryContainer.insertAdjacentHTML("beforeend", card);
console.log(galleryContainer);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function galleryItemCreate (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
          return `<div class="gallery__item">
               <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
                </div>`})
    .join('');
    
}

function onGalleryContainerClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const bigImageUrl = e.target.dataset.source;
    console.log(bigImageUrl);
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImageUrl}">
	`);
    instance.show();

    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    })
}
//console.log(galleryItems);
