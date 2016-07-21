import React, { Component } from 'react'; // Go into node_modules and get React module
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUdKxC2if0h_n4iX5yo_GZBLVh_XpujGk';

class App extends Component {
  constuctor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // In ES6, can condense obj props with same key-value
      // names from { name: name } to { name }
      this.setState({ videos });
      //console.log(data);
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
// Render component App and insert it into this already
// existing element

// React Downwards data-flow: 
// Most parent component fetches information and pushes
// it to child components






