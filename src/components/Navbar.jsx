import React from 'react'
import {NavLink} from 'react-router-dom';
import arrow from "./arrow.png";
const Navbar = () => {
    return (
        <>
        <div class="box-content h-22 w-90 p-4 border-4 ... font-mono p-2 text-center text-3xl bg-blue-100">
            Let post <b className="text-blue-800">anonymously</b>
            <NavLink to="/" className="float-right">&#x2190;</NavLink>
        </div>
        
      </>
    )
}

export default Navbar
