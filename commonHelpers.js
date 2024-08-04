import{i as l,S as d}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=t=>`
  <li class="gallery-card">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-img"
        src="${t.webformatURL}"
        alt="${t.tags}"
        />
    </a>
<div class="gallery-info">
    <div class="info-item">
      <strong>Likes</strong>
      <span>${t.likes}</span>
    </div>
    <div class="info-item">
      <strong>Views</strong>
      <span>${t.views}</span>
    </div>
    <div class="info-item">
      <strong>Comments</strong>
      <span>${t.comments}</span>
    </div>
    <div class="info-item">
      <strong>Downloads</strong>
      <span>${t.downloads}</span>
    </div>
  </div>
  </li>
  `,g="45269069-80d5a565d51e24ea911778696",u=t=>{const o=new URLSearchParams({q:t,key:g});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(console.log(`https://pixabay.com/api/?${o}`),!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".js-search-form"),f=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),p=t=>{t.preventDefault();const o=t.target.elements.user_query.value.trim();if(o===""){l.error({message:"Поле для пошуку не має бути порожнім!",position:"topRight"}),i.reset();return}c.classList.remove("is-hidden"),u(o).finally(()=>{c.classList.add("is-hidden")}).then(({hits:s})=>{if(s.length===0){l.error({message:"За вашим запитом, зображень не знайдено!",position:"topRight"}),i.reset();return}const a=s.map(e=>m(e)).join("");f.innerHTML=a,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{console.log(s)})};i.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
