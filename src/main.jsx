import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const mountHere = root.shadowRoot;
const options = { appendTo: mountHere, styleContainer: mountHere };

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   <RouterProvider router={router}></RouterProvider>
  // </StrictMode>

  <PrimeReactProvider value={options}>
    <RouterProvider router={router} />
  </PrimeReactProvider>
)
