import React, { useState } from 'react';
import AdminFormation from '../../datas/AdminFormationList.json';
import AdminFilterComponent from '../AdminFilterComponent/AdminFilterComponent';

const AdminHistoriqueFormationDisplay = () => {
    // eslint-disable-next-line
    const [adminFormation, setAdminFormation] = useState(AdminFormation);

    // Function pour mettre la date au format français
    function dateFormat(date) {
        let tmpDate = new Date(date).toLocaleDateString("fr")
        return tmpDate
    }

    // Function pour afficher le statut de la formation
    function changeStatus(start, end) {
        let startDate = new Date(start).getTime();
        let endDate = new Date(end).getTime();
        let toDay = new Date(Date()).getTime();
        if (toDay > endDate) return "Terminée"
        if (toDay > startDate) return "En cours"
        if (toDay < startDate) return "A venir"
    }

    // Function pour update le tableau des formations
    let updateFormation = [];
    for (let formation of adminFormation) {
        let id = formation.id;
        let cat = formation.category;
        let subCat = formation.subCategory;
        let duree = formation.duree;
        let start = dateFormat(formation.start);
        let end = dateFormat(formation.end);
        let status = changeStatus(formation.start, formation.end);
        let tmpFormation = { id, cat, subCat, duree, start, end, status }
        updateFormation.push(tmpFormation)
    }

    // Filtre pour la catégorie
    const [activeCategory, setActiveCategory] = useState('');
    const categoryList = adminFormation.reduce(
        (acc, elem) => acc.includes(elem.category) ? acc : acc.concat(elem.category), []
    )

    // Function pour reset le filtre catégorie
    function resetInputCat() {
        setActiveCategory('')
    }

    // Filtre pour le statut
    const [activeStatus, setActiveStatut] = useState('');
    const statusList = updateFormation.reduce(
        (acc, elem) => acc.includes(elem.status) ? acc : acc.concat(elem.status), []
    )

    // Function pour reset le filtre catégorie
    function resetInputStat() {
        setActiveStatut('')
    }

    return (
        <div>
            <h2>Historique des formations</h2>
            <AdminFilterComponent
                activeCategory={activeCategory} setActiveCategory={setActiveCategory} categoryList={categoryList} resetInputCat={resetInputCat}
                activeStatus={activeStatus} statusList={statusList} setActiveStatut={setActiveStatut} resetInputStat={resetInputStat} />
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <th>#</th>
                    <th>Catégorie</th>
                    <th>Sous-catégorie</th>
                    <th>Durée</th>
                    <th>Date de début</th>
                    <th>Date de fin</th>
                    <th>Statut</th>
                </thead>
                <tbody style={{ border: '1px solid black' }}>
                    {
                        updateFormation.map((formation, index) =>
                        ((!activeStatus || activeStatus === formation.status) && (!activeCategory || activeCategory === formation.cat)
                            ?
                            <tr key={index} style={{ border: '1px solid black' }}>
                                <td>{formation.id}</td>
                                <td>{formation.cat}</td>
                                <td>{formation.subCat}</td>
                                <td>{formation.duree} jours</td>
                                <td>{formation.start}</td>
                                <td>{formation.end}</td>
                                <td>{formation.status}</td>
                            </tr>
                            : null))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminHistoriqueFormationDisplay;
