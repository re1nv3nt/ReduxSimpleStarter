import React, { Component } from 'react'; // Go into node_modules and get React module
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAUdKxC2if0h_n4iX5yo_GZBLVh_XpujGk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // In ES6, can condense obj props with same key-value
      // names from { name: name } to { name }
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
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

// Pass data from parent to child comp by creating a
// prop on the child tag (called passing a prop)






