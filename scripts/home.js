import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const initSwiper = ()=>{
    return new Swiper('#homeSlider',{
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true"
        },
        autoplay: {
            delay: 3000,
        },
        effect: "fade",
        speed: 1000
    })
}

export default initSwiper