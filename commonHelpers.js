import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=o=>`
  <li class="gallery-card">
    <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-img"
        src="${o.webformatURL}"
        alt="${o.tags}"
        />
    </a>
  </li>
  `,m="45269069-80d5a565d51e24ea911778696",f=o=>{const s=new URLSearchParams({q:o,key:m});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(console.log(`https://pixabay.com/api/?${s}`),!t.ok)throw new Error(t.status);return t.json()})},i=document.querySelector(".js-search-form"),g=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),p=o=>{o.preventDefault();const s=o.target.elements.user_query.value.trim();if(s===""){n.error({message:"Поле для пошуку не має бути порожнім!",position:"topRight"}),i.reset();return}c.classList.remove("is-hidden"),f(s).finally(()=>{c.classList.add("is-hidden")}).then(({hits:t})=>{if(t.length===0){n.error({message:"За вашим запитом, зображень не знайдено!",position:"topRight"}),i.reset();return}const a=t.map(e=>d(e)).join("");g.innerHTML=a,new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.log(t)})};i.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
