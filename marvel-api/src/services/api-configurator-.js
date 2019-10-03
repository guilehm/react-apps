const crypto = require('crypto')

const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY


class Marvel {

    constructor(
        privateKey=REACT_APP_PRIVATE_KEY,
        publicKey=REACT_APP_PUBLIC_KEY,
        apiVersion='v1',
    ) {
        this.privateKey=privateKey
        this.publicKey=publicKey
        this.apiVersion=apiVersion
    }

    getAuthData() {
        let timestamp = +new Date()
        let formatedString = `${timestamp}${this.privateKey}${this.publicKey}`
        let hash = crypto.createHash('md5').update(formatedString).digest("hex")
        return {
            ts: timestamp,
            apikey: this.publicKey,
            hash: hash
        }
    }

}

export default new Marvel()