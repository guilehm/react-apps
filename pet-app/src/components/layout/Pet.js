import React, { Component } from 'react';



class Pet extends Component {

    getPetMarkup() {
        let url = 'https://gui-pets.herokuapp.com/api/pets/';
        return this.props.pets.map((pet) => (
            <div key={pet.id} className="card" style={cardStyle}>
                <img className="card-img-top" src={pet.mainPicture.url} alt={pet.name} />
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
            <React.Fragment>
                <label>Sex:</label>
                <select name="sex" 
                        onChange={this.props.filterPets}
                        value={this.props.sex ? this.props.sex : 'null'}>
                    <option value="male">Macho</option>
                    <option value="female">Fêmea</option>
                    <option value="not_identified">Não identificado</option>
                    <option value="null">Todos</option>
                </select>
                <div className="card-group">
                    {this.getPetMarkup()}
                </div>
            </React.Fragment>
        )
    }
}

const cardStyle = {
    // width: '18rem',
}

export default Pet;