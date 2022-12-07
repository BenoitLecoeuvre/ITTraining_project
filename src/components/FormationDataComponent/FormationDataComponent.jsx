import React from 'react';

const FormationDataComponent = ({ formationData }) => {
    // console.log(formationData)

    return (

        <div className='section'>
            <div className='detail'>
                <div>
                    <span><b>{formationData.formationName}</b></span>
                </div>

                <div>
                    <img className='img' src={formationData.logo} alt="Formation-logo" />
                </div>

                <div>
                    <span>{`Description complète : ${formationData.descriptionDetail}`}</span>
                </div>

                <div>
                    <span>{`Lieux de la formation : ${formationData.lieux[0]} ou ${formationData.lieux[1]}`}</span>

                </div>

                <div>
                    <span>{`Nous proposons deux dates de début pour cette formation, le ${formationData.dates[0]} et ${formationData.dates[1]}`}</span>
                </div>

                <div>
                    Avant de commencer nos formations nous devons nous assurer  que vous avez les prérequis.
                    Voici un lien qui vous permettra de vous évaluer : <a href='https://www.w3schools.com/' target="_blank" rel="noreferrer">W3 School</a>
                </div>
            </div>

        </div >

    );
}

export default FormationDataComponent;
