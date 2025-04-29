import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./shared/libs/i18n/index"
import './index.css';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
