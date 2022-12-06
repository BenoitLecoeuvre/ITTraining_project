import React from 'react';
import './headerComponents.css'

const HeaderComponents = () => {
    return (
        <div className='banner'>
            <img src="./img/ti_training_logo.jpg" alt="Logo-Ti-training" />

            <div className='header'>
                <h1>IT - Training</h1>
                <span className='credo'>La formation qui vous aidera à devenir le meilleur !</span>
            </div>

        </div>
    );
}

export default HeaderComponents;
