import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* calling App component that holds custom components */}
    <App />
  </StrictMode>,
)
