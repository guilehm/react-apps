import React from 'react';

function Pet() {
    return (
        <div class="card" style={cardStyle}>
            <img class="card-img-top" src="" alt="pet name" />
            <div class="card-body">
                <h5 class="card-title">Name</h5>
                <p class="card-text">Pet description.</p>
                <a href="#" class="btn btn-primary">pet link</a>
            </div>
        </div>
    )
}


const cardStyle = {
    width: '18rem',
}

export default Pet;