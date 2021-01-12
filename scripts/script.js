import images from "./gallery-items.js";


const refs = {
  galleryContainer: document.querySelector("ul.js-gallery"),
  modal: document.querySelector('div.lightbox'),
  button: document.querySelector('button[data-action="close-lightbox"]'),
  lightbox: document.querySelector('.lightbox__image'),
  overlay: document.querySelector('div.lightbox__overlay'),
}

const createGalleryElement = ({ preview, original, description }) => {
  return `<li class="gallery__item">
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
</li>`
}

const createGalleryElementsMarkup = pictures => {
  return pictures.map(createGalleryElement).join('')
 }

const markupElementsGallery = createGalleryElementsMarkup(images)

refs.galleryContainer.insertAdjacentHTML('beforeend', markupElementsGallery)


refs.galleryContainer.addEventListener('click', onImageClick)
refs.button.addEventListener('click', onModalClose)
refs.overlay.addEventListener('click', onModalBackdropClose)

let currentImgIdx = null

function onImageClick (event) { 
  event.preventDefault();
  const { dataset, alt, nodeName } = event.target
  if (nodeName !== "IMG") return;
  onModalOpen(dataset.source, alt)
  }

function onModalOpen(source, alt) { 
  refs.modal.classList.add('is-open')
  refs.lightbox.src = source;
  refs.lightbox.alt = alt
  window.addEventListener('keydown', onKeypress)
}

function onModalClose() { 
  refs.modal.classList.remove('is-open')
  refs.lightbox.src = '';
  refs.lightbox.alt = '';  
  window.removeEventListener('keydown', onKeypress)
}

function onModalBackdropClose(event) { 
  if (event.currentTarget === event.target) { 
    onModalClose()
  }
}

function findIndex() {
  return images.findIndex(({ original }) => original === refs.lightbox.src)
}


function onNextImg() {
  currentImgIdx = findIndex()
  currentImgIdx = images.length - 1 === currentImgIdx ?0 :currentImgIdx + 1
  const { original, description } = images[currentImgIdx]
  refs.lightbox.src = original;
  refs.lightbox.alt = description;     
}

function onPrevImg() {
  currentImgIdx = findIndex()
  currentImgIdx = currentImgIdx === 0 ?images.length - 1 :currentImgIdx - 1
  const { original, description } = images[currentImgIdx]
  refs.lightbox.src = original;
  refs.lightbox.alt = description; 

}

function onKeypress(event) { 
  event.code === 'Escape' && onModalClose()
  event.code === 'ArrowRight' && onNextImg()
  event.code === 'ArrowLeft' && onPrevImg()
  }



// ___________________________________________________________________

// import galleryItems from "./gallery-items.js";


// const refs = {
//   $gallery: document.querySelector("ul.js-gallery"),
//   $lightbox: document.querySelector('div.js-lightbox'),
//   $lightboxImg: document.querySelector('.lightbox__image'),
//   $lightboxCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
//   // overlay: document.querySelector('div.lightbox__overlay'),
// }

// const { $gallery, $lightbox, $lightboxImg, $lightboxCloseBtn } = refs

// let currentImgIdx = null

// $gallery.addEventListener('click', handleClickGallery)
// $lightboxCloseBtn.addEventListener('click', handleClickCloseBtn)

// function handleClickGallery(event) { 
//   event.preventDefault()
  
//   const { dataset, alt, nodeName } = event.target;

//   if (nodeName === 'IMG') { 
//    const  { source, id } = dataset
   
//     handleOpenModal(source, alt, +id) 
//   }
// }

// function handleOpenModal(src, alt, id){
//     $lightbox.classList.add('is-open')
//     $lightboxImg.src = src
//     $lightboxImg.alt = alt
//   currentImgIdx = id
//   window.addEventListener('keydown', handleKeypress)
// }
     
// function handleClickCloseBtn() { 
//   handleCloseModal()
// }

// function handleCloseModal() { 
//     $lightbox.classList.remove('is-open')
//     $lightboxImg.src = ''
//     $lightboxImg.alt = ''
//     currentImgIdx = null
//     window.removeEventListener('keydown', handleKeypress)
// }

// function handleKeypress({ code }) { 
//   code === 'Escape' && handleCloseModal()
//   code === 'ArrowRight' && handleNextImg()
//   code === 'ArrowLeft' && handlePrevImg()
// }

// function handleNextImg() { 
//   currentImgIdx = galleryItems.length - 1 === currentImgIdx ? 0 : currentImgIdx + 1
//   const { original, description } = galleryItems[currentImgIdx]
//     $lightboxImg.src = original
//     $lightboxImg.alt = description
// }

// function handlePrevImg() { 
//     currentImgIdx = currentImgIdx === 0? galleryItems.length - 1 : currentImgIdx - 1
//     const { original, description } = galleryItems[currentImgIdx]
//     $lightboxImg.src = original
//     $lightboxImg.alt = description  
// }

// function createGalleryElementMurkup({ preview, original, description }, i) { 
//   return `
// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       data-id="${i}"
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>
// `
// }

// function createGalleryMarkup(items) { 
//   return items.map(createGalleryElementMurkup).join('')
// }

// function renderGallery(markup) { 
//   $gallery.insertAdjacentHTML('beforeend', markup)
// }

// renderGallery(createGalleryMarkup(galleryItems))