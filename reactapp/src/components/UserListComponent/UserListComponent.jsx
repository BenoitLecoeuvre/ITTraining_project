import React from 'react';
import './UserListComponent.css';

const UserListComponent = ({ listUsers, updateUserList, id, nom, prenom, email, telephone,
    created, updated, inscrit, dateSortie }) => {

    return (
        <div>

            <div>
                <h2 style={{textAlign:"center", margin:"40px 0px"}}>Liste des apprenants</h2>
            </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope = "col" >ID user</th>
                    <th scope = "col" >Nom</th>
                    <th scope = "col" >Prenom</th>
                    <th scope = "col" >Email</th>
                    <th scope = "col" >Telephone</th>
                    <th scope = "col" >Created</th>
                    <th scope = "col" >Inscrit</th>
                    <th scope = "col" >DateSortie</th>
                </tr>
            </thead>
            <tbody>
                {listUsers.map((user, index) => (
                    <><tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td>{user.telephone}</td>
                        <td>{user.created}</td>
                        <td>{user.inscrit}</td>
                        <td>{user.dateSortie}</td>
                    </tr></>
                ))
                }
            </tbody>
            </table>
            </div>
    );
}


export default UserListComponent;