import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import SearchInfo from 'components/FetchApi/SearchInfo';

class App extends Component {
  state = {
    query: '',
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