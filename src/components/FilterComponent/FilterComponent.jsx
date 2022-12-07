import React from 'react';
import './FilterComponent';

const FilterComponent = ({ activeCategory, setActiveCategory, categoryList, resetInput, activeSubCategory, setActivesubCategory, subCategoryList, resetsubInput }) => {


    return (
        <div>
            <div>
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
                <div >
                    <button
                        onClick={() => resetInput()}>
                        Reset
                    </button>
                </div>
            </div>
            {activeCategory !== "" ?
                <div >
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
                    <div>
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
