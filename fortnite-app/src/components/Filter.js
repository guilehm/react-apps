import React, { Component } from 'react'


class FilterSelect extends Component {

    getOptionsMarkup(options) {
        options
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
            <select
                name={this.props.name}
                value={this.props.activeValue}>
                {this.getOptionsMarkup(this.props.options)}
            </select>
        )
    }
}

export default FilterSelect