import React from 'react';

const ContactComponent = ({name, firstname, firm, mail, phone, message}) => {
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        
    );
}

export default ContactComponent;
