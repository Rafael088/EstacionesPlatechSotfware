import axios from 'axios'
import Cookies from 'universal-cookie'

const conexionDb = async(db) => {

    const cookies = new Cookies();
    let url = 'http://localhost:3001/users'

    await axios.get(url, {params:{user: db.user, password: db.password}})
    .then(response =>{
        return response.data;
    })
    .then(response=>{
        if (response.length===1) {
            var respuesta=response[0];
            cookies.set('id', respuesta.id, {path:'/'});
            cookies.set('user', respuesta.user, {path:'/'});
            cookies.set('name', respuesta.name, {path:'/'});
            window.location.href="./home";
        }else{
            alert('El usuario o la contraseña no son correctos')
        }
    })
    .catch(error =>{console.log(error)})
}

export default conexionDb