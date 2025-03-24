import { NavLink } from 'react-router-dom';
import Button from '../../currentObject/button';
import './index.css';
export default function Error() {
      return (
            <>
                  <ul className="error-content">
                        <li>
                              <h1>Oops!</h1>
                        </li>
                        <li>
                              <h2>404 - page non trouvée</h2>
                        </li>
                        <li>
                              <p>
                                    La page que vous recherchez a peut-être été
                                    supprimée, son nom a changé ou elle est
                                    temporairement indisponible.
                              </p>
                        </li>
                        <li>
                              <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                          isPending
                                                ? 'pending'
                                                : isActive
                                                  ? 'active'
                                                  : ''
                                    }
                              >
                                    <Button name="Retourner à la page d'accueil" />
                              </NavLink>
                        </li>
                  </ul>
            </>
      );
}
