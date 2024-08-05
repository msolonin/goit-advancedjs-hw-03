const API_KEY = '45269069-80d5a565d51e24ea911778696';
export const fetchPhotos = query => {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    console.log(`https://pixabay.com/api/?${searchParams}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
