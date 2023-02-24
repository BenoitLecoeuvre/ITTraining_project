import React from 'react';
import './FilterComponent.css';

const FilterComponent = ({ activeCategory, setActiveCategory, categoryList, resetInput, activeSubCategory, setActivesubCategory, subCategoryList, resetsubInput }) => {


    return (
        <div className='filter-container' >
            <div className="select">
                <select 
                    name="category"
                    id="category"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                >
                    <option value="">Selectionner une catégorie</option>
                    {
                        categoryList.map(
                            (cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            )
                        )
                    }
                </select>
            
                <div className="filter-buttons">
                    <button
                        onClick={() => resetInput()}>
                        Reset
                    </button>
                </div>
            </div>
            {activeCategory !== "" ?
                <div className="select">
                    <select
                        name="subCategory"
                        id="subCategory"
                        value={activeSubCategory}
                        onChange={(e) => setActivesubCategory(e.target.value)}
                    >
                        <option value="">Selectionner une catégorie</option>
                        {
                            subCategoryList.map(
                                (cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            )
                        }
                    </select>
                    <div className="filter-buttons">
                        <button
                            onClick={() => resetsubInput()}>
                            Reset
                        </button>
                    </div>
                </div>
                : null}

        </div>
    );
}

export default FilterComponent;
