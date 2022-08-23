import {BrowserRouter, Route, Routes} from 'react-router-dom';//npm install react-router-dom
import Login from '../pages/login/login.js';
import Home from '../pages/interfaces/Home.js';
import Register from '../pages/interfaces/Register.js';
function Router() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default Router;
