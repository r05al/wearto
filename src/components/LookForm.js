import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import { getClothingItem } from '../reducers';

class LookForm extends Component {
	static propTypes = {
		buttonLabel: PropTypes.string.isRequired,
		clothingItems: PropTypes.object.isRequired,
		lookDraft: PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			date: PropTypes.object,
			pieces: PropTypes.object
		}).isRequired,
		handleChange: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		handleClose: PropTypes.func.isRequired
	};

	handleChange(field, e) {
		this.props.handleChange(field, e.target.value);
	}

	handleDate(field, e) {
		this.props.handleChange(field, e);
	}

	handleClose(e) {
		e.preventDefault();
		this.props.handleClose();
	}

	render() {
		const clothingItems = this.props.clothingItems;
		const lookDraft = this.props.lookDraft;
		const selectedPieces = lookDraft.get('pieces')
			.filter((item) => item );

		const images = selectedPieces.map((piece) => {
			const item = getClothingItem(clothingItems, piece);
			return <div key={piece} className="draft-img" 
									style={{width: '20%'}}>
							 <img src={item.get('href')} alt="" />
						 </div>;
		});

		return (
			<div>
				<div className="item big">
					<form onSubmit={this.props.handleSubmit.bind(this)}>
						<input type='text'
									 value={lookDraft.get('title')}
									 onChange={this.handleChange.bind(this,'title')}
									 placeholder="Look Name"
									 required
									 autoFocus /><br />
						<textarea value={lookDraft.get('description')}
											onChange={this.handleChange.bind(this,'description')}
											placeholder="Description" /><br />
						<DatePicker placeholderText="Click to select a date"
						            onChange={this.handleDate.bind(this, 'date')}
						            isClearable
						            selected={lookDraft.get('date')} />
            <div style={{display: 'flex'}}>
            	{ images }
            </div>
						<div className="actions">
							<button type="submit">{this.props.buttonLabel}</button>
						</div>
					</form>
				</div>
				<div className="overlay" onClick={this.handleClose.bind(this)}>
				</div>
			</div>
		);
	}
}

export default LookForm;
