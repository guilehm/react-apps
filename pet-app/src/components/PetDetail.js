import React, { Component } from 'react';
import axios from 'axios';

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:8000';
const PLACEHOLDER_URL = `${REACT_APP_BASEURL}/static/web/img/placeholder.png`;


class PetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petId: props.match.params.id,
        }
    }

    componentDidMount() {
        axios.get(`${REACT_APP_BASEURL}/api/pets/${this.state.petId}/`)
            .then(res => this.setState(res.data))
            .catch((e => console.log(e)))
    }

    getPetDetailHeaderMarkup() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">{this.state.name}</h1>
                <p className="lead">{this.state.breed}</p>
                <hr className="my-4" />
                <p>{this.state.description}</p>
                <a className="btn btn-success btn-md" href="/" role="button">encontrei</a>
            </div>
        )
    }

    getPictureMarkup() {
        if (!this.state.pictures) return ''
        return this.state.pictures.map((picture) => (
            <img
                src={picture.url}
                alt={picture.alt ? picture.alt : this.state.name}
                style={mainPictureStyle}
                className="img-thumbnail">
            </img>
        ))
    }

    getPetDetailBodyMarkup() {
        return (
            <div className="">
                <img
                    src={this.state.mainPicture ? this.state.mainPicture.url : PLACEHOLDER_URL}
                    alt={this.state.name}
                    style={mainPictureStyle}
                    className="img-thumbnail">
                </img>
                {this.getPictureMarkup()}
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                {this.getPetDetailHeaderMarkup()}
                {this.getPetDetailBodyMarkup()}
            </div>
        )
    }
}

const mainPictureStyle = {
    maxWidth: '14rem',
}


export default PetDetail;