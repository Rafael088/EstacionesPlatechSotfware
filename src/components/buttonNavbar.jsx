import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const ButtonNavbar  = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <div className={isActive ? "bttn" : "btt"}>

        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    )
}

export default ButtonNavbar