import { Link } from 'react-router-dom';
import '../styles/styles.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <nav>
        <ul className="link-group">
          <li className="link-items">
            <Link to="/">Home</Link>

            <Link to="/travel">Travel</Link>

          </li>
        </ul>
        <div className="header-title">
          <h1>A &amp; A</h1>
        </div>
        <div className="right">
          <ul className="link-group">
            <li className="link-items">
            <Link to="/registry">Registry</Link>
            <Link to="/rsvp-search">RSVP</Link>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  );
};
