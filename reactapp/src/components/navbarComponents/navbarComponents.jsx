import React from 'react';
import './navbarComponents.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeView from '../../views/homeView/homeView';
import FormationListView from '../../views/FormationListView/FormationListView'
import RegisterView from '../../views/registerView/registerView';
import AdminView from '../../views/adminView/adminView';
import ContactView from '../../views/contactView/contactView';

const NavbarComponents = ({ formationList, setFormationList, putFormation, deleteFormation, postFormation,
    setUserStatus, setUserName, userStatus, name, setName, firstname, setFirstname, firm, setFirm, mail, setMail, phone, setPhone, message, setMessage,
    stagiaireList, setStagiaireList,
    formateursList, setFormateursList }) => {
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
                    <button className='bouton'>
                        <Link to="/inscription">S'inscrire</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/contact">Contact</Link>
                    </button>
                    {userStatus === 3 ?
                        <button className='bouton'>
                            <Link to='/admin'>Admin</Link>
                        </button>
                        : null}
                </div>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/formations" element={<FormationListView formationList={formationList} />} />
                    <Route path="/inscription" element={<RegisterView setUserStatus={setUserStatus} userStatus={userStatus} setUserName={setUserName} />} />
                    <Route path="/contact" element={<ContactView name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage} />} />
                    <Route path="/admin" element={<AdminView
                        formationList={formationList} setFormationList={setFormationList} deleteFormation={deleteFormation} postFormation={postFormation} putFormation={putFormation}
                        name={name} setName={setName} firstname={firstname} setFirstname={setFirstname} firm={firm} setFirm={setFirm} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage}
                        stagiaireList={stagiaireList} setStagiaireList={setStagiaireList}
                        formateursList={formateursList} setFormateursList={setFormateursList} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default NavbarComponents;
