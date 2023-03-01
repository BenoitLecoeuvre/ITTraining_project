import React from 'react';
import './AdminFilterComponent.css';
// import AdminFormationList from '../../datas/AdminFormationList.json';

const AdminFilterComponent = ({ activeCategory, categoryList, setActiveCategory, resetInputCat, activeStatus, setActiveStatut, statusList, resetInputStat }) => {


    return (
        <div>
            <div className='category1'>
                <select
                    name="category"
                    id="category"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}>
                    <option value="">--Selectionner une catégorie--</option>
                    {
                        categoryList.map(
                            (cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                </select>
                <button className='reset1' onClick={() => resetInputCat()}>Reset</button>
            </div>

            <div className='category2'>
                <select
                    name="category"
                    id="category"
                    value={activeStatus}
                    onChange={(e) => setActiveStatut(e.target.value)}>
                    <option value="">--Selectionner un état--</option>
                    {
                        statusList.map(
                            (cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                </select>
                <button className='reset2' onClick={() => resetInputStat()}>Reset</button>
            </div>

        </div>
    );
}

export default AdminFilterComponent;
