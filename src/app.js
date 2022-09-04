import {Route, Router, Routes} from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/interfaces/Home.js';
import Register from './pages/interfaces/Register.js';

import Navbar from './components/navBar';

import Estado from './components/Estado.js';
import Fallos from './components/Fallos.js';

function App() {
  
  const buttons = [
    {
      name:"Estados",
      path:"/home/estados",
      component : <Estado/>
    },
    {
      name:"Fallos",
      path:"/home/fallos",
      component : <Fallos/> 
    }
  ]
  return (
    <>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <div className="contHome">
          <div className='contPublic'>
            <Navbar buttons={buttons}/>
              <Routes>
                  <Route path='/home/*' element={<Home/>}/>
              </Routes>
              <div className='contBody'>
              <Routes>
                  {buttons.map((v) => <Route path = {v.path} element = {v.component}/>)}
              </Routes>
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
