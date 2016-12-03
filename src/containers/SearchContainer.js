import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import LookTable from '../components/LookTable';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: undefined
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <LookTable
          clothingItems={this.props.clothingItems}
          looks={this.props.looks}
          filterText={this.state.filterText}
          setLook={this.props.setLook}
          onUserInput={this.handleUserInput}
        />
      </div>
    );
  }
}

export default SearchContainer;
