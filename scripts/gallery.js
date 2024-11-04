import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
let swiper;
const openModal = () => {
  const dialog = document.querySelector(".gallery__modal");
  dialog.showModal();
  document.querySelector("body").classList.add("noscroll");
};

const closeModal = () => {
  const dialog = document.querySelector(".gallery__modal");
  dialog.close();
  document.querySelector("body").classList.remove("noscroll");
  swiper.destroy();
};

const handleBackdropClick = (e) => {
  const clickedElement = e.target;
  const isNotBackdropClicked =
    clickedElement.closest("dialog img") ||
    clickedElement.closest(".gallery__close-button") ||
    clickedElement.closest(".swiper-button-next") ||
    clickedElement.closest(".swiper-button-prev");
  if (clickedElement.closest("dialog") && !isNotBackdropClicked) {
    closeModal();
  }
};

const handleEscapePress = (e)=>{
  if(e.key==="Escape"){
    closeModal()
  }
}
const initSwiper = (imageIndex) => {
  swiper = new Swiper("#gallerySlider", {
    initialSlide: imageIndex,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
  });
};

const initGallery = () => {
  const imageButtons = document.querySelectorAll(".gallery__button");
  const closeButton = document.querySelector(".gallery__close-button");
  const dialog = document.querySelector(".gallery__modal");
  if (!dialog || imageButtons?.length===0) {
    return;
  }
  imageButtons?.forEach((button, index) => {
    button.addEventListener("click", () => {
      openModal();
      initSwiper(index);
    });
  });
  closeButton?.addEventListener("click", () => {
    closeModal();
  });
  dialog.addEventListener("click", handleBackdropClick);
  document.addEventListener("keydown", handleEscapePress);
};

export default initGallery;
