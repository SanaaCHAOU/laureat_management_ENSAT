import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Carousel1 from 'components/Carousel/Carousel1'
import { NewsCard } from "components/NewsCard/NewsCard.jsx";
class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#636e72'}}>
                <Grid fluid >
                <Row style={{width: 1320, height: 'auto'}}  >
                    <Col md={12}>
                         <Carousel1 />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={3} >
                    <NewsCard
                bgImage="http://ensat.ac.ma/Portail/wp-content/uploads/2019/04/lti.jpg"
                description={
                  <span>
                    Une conférence sous le thème « Biofilms and mechanics: Forces in Microbial Community» aura lieu le lundi 6 janvier 2020 à la Salle des Conférences Dr Otman Filali Meknassi de l’ENSA de Tanger à partir de 14h. Elle sera présentée par le Professeur Ahmed Touhami du Département de Physique et d’Astronomie de l’Université de Texas Rio Grande Valley (USA). Vous trouverez de plus amples informations concernant le thème et l’animateur en cliquant ICI.
                  </span>
                }
              />
                    </Col>

                    <Col md={3} >
                    <NewsCard
                bgImage="http://ensat.ac.ma/Portail/wp-content/uploads/2019/12/ceremonie.jpg"
                description={
                  <span>
                    L’École Nationale des Sciences Appliquées de Tanger (ENSAT) a fêté, le vendredi 27 décembre 2019, au Centre Culturel Ahmed Boukmakh, la Cérémonie de Remise des Diplômes des lauréats de la 17ème promotion. Cette cérémonie qui a rassemblé plus de 600 personnes a été marquée par la présence du Président et Vice-présidents de l’UAE, des chefs des établissements universitaires, du corps professoral et administratif de l’ENSA et ses partenaires sociaux. Cette soirée, unique et inoubliable tant pour les 293 lauréats que pour leurs proches, restera à jamais gravée dans leurs esprits.
                  </span>
                }
              />
                    </Col>

                    <Col md={3} >
                    <NewsCard
                bgImage="http://ensat.ac.ma/Portail/wp-content/uploads/2019/12/eurafric-logo.jpg"
                description={
                  <span>
                    La société Eurafric Information sera à l’ENSA de Tanger le Jeudi 26 décembre à 13h30 pour la présentation de ses activités et communiquer autour des opportunités de stages de projets de fin d’étude.Le public cibles sont les élèves-ingénieures des filières GSTR3 et GINF3.
                  </span>
                }
              />
                    </Col>


                    <Col md={3} >
                    <NewsCard
                bgImage="http://ensat.ac.ma/Portail/wp-content/uploads/2020/01/affiche-workshop-serious-games-187x270.jpeg"
                description={
                  <span>
                    Une Conférence-Séminaire sur la Gestion durable des océans : enjeux et perspectives Cas  du golf de Cadiz et du détroit de Gibraltar, aura lieu à l’ENSA de Tanger le Jeudi 19 Décembre 2019 à 15 h à la Salle des Conférences Dr Otman Filali Meknassi Conférencier   Pr  Gonzalo Muñoz Arroyo  Coordinateur du Master gestion et préservation de l’environnement naturel Université de Cadiz  – UCA Modérateur : Pr Lotfi Chraïbi Coordinateur de la filière  Génie Eco Energétique et Environnement Industriel G3EI. Veuillez télécharger l’affiche de la conférence en cliquant ICI
                  </span>
                }
              />
                    </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;