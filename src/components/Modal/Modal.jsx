import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow, ModalImage, Description } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  render() {
    const { handleBackdropClick } = this;
    const { largeImage,tags } = this.props;

    return createPortal (
      <Backdrop onClick={handleBackdropClick}>
       <ModalWindow>
          <ModalImage src={largeImage} alt="" />
           <Description>description: {tags}</Description>
        </ModalWindow>
      </Backdrop>,
       modalRoot
    );
  }
}

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Modal;