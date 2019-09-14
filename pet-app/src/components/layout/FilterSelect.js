import React, { Component } from 'react';


class FilterSelect extends Component {

    getOptionsMarkup(options) {
        let optionsMarkup = [];
        for (let o of Object.entries(options)) {
            optionsMarkup.push(<option key={o[0]} value={o[0]}>{o[1]}</option>)
        }
        return optionsMarkup;
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <select name={this.props.name} 
                        onChange={this.props.filterFunction}
                        activeValue={this.props.activeValue}>
                    {this.getOptionsMarkup(this.props.options)}
                </select>
            </React.Fragment>
        )
    }
}

export default FilterSelect;