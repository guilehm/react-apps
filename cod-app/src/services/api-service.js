import axios from 'axios'


class CodApi {
    constructor() {
        this.baseUrl = 'https://dark-bot-alive.herokuapp.com/api/v2/warzone/standard/profile'
    }

    getProfileData(username, platform) {
        const url = `${this.baseUrl}/${platform}/${encodeURIComponent(username)}`
        return axios.get(url)
    }
}


export default CodApi