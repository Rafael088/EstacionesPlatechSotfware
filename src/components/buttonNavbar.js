import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function ButtonNavbar({ to, children, icon, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <>
   
        <Link to={to} {...props} className={isActive ? "bttn" : "btt"}>
          {icon}
          {children}
        </Link>

      </>
    )
}

export default ButtonNavbar