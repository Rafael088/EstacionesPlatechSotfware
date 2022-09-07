import {Route, Router, Routes, Navigate} from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/interfaces/Home.js';
import Register from './pages/interfaces/Register.js';

import Errores from './components/errores.jsx';

import HomeRoutes from './routes/home';
import HomeWrapper from './components/homeWrapper'

function App() {
  
  const path = window.location.pathname

  const pathPermit = ["/", "/register"]

  const EnterApp = () => {
    if(path.search("home") != -1){
      return HomeWrapper()
    }else{
      return <>
        <Routes>
            <Route path = "/page-not-found" element = {<Errores/>}/>
            <Route path = "*" element = {<Navigate to="/page-not-found" />}/>
        </Routes>
      </>
    }
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
