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
                    <button className='bouton'>
                        <Link to="/formations" data-text="Nos formations">Nos formations</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/inscription" data-text="s'inscrire">S'inscrire</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/contact" data-text="Contact">Contact</Link>
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
