import React from 'react';
import './homeView.css'

const HomeView = () => {
    return (
        <section className='landing'>
            <div className='homepage'>
                <div>
                    <h2 className='big-title'>Bienvenue sur IT - Training, ici nous vous proposons <br /> des formations diplômantes pour tous !</h2>
                </div>

                <div className='flex'>

                    <div className='text'>
                        <p>
                            Nous considérons que la formation est le moyen de trouver votre voie et de libérer votre potentiel, c’est pourquoi nous développons des programmes qui vous apportent toutes les compétences nécessaires à votre réussite.
                            Depuis plus de 10 ans, <b> IT - Training </b> s’engage dans la formation aux métiers d’avenir pour faire de vous un(e) diplômé(e) aux compétences reconnues… et recruté(e) !
                            <b> IT - Training </b> constate un taux moyen de sorties positives de 100%, chacun de nos stagiaires décrochent un emploi stable après leur formation.
                        </p>
                    </div>

                    <div className='img'>
                        <img className='contain' src="./img/formation.jpg" alt="formation en cours" />
                    </div>
                </div>

                <div className="flex">

                    <div className='img'>
                        <img className='contain' src="./img/formation-professionelle.jpg" alt="formation pro" />
                    </div>

                    <div className='text'>
                        <p>
                            Nous avons vu le jour il y a dix ans grâce à l'ambition de quatre personnes superbes : Sébastien, Amandine, Benoît et Olivier.
                            Ils ont eu la volonté de donner la chance à des personnes voulant changer de voie l'opportunité de réaliser leurs rêves.
                            En effet nous conservons de moins en moins nos travail tout au long de notre vie. Cette mobilité est une chance surtout si nous vous accompagnons
                            lors du processus ;). Avec nous vous êtes assurés d'avoir une formation complète, intensive avec un emploi à la clé !
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeView;
