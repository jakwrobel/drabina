import "./styles/index.scss";
import initMenu from "./scripts/menu";
import initSwiper from "./scripts/home";
import initGallery from "./scripts/gallery";

document.addEventListener('DOMContentLoaded',()=>{
    initMenu();
    initSwiper();
    initGallery()
})
