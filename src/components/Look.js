import React, { Component, PropTypes } from 'react';
import { Map, List } from 'immutable';
import EditAction from './EditAction';

class Look extends Component {
  static propTypes = {
    lookDraftItems: PropTypes.instanceOf(List).isRequired,
    lookDraft: PropTypes.instanceOf(Map).isRequired,
    deselect: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  handleChange(field, e) {
    this.props.handleChange(field, e.target.value);
  }

  render() {
    const { lookDraft, lookDraftItems, deselect } = this.props;
    const id = lookDraft.get('id');
    const types = lookDraft.get('pieces').keySeq();

    const lookArray = types.map((type) => {
    	let info, itemInfo;
      if (lookDraftItems.get(type)) {
        itemInfo = lookDraftItems.get(type);
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

    return (
      <div className="look">
        <div className="look-description">
        	{id ? <EditAction type="look" id={id}/> : null}
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
