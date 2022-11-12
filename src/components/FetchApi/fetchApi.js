import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '30167991-7ee84147a11351fc2ac43bf2c';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(searchQuery, page) {
  const response = axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
