import React from 'react';
import Immutable from 'immutable';
import { shallow, mount } from 'enzyme';
import List from '../components/List';

const setup = (itemStatus=false, items=[]) => {
	const props = {
		clothingItems: Immutable.List(items),
		listItems: Immutable.Map({'jacket': itemStatus}),
		type: 'jacket',
		selectItem: jest.fn(),
		toggleItem: jest.fn(),
		toggleList: jest.fn()
	}

	const wrapper = shallow(<List {...props} />);

	return {
		props,
		wrapper
	}
}
describe('<List />', () => {
	it('should render self and subcomponents', () => {
		const { wrapper, props } = setup();

		expect(wrapper.find('div').length).toBe(2);
		expect(wrapper.is('.list')).toBe(true);
		expect(wrapper.find(`.list-title .${props.type}`).length).toBe(1);
		expect(wrapper.find('ReactCSSTransitionGroup').length).toBe(1);
		expect(wrapper.contains('Slider')).toBe(false);
	});

	it('should render updated subcomponents when selected', () => {
		const { wrapper, props } = setup();

		wrapper.find('.list-title').simulate('click');
		expect(props.toggleList).toBeCalled();

	});

	it('should render Slider when toggleList is true', () => {
		const item = Immutable.fromJS({
			'id' : 3003,
			'title' : 'Embellished Wool And Cashmere-Blend Peacoat',
			'type' : 'jacket',
			'tags' : 'military italian',
			'brand' : 'Alexander McQueen',
			'href' : 'https://cache.mrporter.com/images/products/705990/705990_mrp_in_l.jpg',
			'available' : true
		});
		const { wrapper, props } = setup(true, [item]);

		expect(props.listItems.get('jacket')).toBe(true);

		expect(wrapper.find('.list-title--is-open').length).toBe(1);
		expect(wrapper.find('.clothing').length).toBe(1);
		expect(wrapper.find('.item-edit').length).toBe(1);
		expect(wrapper.find('.item-toggle').length).toBe(1);
		expect(wrapper.find('img').length).toBe(1);
		expect(wrapper.containsMatchingElement(<div></div>)).toBe(true);
		// expect(wrapper.is('.list')).toBe(true);
		// expect(wrapper.find('ReactCSSTransitionGroup').length).toBe(1);

	});

});

	 //  		return (
	 //  			<div className='clothing' key={ id }>
	 //  				<div style={{width: '90%', margin: '0 auto'}}>
		//   				<img src={ href }
		// 							 onClick={ this.handleSelect.bind(this, item) }
		// 							 style={ item.get('available') ? {} : { filter: 'opacity(50%)' }}/>
		// 					{ info }
		//   				<div className="item-edit"><Link to={`items/${id}/edit`}>✎</Link></div>
		//   				<div className="item-toggle" 
		//   						 onClick={this.handleToggleItem.bind(this, item)}>&#9852;</div>

		//   			</div>
	 //  			</div>
	 //  		);
	 //  	});

		//   slider = <Slider {...settings}>{clothingItems}</Slider>
		// }

  //   return (
  //   	<div className="list">
	 //    	<div className={ listItems.get(type) ? 
  //   					`list-title list-title--is-open ${type}` : 
  //   					`list-title ${type}`} 
  //   					onClick={this.handleToggle.bind(this)}>
	 //      </div>
  //   		<ReactCSSTransitionGroup transitionName="toggle"
  //   		                         transitionEnterTimeout={500}
  //   		                     		 transitionLeaveTimeout={500}>
		//   	{ slider }
		//   	</ReactCSSTransitionGroup>
	 //  	</div>
  //   );