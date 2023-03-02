import React from 'react';
import './contactComponent.css'

const ContactComponent = ({name, firstname, firm, mail, phone, message}) => {
    
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
                    <tr>
                        <td>{name}</td>
                        <td>{firstname}</td>
                        <td>{firm}</td>
                        <td>{mail}</td>
                        <td>{phone}</td>
                        <td>{message}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default ContactComponent;
