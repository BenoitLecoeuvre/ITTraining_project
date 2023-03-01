import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './ArrayFormationComponent.css'

const ArrayFormationComponent = ({ listformation, updateFormationList, editFormation, modifFormation, setModifFormation}) => {

    // Function pour supprimer une formation
    function deleteFormation(index) {
        console.log(index)
        if (window.confirm(`Etes-vous sur de vouloir supprimer la formation n°${index + 1}? Cette action est irréversible !`)) {
            let newFormationList = listformation.filter((formation) => formation.id - 1 !== index);
            updateFormationList(newFormationList)
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
                    {listformation.map((formation, index) => (
                        <tr key={index}>
                            <td className='ListFormation'>{index + 1}</td>
                            <td className='ListFormation'>{formation.formationName}</td>
                            <td className='ListFormation'>{formation.subCategory}</td>
                            <td className='ListFormation'>{formation.price} €</td>
                            <td className='ListFormation'>{formation.lieux[0]} / {formation.lieux[1]}</td>
                            <td className='ListFormation'>{formation.duree} jours</td>
                            <td className='capsuleEdit'>
                                <FontAwesomeIcon icon={faPen} onClick={()=> editFormation(index)}/>
                            </td>
                            <td className='capsuleSupp'>
                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteFormation(index)} />
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
