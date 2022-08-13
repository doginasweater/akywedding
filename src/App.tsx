import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import {
  Rsvp,
  Home,
  Travel,
  Registry,
  RsvpSearch
} from './pages';


export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rsvp-search" element={<RsvpSearch />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Route>
    </Routes>
  </Router>
);