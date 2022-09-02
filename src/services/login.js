import axios from 'axios'

const oauth = async(body) => {
    const response =  await axios.post("http://18.216.197.222:8000/api/login/oauth", body)
    return response
}

export default oauth