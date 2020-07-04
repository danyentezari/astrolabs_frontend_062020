import React from 'react';
import Button from './Button';
import logo from './logo.svg';
import Jumbotron from './Jumbotron';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Bootstrap
            </a>
            <div style={{display: 'flex'}}>
                <Button 
                className="btn-primary">
                    Home
                </Button>

                <Button
                className="btn-danger">
                    About
                </Button>
            </div>
        </nav>
    )
}

export default NavBar;