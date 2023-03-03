import React from 'react';
import './navbarComponents.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import HomeView from '../../views/homeView/homeView';
import FormationListView from '../../views/FormationListView/FormationListView'
import RegisterView from '../../views/registerView/registerView';
import AdminView from '../../views/adminView/adminView';
import ContactView from '../../views/contactView/contactView';

const NavbarComponents = ({formationList, setFormationList, putFormation, deleteFormation, postFormation, setUserStatus, setUserName, userStatus, name, setName, firstname, setFirstname, firm, setFirm, mail, setMail, phone, setPhone, message, setMessage}) => {
    return (
        <div>
            <BrowserRouter>
                <div className='navigation'>
                    <Link to="/">
                        <button className='bouton'>
                            <p>Accueil</p>
                        </button>
                    </Link>
                    <Link to="/formations">
                        <button className='bouton'>
                            <p>Nos formations</p>
                        </button>
                    </Link>
                    <Link to="/inscription">
                        <button className='bouton'>
                            <p>S'inscrire</p>
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className='bouton'>
                            <p>Contact</p>
                        </button>
                    </Link>
                    {userStatus === 3 ?
                    <Link to='/admin'> 
                        <button className='admin bouton'>
                            <p>Admin</p>
                        </button>
                    </Link>
                    : null}
                </div>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/formations" element={<FormationListView formationList={formationList} />}/>
                    <Route path="/inscription" element={<RegisterView setUserStatus={setUserStatus} userStatus={userStatus} setUserName={setUserName}/>}/>
                    <Route path="/contact" element={<ContactView name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage} />}/>
                    <Route path="/admin" element={<AdminView formationList={formationList} setFormationList={setFormationList} deleteFormation={deleteFormation} postFormation={postFormation} name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage} putFormation={putFormation}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;