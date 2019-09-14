import React, { Component } from 'react';


class FilterSelect extends Component {

    getOptionsMarkup(options) {

        let optionsMarkup = [];
        if (Array.isArray(options)) {
            // eslint-disable-next-line
            for (let o of options) {
                optionsMarkup.push(<option key={o} value={o}>{o}</option>)
            }
        } else {
            // eslint-disable-next-line
            for (let key of Object.keys(options)) {
                optionsMarkup.push(<option key={key} value={key}>{options[key]}</option>)
            }
        }
        return optionsMarkup;
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <select name={this.props.name}
                    onChange={this.props.filterFunction}
                    value={this.props.activeValue}>
                    {this.getOptionsMarkup(this.props.options)}
                </select>
            </React.Fragment>
        )
    }
}

export default FilterSelect;