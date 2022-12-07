import React, { useState } from 'react';
import FormationList from '../../../src/datas/FormationList.json';
import FormationCardComponent from '../../components/FormationCardComponent/FormationCardComponent';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import FormationDataComponent from '../../components/FormationDataComponent/FormationDataComponent';
import './FormationListView.css'

const FormationListView = () => {

    // Premier filtre pour catégory
    const [activeCategory, setActiveCategory] = useState('');
    const categoryList = FormationList.reduce(
        (acc, elem) => acc.includes(elem.category) ? acc : acc.concat(elem.category), []
    )
    // console.log(categoryList)       //: Compétences transverses / Bases de données et langages / SI et Réseaux

    // Second filtre pour subCategory
    const [activeSubCategory, setActivesubCategory] = useState('');
    let subCategoryList = [];
    if (activeCategory === "Compétences transverses") {
        resetsubCategoryArray();
        subCategoryList.push("Agilité", "Gestion de projets");              // console.log(subCategoryList) : Agilité / Gestion de projets
    }
    else if (activeCategory === "Bases de données et langages") {
        resetsubCategoryArray();
        subCategoryList.push("Base de données", "Langages de développement")        // console.log(subCategoryList) : Base de données / Langages de développement

    } else if (activeCategory === "SI et réseaux") {
        resetsubCategoryArray();
        subCategoryList.push("Système d'information", "Réseaux")                // console.log(subCategoryList) : Système d'information / Réseaux
    }

    // Function pour vider le tableau subCategory
    function resetsubCategoryArray() {
        subCategoryList.length = 0;
    }

    // Function pour reset le premier select et vider le tableau subCategory 
    function resetInput() {
        setActiveCategory('')
        setActivesubCategory('')
        resetsubCategoryArray();
    }

    // Function pour reset le second select et vider le tableau subCategory
    function resetsubInput() {
        setActivesubCategory('')
        resetsubCategoryArray();
    }


    // Récupérer l'id de la formation au on click
    const [editFormations, setEditFormations] = useState(true)
    const [formationData, setFormationData] = useState("");

    function editCardFormation(id) {
        const tmpFormationData = FormationList.find((formation) => formation.id === id)
        // console.log(tmpFormationData);
        setFormationData(tmpFormationData)
        setEditFormations(false)
    }

    return editFormations ? (
        <div>
            <FilterComponent
                activeCategory={activeCategory} setActiveCategory={setActiveCategory} categoryList={categoryList} resetInput={resetInput}
                activeSubCategory={activeSubCategory} setActivesubCategory={setActivesubCategory} subCategoryList={subCategoryList} resetsubInput={resetsubInput} />

            <div className="card-container">
                {FormationList.map((formation, index) =>
                    activeSubCategory === '' ?
                        (!activeCategory || activeCategory === formation.category ?
                            <div key={index} onClick={() => editCardFormation(formation.id)}>
                                <FormationCardComponent
                                    setEditFormations={setEditFormations}
                                    key={index}
                                    formation={formation}
                                //onClick={alert("Ca marche")}
                                //onClick={() => editCardFormation(id)}
                                />
                            </div>
                            :
                            null)
                        : (!activeSubCategory || activeSubCategory === formation.subCategory) ?
                            <div key={index} onClick={() => editCardFormation(formation.id)}>
                                <FormationCardComponent
                                    setEditFormations={setEditFormations}
                                    key={index}
                                    formation={formation}
                                //onClick={() => editCardFormation(id)}
                                />
                            </div>
                            :
                            null)}
            </div>
        </div>)
        :
        <div>
            <FormationDataComponent editFormations={editFormations} formationData={formationData} setFormationData={setFormationData} setEditFormations={setEditFormations}/> 
        </div>

        ;
}

export default FormationListView;
