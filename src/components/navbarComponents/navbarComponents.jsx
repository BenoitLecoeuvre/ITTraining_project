import React from 'react';
import './navbarComponents.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HomeView from '../../views/homeView/homeView';
<<<<<<< HEAD
import ContactView from '../../views/contactView/contactView';
=======
import FormationListView from '../../views/FormationListView/FormationListView'
>>>>>>> 159b6d34b10dfa82bd242a21fcde54a7648e459d

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
<<<<<<< HEAD
                    <button className='bouton'>
                        <Link to="/inscription">S'inscrire</Link>
                    </button>
                    <button className='bouton'>
=======
                    <button className='bouton' >
                        <Link to="/inscription">S'inscrire</Link>
                    </button>
                    <button className='bouton' >
>>>>>>> 159b6d34b10dfa82bd242a21fcde54a7648e459d
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
<<<<<<< HEAD
                    <Route path="formations"/>
                    <Route path="inscription"/>
                    <Route path="/contact" element={<ContactView/>}/>
=======
                    <Route path="/formations" element={<FormationListView/>}/>
                    <Route path="/inscription"/>
                    <Route path="/contact"/>
>>>>>>> 159b6d34b10dfa82bd242a21fcde54a7648e459d
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;
