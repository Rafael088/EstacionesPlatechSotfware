import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ButtonNavBar from './buttonNavbar'

export default function Navbar({buttons}) {
  
  const subRutas = buttons.subRutas
  const ruta     = buttons.ruta

  const closeSession = () => {
    localStorage.removeItem('user')
    window.location.href = "../"
  }

  return <>
    <div className='contNavBar'>
    <div className='contImg'/>
      <div className='contButtons'>
         
          {subRutas.map((v,i) => {
              if (v.name != ""){
                return <ButtonNavBar to={ruta + v.name} icon={v.icon} key={i}>{v.name.substring(1, v.name.length)}</ButtonNavBar>
              }
          })}
          
      </div>
      <div className="contFooterNav">
        <input type="button" value="Cerrar Sesion" onClick = {() => closeSession()}/>
      </div>
    </div>
    </>
}

