import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGear } from '@fortawesome/free-solid-svg-icons';
import Responsive from '../../assets/responsive-design.svg';
import UX from '../../assets/user-experience.svg';
import UI from '../../assets/user-interface.svg';

import './index.css';
import { useInView } from 'react-intersection-observer';
export default function ServiceComponent() {
      const { ref: list, inView: listIsVisible } = useInView({
            threshold: 0,
            initialInView: true,
      });
      return (
            <>
                  <ul
                        ref={list}
                        className={`service-content ${
                              listIsVisible ? `service-content-animation` : ''
                        }`}
                  >
                        <li>
                              <FontAwesomeIcon icon={faCode} />
                              <h2>Code propre</h2>
                              <p>
                                    Créer un code propre qui respecte les règles
                                    et normes du langage de developpement
                              </p>
                        </li>
                        <li>
                              <FontAwesomeIcon icon={faDatabase} />
                              <h2>Gestion de données</h2>
                              <p>
                                    Interagir avec des données qui sont
                                    transmises soit par une API, soit par une
                                    liste de données simulées
                              </p>
                        </li>
                        <li>
                              <FontAwesomeIcon icon={faGear} />
                              <h2>Algorithme</h2>
                              <p>
                                    Créer des algorithmes, plus ou moins
                                    complexes
                              </p>
                        </li>
                        <li>
                              <img src={Responsive} alt="" />
                              <h2>Responsive design </h2>
                              <p>
                                    Mise en place d'un système de responsive
                                    pour que l'experience utilisateur soit bien
                                    meilleure
                              </p>
                        </li>
                  </ul>
            </>
      );
}
