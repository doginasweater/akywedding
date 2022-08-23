import { Button, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../../styles/admin.scss';

const sidebarLinks = [
  {
    to: '/admin',
    text: 'Home',
    end: true
  },
  {
    to: 'rsvps',
    text: 'RSVPs'
  },
  {
    to: 'meal-options',
    text: 'Meal Options'
  }
];

export const AdminLayout: React.FC = () => (
  <div className="admin">
    <header className="header">
      <Heading>Akywedding Admin</Heading>
    </header>
    <div className="content">
      <div className="sidebar">
        <List spacing={3}>
          {sidebarLinks.map(x => (
            <ListItem key={x.to}>
              <Button as={NavLink} to={x.to} end={x.end} width="100%">
                {x.text}
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  </div>
);