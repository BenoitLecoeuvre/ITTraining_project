import React from 'react';
import FormationList from '../../../src/datas/FormationList.json';
//import AddFormationComponent from '../../Components/AddFormationComponent/AddFormationComponent';
import FormationCardComponent from '../../components/FormationCardComponent/FormationCardComponent';
import './FormationListView.css'

const FormationListView = () => {
    
    return (
        <div>
            <div className="card-container">
                {FormationList.map((formation, index) =>

                    <div key={index}>
                        <FormationCardComponent
                            key={index}
                            formation={formation}
                        />
                    </div>
                )}
            </div>
            <div>
                {/* <AddFormationComponent /> */}
            </div>
        </div>
    );
}

export default FormationListView;
