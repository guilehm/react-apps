import React, { Component } from 'react';
import FilterSelect from './FilterSelect';


const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:8000/api';


class Pet extends Component {

    sexOptions = {
        null: 'Todos',
        male: 'Macho',
        female: 'Fêmea',
        not_identified: 'Não identificado',
    }

    getPetMarkup() {
        let url = `${REACT_APP_BASEURL}/pets/`;
        return this.props.pets.map((pet) => (
            <div key={pet.id} className="card" style={cardStyle}>
                <img className="card-img-top"
                    src={pet.mainPicture ? pet.mainPicture.url : ''}
                    alt={pet.name} />
                <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">{pet.description}</p>
                    <a href={url + pet.id} className="btn btn-success">detalhes</a>
                    <a href={url + pet.id} className="btn btn-primary ml-1">api</a>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="container-fluid">
                <FilterSelect
                    name="sex"
                    label="Sexo:"
                    filterFunction={this.props.filterPets}
                    activeValue={this.props.filters.sex || 'null'}
                    options={this.sexOptions} />

                <FilterSelect
                    name="breed"
                    label="Raça:"
                    filterFunction={this.props.filterPets}
                    activeValue={this.props.filters ? this.props.filters.breeds : 'null'}
                    options={this.props.breeds} />
                <div className="card-group">{this.getPetMarkup()}</div>
            </div>
        )
    }
}

const cardStyle = {
    maxWidth: '24rem',
}

export default Pet;