import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import FormationList from '../../datas/FormationList.json';
import './ArrayFormationComponent.css'

const ArrayFormationComponent = ({listformation, updateFormationList}) => {

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col' className='formationID'>#</th>
                        <th scope='col' className='colonne'>Nom de la Formation</th>
                        <th scope='col' className='colonne'>Sous-Catégorie</th>
                        <th scope='col' className='colonne'>Prix</th>
                        <th scope='col' className='colonne'>Lieux</th>
                        <th scope='col' className='colonne'>Durée</th>
                    </tr>
                </thead>
                <tbody>
                    {listformation.map((formation, index) => (

                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{formation.formationName}</td>
                            <td>{formation.subCategory}</td>
                            <td>{formation.price} €</td>
                            <td>{formation.lieux[0]} / {formation.lieux[1]}</td>
                            <td>{formation.duree} jours</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ArrayFormationComponent;
