import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './index.css';
import { Link } from 'react-router-dom';
import { projectMainData } from '../../../service';
import CardProject from '../../../components/currentObject/cardProject';
import styles from './index.css';

export default function ProjectPage() {
      const [projectData, setProjectData] = useState([]);

      useEffect(() => {
            (async () => {
                  let projectRes = projectMainData();
                  setProjectData(await projectRes);
            })();
      }, []);

      const resProject = projectData;
      return (
            <>
                  <section className="container">
                        <div className="gallery-container">
                              <ul className="mItem">
                                    <li>
                                          {resProject.map((project, index) => (
                                                <Link
                                                      key={`/project/-${index}`}
                                                      to={`/project/${project.title}`}
                                                >
                                                      <CardProject
                                                            image={
                                                                  project.image
                                                            }
                                                            altImage={
                                                                  project.image
                                                            }
                                                      />
                                                </Link>
                                          ))}
                                    </li>
                              </ul>
                        </div>
                  </section>
            </>
      );
}
