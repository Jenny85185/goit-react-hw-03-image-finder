import { fetchPictures } from '../FetchApi/fetchApi';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class SearchInfo extends Component {
  static defaultProps = {
    initialPage: 1,
  };
  state = {
    pictures: [],
    largeImage: '',
    tags: '',
    showModal: false,
    status: Status.IDLE,
    page: this.props.initialPage,
    isLoading: false,
      showLoadMore: false,
  };

  componentDidUpdate = prevProps => {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING, page: 1 }, () => {
        const page = this.state.page;

        fetchPictures(nextQuery, page).then(pictures => {
          if (pictures.totalHits !== 0 && pictures.hits.length !== 0) {
            Notify.success(`Hooray! We found ${pictures.totalHits} images.`);
          } else {
            Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          const show = Math.ceil(page.totalHits / 12);
              this.setState({ showLoadMore: page < show ? true : false });
          this.setState({
            pictures: [...pictures.hits],
            status: Status.RESOLVED,
          });
          
        });
      });
    }
  };

  incrementPage = () => {
    this.setState(
      prevState => ({
        page: (prevState.page += 1),
      }),
      () => {
        this.setState({ status: Status.PENDING });
        const nextQuery = this.props.query;

        const page = this.state.page;

        fetchPictures(nextQuery, page)
          .then(pictures => {
            if (pictures.hits.length < 12 && pictures.totalHits < 0) {
              Notify.info(
                "We're sorry, but you've reached the end of search results."
              );
             
            }
            
            this.setState(prevState => ({
              pictures: [...prevState.pictures, ...pictures.hits],
              status: Status.RESOLVED,
               
            }));
          })
          .catch(() => {
            Notify.info(
              "We're sorry, but you've reached the end of search results."
            );
          });
      }
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setInfoForModal = (url, tags) => {
    this.setState({ largeImage: url, tags: tags });
    this.toggleModal();
  };

  render() {
    const { pictures, status, showModal, largeImage, tags } = this.state;

    if (status === 'pending') {
      return (
        <>
          {Loading.pulse({
            svgSize: '150px',
          })}
          <ImageGallery
            pictures={pictures}
            setInfoForModal={this.setInfoForModal}
          />
          {pictures.length !== 0 && (
            <Button incrementPage={this.incrementPage} />
          )}
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          {Loading.remove()}
          <ImageGallery
            pictures={pictures}
            setInfoForModal={this.setInfoForModal}
          />
          {showModal && (
            <Modal
              onClose={this.toggleModal}
              largeImage={largeImage}
              tags={tags}
            />
          )}
          {pictures.length !== 0 && (
            <Button incrementPage={this.incrementPage} />
          )}
        </>
      );
    }
  }
}

SearchInfo.propTypes = {
  query: PropTypes.string.isRequired,
};