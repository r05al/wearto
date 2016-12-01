import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router';

class FilterOptions extends Component {
  static propTypes = {
    lookDraft: PropTypes.object.isRequired,
    looks: PropTypes.object.isRequired,
    setLook: PropTypes.func.isRequired,
    updateDate: PropTypes.func.isRequired
  }

  state = {
    showFilter: false
  }

  toggleFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  render() {
    let datedLooks;
    const {lookDraft, looks, setLook, updateDate } = this.props;

    if (lookDraft.get('date')) {
      datedLooks = looks.filter((l) => l.get('date'))
                    .filter((l) => 
                      l.get('date').format('L') === lookDraft.get('date').format('L')
                    );
    } else {
      datedLooks = looks;
    }

    const looksSelection = datedLooks.map((look) => {
      return <option key={look.get('id')} value={look.get('id')}>{look.get('title')}</option>
    });

  	return(
			<div className="filter-options">
        <div id="search" onClick={this.toggleFilter.bind(this)}>&#9740;</div>
        <div className={this.state.showFilter ? 'search-options search-options--is-open':'search-options'}>
          <DatePicker 
            selected={lookDraft.get('date')}
            isClearable
            placeholderText='Select a date to filter by'
            popoverAttachment='bottom center'
            popoverTargetAttachment='top center'
            popoverTargetOffset='10px 50px'
            onChange={updateDate.bind(this)} 
            style={{flex: '2'}}
          />
          <select id="savedLook"
                  value={lookDraft.get('id')}
                  style={{flex: '1'}}
                  onChange={setLook.bind(this)}>
            <option value="">Build a Look</option>
            {looksSelection}
          </select>
        </div>
			</div>
  	);
  }
}

export default FilterOptions;
