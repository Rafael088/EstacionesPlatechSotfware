import {Route, Router, Routes} from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/interfaces/Home.js';
import Register from './pages/interfaces/Register.js';

import Navbar from './components/navBar';

import Estado from './components/Estado.js';
import Fallos from './components/Fallos.js';

import { 
  FcElectronics,
  FcFlashOn } 
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
    }
  ]
  const path = window.location.pathname

  const pathPermit = ["/", "/register"]

  const EnterApp = () => {
    return <>
      <div className="contHome">
          <div className='contPublic'>
            <Navbar buttons={buttons}/>
              <Routes>
                  <Route path='/home' element={<Home/>}/>
              </Routes>
              <div className='contBody'>
              <Routes>
                  {buttons.map((v, i) => <Route path = {v.path} element = {v.component} key = {i}/>)}
              </Routes>
              </div>
          </div>
        </div>
    </>
  }

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>

      {pathPermit.includes(path) ? <></> : EnterApp()}

    </>
  );
}

export default App;
