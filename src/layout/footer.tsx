import { Link } from '@chakra-ui/react';
import '../styles/styles.scss';

export const Footer: React.FC = () => {
  return (


    <div className="footer">
      <p>contact: 514 553 3676 / akymacd@gmail.com </p>
      made with 💖 by <Link href="http://github.com/solidquartz" isExternal>aky</Link> + <Link href="http://github.com/myopicmage" isExternal>kevin</Link></div>
  );
};