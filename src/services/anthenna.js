import axios from 'axios'

const HOST   = process.env.REACT_APP_HOST
const PORT   = process.env.REACT_APP_PORT
const PATH   = '/api/anthenna/'

const URL    =  "http" + "://" + HOST + ":" + PORT + PATH

const Ranthenna = (HEADER) => {

    const url = URL + 'Ranthenna'

    return axios.get(url, {
        headers: {
          'Authorization': HEADER
        },
    })    
}

const GanthennaLotLat = (HEADER, body) => {
  const url = URL + 'GanthennaLotLat'

  return axios.get(url,{
    params: {
      lng : body.lng,
      lat : body.lat
    },
    headers: {
      'Authorization': HEADER
    },
  })
}




export default Ranthenna
export const anthennaService = {GanthennaLotLat}
