import styled from 'styled-components';

export const SearchbarHeader = styled.header`
 background-color: blue;
  padding-bottom: 15px;
  padding-top: 15px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchForm = styled.form`
   border: 1px solid gray;
  width: 320px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  opacity: 1;
  border-radius: 8px;
`;

export const SearchFormBbutton = styled.button`
 margin-top: 5px;
  background-color: transparent;
  border-color: transparent;
  transform: scale(1);
  color: blue;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #ff0;
  }
`;

export const SearchFormButtonLabel = styled.label`
  margin-top: 5px;
  background-color: transparent;
  border-color: transparent;
  transform: scale(1);
  color: blue;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #ff0;
  }
`;

export const SearchFormInput = styled.input`
   font-size: 20px;
  border-color: transparent;
  background-color: transparent;
  &::placeholder {
    font-size: 20px;
  }
`;