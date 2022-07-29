import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
