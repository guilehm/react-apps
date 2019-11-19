import axios from 'axios'


class Rawg {

    constructor () {
        this.baseUrl = 'https://rawg.io/api/games'
    }

    getGameData(id) {
        return axios.get(`${this.baseUrl}/${id}`)
    }
}

export default Rawg