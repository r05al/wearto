import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';
import { settings } from './ListSlider';
import Slider from 'react-slick';
import Immutable from 'immutable';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class List extends Component {
	static propTypes = {
		clothingItems: PropTypes.instanceOf(Immutable.List).isRequired,
		listItems: PropTypes.instanceOf(Immutable.Map).isRequired,
		type: PropTypes.string.isRequired,
		selectItem: PropTypes.func.isRequired,
		toggleItem: PropTypes.func.isRequired,
		toggleList: PropTypes.func.isRequired,
	};

	shouldComponentUpdate(nextProps) {
		return (!this.props.clothingItems.equals(nextProps.clothingItems) ||
			!this.props.listItems.equals(nextProps.listItems));
	}

	handleSelect(item) {
		const itemType = item.get('type');
		const id = item.get('id');
		this.props.selectItem(itemType, id);
	}
	
	handleToggle() {
		this.props.toggleList(this.props.type);
	}

	handleToggleItem(item) {
		const id = item.get('id');
		this.props.toggleItem(id);
	}

	render() {
		const { clothingItems, listItems, type } = this.props;

		let slider;
		if (listItems.get(type)) {
			const items = clothingItems
				.map((item) => {
	  			let info, href = item.get('href'), 
	  				id = item.get('id');

	  			if (href.includes('placehold.it')) { // own HOC
	  				info = <span onClick={ this.handleSelect.bind(this, item) }
				  							 style={{position: 'absolute', left: 0, 
				  							 				 textAlign: 'center', width: '100%'}}>
				  					{item.get('title')}
				  				 </span>;
	  			}

		  		return (
		  			<div className='clothing' key={ id }>
		  				<ListItem 
								item={item} 
								info={info}
								href={href}
								handleSelect={this.handleSelect.bind(this)}
								handleToggleItem={this.handleToggleItem.bind(this)}
							/>
		  			</div>
		  		);
		  	});

		  slider = <Slider {...settings}>{items}</Slider>
		}

    return (
    	<div className="list">
	    	<div className={ listItems.get(type) ? 
    					`list-title list-title--is-open ${type}` : 
    					`list-title ${type}`} 
    					onClick={this.handleToggle.bind(this)}>
	      </div>
    		<ReactCSSTransitionGroup 
	    		transitionName="toggle"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
		  	{ slider }
		  	</ReactCSSTransitionGroup>
	  	</div>
    );
	}
}

export default List;
