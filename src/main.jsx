import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoryFormProvider } from './context/StoryFormContext'
import PasswordProtection from './components/PasswordProtection'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PasswordProtection>
        <StoryFormProvider>
          <App />
        </StoryFormProvider>
      </PasswordProtection>
    </BrowserRouter>
  </React.StrictMode>,
)

