import React, { Component, PropTypes } from 'react';
import NavMenu from '../components/NavMenu';
import ListContainer from './ListContainer';
import Look from '../components/Look';
import AddOptions from '../components/AddOptions';
import FilterOptions from '../components/FilterOptions';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { deselect, setLook, updateDate, updateLookDraft } from '../actions'
import { getLook, getLookItems } from '../reducers';

class App extends Component {
	static propTypes = {
		clothingItems: PropTypes.object.isRequired,
		lookDraft: PropTypes.object.isRequired,
		looks: PropTypes.object.isRequired,
		deselect: PropTypes.func.isRequired,
		setLook: PropTypes.func.isRequired,
		updateDate: PropTypes.func.isRequired,
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleDeselect = (item) => {
	  const itemType = item.get('type');
	  this.props.deselect(itemType);
	}

	handleSetLook = (e) => {
	  const lookId = e.target.value;
	  const look = getLook(this.props.looks, lookId);
	  this.props.setLook(look);
	}

	handleDateChange = (date) => {
	  this.props.updateDate(date);
	}

	render() {
		const { clothingItems, lookDraft, looks, lookDraftItems } = this.props;

		return(
			<div>
				<NavMenu />
				<Look 
					lookDraft={lookDraft} 
					lookDraftItems={lookDraftItems} 
					deselect={this.handleDeselect}
					handleChange={this.handleChange.bind(this)}
				/>
				<AddOptions />
				<FilterOptions
					clothingItems={clothingItems}
					lookDraft={lookDraft}
					looks={looks}
					setLook={this.handleSetLook}
					updateDate={this.handleDateChange}
				/>
				<ListContainer />
				{this.props.children}
			</div>
		);
	}
}

const mapDispatchToProps = ({
	deselect,
	setLook,
	updateDate,
	updateLookDraft
})

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	lookDraftItems: getLookItems(state),
	lookDraft: state.lookDraft,
	looks: state.looks,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
