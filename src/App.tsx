import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import {
  Gallery,
  Rsvp,
  Home,
  TestForm
} from './pages';


export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/testform" element={<TestForm />} />
      </Route>
    </Routes>
  </Router>
);
