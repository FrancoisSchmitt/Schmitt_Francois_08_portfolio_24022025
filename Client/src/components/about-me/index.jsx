import { useInView } from 'react-intersection-observer';
import ButtonMailto from '../currentObject/buttonMailTo';
import './index.css';
/**
 * @function AboutMe it was a function to display a lot of myself information it was using call api to get all this information
 * @returns
 */
export default function AboutMe(props) {
      const { ref: imageAboutMe, inView: imageAboutMeIsVisible } = useInView({
            threshold: 0,
            initialInView: true,
      });
      const { ref: titleAboutMe, inView: titleAboutMeIsVisible } = useInView({
            threshold: 1,
            initialInView: true,
      });
      const { ref: spanJobsAboutMe, inView: spanJobsAboutMeIsVisible } =
            useInView({
                  threshold: 1,
                  initialInView: true,
            });

      return (
            <>
                  <div className="aboutme-container">
                        <ul className="aboutme-content aboutme-wrap">
                              <li className="aboutme-list-title">
                                    <h1
                                          ref={titleAboutMe}
                                          className={`homepage-aboutme-title ${
                                                titleAboutMeIsVisible
                                                      ? `homepage-aboutme-title-animation`
                                                      : ''
                                          }`}
                                          aria-label="Présentation"
                                    >
                                          Bienvenue, je suis {props.lastName}{' '}
                                          {props.firstName}
                                    </h1>
                                    <span
                                          ref={spanJobsAboutMe}
                                          className={`homepage-aboutme-spanJobs ${
                                                spanJobsAboutMeIsVisible
                                                      ? `homepage-aboutme-spanJobs-animation`
                                                      : ''
                                          }`}
                                    >
                                          {props.work}
                                    </span>
                              </li>
                              {props.whoIam}
                        </ul>
                        <ul className="aboutme-content">
                              <li
                                    ref={imageAboutMe}
                                    className={`homepage-aboutme-image ${
                                          imageAboutMeIsVisible
                                                ? `homepage-aboutme-image-animation`
                                                : ''
                                    }`}
                              >
                                    <img
                                          src={props.image}
                                          alt="Photos de moi"
                                    />
                              </li>
                              <li>
                                    <ButtonMailto
                                          label="Contactez-moi"
                                          mailto="mailto:schmitt.francois.1699@gmail.com"
                                    />
                              </li>
                        </ul>
                  </div>
            </>
      );
}
