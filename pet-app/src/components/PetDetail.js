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

    render() {
        console.log(this.state)
        return (
            <div className="container-fluid">
                <h1>{this.state.name}</h1>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default PetDetail;