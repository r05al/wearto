import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function EditAction(props) {
  return (
		<div className={`${props.type}-edit`}>
			<Link to={`${props.type}s/${props.id}/edit`}>
				✎
			</Link>
		</div>
  );
}

EditAction.PropTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}

export default EditAction;
