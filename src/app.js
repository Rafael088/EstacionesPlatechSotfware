import {Route, Router, Routes} from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/interfaces/Home.js';
import Register from './pages/interfaces/Register.js';

import Navbar from './components/navBar';

import Estado from './components/Estado.js';
import Fallos from './components/Fallos.js';
import IA from './components/Ia'
import Errores from './components/errores.jsx';
import ForgetPw from './pages/interfaces/ForgetPw.js';

import { 
  FcElectronics,
  FcFlashOn,
  FcTreeStructure } 
  from "react-icons/fc";

function App() {
  
  const buttons = [
    {
      name:"Estados",
      path:"/home/estados",
      component : <Estado/>,
      icon : <FcElectronics size={'3em'} />
    },
    {
      name:"Fallos",
      path:"/home/fallos",
      component : <Fallos/>,
      icon : <FcFlashOn size = {'3em'} />
    },
    {
      name:"IA",
      path:"/home/IA",
      component : <IA/>,
      icon : <FcTreeStructure size = {'3em'} />
    }
  ]

  const path = window.location.pathname

  console.log(path)

  const pathPermit = ["/", "/register"]

  const Home = () => {
    return <>
      <div className="contHome">
          <div className='contPublic'>
            <Navbar buttons={buttons}/>
              <div className='contBody'>
              <Routes>
                  {buttons.map((v, i) => <Route path = {v.path} element = {v.component} key = {i}/>)}
              </Routes>
              </div>
          </div>
        </div>
    </>
  }

  const EnterApp = () => {
    if(path.search("home") != -1){
      return Home()
    }else{
      return <>
        <Routes>
            <Route path = "*" element = {<Errores/>}/>
        </Routes>
      </>
    }
  }

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/forgetPw' element={<ForgetPw/>}/>
        </Routes>

      {pathPermit.includes(path) ? <></> : EnterApp()}

    </>
  );
}

export default App;
