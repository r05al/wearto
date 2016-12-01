import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import Immutable from 'immutable';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const navButtonStyle = {
	position: 'absolute',
	zIndex: 1,
	top: '30%',
	opacity: '.7',
	cursor: 'pointer',
	fontSize: '4em'
}

class LeftNavButton extends Component {
  render() {
		let style = Object.assign({}, navButtonStyle, { left: 0 });

    return <span{...this.props} style={style}>&#8249;</span>  
  }
}

class RightNavButton extends Component {
  render() {
  	let style = Object.assign({}, navButtonStyle, { right: 0 });

    return <span{...this.props} style={style}>&#8250;</span>  
  }
}

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
		let nextNav = <RightNavButton />;
		let prevNav = <LeftNavButton />;
		let settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 7,
			slidesToScroll: 1,
			nextArrow: nextNav,
			prevArrow: prevNav
		};

		let slider;
		if (listItems.get(type)) {
			const itemsOfType = clothingItems
			.filter((item) => item.get('type') === type)
			.map((item) => {
  			let info, href = item.get('href'),
  				id = item.get('id');

  			if (href.includes('placehold.it')) {
  				info = <span onClick={ this.handleSelect.bind(this, item) }
			  							 style={{position: 'absolute', left: 0, 
			  							 				 textAlign: 'center', width: '100%'}}>
			  					{item.get('title')}
			  				</span>;
  			}

	  		return (
	  			<div className='clothing' key={ id }>
	  				<div style={{width: '90%', margin: '0 auto'}}>
		  				<img 
		  					src={ href }
							  onClick={ this.handleSelect.bind(this, item) }
							  style={ item.get('available') ? {} : { filter: 'opacity(50%)' }}
							  alt=""
							/>
							{ info }
		  				<div className="item-edit"><Link to={`items/${id}/edit`}>✎</Link></div>
		  				<div className="item-toggle" 
		  						 onClick={this.handleToggleItem.bind(this, item)}>&#9852;</div>

		  			</div>
	  			</div>
	  		);
	  	});

		  slider = <Slider {...settings}>{itemsOfType}</Slider>
		}

    return (
    	<div className="list">
	    	<div className={ listItems.get(type) ? 
    					`list-title list-title--is-open ${type}` : 
    					`list-title ${type}`} 
    					onClick={this.handleToggle.bind(this)}>
	      </div>
    		<ReactCSSTransitionGroup transitionName="toggle"
    		                         transitionEnterTimeout={500}
    		                     		 transitionLeaveTimeout={500}>
		  	{ slider }
		  	</ReactCSSTransitionGroup>
	  	</div>
    );
	}
}

export default List;
