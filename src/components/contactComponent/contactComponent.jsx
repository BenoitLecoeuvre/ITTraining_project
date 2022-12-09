import React from 'react';
import ContactView from '../../views/contactView/contactView';

const ContactComponent = ({name, firstname, firm, mail, phone, message}) => {
    console.log(name)
    console.log(name)
    console.log(name)
    console.log(name)
    return (
        <table>
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
        
    );
}

export default ContactComponent;
