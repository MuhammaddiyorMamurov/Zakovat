import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainContext from './context/MainContext.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  
    <MainContext >
      <ToastContainer position='top-center'/>
      <App />
    </MainContext>

)
