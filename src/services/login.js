import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const PORT = process.env.REACT_APP_PORT
const PATH = '/api/login/'

const oauth = (body) => {
    
    const url = "http" + "://" + HOST + ":" + PORT + PATH + 'oauth'

    return axios.post(url, body)
}

export default oauth

