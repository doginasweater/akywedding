import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages';


export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Router>
);
