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

}
