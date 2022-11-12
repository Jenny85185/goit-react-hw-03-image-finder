import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, openModal }) => (
  <ImageGalleryList>
    {images.map(({ id, webformatURL }, index) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        index={index}
        openModal={openModal}
      />
    ))}
  </ImageGalleryList>
);

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;