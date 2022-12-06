import React from 'react';
import './homeView.css'

const HomeView = () => {
    return (
        <div className='landing'>
            <h2 className='big-title'>Bienvenue sur IT - Training, ici nous vous proposons <br/> des formations diplômantes pour tous !</h2>
        
            <div className='flex'>
                
                <div className='ambition'>
                    <p>
                    Nous considérons que la formation est le moyen de trouver votre voie et de libérer votre potentiel, c’est pourquoi nous développons des programmes qui vous apportent toutes les compétences nécessaires à votre réussite.
                    Depuis plus de 10 ans, <b> IT - Training </b> s’engage dans la formation aux métiers d’avenir pour faire de vous un(e) diplômé(e) aux compétences reconnues… et recruté(e) !
                    <b> IT - Training </b> constate un taux moyen de sorties positives de 100%, chacun de nos stagiaires décrochent un emploi stable après leur formation.
                    </p>
                </div>

                <div></div>

            </div>
        
        </div>

        
    );
}

export default HomeView;
