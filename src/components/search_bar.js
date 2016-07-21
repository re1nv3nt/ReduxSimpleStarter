import React, { Component } from 'react';

// A functional component
// (does not inherit from React Component, does not have state)
// const SearchBar = () => {
//   return <input />
// };

// A class-based component
class SearchBar extends Component{
  // Constructor func called automatically whenever a 
  // new instance of SearchBar is created
  // Used to initalize variables, state, etc.
  constructor(props) {
    // Calls Component's constuctor function
    super(props);

    this.state = { term: '' };
  }

  // Create a new input element, pass it a prop 'onChange'
  // with a value of 'this.onInputChange'
  render() {
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
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

// Whenever you want to update a component, think about using state

// Controlled Component:
// A controlled component has its value set by state - 
// only ever changes when state changes





