import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/rsvp">RSVP</Link> | <Link to="/gallery">Gallery</Link>
      </nav>
  );
};