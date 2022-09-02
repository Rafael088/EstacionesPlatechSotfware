import axios from 'axios'

const conexionDb = async(db) => {
    axios.post("http://3.141.169.163:3000/api/login/oauth",   { "email"  : "diego@gmail.com",
    "passwd" : "1234567"}).console.log( response => console.log(response))
}

export default conexionDb