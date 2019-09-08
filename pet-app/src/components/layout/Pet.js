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
                    <a href={url + pet.id} className="btn btn-primary">api</a>
                </div>
            </div>
        ));
    }

    render() {
        return (<div className="row">
            <div className="col-sm-6">
                {this.getPetMarkup()}
            </div>
        </div>
        )
    }
}

const cardStyle = {
    // width: '18rem',
}

export default Pet;