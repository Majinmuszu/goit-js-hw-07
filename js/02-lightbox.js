import { galleryItems } from "./gallery-items.js";
// Change code below this line
//import SimpleLightbox from "../simplelightbox-master/dist/simple-lightbox.esm";
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const log = (something) => console.log(something);
const ce = (elem) => document.createElement(elem);

const gallery = qs(".gallery");
const createGalleryItems = (galleryItems) => {
  for (const item of galleryItems) {
    const galleryLink = ce("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;
    gallery.append(galleryLink);

    const galleryImg = ce("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryLink.append(galleryImg);
  }
};

function selectImage(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: "outside",
    captionsData: "alt",
    captionDelay: "250",
  });
}
createGalleryItems(galleryItems);
gallery.addEventListener("click", selectImage);
