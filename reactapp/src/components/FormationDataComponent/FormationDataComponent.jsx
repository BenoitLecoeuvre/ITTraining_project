import React from 'react';
import './FormationDataComponent.css'
import 'bootstrap'
import { NavLink } from 'react-router-dom';

const FormationDataComponent = ({ formationData, setEditFormations }) => {
    console.log(formationData)

    function dateFormat(date) {
        let tmpDate = new Date(date).toLocaleDateString("fr")
        return tmpDate
    }

    function lieuFormat(lieu){
        if (lieu ===0)
        return "Lille"
        else return "Paris"
    }

    return (

        <section className='section'>
            <div className='bloc'>

                <div>
                    <div className='name'>
                        <b>{formationData.name}</b>
                    </div>

                    <div className='formationLogo'>
                        {(formationData.logo === null) ?
                            <img className='logo' src=".\img\Nologo.png" alt="No-logo" /> :
                            <img className='logo' src={formationData.logo} alt="Formation-logo" />}
                    </div>
                </div>

                <div className='detail'>
                    <b><span className='underline'>Description</span> :</b> <span>{formationData.descriptionDetail}</span>
                </div>

                <div className='dates_lieux'>
                    <div className='lieux'>
                        <p>{`Lieu de la formation : `}
                        <strong>{`${lieuFormat(formationData.lieu)}`}</strong></p>
                    </div>

                    <div className='dates'>
                        <p>{`Dates de la formation : `}
                        <strong>{`${dateFormat(formationData.startDate)} - ${dateFormat(formationData.endDate)}`}</strong></p>
                    </div>
                </div>

                <div className='important'>
                    <b><span className='underline'>Important</span> :</b>
                    <span> Avant de commencer nos formations nous devons nous assurer que vous avez les prérequis. Voici un lien qui vous permettra de vous évaluer : <a href='https://www.w3schools.com/' target="_blank" rel="noreferrer">W3 School</a></span>
                </div>

                <div className='details_buttons'>
                    <div className='inscription'>
                        <button> <NavLink to={"/inscription"}> S'inscrire à cette formation </NavLink> </button>
                    </div>

                    <div>
                        <button className='retour' onClick={() => setEditFormations(true)}> Retour </button>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default FormationDataComponent;
