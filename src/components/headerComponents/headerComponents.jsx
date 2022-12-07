import React from 'react';
import './headerComponents.css'

const HeaderComponents = () => {
    return (
        <div className='banner'>
            <div className="head_logo">
                <img src="./img/ti_training_logo.jpg" alt="Logo-Ti-training" />
            </div>

            <div className='header'>
                <h1>IT - Training</h1>
                <span className='credo'>La formation qui vous aidera à devenir le meilleur !</span>
            </div>

            <div className="head_login">
                <button>
                    Login
                </button>
            </div>

        </div>
    );
}

export default HeaderComponents;
