import Redux from '../../assets/redux.svg';
import React from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import HTML from '../../assets/html.svg';
import CSS from '../../assets/css.svg';
import './index.css';
import { useInView } from 'react-intersection-observer';
export default function SkillComponents() {
      const { ref: list, inView: listIsVisible } = useInView({
            threshold: 0,
            initialInView: true,
      });
      return (
            <>
                  <ul
                        ref={list}
                        className={`skill-content ${
                              listIsVisible ? `skill-content-animation` : ''
                        }`}
                  >
                        <li>
                              <img src={React} alt="" />
                              <p>React.Js</p>
                        </li>
                        <li>
                              <img src={Redux} alt="" />
                              <p>Redux.Js</p>
                        </li>
                        <li>
                              <img src={JavaScript} alt="" />
                              <p>JavaScript</p>
                        </li>
                        <li>
                              <img src={HTML} alt="" />
                              <p>HTML</p>
                        </li>
                        <li>
                              <img src={CSS} alt="" />
                              <p>CSS</p>
                        </li>
                  </ul>
            </>
      );
}
