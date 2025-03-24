import Dropdown from '../currentObject/dropdown';
import './index.css';

export default function CarrerComponent(props) {
      return (
            <>
                  <ul className="carrer-list">
                        <li className="carrer-no-wrap">
                              <h2 className="carrer-title">
                                    {props.carrerTitle}{' '}
                              </h2>
                        </li>
                        <li className="carrer">
                              <small className="carrer-jobs">
                                    {props.courses} - {props.carrerJobs}
                              </small>
                        </li>
                        <li className="carrer-spec">
                              <small className="carrer-specificity">
                                    {props.carrerStudyLevel}{' '}
                              </small>
                              <small className="carrer-specificity">
                                    {props.carrerDateStart}{' '}
                              </small>
                              <small>-</small>
                              <small className="carrer-specificity">
                                    {' '}
                                    {props.carrerDateEnd}
                              </small>
                        </li>
                        <li className="carrer-content-description">
                              {props.carrerDescription}
                        </li>
                        <li className="stack">
                              <Dropdown
                                    title={props.stackTitle}
                                    content={props.stack}
                              />
                        </li>
                        <li>
                              <Dropdown
                                    title={props.goalTitle}
                                    content={props.goal}
                              />
                        </li>
                  </ul>
            </>
      );
}
