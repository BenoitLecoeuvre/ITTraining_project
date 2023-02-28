import React from 'react';
import './AddFormationComponent.css'

const AddFormationComponent = ({ listformation, updateFormationList, modifFormation,
    formationName, setFormationName, category, setCategory, subCategory, setSubCategory, description, setDescription, descriptionDetail, setDescriptionDetail,
    duree, setDuree, price, setPrice, difficulty, setDifficulty, lieux, setLieux, dates, setDates }) => {

    // Récupération des datas de la nouvelle formation à créer
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
        // Obliger user à compléter tous les champs (sauf image pour l'instant)
        if (formationName !== "" && category !== "" && subCategory !== "" && description !== "" && descriptionDetail !== "" && duree !== "" && price !== "" && difficulty !== "" && lieux !== "" && dates !== "") {
            const newFormation = { id, formationName, category, subCategory, description, descriptionDetail, duree, price, difficulty, lieux, dates, logo }
            let listTmp = [...listformation];
            listTmp.push(newFormation);
            updateFormationList(listTmp);
            alert(`La formation a bien été ajoutée`);
        } else alert("Veuillez Remplir tous les champs")
    }

    // Récupération des datas de la formation modifiée
    function updateFormationData(e) {
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
        // Obliger user à compléter tous les champs (sauf image pour l'instant)
        if (formationName !== "" && category !== "" && subCategory !== "" && description !== "" && descriptionDetail !== "" && duree !== "" && price !== "" && difficulty !== "" && lieux !== "" && dates !== "") {
            const newFormation = { id, formationName, category, subCategory, description, descriptionDetail, duree, price, difficulty, lieux, dates, logo }
            let tmpList = [];
            for (let formation of listformation) {
                if (formation.id === newFormation.id) {
                    formation.id = newFormation.id;
                    formation.formationName = newFormation.formationName;
                    formation.category = newFormation.category;
                    formation.subCategory = newFormation.subCategory;
                    formation.description = newFormation.description;
                    formation.descriptionDetail = newFormation.descriptionDetail;
                    formation.duree = newFormation.duree;
                    formation.price = newFormation.price;
                    formation.difficulty = newFormation.difficulty;
                    formation.lieux = newFormation.lieux;
                    formation.dates = newFormation.dates;
                    formation.logo = newFormation.logo;
                    tmpList.push(formation)
                } else tmpList.push(formation)
            }
            console.log(tmpList)
            updateFormationList(tmpList)
            alert(`La formation a bien été modifiée`);
        } else alert("Veuillez Remplir tous les champs")
    }

    return modifFormation === false ? (
        <div>
            <form onSubmit={createFormationHandler} id="addFormationForm">
                <div className='formContainer'>

                    <div className='nomFormation'>
                        <label className='formationName' htmlFor='formationName'>- Nom de la formation : </label>
                        <input type="text" placeholder={category} name='formationName' id='formationName' />
                    </div>

                    <div className='formationCat'>
                        <label htmlFor='category' className='labelSelect'>- Sélectionner une catégorie : </label>
                        <select name='category' id='category'>
                            <option value="">--Sélectionner une catégorie--</option>
                            <option value="Compétences transverses">Compétences transverses</option>
                            <option value="Bases de données et langages">Bases de données et langages</option>
                            <option value="SI et réseaux">SI et réseaux</option>
                        </select>
                    </div>

                    <div className='formationCat'>
                        <label htmlFor='subCategory' className='labelSelect'>- Sélectionner une catégorie : </label>
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

                    <div className='description'>
                        <label className='label' htmlFor='description'>- Description : </label>
                        <input type="text" placeholder='Ecrivez une description courte (moins de 100 caractères)' name='description' id='description' />
                    </div>

                    <div className='description'>
                        <label className='label' htmlFor='descriptionDetail'>- Description détaillée : </label>
                        <input type="text" placeholder='Ecrivez une description plus détaillée' name='descriptionDetail' id='descriptionDetail' />
                    </div>

                    <div className='formationDure'>
                        <label className='label' htmlFor='duree'>- Durée de la formation : </label>
                        <input type="number" placeholder='nombre de jours' name='duree' id='duree' />
                    </div>

                    <div className='formationPrix'>
                        <label className='label' htmlFor='price'>- Prix : </label>
                        <input type="number" placeholder='--- €' name='price' id='price' />
                    </div>

                    <div className='formationDifficulty'>
                        <label htmlFor='difficulty' className='labelSelect'>- Sélectionner la difficulté : </label>
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
                        <label htmlFor='lieux' className='labelSelect'>- Sélectionner le centre qui propose cette formation : </label>
                        <select name='lieux' id='lieux'>
                            <option value="">----</option>
                            <option value="Lille">Lille</option>
                            <option value="Paris">Paris</option>
                        </select>
                    </div>

                    <div className='formationDate'>
                        <label htmlFor='dates'>- Sélectionnez une date de début de formation : </label>
                        <input type='date' name='dates' id='dates' />
                    </div>

                    <div className='addFormationLogo'>
                        <label className='logo' htmlFor='logo'>- Logo : </label>
                        <input type="file" name='logo' id='logo' />
                    </div>

                    <div>
                        <input type="submit" />
                    </div>

                </div>
            </form>
        </div>
    )
        :
        <div>
            <form onSubmit={updateFormationData} id="addFormationForm">
                <div className='formContainer'>

                    <div className='nomFormation'>
                        <label className='formationName' htmlFor='formationName'>- Nom de la formation : </label>
                        <input type="text" placeholder={formationName} name='formationName' id='formationName' />
                    </div>

                    <div className='formationCat'>
                        <label htmlFor='category' className='labelSelect'>- Sélectionner une catégorie : </label>
                        <select name='category' id='category'>
                            <option value="">{category}</option>
                            <option value="Compétences transverses">Compétences transverses</option>
                            <option value="Bases de données et langages">Bases de données et langages</option>
                            <option value="SI et réseaux">SI et réseaux</option>
                        </select>
                    </div>

                    <div className='formationCat'>
                        <label htmlFor='subCategory' className='labelSelect'>- Sélectionner une catégorie : </label>
                        <select name='subCategory' id='subCategory'>
                            <option value="">{subCategory}</option>
                            <option value="Agilité">Agilité</option>
                            <option value="Gestion de projet">Gestion de projets</option>
                            <option value="Bases de données">Bases de données</option>
                            <option value="Langages de développement">Langages de développement</option>
                            <option value="Système d'information">Système d'information</option>
                            <option value="Réseaux">Réseaux</option>
                        </select>
                    </div>

                    <div className='description'>
                        <label className='label' htmlFor='description'>- Description : </label>
                        <input type="text" placeholder={description} name='description' id='description' />
                    </div>

                    <div className='description'>
                        <label className='label' htmlFor='descriptionDetail'>- Description détaillée : </label>
                        <input type="text" placeholder={descriptionDetail} name='descriptionDetail' id='descriptionDetail' />
                    </div>

                    <div className='formationDure'>
                        <label className='label' htmlFor='duree'>- Durée de la formation : </label>
                        <input type="number" placeholder={duree} name='duree' id='duree' />
                    </div>

                    <div className='formationPrix'>
                        <label className='label' htmlFor='price'>- Prix : </label>
                        <input type="number" placeholder={price} name='price' id='price' />
                    </div>

                    <div className='formationDifficulty'>
                        <label htmlFor='difficulty' className='labelSelect'>- Sélectionner la difficulté : </label>
                        <select name='difficulty' id='difficulty'>
                            <option value="">{difficulty}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className='formationLieux'>
                        <label htmlFor='lieux' className='labelSelect'>- Sélectionner le centre qui propose cette formation : </label>
                        <select name='lieux' id='lieux'>
                            <option value="">{lieux}</option>
                            <option value="Lille">Lille</option>
                            <option value="Paris">Paris</option>
                        </select>
                    </div>

                    <div className='formationDate'>
                        <label htmlFor='dates'>- Sélectionnez une date de début de formation : </label>
                        <input type='date' name='dates' id='dates' />
                    </div>

                    <div className='addFormationLogo'>
                        <label className='logo' htmlFor='logo'>- Logo : </label>
                        <input type="file" name='logo' id='logo' />
                    </div>

                    <div>
                        <input type="submit" />
                    </div>

                </div>
            </form>
        </div>
        ;
}

export default AddFormationComponent;
