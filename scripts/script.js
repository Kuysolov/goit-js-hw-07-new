import images from "./gallery-items.js";

const refs = {
  galleryContainer: document.querySelector('ul.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('.lightbox__button'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
}

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const elGalleryMarkup = createGalleryElMarkup(images);

refs.galleryContainer.insertAdjacentHTML('beforeend', elGalleryMarkup);

function createGalleryElMarkup(images) { 
  return images.map(({ preview, original, description }) => { 
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
  })
.join('');
}

refs.galleryContainer.addEventListener("click", onClickOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.lightboxOverlay.addEventListener('click', onBackdropCloseClick);

function onClickOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  
  onOpenModal();
  refs.modalImage.src = evt.target.dataset.source;
  refs.modalImage.alt = evt.target.alt;

  document.addEventListener("keydown", onEscKeyClosePress);
  document.addEventListener("keydown", onArrowPressSibling);
  
}
 
function onOpenModal() {
  refs.modal.classList.add("is-open")
};

function onCloseModal() { 
  document.removeEventListener('keydown', onEscKeyClosePress);
  document.removeEventListener('keydown', onArrowPressSibling);
  refs.modal.classList.remove('is-open');
  refs.modalImage.src = '';
  }

function onEscKeyClosePress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
    }
}

function onBackdropCloseClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

function onArrowPressSibling(evt) {
  const currentItem = images.findIndex(({original}) => original === refs.modalImage.src)
//  console.log(refs.modalImage)
  if (evt.code === 'ArrowRight') {
    // onLeftSide();
    refs.modalImage.src = `${images[(currentItem + 1) % images.length].original}`;
  } else if (evt.code === 'ArrowLeft') {
    // onRightSide();
    if (currentItem === 0) {
    refs.modalImage.src = `${images[(currentItem + images.length - 1) % images.length].original}`;
  } else {
    refs.modalImage.src = `${images[(currentItem + 1) % images.length].original}`;
   }
  }
}

// function onRightSide() { 
//   refs.modalImage.src = `${images[(currentItem + 1) % images.length].original}`;
  
// }

// function onLeftSide() { 
//   if (currentItem === 0) {
//     refs.modalImage.src = `${images[(currentItem + images.length - 1) % images.length].original}`;
//   } else {
//     refs.modalImage.src = `${images[(currentItem + 1) % images.length].original}`;
//    }
// }