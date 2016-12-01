import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import EditAction from './EditAction';

class ListItem extends Component {
	render() {
		const {href, item} = this.props;
		const id = item.get('id');
    return (
			<div style={{width: '90%', margin: '0 auto'}}>
				<img 
					src={href}
				  onClick={ this.props.handleSelect.bind(this, item) }
				  style={ item.get('available') ? {} : { filter: 'opacity(50%)' }}
				  alt=""
				/>
				{ this.props.info }
				<div className="item-edit">
					<Link to={`items/${id}/edit`}>
						✎
					</Link>
				</div>
				<EditAction type="item" id={id}/>
				<div 
					className="item-toggle" 
					onClick={this.props.handleToggleItem.bind(this, item)}
				>
					&#9852;
				</div>
			</div>
    );
	}
}

export default ListItem;
