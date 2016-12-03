import React, { Component } from 'react';
import ClothingItemImageContainer from '../containers/ClothingItemImageContainer';

class LookRow extends Component {

  handleOnClick(e) {
    debugger;
    this.props.setLook(e);
  }
  render() {
  	const { look } = this.props;
  	const images = look.get('pieces').map((piece) => {
  		if (piece) {
	  		return <ClothingItemImageContainer clothingItemId={piece} />;
  		}
  	});
    return (
      <div onClick={this.handleOnClick.bind(this, look)}>
      	<div style={{width: '20%'}}>
	      	{images}
	      </div>
        <p>{look.get('title')}</p>
      </div>
    );
  }
}

export default LookRow;