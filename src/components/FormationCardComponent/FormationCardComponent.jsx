import React from 'react';
import CareScaleComponent from '../CareScaleComponent/CareScaleComponent';
import './FormationCardComponent.css';

const FormationCardComponent = ({ formation, index}) => {
    // console.log(formation)
    return (
        <div className='card formation' key={index}>
            <div className="card-title">
                <span><b>{formation.formationName}</b></span>
            </div>

            <div>
                <img className='img' src={formation.logo} alt="Formation-logo" />
            </div>

            <div className="description">
                <span>{formation.description}</span>
            </div>

            <div className="duree">
                <span> <b>Durée : </b>{formation.duree} jours {`(`}{formation.duree*7} heures{`)`}</span>
            </div>

            <div className="difficulty">
                <span className='diff-label'><b>Difficulté : </b></span>
                <CareScaleComponent ScaleValue={formation.difficulty} className="stars"/>
            </div>

            <div className="price">
                <span><b>Prix : </b>{formation.price} €</span>
            </div>
        </div>
    );
}

export default FormationCardComponent;