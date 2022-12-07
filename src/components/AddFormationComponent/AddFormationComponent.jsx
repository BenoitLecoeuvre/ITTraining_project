import React from 'react';

const AddFormationComponent = () => {

function createFormationHandler(e) {
    e.preventDefault();
    let id = 21;
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
        const newFormation = {id , formationName , category , subCategory , description , descriptionDetail , duree , price , difficulty , lieux , dates , logo}
        console.table(newFormation);
    } else {
        alert("Veuillez Remplir tous les champs")
    }
}

    return (
        <div>
            
        </div>
    );
}

export default AddFormationComponent;
