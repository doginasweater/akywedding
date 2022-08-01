import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Gallery,
  Rsvp,
  Travel,
  Story,
  Party,
  Rideshare,
  Event,
  Registry,
  Home
} from './pages';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/registry" element={ <Registry /> } />
          <Route path="/event" element={ <Event /> } />
          <Route path="/rideshare" element={ <Rideshare /> } />
          <Route path="/party" element={ <Party /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/travel" element={ <Travel /> } />
          <Route path="/story" element={ <Story /> } />
          <Route path="/rsvp" element={ <Rsvp /> } />
          <Route path="/rsvp" element={ <Home /> } />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);