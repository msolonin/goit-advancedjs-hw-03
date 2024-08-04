const API_KEY = '45269069-80d5a565d51e24ea911778696';
export const fetchPhotos = query => {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
