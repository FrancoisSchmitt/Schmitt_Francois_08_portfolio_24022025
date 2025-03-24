import './index.css';
import { NavLink } from 'react-router-dom';

/**
 *
 * @returns Footers
 */

export default function Footer() {
      return (
            <footer className="footer">
                  <nav
                        className="footer-nav"
                        aria-label="A navigation element for the home page"
                        role="navigation"
                        aria-describedby="Footer"
                        id="Footer"
                  >
                        <ul className="footer-list">
                              <li aria-label="Liens cliquable vers l'acceuil">
                                    <NavLink
                                          to="/"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                        ? 'active'
                                                        : ''
                                          }
                                    >
                                          Accueil
                                    </NavLink>
                              </li>

                              <li aria-label="Liens cliquable vers la page formation / expérience">
                                    <NavLink
                                          to="/Carrer"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                        ? 'active'
                                                        : ''
                                          }
                                    >
                                          Expérience / Formations
                                    </NavLink>
                              </li>

                              <li aria-label="Liens cliquable vers la page projet">
                                    <NavLink
                                          to="/Project"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                        ? 'active'
                                                        : ''
                                          }
                                    >
                                          Projets
                                    </NavLink>
                              </li>

                              <li aria-label="Liens cliquable qui renvoie sur mon linkedin">
                                    <NavLink
                                          to="https://www.linkedin.com/in/schmitt-francois"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                        ? 'active'
                                                        : ''
                                          }
                                    >
                                          Linkedin
                                    </NavLink>
                              </li>

                              <li aria-label="Liens cliquable qui renvoie vers mon github">
                                    <NavLink
                                          to="https://github.com/FrancoisSchmitt"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                        ? 'active'
                                                        : ''
                                          }
                                    >
                                          GitHub
                                    </NavLink>
                              </li>
                        </ul>
                        <ul>
                              <li aria-label="Information supplémentaire">
                                    François Schmitt, © 2025. Tous droits
                                    réservés.
                              </li>
                        </ul>
                  </nav>
            </footer>
      );
}
