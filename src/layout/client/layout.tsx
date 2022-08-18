import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { Header } from './header';
import '../../styles/styles.scss';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};