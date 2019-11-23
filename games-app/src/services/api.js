import axios from 'axios'


class Rawg {

    constructor () {
        this.baseUrl = 'https://rawg.io/api/games'
    }

    getGameData(id) {
        return axios.get(`${this.baseUrl}/${id}`)
    }

    searchByName(name) {
        const term = name.split(' ').join('+')
        return axios.get(`${this.baseUrl}?search=${term}`)
    }
}

export default Rawg