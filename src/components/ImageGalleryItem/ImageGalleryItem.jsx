import PropTypes from 'prop-types';
import { GalleryItemCard, GalleryItemImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({ webformatURL, index, openModal }) {
  return (
    <GalleryItemCard>
      <GalleryItemImage
        src={webformatURL}
        alt=""
        onClick={() => openModal(index)}
      />
    </GalleryItemCard>
  );
}

ImageGalleryItem.prototypes = {
  index: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;