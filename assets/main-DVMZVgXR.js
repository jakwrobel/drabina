import c from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const s=(t,o,r)=>{t.classList.toggle("menu__button--active"),o.classList.toggle("menu__itemsWrapper--active"),r.classList.toggle("menu__overlay--hidden")},a=(t,o,r)=>{r.classList.contains("menu__overlay--hidden")||s(t,o,r)},d=()=>{const t=document.querySelector(".menu__button"),o=document.querySelector(".menu__itemsWrapper"),r=document.querySelector(".menu__overlay");t.addEventListener("click",()=>s(t,o,r)),r.addEventListener("click",()=>a(t,o,r))},p=()=>new c("#homeSlider",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"},autoplay:{delay:3e3},effect:"fade",speed:1e3});let u;const m=()=>{document.querySelector(".gallery__modal").showModal()},f=()=>{document.querySelector(".gallery__modal").close()},y=t=>{u=new c("#gallerySlider",{initialSlide:t,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1e3})},g=()=>{const t=document.querySelectorAll(".gallery__button"),o=document.querySelector(".gallery__close-button");t.forEach((r,i)=>{r.addEventListener("click",()=>{m(),y(i)})}),o.addEventListener("click",()=>{f(),u.destroy()})};document.addEventListener("DOMContentLoaded",()=>{d(),p(),g()});
