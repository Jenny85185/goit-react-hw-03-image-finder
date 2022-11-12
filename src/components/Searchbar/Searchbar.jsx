import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FiSearch } from 'react-icons/fi'; ///npm i react-icons
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBbutton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

 class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return toast.warning('please write,what do you want to find');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          
          <SearchFormButtonLabel>
            <SearchFormInput
              name="searchQuery"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </SearchFormButtonLabel>
          <SearchFormBbutton type="submit">
            <span>
              <FiSearch size={30}  />
            </span>
          </SearchFormBbutton>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;