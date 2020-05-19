import axios from 'axios'


class CodApi {
    constructor() {
        // this.baseUrl = 'https://api.tracker.gg/api/v2/warzone/standard/profile'
        this.baseUrl = 'http://localhost:9999'
    }

    getProfileData(platform, username) {
        const url = `${this.baseUrl}/${platform}/${username}`
        console.log(`'fetching' ${url}`)
        return axios.get(url)
    }
}


export default CodApi