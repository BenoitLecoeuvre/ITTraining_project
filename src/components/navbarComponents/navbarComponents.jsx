import React from 'react';
import './navbarComponents.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HomeView from '../../views/homeView/homeView';

const NavbarComponents = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='navigation'>
                    <button className='bouton' data-text="Accueil">
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
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="formations"/>
                    <Route path="inscription"/>
                    <Route path="contact"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;
