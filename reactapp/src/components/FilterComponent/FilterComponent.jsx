import React from "react";
import "./FilterComponent.css";

const FilterComponent = ({
  activeCategory,
  setActiveCategory,
  categoryList,
  resetInput,
  activeSubCategory,
  setActivesubCategory,
  subCategoryList,
  resetsubInput,
}) => {
  return (
    <div className="filter-container">
      <div className="select">
        <select
          name="category"
          id="category"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          <option value="">Selectionner une catégorie</option>
          {categoryList.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {activeCategory !== "" ? (
        <div className="select">
          <select
            name="subCategory"
            id="subCategory"
            value={activeSubCategory}
            onChange={(e) => setActivesubCategory(e.target.value)}
          >
            <option value="">Selectionner une catégorie</option>
            {subCategoryList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="filter-buttons">
        <button onClick={() => resetInput()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z" fill="rgba(255,255,255,1)"/></svg>
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
