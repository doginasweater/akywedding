import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import '../styles/styles.scss';

export const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link as={RouterLink} to="/">Home</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/travel">Travel</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/registry">Registry</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
};
