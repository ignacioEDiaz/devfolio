import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { container } from './di/container';
import { ServicesProvider } from './presentation/providers/ServicesContext';
import App from './presentation/App';
import './presentation/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServicesProvider services={container}>
      <App />
    </ServicesProvider>
  </StrictMode>,
);
