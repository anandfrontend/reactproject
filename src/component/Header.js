import React from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css';

import redlogo from '../images/logo.png';


const Header = () => {
    return (
            <div className="headerdiv">
            <nav className="navbar navbar-expand-lg navbar-light padleft_right">
                <div className="container-fluid">

                <img src={redlogo} alt="" className="logoimg"></img>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end ">
                            <li className="nav-item">
                                <Link exact to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link exact to="/" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link exact to="/about">About</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link exact to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact to="/careers" >Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link exact to="/contact">Contact Us</Link>
                            </li>




              </ul>

    </div>
  </div>
</nav>
        </div>




    )
}

export default Header
