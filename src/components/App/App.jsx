import fetchImages from 'components/FetchApi/fetchApi';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 1,
    largeImage: '',
    showModal: false,
    isLoading: false,
    error: null,
    totalResalts: [],
    showButton: false,
    tags: '',
  };

  componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const prevSearchData = prevState.searchData;
    const { searchData, page } = this.state;

    if (prevPage !== page || prevSearchData !== searchData) {
      try {
        this.setState({ isLoading: true, showButton: false });
        const response = fetchImages(searchData, page);

        response.then(data => {
          if (data.data.hits.length === 0) {
            toast.error('Nothing is found ');
          }
          this.setState(({ images }) => ({
            images: [...images, ...data.data.hits],
          }));
          this.setState({
            isLoading: false,
            showButton:
              this.state.page < Math.ceil(data.data.totalHits / 12)
                ? true
                : false,
          });
        });
      } catch (error) {
        this.setState({ error, isLoading: false, showButton: false });
      } finally {
      }
    }
  }

  onSubmit = searchData => {
    if (searchData === '') {
      return toast.error('Enter a word for search');
    } else if (searchData === this.state.searchData) {
      return;
    }
    this.setState({
      searchData: searchData,
      page: 1,
      images: [],
      tags: ' ',
    });
  };

  nextPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = index => {
    this.setState(({ images }) => ({
      showModal: true,
      largeImage: images[index].largeImageURL,
      tags: ' ',
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { toggleModal, openModal, nextPage, onSubmit } = this;
    const { images, isLoading, largeImage, tags, showModal, showButton } =
      this.state;

    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {showModal && (
          <Modal
            toggleModal={toggleModal}
            largeImage={largeImage}
            tags={tags}
          />
        )}
        {isLoading && <Loader />}
        <ToastContainer autoClose={2500} />
        {showButton && <Button nextPage={nextPage} />}
      </>
    );
  }
}
export default App;
