import React from 'react';
import './navbarComponents.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

const NavbarComponents = () => {
    return (
        <div className='navigation'>
            <BrowserRouter>
                <div className='menu'>
                    <button className='bouton' data-text="Acceuil">
                        <Link to="/"></Link>
                    </button>
                    <button className='bouton' data-text="Nos formations">
                        <Link to="/formations"></Link>
                    </button>
                    <button className='bouton' data-text="s'inscrire">
                        <Link to="/inscription"></Link>
                    </button>
                    <button className='bouton' data-text="Contact">
                        <Link to="/contact"></Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/"/>
                    <Route path="formations"/>
                    <Route path="inscription"/>
                    <Route path="contact"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;
