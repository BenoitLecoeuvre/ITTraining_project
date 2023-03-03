import React from 'react';
import './FormateurListComponent.css';

const FormateurListComponent = ({
    listformateurs, UpdateFormateurList, id, nom, prenom, abilities, anciennete,
    note }) => {

    return (

        <div>

            <div>
                <h2 style={{textAlign:"center", margin:"40px 0px"}}>Liste des formateurs</h2>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" >ID formateur</th>
                        <th scope="col" >Nom</th>
                        <th scope="col" >Prenom</th>
                        <th scope="col" >Competences</th>
                        <th scope="col" >Anciennete</th>
                        <th scope="col" >Note</th>
                    </tr>
                </thead>
                <tbody>
                    {listformateurs.map((formateur, index) => (
                        <><tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{formateur.nom}</td>
                            <td>{formateur.prenom}</td>
                            <td>{formateur.abilities}</td>
                            <td>{formateur.anciennete}</td>
                            <td>{formateur.note}</td>
                        </tr></>
                    ))
                    }
                </tbody>
            </table>


        </div>


        );
}

export default FormateurListComponent;