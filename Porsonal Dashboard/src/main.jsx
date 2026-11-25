import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from '../context/TodoformC.jsx'
import Approutes from '../routes/Approutes.jsx'
import { ToastContainer, } from 'react-toastify';
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
   <ContextProvider>
   <Provider store={store}>
      <Approutes />
      <ToastContainer/>
    </Provider>
     </ContextProvider>
)
