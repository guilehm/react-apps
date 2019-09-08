import React, { Component } from 'react';



class Pet extends Component {

    getPetMarkup() {
        return this.props.pets.map((pet) => (
            <div key={pet.id} className="card" style={cardStyle}>
                <img className="card-img-top" src="" alt={pet.name} />
                <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">{pet.description}</p>
                    <a href="#" className="btn btn-primary">{pet.link}</a>
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