import React, { Component } from 'react';

// A functional component
// const SearchBar = () => {
//   return <input />
// };

// A class-based component
class SearchBar extends Component{
  // Create a new input element, pass it a prop 'onChange'
  // with a value of 'this.onInputChange'
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

  // Event handler naming convention: 
  // >> on/handle, element name, event name
  // onInputChange(event) { 
  //   console.log(event.target.value);
  // }
}

export default SearchBar;

/* STATE */
// State is a plain JS object that is used to record and react to user events