import React from 'react'

import Header from './Header'
import Inputs from '../../containers/Inputs.container'
import Chart from '../../containers/Chart.container'


const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Inputs />
            <Chart />
        </React.Fragment>
    )
}


export default Home