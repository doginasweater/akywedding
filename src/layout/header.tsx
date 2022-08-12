import { Link } from 'react-router-dom';
import '../styles/styles.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/">Home</Link>

            <Link to="/travel">Travel</Link>

          </li>
        </ul>
        <div className="logo">
          <h1>Aky&amp;Andrew</h1>
        </div>
        <div className="right">
          <ul className="ul-items">
            <li className="li-items">
            <Link to="/registry">Registry</Link>
            <Link to="/rsvp">RSVP</Link>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  );
};
