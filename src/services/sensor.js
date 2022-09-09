import axios from 'axios'

const HOST   = process.env.REACT_APP_HOST
const PORT   = process.env.REACT_APP_PORT
const PATH   = '/api/sensor/'

const URL    =  "http" + "://" + HOST + ":" + PORT + PATH

const sensorId = (HEADER,id) => {

    const url = URL + 'sensorId'

    return axios.get(url, {
        params:{
            id : id
        },
        headers: {
          'Authorization': HEADER
        },
    })    
}

export default sensorId