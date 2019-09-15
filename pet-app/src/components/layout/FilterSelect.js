import React, { Component } from 'react';


class FilterSelect extends Component {

    getOptionsMarkup(options) {

        let optionsMarkup = [];
        if (Array.isArray(options)) {
            options.map((option) => {
                return optionsMarkup.push(<option key={option} value={option}>{option}</option>)
            })
        } else {
            Object.keys(options).map((key) => {
                return optionsMarkup.push(<option key={key} value={key}>{options[key]}</option>)
            })
        }
        return optionsMarkup;
    }

    render() {
        return (
            <React.Fragment>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">{this.props.label}</button>
                </div>
                <select style={selectStyle} className="custom-select" name={this.props.name}
                    onChange={this.props.filterFunction}
                    value={this.props.activeValue}>
                    {this.getOptionsMarkup(this.props.options)}
                </select>
            </React.Fragment>
        )
    }
}

const selectStyle = {
    maxWidth: '200px'
}

export default FilterSelect;