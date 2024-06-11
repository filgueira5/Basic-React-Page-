import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from './assets/components/FirstComponent'
import DinamicData from './assets/components/DinamicData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstComponent/>
    <DinamicData/>
  </React.StrictMode>,
)
