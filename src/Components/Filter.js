import React from 'react';
import './Filter.css'

function Filter() {
    state = { checked: false }


    return (
        <div className="filter">
            <label>
                <Checkbox 
                checked={this.state.checked}
                onChange={this.handleCheckBoxChange}
                />
            </label>
        </div>
    )
}

export default Filter
