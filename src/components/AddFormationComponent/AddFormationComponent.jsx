import React, { useState } from 'react';
import './AddFormationComponent.css'
import FormationList from '../../datas/FormationList.json';

const AddFormationComponent = ({setListTmp}) => {

    const [listformation , updateFormationList] = useState (FormationList);

    function createFormationHandler(e) {
        e.preventDefault();
        let id = listformation.length + 1;
        let formationName = e.target['formationName'].value;
        let category = e.target['category'].value;
        let subCategory = e.target['subCategory'].value;
        let description = e.target['description'].value;
        let descriptionDetail = e.target['descriptionDetail'].value;
        let duree = e.target['duree'].value;
        let price = e.target['price'].value;
        let difficulty = e.target['difficulty'].value;
        let lieux = e.target['lieux'].value;
        let dates = e.target['dates'].value;
        let logo = e.target['logo'].files[0];

        if (formationName !== "" && category !== "" && subCategory !== "" && description !== "" && descriptionDetail !== "" && duree !== "" && price !== "" && difficulty !== "" && lieux !== "" && dates !== "") {
            const newFormation = { id, formationName, category, subCategory, description, descriptionDetail, duree, price, difficulty, lieux, dates, logo }
            console.table(newFormation);
            let listTmp = [...listformation];
            listTmp.push(newFormation);
            updateFormationList(listTmp);
            console.table(listTmp);
            setListTmp={setListTmp};
            console.table({setListTmp});
            alert(`La formation a bien été ajoutée`);
        } else {
            alert("Veuillez Remplir tous les champs")
        }
    }

    return (
        <div>
            <form onSubmit={createFormationHandler} id="addFormationForm">
                <div className='formContainer'>
                <label htmlFor='formationName'>Nom de la formation : </label>
                <input type="text" placeholder='Nom de la formation' name='formationName' id='formationName' />
                <div>
                    <label htmlFor='formationCategory' className='labelSelect'>Sélectionner une catégorie : </label>
                    <select name='category' id='category'>
                        <option value="">--Sélectionner une catégorie--</option>
                        <option value="Compétences transverses">Compétences transverses</option>
                        <option value="Bases de données et langages">Bases de données et langages</option>
                        <option value="SI et réseaux">SI et réseaux</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='formationSubCategory' className='labelSelect'>Sélectionner une catégorie : </label>
                    <select name='subCategory' id='subCategory'>
                        <option value="">--Sélectionner une sous-catégorie--</option>
                        <option value="Agilité">Agilité</option>
                        <option value="Gestion de projet">Gestion de projets</option>
                        <option value="Bases de données">Bases de données</option>
                        <option value="Langages de développement">Langages de développement</option>
                        <option value="Système d'information">Système d'information</option>
                        <option value="Réseaux">Réseaux</option>
                    </select>
                </div>

                <label className='label'>Description : </label>
                <input type="text" placeholder='Ecrivez une description courte (moins de 100 caractères)' name='description' id='description' />
                <div>
                    <label className='label'>Description détaillée : </label>
                     <input type="text" placeholder='Ecrivez une description plus détaillée' name='descriptionDetail' id='descriptionDetail' />
                </div>
                <label className='label'>Durée de la formation : </label>
                <input type="number" placeholder='nombre de jours' name='duree' id='duree' />
                <label className='label'>Prix : </label>
                <input type="number" placeholder='--- €' name='price' id='price' />
                <div className='formationDifficulty'>
                    <label htmlFor='difficulty' className='labelSelect'>Sélectionner la difficulté : </label>
                    <select name='difficulty' id='difficulty'>
                        <option value="">----</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='formationLieux'>
                    <label htmlFor='lieux' className='labelSelect'>Sélectionner le centre qui propose cette formation : </label>
                    <select name='lieux' id='lieux'>
                        <option value="">----</option>
                        <option value="Lille">Lille</option>
                        <option value="Paris">Paris</option>
                    </select>
                </div>
                <label htmlFor='dates'>Sélectionnez une date de début de formation : </label>
                <input type='date' name='dates' id='dates'/>
                <label className='logo'>Logo : </label>
                <input type="file" name='logo' id='logo' />
                <div>
                    <input type="submit" />
                </div>
                </div>
            </form>
        </div>
    );
}

export default AddFormationComponent;
