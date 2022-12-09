import React from 'react';
import './FormationDataComponent.css'
import 'bootstrap'
import { NavLink } from 'react-router-dom';

const FormationDataComponent = ({ formationData, setEditFormations }) => {
    // console.log(formationData)

    return (

        <div className='section'>
            <div className='bloc'>

                <div>
                    <div className='name'>
                        <span><b>{formationData.formationName}</b></span>
                    </div>

                    <div>
                        <img className='img' src={formationData.logo} alt="Formation-logo" />
                    </div>
                </div>

                <div className='detail'>
                    <span>{`Description complète : ${formationData.descriptionDetail}`}</span>
                </div>

                <div className='lieux'>
                    <span>{`Lieux de la formation : `}</span>
                    <span className='underline'><strong>{`${formationData.lieux[0]}`}</strong></span>
                    <span>{` ou `}</span>
                    <span className='underline'><strong>{`${formationData.lieux[1]}`}</strong></span>

                </div>

                <div className='dates'>
                    <span>{`Nous proposons deux dates de début de formation, le `}</span>
                    <span className='underline'><strong>{`${formationData.dates[0]}`}</strong></span>
                    <span>{` et `}</span>
                    <span className='underline'><strong>{`${formationData.dates[1]}`}</strong></span>
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
