import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ButtonNavBar from './buttonNavbar'

export default function Navbar({buttons}) {
  
  return <>
    <div className='contNavBar'>
    <div className='contImg'/>
      <div className='contButtons'>
          
          {buttons.map((v,i) => <ButtonNavBar to={v.path} key = {i}>{v.name} </ButtonNavBar>)}
          
      </div>
    </div>
    </>
}
