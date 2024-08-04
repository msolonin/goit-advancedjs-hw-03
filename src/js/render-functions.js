// export const createGalleryCardTemplate = ({ urls: { regular }, alt_description }) => {
//   return `
//   <li class="gallery-card">
//     <img class="gallery-img" src="${regular}" alt="${alt_description}" />
//   </li>
//   `;
// };

export const createGalleryCardTemplate = pictureInfo => {
  return `
  <li class="gallery-card">
    <a class="gallery-link" href="${pictureInfo.largeImageURL}">
      <img
        class="gallery-img"
        src="${pictureInfo.webformatURL}"
        alt="${pictureInfo.tags}"
        />
    </a>
  </li>
  `;
};
