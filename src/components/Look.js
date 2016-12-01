import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import { Link } from 'react-router';
import { getClothingItem } from '../reducers';

class Look extends Component {
  static propTypes = {
    clothingItems: PropTypes.instanceOf(List).isRequired,
    lookDraft: PropTypes.instanceOf(Map).isRequired,
    deselect: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  handleChange(field, e) {
    this.props.handleChange(field, e.target.value);
  }

  render() {
    const { lookDraft, clothingItems, deselect } = this.props;
    const id = lookDraft.get('id');
    const pieces = lookDraft.get('pieces');
    const types = pieces.keySeq();

    const lookArray = types.map((type) => {
    	let info, itemInfo;
      if (pieces.get(type)) {
        itemInfo = getClothingItem(clothingItems, pieces.get(type));
      } else {
        itemInfo = Map();
      }
      const href = itemInfo.get('href');
      if (href && href.includes('placehold.it')) {
        info = <span style={{textAlign: 'center', width: '100%'}}>
                {itemInfo.get('title')}
               </span>;
      }
    	return <div className="look-grid" key={type}
									onClick={ deselect.bind(this, itemInfo) }>
                <img src={href} alt="" />
								{info}
						 </div>
    });

    let edit;
    if (id) {
    	edit = <div className="look-edit"><Link to={`looks/${id}/edit`}>✎</Link></div>
    }

    return (
      <div className="look">
        <div className="look-description">
        	{edit}
          <input 
            type='text'
            value={lookDraft.get('title')}
            onChange={this.handleChange.bind(this,'title')}
            placeholder="Look Name"
            required
            autoFocus 
          />
        	<p>
            <textarea
              value={lookDraft.get('description')}
              onChange={this.handleChange.bind(this,'description')}
              placeholder="Description" 
            />
          </p>
        </div>
        <div className="look-flex">
	        {lookArray}
	      </div>
      </div>
    );
  }
}

export default Look;
