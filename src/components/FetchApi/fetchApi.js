
const BASE_URL = 'https://pixabay.com/api/';

 export async function fetchPictures(query, page) {
  const searchParams = new URLSearchParams({
    key: '30134359-d8181cb70ea999f99485a6e79',
    q: query,
    image_type: 'photo',
    per_page: 12,
    orientation: 'horizontal',
    page: page,
  });
  const url = `${BASE_URL}?${searchParams}`;
  const response = await fetch(url);
  return response.json();
}
