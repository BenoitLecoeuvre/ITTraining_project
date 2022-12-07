import React from 'react';
import './navbarComponents.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HomeView from '../../views/homeView/homeView';
import FormationListView from '../../views/FormationListView/FormationListView'

const NavbarComponents = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='navigation'>
                    <button className='bouton'>
                        <Link to="/">Accueil</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/formations">Nos formations</Link>
                    </button>
                    <button className='bouton' >
                        <Link to="/inscription">S'inscrire</Link>
                    </button>
                    <button className='bouton' >
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/formations" element={<FormationListView/>}/>
                    <Route path="/inscription"/>
                    <Route path="/contact"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;
