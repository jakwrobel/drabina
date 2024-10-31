import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
let swiper
const openModal = () => {
  const dialog = document.querySelector(".gallery__modal");
  dialog.showModal();
  document.querySelector('body').classList.add("noscroll")
};

const closeModal = ()=>{
    const dialog = document.querySelector(".gallery__modal");
    dialog.close()
    document.querySelector('body').classList.remove("noscroll")
}

const initSwiper = (imageIndex) => {
   swiper = new Swiper("#gallerySlider", {
    initialSlide: imageIndex,
    navigation: {    
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000,
  });
};

const initGallery = () => {
  const imageButtons = document.querySelectorAll(".gallery__button");
  const closeButton = document.querySelector('.gallery__close-button')
  imageButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openModal();
      initSwiper(index);
    });
  });
  closeButton.addEventListener("click",()=>{
    closeModal()
    swiper.destroy()
})
};

export default initGallery;
