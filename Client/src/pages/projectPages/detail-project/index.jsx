import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PROJECT_DATA } from '../../../Mock/data.js';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Github from '../../../assets/github.svg';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function DetailProject() {
      const title = useParams();

      const project = PROJECT_DATA.find(
            (project) => project.title === title.title,
      );

      const [selected, setSelected] = useState(0);

      const data = project?.detail;

      const toggle = (i) => {
            setSelected(selected === i ? 0 : i);
      };

      return (
            <>
                  {project ? (
                        <>
                              <section className="detail-project-section">
                                    <div className="content-title">
                                          <h1 className="project-detail-title">
                                                {project?.title}
                                          </h1>
                                          <Link to={project.githubUrl}>
                                                <img src={Github} alt="Logo" />
                                          </Link>
                                          <Link to={project.projectUrl}>
                                                <FontAwesomeIcon
                                                      icon={faLink}
                                                />
                                          </Link>
                                    </div>
                                    <div className="container-project">
                                          <div className="content-container">
                                                <ul className="project-list">
                                                      {data.map((item, i) => (
                                                            <li
                                                                  key={`item-${i}`}
                                                                  className={
                                                                        selected ===
                                                                        i
                                                                              ? `expanded show-${
                                                                                      i +
                                                                                      1
                                                                                }`
                                                                              : 'collapsed'
                                                                  }
                                                            >
                                                                  <h4
                                                                        onClick={() =>
                                                                              toggle(
                                                                                    i,
                                                                              )
                                                                        }
                                                                  >
                                                                        {
                                                                              item.title
                                                                        }

                                                                        {selected ===
                                                                        i ? (
                                                                              <FontAwesomeIcon
                                                                                    icon={
                                                                                          faChevronDown
                                                                                    }
                                                                              />
                                                                        ) : (
                                                                              <FontAwesomeIcon
                                                                                    icon={
                                                                                          faChevronUp
                                                                                    }
                                                                              />
                                                                        )}
                                                                  </h4>
                                                                  <div
                                                                        className={
                                                                              'container-description'
                                                                        }
                                                                  >
                                                                        <div className="content-project">
                                                                              <div className="content-project-description">
                                                                                    <p>
                                                                                          {
                                                                                                item.description
                                                                                          }
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                      ))}
                                                </ul>
                                                <div className="content-project-image">
                                                      {data.map((item, i) => (
                                                            <picture
                                                                  key={`item-${i}`}
                                                                  className={
                                                                        selected ===
                                                                        i
                                                                              ? ''
                                                                              : 'hidden'
                                                                  }
                                                            >
                                                                  <source
                                                                        srcSet={
                                                                              item.image
                                                                        }
                                                                        media="test"
                                                                  />
                                                                  <img
                                                                        src={
                                                                              item.image
                                                                        }
                                                                        alt={
                                                                              item.title
                                                                        }
                                                                  />
                                                            </picture>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </>
                  ) : (
                        <Navigate replace to="/404" />
                  )}
            </>
      );
}
