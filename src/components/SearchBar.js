import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    const value = this.filterTextInput.value || undefined;
    this.props.onUserInput(value);
  }

  handleFocus() {
    this.props.onUserInput("");
  }

  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Saved Looks"
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </form>
    );
  }
}

export default SearchBar;
