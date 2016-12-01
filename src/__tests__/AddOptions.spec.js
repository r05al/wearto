import React from 'react';
import Immutable from 'immutable';
import { shallow, mount } from 'enzyme';
import AddOptions from '../components/AddOptions';

describe('<AddOptions />', () => {
	it('should render', () => {
		const wrapper = shallow(<AddOptions/>);

		expect(wrapper.is('.float-button')).toBe(true);
		expect(wrapper.text()).toEqual('+<Link /><Link />');
		expect(wrapper.find('.add-options').length).toEqual(1);
		expect(wrapper.find('Link').length).toEqual(2);
		expect(wrapper.find('.add-button').length).toEqual(2);
		expect(wrapper.state().showAdd).toEqual(false);

		wrapper.find('.float-button').simulate('click');
		expect(wrapper.state().showAdd).toEqual(true);
		expect(wrapper.find('.add-item').length).toEqual(1);
		expect(wrapper.find('.add-look').length).toEqual(1);
		console.log(wrapper.find('.add-look').text().debug());
	});
});

  // state = {
  //   showAdd: false
  // }

  // toggleAdd() {
  //   this.setState({ showAdd: !this.state.showAdd });
  // }

  // render() {
  // 	return(
		// 	<div className="float-button"
		// 	     onClick={this.toggleAdd.bind(this)}>
		// 	  +
		// 	  <div className="add-options">
		// 	    <Link to='items/new' className={this.state.showAdd ?
		// 	    'add-button add-item' : 'add-button'}>Item</Link>
		// 	    <Link to='looks/new' className={this.state.showAdd ?
		// 	    'add-button add-look' : 'add-button'}>Look</Link>
		// 	  </div>
		// 	</div>
  // 	);
  // }