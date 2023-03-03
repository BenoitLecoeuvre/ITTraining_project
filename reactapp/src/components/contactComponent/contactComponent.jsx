import React from 'react';
import './contactComponent.css'

const ContactComponent = ({name, firstname, firm, mail, phone, message, messageList, setMessageList}) => {
    console.log(messageList[0].text);


    return (
        <div className='messageBox'>
            <h2 style={{ textAlign: 'center', margin: '40px 0px' }}>Historique des messages</h2>
            <table className='messageHistory' style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Société</th>
                        <th>E-mail</th>
                        <th>Téléphone</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    {messageList.map((message, index) => 
                    <tr key={index}>
                    <td>{messageList[index].apprenant.nom}</td>
                    <td>{messageList[index].apprenant.prenom}</td>
                    <td>{messageList[index].apprenant.entreprise}</td>
                    <td>{messageList[index].apprenant.email}</td>
                    <td>{messageList[index].apprenant.phone}</td> 
                     <td>{messageList[index].text}</td>
                </tr>

                    )}

                </tbody>
            </table>

        </div>
    );
}

export default ContactComponent;
