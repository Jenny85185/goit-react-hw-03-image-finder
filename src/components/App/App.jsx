import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import SearchInfo from 'components/SearchInfo/SearchInfo';

class App extends Component {
  state = {
    query: '',
    pictures: [],
    largeImage: '',
    tags: '',
    showModal: false,
    page: this.props.initialPage,
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </header>
        <main>
          <SearchInfo query={query} />
         
        </main>
      </>
    );
  }
}
export default App;