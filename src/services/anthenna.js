import axios from 'axios'
import { useSelector } from 'react-redux';
import { getHeader } from '../redux/header/Slice'

const HOST   = process.env.REACT_APP_HOST
const PORT   = process.env.REACT_APP_PORT
const PATH   = '/api/anthenna/'


const Ranthenna = (HEADER) => {

    const url = "http" + "://" + HOST + ":" + PORT + PATH + 'Ranthenna'

    return axios.get(url, {
        headers: {
          'Authorization': HEADER
        },
    })    
}

export default Ranthenna

