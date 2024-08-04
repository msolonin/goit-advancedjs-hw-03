// export const createGalleryCardTemplate = ({ urls: { regular }, alt_description }) => {
//   return `
//   <li class="gallery-card">
//     <img class="gallery-img" src="${regular}" alt="${alt_description}" />
//   </li>
//   `;
// };

export const createGalleryCardTemplate = pictureInfo => {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${pictureInfo.largeImageURL}">
      <img
        class="gallery-image"
        src="${pictureInfo.previewURL}"
        alt="${pictureInfo.tags}"
        />
    </a>
  </li>
  `;
};
