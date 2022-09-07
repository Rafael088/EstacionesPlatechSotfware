import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ButtonNavBar from './buttonNavbar'

export default function Navbar({buttons}) {
  
  const subRutas = buttons.subRutas
  const ruta     = buttons.ruta

  return <>
    <div className='contNavBar'>
    <div className='contImg'/>
      <div className='contButtons'>
         
          {subRutas.map((v) => {
              if (v.name != ""){
                return <ButtonNavBar to={ruta + v.name} icon={v.icon}>{v.name.substring(1, v.name.length)}</ButtonNavBar>
              }
          })}
          
      </div>
    </div>
    </>
}
