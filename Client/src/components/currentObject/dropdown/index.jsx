import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown(props) {
      const [isListOpen, setIsListOpen] = useState(false);

      return isListOpen ? (
            <div className="dropdown-content">
                  <div
                        className="title-dropdown"
                        onClick={() => {
                              setIsListOpen(false);
                        }}
                  >
                        <h2 className="dropdown-title">{props.title}</h2>
                        <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <div className="dropdown-container-content">
                        <ul>{props.content}</ul>
                  </div>
            </div>
      ) : (
            <div className="dropdown-content">
                  <div
                        className="title-dropdown"
                        onClick={() => {
                              setIsListOpen(true);
                        }}
                  >
                        <h2 className="dropdown-title">{props.title}</h2>
                        <FontAwesomeIcon icon={faChevronUp} />
                  </div>
            </div>
      );
}

export default Dropdown;
