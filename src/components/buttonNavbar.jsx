import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const ButtonNavbar  = ({ to, children, icon, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <div className="contLink">
   
        <Link to={to} {...props} className={isActive ? "bttn" : "btt"}>
          {icon}
          {children}
        </Link>

      </div>
    )
}

export default ButtonNavbar