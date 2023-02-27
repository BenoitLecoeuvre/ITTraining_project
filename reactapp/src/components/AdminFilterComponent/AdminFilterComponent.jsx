import React from 'react';
// import AdminFormationList from '../../datas/AdminFormationList.json';

const AdminFilterComponent = ({ activeCategory, categoryList, setActiveCategory, resetInputCat, activeStatus, setActiveStatut, statusList, resetInputStat }) => {


    return (
        <div>
            <div>
                <select
                    name="category"
                    id="category"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}>
                    <option value="">Selectionner une catégorie</option>
                    {
                        categoryList.map(
                            (cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                </select>
                <button onClick={() => resetInputCat()}>Reset</button>
            </div>
            <div>
                <select
                    name="category"
                    id="category"
                    value={activeStatus}
                    onChange={(e) => setActiveStatut(e.target.value)}>
                    <option value="">Selectionner une catégorie</option>
                    {
                        statusList.map(
                            (cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                </select>
                <button onClick={() => resetInputStat()}>Reset</button>
            </div>

        </div>
    );
}

export default AdminFilterComponent;
