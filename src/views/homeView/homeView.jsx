import React from 'react';
import './homeView.css'

const HomeView = () => {
    return (
        <div className='landing'>
            <h2 className='big-title'>Bienvenue sur IT - Training, ici nous vous proposons <br /> des formations diplômantes pour tous !</h2>

            <div className='flex'>

                <div className='ambition'>
                    <p>
                        Nous considérons que la formation est le moyen de trouver votre voie et de libérer votre potentiel, c’est pourquoi nous développons des programmes qui vous apportent toutes les compétences nécessaires à votre réussite.
                        Depuis plus de 10 ans, <b> IT - Training </b> s’engage dans la formation aux métiers d’avenir pour faire de vous un(e) diplômé(e) aux compétences reconnues… et recruté(e) !
                        <b> IT - Training </b> constate un taux moyen de sorties positives de 100%, chacun de nos stagiaires décrochent un emploi stable après leur formation.
                    </p>
                </div>

                <div className='img'>
                    <img src="./img/formation.jpg" alt="formation en cours" />
                </div>
            </div>

            <div className="part2">

                <div className='img2'>
                    <img src="./img/formation-professionelle.jpg" alt="formation pro" />
                </div>

                <div className='about'>
                    <p>
                        Nous avons vu le jour il y a dix ans grâce à l'ambition de quatre personnes superbes : Sébastien, Amandine, Benoît et Olivier.
                        Ils ont eu la volonté de donner la chance à des personnes voulant changer de voie l'opportunité de réaliser leurs rêves.
                        En effet nous conservons de moins en moins nos travail tout au long de notre vie. Cette mobilité est une chance surtout si nous vous accompagnons
                        lors du processus ;). Avec nous vous êtes assurés d'avoir une formation complète, intensive avec un emploi à la clé !
                    </p>
                </div>

            </div>

        </div>


    );
}

export default HomeView;
