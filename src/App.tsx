import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import {
  Gallery,
  Rsvp,
  Travel,
  Story,
  Party,
  Rideshare,
  Event,
  Registry,
  Home,
} from './pages';


export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/registry" element={ <Registry /> } />
          <Route path="/event" element={ <Event /> } />
          <Route path="/rideshare" element={ <Rideshare /> } />
          <Route path="/party" element={ <Party /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/travel" element={ <Travel /> } />
          <Route path="/story" element={ <Story /> } />
          <Route path="/rsvp" element={ <Rsvp /> } />
      </Route>
    </Routes>
  </Router>
);
