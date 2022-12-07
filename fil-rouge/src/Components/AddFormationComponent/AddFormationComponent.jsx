import React, { useState } from 'react';

const TmpFormationList = [];

const AddFormationComponent = () => {
    let [formationId, setFormationId] = useState('');
    let [formationName, setPrice] = useState('');
    let [formationCategory, setFormationCategory] = useState('');
    let [formationSubCategory, setFormationSubCategory] = useState('');
    let [formationDescription, setFormationDescription] = useState('');
    let [formationDuree, setFormationDuree] = useState('');
    let [formationPrice, setFormationPrice] = useState('');
    let [formationDifficulty, setFormationDifficulty] = useState('');
    let [formationLogo, setFormationLogo] = useState('');


    function nameInputHandler(event) {
        updateName(event.target.value);
    }

    function priceInputHandler(event) {
        updatePrice(event.target.value);
    }

    function descriptionInputHandler(event) {
        updateDesc(event.target.value);
    }

    function isAvailableInputHandler(event) {
        updateAvail(event.target.checked);
    }

    function imageInputHandler(event) {
        updateImage(event.target.value);
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        let product = {
            pId: 1,
            pName: pName,
            pDesc: pDesc,
            pAvail: Boolean(pAvail),
            pImage: pImage,
            pPrice: Number(pPrice)
          }
          console.log(product);
    }

    return (
        //On assigne une fonction à l'evenement onSubmit
        <form className="row g-3" onSubmit={createProductEventHandler}> 
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price" 
                    onChange={priceInputHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" 
                onChange={isAvailableInputHandler}/>
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                onChange={imageInputHandler} />
            </div>


            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
}

export default AddFormationComponent;
