import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Home, TestForm } from './pages';


export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/testform" element={<TestForm />} />
      </Route>
    </Routes>
  </Router>
);
