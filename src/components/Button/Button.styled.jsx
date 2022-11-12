import styled from 'styled-components';

export const  ButtonLoadMore = styled.button`
  display: block;
  margin: 20px auto;
  width: 150px;
  height: 50px;
   color: blue;
  font-size: 20px;
  background-color: #ff0;
  border: 1px solid #030e1845;
  border-radius: 10px;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: blue;
    color: #ff0;
  }
`;