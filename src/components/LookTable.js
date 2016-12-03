import React, { Component } from 'react';
import LookRow from './LookRow';

class LookTable extends Component {

  render() {
    var rows = [];
    this.props.looks.forEach((look) => {
      if (look.get('title').indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(
        <LookRow 
          look={look} 
          key={look.get('id')}
          setLook={this.props.setLook}
        />
      );
    });
    return (
      <div style={{position: "absolute"}}>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
}

export default LookTable;
