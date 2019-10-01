import React, { Component } from 'react'


class FilterSelect extends Component {

    getOptionsMarkup(options) {
        return options
            .map((option, index) =>
                <option
                    key={index}
                    value={option.key}>
                    {option.name}
                </option>
            )
    }

    render() {
        return (
            <React.Fragment>
                <select
                    onChange={this.props.updateFilter}
                    name={this.props.name}
                    value={this.props.activeValue}>
                    {this.getOptionsMarkup(this.props.options)}
                </select>
                <button
                    name="clear"
                    onClick={this.props.clearFilter}>
                    Limpar
                </button>
            </React.Fragment>
        )
    }
}

export default FilterSelect