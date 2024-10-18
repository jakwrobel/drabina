const toggleMenu = (menuButton, itemsWrapper, overlay)=>{
        menuButton.classList.toggle('menu__button--active');
        itemsWrapper.classList.toggle('menu__itemsWrapper--active');
        overlay.classList.toggle('menu__overlay--hidden');
}

const closeMenuOnBackdrop = (menuButton, itemsWrapper, overlay)=>{
    if(overlay.classList.contains('menu__overlay--hidden')){
        return
    }
    toggleMenu(menuButton, itemsWrapper, overlay)
}

const initMenu = ()=>{
    const menuButton = document.querySelector('.menu__button');
    const itemsWrapper = document.querySelector('.menu__itemsWrapper');
    const overlay = document.querySelector('.menu__overlay');
    menuButton.addEventListener('click', ()=>toggleMenu(menuButton, itemsWrapper, overlay));
    overlay.addEventListener('click', ()=>closeMenuOnBackdrop(menuButton, itemsWrapper, overlay))
}

export default initMenu