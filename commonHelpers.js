import{i as n}from"./assets/vendor-8e8cd629.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=o=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.previewURL}"
        alt="${o.tags}"
        />
    </a>
  </li>
  `,d="45269069-80d5a565d51e24ea911778696",m=o=>{const s=new URLSearchParams({q:o,key:d});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},l=document.querySelector(".js-search-form"),f=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),g=o=>{o.preventDefault();const s=o.target.elements.user_query.value.trim();if(s===""){n.error({message:"Поле для пошуку не має бути порожнім!",position:"topRight"}),l.reset();return}c.classList.remove("is-hidden"),m(s).finally(()=>{c.classList.add("is-hidden")}).then(({results:t})=>{if(t.length===0){n.error({message:"За вашим запитом, зображень не знайдено!",position:"topRight"}),l.reset();return}const a=t.map(e=>u(e)).join("");f.innerHTML=a}).catch(t=>{console.log(t)})};l.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
