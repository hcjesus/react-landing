import React from 'react';
import Body from './Body';

const Header = (props) => {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark text-light navstyle  mb-2 rounded">
            <a className="navbar-brand " href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse " id="navbarText">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <a className="nav-link" href="#team">Team </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item"><a className="nav-link px-2" href="#"><span className="fa fa-facebook"></span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#"><span className="fa fa-twitter"></span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#"><span className="fa fa-youtube"></span></a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#"><span className="fa fa-linkedin"></span></a></li>
                    </ul>
                </div>
        </nav>
        <Body/>

    </div>
    
  )
}

export default Header;