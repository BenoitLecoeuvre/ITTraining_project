import React from 'react';
import './UserListComponent.css';

const UserListComponent = ({ stagiaireList }) => {

    function displayInscript(bool) {
        if (bool === true) return "Inscrit"
        else return "Non inscrit en formation"
    }
    return (
        <div>

            <div>
                <h2 style={{ textAlign: "center", margin: "40px 0px" }}>Liste des apprenants</h2>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" >ID user</th>
                        <th scope="col" >Nom</th>
                        <th scope="col" >Prenom</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Telephone</th>
                        <th scope="col" >Inscrit</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaireList.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{displayInscript(user.inscrit)}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}


export default UserListComponent;