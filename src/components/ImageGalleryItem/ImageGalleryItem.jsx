import PropTypes from 'prop-types';
import { GalleryItemCard, GalleryItemImage, InfoWrapper,Info,Comments, ImageWrapper, } from './ImageGalleryItem.styled';
import { FaRegThumbsUp, FaRegEye, FaRegComments } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

function ImageGalleryItem({ webformatURL, index, openModal,likes,views,comments,downloads }) {
  return (
    <GalleryItemCard>
      <ImageWrapper>
      <GalleryItemImage
        src={webformatURL}
        alt=""
        onClick={() => openModal(index)}
        />
      </ImageWrapper>
       <InfoWrapper>
          <Info>
            <b>
              <FaRegThumbsUp size={24} color="#ff0" />
            </b>
            <Comments> {likes}</Comments>
          </Info>
          <Info>
            <b>
              <FaRegEye size={24} color="#ff0"/>
            </b>
            <Comments>{views}</Comments>
          </Info>
          <Info>
            <b>
              <FaRegComments size={24} color="#ff0" />
            </b>
            <Comments>{comments}</Comments>
          </Info>
          <Info>
            <b>
              <FiDownload size={24} color="#ff0" />
            </b>
            <Comments>{downloads}</Comments>
        </Info>
        </InfoWrapper>
    </GalleryItemCard>
  );
}

ImageGalleryItem.prototypes = {
  index: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
   likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
export default ImageGalleryItem;