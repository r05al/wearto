import React, { PropTypes } from 'react'
import List from '../components/List';
import { connect } from 'react-redux';
import { selectItem, toggleItem, toggleList } from '../actions';

function ListContainer({ clothingItems, listItems, selectItem, toggleItem, toggleList }) {
	return (
		<div className="selection-lists">
			{listItems.keySeq()
				.map(type => {
					const itemOfType = clothingItems.filter((item) => 
						item.get('type') === type);
					return (
						<List 
							key={type}
							type={type}
							clothingItems={itemOfType}
							listItems={listItems}
							selectItem={selectItem}
							toggleItem={toggleItem}
							toggleList={toggleList} 
						/>
					);
				}
			)}
		</div>
	);
}

ListContainer.propTypes = {
	clothingItems: PropTypes.object.isRequired,
	listItems: PropTypes.object.isRequired,
	selectItem: PropTypes.func.isRequired,
	toggleItem: PropTypes.func.isRequired,
	toggleList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	clothingItems: state.clothingItems,
	listItems: state.listItems,
})

const mapDispatchToProps = ({
	selectItem,
	toggleItem,
	toggleList,
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
