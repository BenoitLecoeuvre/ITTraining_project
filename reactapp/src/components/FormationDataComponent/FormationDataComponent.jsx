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

        <div className='section'>
            <div className='bloc'>

                <div>
                    <div className='name'>
                        <span><b>{formationData.name}</b></span>
                    </div>

                    <div className='formationLogo'>
                        <img className='dataLogo' src={formationData.logo} alt="Formation-logo" />
                    </div>
                </div>

                <div className='detail'>
                    <span>{`Description complète : ${formationData.descriptionDetail}`}</span>
                </div>

                <div className='lieux'>
                    <span>{`Lieux de la formation : `}</span>
                    <span className='underline'><strong>{`${lieuFormat(formationData.lieu)}`}</strong></span>
                </div>

                <div className='dates'>
                <span>{`Dates de la formation : `}</span>
                    <span className='underline'><strong>{`${dateFormat(formationData.startDate)} - ${dateFormat(formationData.endDate)}`}</strong></span>
                </div>

                <div>
                    <span className='underline'><strong>Important :</strong></span>
                    <span> Avant de commencer nos formations nous devons nous assurer que vous avez les prérequis. Voici un lien qui vous permettra de vous évaluer : <a href='https://www.w3schools.com/' target="_blank" rel="noreferrer">W3 School</a></span>
                </div>

                <div className='inscription'>
                    <button> <NavLink to={"/inscription"}> S'inscrire à cette formation </NavLink> </button>
                </div>

                <div>
                    <button className='retour' onClick={() => setEditFormations(true)}> Retour </button>
                </div>
            </div>

        </div >

    );
}

export default FormationDataComponent;
