import axios from 'axios'

const oauth = (body) => {
    return axios.post("http://18.216.197.222:8000/api/login/oauth", body)
}

export default oauth