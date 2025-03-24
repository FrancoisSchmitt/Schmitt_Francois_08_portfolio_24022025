import { useEffect, useState } from 'react';
import CarrerComponent from '../../components/careerComponents';
import { coursesMainData, experimentMainData } from '../../service';

export default function Carrer() {
      const [courses, setCourses] = useState([]);
      const [experience, setExperience] = useState([]);
      useEffect(() => {
            (async () => {
                  let coursesRes = coursesMainData();
                  setCourses(await coursesRes);
                  let projectRes = experimentMainData();
                  setExperience(await projectRes);
            })();
      }, []);
      const resCourses = courses;

      const resExperience = experience;
      return (
            <>
                  <section>
                        {resCourses.map((courses, index) => (
                              <CarrerComponent
                                    key={`courses-${index}`}
                                    courses={courses?.courses}
                                    carrerTitle={courses.coursesName}
                                    carrerJobs={courses?.coursesJobs}
                                    carrerStudyLevel={courses?.coursesLvl}
                                    carrerDateStart={courses?.coursesDateStart}
                                    carrerDateEnd={courses?.coursesDateEnd}
                                    carrerDescription={courses?.coursesDescription?.map(
                                          (description, index) => (
                                                <p
                                                      key={`desc-${index}`}
                                                      className="carrer-description"
                                                >
                                                      {description}
                                                </p>
                                          ),
                                    )}
                                    stackTitle="Technologies"
                                    goalTitle="Objectifs"
                                    goal={courses?.coursesGoal?.map(
                                          (goal, index) => (
                                                <li
                                                      key={`goal-${index}`}
                                                      className="carrer-content-goal"
                                                >
                                                      <small> {goal}</small>
                                                </li>
                                          ),
                                    )}
                                    stack={courses?.coursesStack?.map(
                                          (Stack, index) => (
                                                <li
                                                      key={`stack-${index}`}
                                                      className="carrer-content-stack"
                                                >
                                                      <small> {Stack}</small>
                                                </li>
                                          ),
                                    )}
                              />
                        ))}
                  </section>
                  <section>
                        {resExperience.map((experiment, index) => (
                              <CarrerComponent
                                    key={`experiment-${index}`}
                                    carrerTitle={experiment.experimentsName}
                                    courses={experiment.experiment}
                                    carrerDateStart={
                                          experiment.experimentDateStart
                                    }
                                    carrerJobs={experiment?.experimentsJobs}
                                    carrerDateEnd={experiment.experimentDateEnd}
                                    carrerDescription={experiment?.experimentsDescription?.map(
                                          (description, index) => (
                                                <p
                                                      key={`desc-experiment-${index}`}
                                                      className="carrer-description"
                                                >
                                                      {description}
                                                </p>
                                          ),
                                    )}
                                    goalTitle="Objectifs"
                                    stackTitle="Technologies"
                                    goal={experiment?.experimentsGoal?.map(
                                          (goal, index) => (
                                                <li
                                                      key={`goal-experiment-${index}`}
                                                      className="carrer-content-goal"
                                                >
                                                      <small> {goal}</small>
                                                </li>
                                          ),
                                    )}
                                    stack={experiment?.experimentStack?.map(
                                          (Stack, index) => (
                                                <li
                                                      key={`stack-experiment-${index}`}
                                                      className="carrer-content-stack"
                                                >
                                                      <small> {Stack}</small>
                                                </li>
                                          ),
                                    )}
                                    experimentsJobs={experiment.experimentsJobs}
                              />
                        ))}
                  </section>
            </>
      );
}
