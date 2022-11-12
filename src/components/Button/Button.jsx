import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ nextPage }) => {
  return (
    <>
      <ButtonLoadMore type="button" onClick={nextPage}>
        Load more
      </ButtonLoadMore>
    </>
  );
};

Button.prototypes = {
  nextPage: PropTypes.func.isRequired,
};

export default Button;