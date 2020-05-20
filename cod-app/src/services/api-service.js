import axios from 'axios'


class CodApi {
    constructor() {
        // this.baseUrl = 'https://api.tracker.gg/api/v2/warzone/standard/profile'
        this.baseUrl = 'http://localhost:9999'
    }

    getProfileData(username, platform) {
        const url = `${this.baseUrl}/${platform}/${encodeURIComponent(username)}`
        return axios.get(url)
    }
}


export default CodApi