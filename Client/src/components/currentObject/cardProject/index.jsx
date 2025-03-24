import { useInView } from 'react-intersection-observer';
import './index.css';

/**
 *
 * @function CardProject it was a function to display elements with props
 * @returns
 */

export default function CardProject(props) {
      return (
            <>
                  <img
                        className="masonry"
                        src={props.image}
                        alt={props.altImage}
                  />
            </>
      );
}
