import React, { Component, PropTypes } from 'react';
import LookForm from '../components/LookForm';
import { updateLookDraft, addLook } from '../actions';
import { connect } from 'react-redux';

class NewLook extends Component {
	static propTypes = {
		clothingItems: PropTypes.object.isRequired,
		lookDraft: PropTypes.object.isRequired,
		updateLookDraft: PropTypes.func.isRequired,
		addLook: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addLook(this.props.lookDraft);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<LookForm 
				clothingItems={this.props.clothingItems}
				lookDraft={this.props.lookDraft}
				buttonLabel="Save Look"
				handleChange={this.handleChange.bind(this)}
				handleSubmit={this.handleSubmit.bind(this)}
				handleClose={this.handleClose.bind(this)} 
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	lookDraft: state.lookDraft,
});

const mapDispatchToProps = {
	updateLookDraft,
	addLook
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLook);
