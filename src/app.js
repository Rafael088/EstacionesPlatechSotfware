import {Route, Router, Routes, Navigate} from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/interfaces/Home.js';
import Register from './pages/interfaces/Register.js';

import Errores from './components/errores.jsx';
import ForgetPw from './pages/interfaces/ForgetPw.js';

import HomeRoutes from './routes/home';
import HomeWrapper from './components/homeWrapper'

function App() {
  
  const path = window.location.pathname

  const pathPermit = [
        { path      :"/",
          component : <Login/>
        }, 
        { path      : "/register",
          component : <Register/>
        },
        {
          "path"    :"/forgetPw",
          component : <ForgetPw/>
        }]
  
  const permited = []

  pathPermit.map((v) => permited.push(v.path))

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
          {pathPermit.map((v) => <Route exact path = {v.path} element = {v.component}/>)}
        </Routes>

        {permited.includes(path) ? <></> : EnterApp()}

    </>
  );
}

export default App;
