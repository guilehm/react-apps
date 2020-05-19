import axios from 'axios'


class Cod {
    constructor() {
        this.baseUrl = 'https://api.tracker.gg/api/v2/warzone/standard/profile'
    }

    getProfileData(platform, username) {
        const url = `${this.baseUrl}/${platform}/${username}`
        return axios.get(url)
    }
}


export default Cod