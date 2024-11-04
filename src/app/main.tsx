import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootElement);

rootElement.style.fontFamily = 'Arial, sans-serif';

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
