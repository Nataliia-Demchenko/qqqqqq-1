const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_YTqTNT9G1O3YzyGEfql31xEElJDoBLaqbmrZGhoSxZK8s0MCZ5mjJ80oKU4KUYuX';

function fetchBreeds() {
  const END_POINT = '/breeds';
  const PARAMS = new URLSearchParams({
    api_key: API_KEY,
  });
  return fetch(`${BASE_URL}${END_POINT}?${PARAMS}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search';

  const PARAMS = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: breedId,
  });
  return fetch(`${BASE_URL}${END_POINT}?${PARAMS}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
