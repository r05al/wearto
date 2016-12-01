import React, { Component, PropTypes } from 'react';
import LookForm from '../components/LookForm';
import { connect } from 'react-redux';
import { updateLookDraft, updateLook } from '../actions';
import { getLookItems } from '../reducers';

class EditLook extends Component {
	static propTypes = {
		lookDraftItems: PropTypes.object.isRequired,
		lookDraft: PropTypes.object.isRequired,
		updateLookDraft: PropTypes.func.isRequired,
		updateLook: PropTypes.func.isRequired
	}

	handleChange(field, value) {
		this.props.updateLookDraft(field, value);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.updateLook(this.props.lookDraft);
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
})

const mapDispatchToProps = ({
	updateLookDraft,
	updateLook
})

export default connect(mapStateToProps, mapDispatchToProps)(EditLook);
