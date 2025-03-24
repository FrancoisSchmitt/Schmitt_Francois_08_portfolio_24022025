import './index.css';
import { Link } from 'react-router-dom';
/**
 *
 * @param {*} mailContent
 * @returns
 */

export default function ButtonMailto(props) {
      return (
            <button>
                  <Link
                        to="#"
                        onClick={(e) => {
                              window.location.href = props.mailto;
                              e.preventDefault();
                        }}
                  >
                        {props.label}
                  </Link>
            </button>
      );
}
