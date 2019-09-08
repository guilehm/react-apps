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
                <select name="sex" onChange={this.props.filterPets}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="not_identified">Not Identified</option>
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