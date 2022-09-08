import { Routes, Route} from 'react-router-dom'
import Navbar from './navBar'
import HomeRoutes from '../routes/home'

import { getUser } from '../redux/oauth/Slice';
import { useSelector } from 'react-redux';

const HomeWrapper = () => {

    const subRutas = HomeRoutes.subRutas
    const ruta     = HomeRoutes.ruta
    const path = window.location.pathname
    const RutasRevi = []

    const user = useSelector(getUser)

    if(user.value == null){
        window.location.href = '../'
    }
    
    subRutas.map((v) => RutasRevi.push(ruta + v.name))
    
    if(!RutasRevi.includes(path)){
        window.location.href = '../page-not-found'
    }
    
    return <>
      <div className="contHome">
          <div className='contPublic'>
            <Navbar buttons={HomeRoutes}/>
              <div className='contBody'>
              <Routes>
                  {subRutas.map((v, i) => <Route path = {ruta + v.name} element = {v.component} key = {i}/>)}
              </Routes>
              </div>
          </div>
        </div>
    </>
}

export default HomeWrapper