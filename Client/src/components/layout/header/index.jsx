import './index.css';
import { NavLink } from 'react-router-dom';
/**
 *
 * @returns Header
 */
export default function Header() {
      return (
            <header className="header">
                  <nav
                        id="Header"
                        className="header-nav"
                        aria-label="A navigation element for the home page"
                        role="navigation"
                        aria-describedby="Header"
                  >
                        <ul className="header-list">
                              <li>
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
                              <li>
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
                              <li>
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
                        </ul>
                  </nav>
            </header>
      );
}
