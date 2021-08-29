import { galleryItems } from "./gallery-items.js";
// Change code below this line
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const log = (something) => console.log(something);
const ce = (elem) => document.createElement(elem);

const gallery = qs(".gallery");
const createGalleryItems = (galleryItems) => {
  for (const item of galleryItems) {
    const galleryItem = ce("div");
    galleryItem.classList.add("gallery__item");
    gallery.append(galleryItem);

    const galleryLink = ce("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;
    galleryItem.append(galleryLink);

    const galleryImg = ce("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = item.preview;
    galleryImg.dataset.source = item.original;
    galleryImg.alt = item.description;
    galleryLink.append(galleryImg);
  }
};

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  for (const item of galleryItems) {
    const modal = basicLightbox.create(`<img src=${item.original}>`);
    if (event.target.src === item.preview) {
      modal.show();
    }
    if (modal.visible() === true) {
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          modal.close();
        }
      });
    }
  }
}

createGalleryItems(galleryItems);
gallery.addEventListener("click", selectImage);
