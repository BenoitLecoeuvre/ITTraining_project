import React from 'react';
import './headerComponents.css'

const HeaderComponents = () => {
    return (
        <div className='banner'>
            <img src="./img/ti_training_logo.jpg" alt="Logo-Ti-training" />
            <h1>IT - Training</h1>
            <span className='credo'>La formation qui vous aidera à devenir le meilleur !</span>
            
        </div>
    );
}

export default HeaderComponents;
