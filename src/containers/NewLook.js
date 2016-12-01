import React, { Component, PropTypes } from 'react';
import LookForm from '../components/LookForm';
import { updateLookDraft, addLook, setLook } from '../actions';
import { getLookItems } from '../reducers';
import { connect } from 'react-redux';

class NewLook extends Component {
	static propTypes = {
		lookDraftItems: PropTypes.object.isRequired,
		lookDraft: PropTypes.object.isRequired,
		updateLookDraft: PropTypes.func.isRequired,
		addLook: PropTypes.func.isRequired,
		setLook: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		const look = this.props.lookDraft.set('id', Date.now());
		this.props.addLook(look);
		this.props.setLook(look);
		this.props.router.push('/');
	}

	handleClose(e) {
		this.props.router.push('/');
	}

	render() {
		return (
			<LookForm 
				lookDraftItems={this.props.lookDraftItems}
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
	lookDraftItems: getLookItems(state),
	lookDraft: state.lookDraft,
});

const mapDispatchToProps = {
	updateLookDraft,
	addLook,
	setLook,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLook);
