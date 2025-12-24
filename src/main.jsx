import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoryFormProvider } from './context/StoryFormContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoryFormProvider>
        <App />
      </StoryFormProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

