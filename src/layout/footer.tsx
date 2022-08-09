import { Link } from '@chakra-ui/react';
import '../styles/styles.scss';

export const Footer: React.FC = () => {
  return (
    <div className="footer">made with 💖 by <Link href="http://github.com/solidquartz" isExternal>solidquartz</Link> + <Link href="http://github.com/doginasweater" isExternal>doginasweater</Link></div>
  );
};