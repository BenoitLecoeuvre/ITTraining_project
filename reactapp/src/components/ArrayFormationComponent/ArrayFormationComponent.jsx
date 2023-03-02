import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './ArrayFormationComponent.css'

const ArrayFormationComponent = ({ formationList, setFormationList, listformation, deleteFormation, updateFormationList, editFormation, modifFormation, setModifFormation }) => {

    
    // Function pour supprimer une formation
    function removeFormation(id) {
        const idFormation = id;
        if (window.confirm(`Etes-vous sur de vouloir supprimer la formation n°${id}? Cette action est irréversible !`)) {
            deleteFormation(idFormation);
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '40px 0px' }}>Liste des formations</h2>

            <table className='table'>
                <thead>

                    <tr>
                        <th scope='col' className='formationID'>Formation N°</th>
                        <th scope='col' className='colonne'>Nom de la Formation</th>
                        <th scope='col' className='colonne'>Sous-Catégorie</th>
                        <th scope='col' className='colonne'>Prix</th>
                        <th scope='col' className='colonne'>Lieux</th>
                        <th scope='col' className='colonne'>Durée</th>
                        <th scope='col' className='colonneEdit'>Modifier</th>
                        <th scope='col' className='colonneSupp'>Supprimer</th>
                    </tr>
                </thead>

                <tbody>
                    {formationList.map((formation, index) => (
                        <tr key={index}>
                            <td className='ListFormation'>{formation.id}</td>
                            <td className='ListFormation'>{formation.name}</td>
                            <td className='ListFormation'>{formation.subCategory}</td>
                            <td className='ListFormation'>{formation.price} €</td>
                            <td className='ListFormation'>{formation.lieu}</td>
                            <td className='ListFormation'>{formation.duree} jours</td>
                            <td className='capsuleEdit'>
                                <FontAwesomeIcon icon={faPen} onClick={() => editFormation(formation)} />
                            </td>
                            <td className='capsuleSupp'>
                                <FontAwesomeIcon icon={faTrash} onClick={() => removeFormation(formation.id)} />
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    );
}

export default ArrayFormationComponent;
