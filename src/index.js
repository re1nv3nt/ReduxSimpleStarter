import React from 'react'; // Go into node_modules and get React module
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// When importing code that WE write, we have to give
// a file reference to the file
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUdKxC2if0h_n4iX5yo_GZBLVh_XpujGk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 
// Render component App and insert it into this already
// existing element

// React Downwards data-flow: 
// Most parent component fetches information and pushes
// it to child components