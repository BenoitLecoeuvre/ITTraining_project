import React from 'react';
import './AdminFilterComponent.css';
// import AdminFormationList from '../../datas/AdminFormationList.json';

const AdminFilterComponent = ({ activeCategory, categoryList, setActiveCategory, resetInputCat, activeStatus, setActiveStatut, statusList, resetInputStat }) => {


    return (
        <div className='Category'>
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
                <button title='Réinitialiser le filtre' className='reset1' onClick={() => resetInputCat()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M296.078 853.999v-51.998h277.999q54.231 0 92.116-37.693 37.885-37.692 37.885-92.308 0-54.616-37.885-92.308-37.885-37.693-92.116-37.693H304.229L407.23 645l-37.153 37.153L203.924 516l166.153-166.153L407.23 387 304.229 490.001h269.848q75.384 0 128.692 53.115Q756.076 596.231 756.076 672q0 75.769-53.307 128.884-53.308 53.115-128.692 53.115H296.078Z"/></svg>
                </button>
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
                <button title='Réinitialiser le filtre' className='reset2' onClick={() => resetInputStat()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M296.078 853.999v-51.998h277.999q54.231 0 92.116-37.693 37.885-37.692 37.885-92.308 0-54.616-37.885-92.308-37.885-37.693-92.116-37.693H304.229L407.23 645l-37.153 37.153L203.924 516l166.153-166.153L407.23 387 304.229 490.001h269.848q75.384 0 128.692 53.115Q756.076 596.231 756.076 672q0 75.769-53.307 128.884-53.308 53.115-128.692 53.115H296.078Z"/></svg>
                </button>
            </div>

        </div>
    );
}

export default AdminFilterComponent;
