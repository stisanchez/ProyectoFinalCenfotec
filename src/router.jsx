import { createBrowserRouter } from 'react-router-dom';
import LayoutGeneral from './components/layouts/layoutGeneral';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Products from './pages/Products';
import LoansCalculator from './pages/LoansCalculator';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutGeneral />, // Este layout envuelve todas las rutas hijas
        errorElement: <NotFound />, // Renderiza si una ruta hija no se encuentra o hay un error
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about', // Ruta relativa a la ruta padre '/'
                element: <About />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'loansCalculator', // Parámetro de ruta. Accedes con useParams()
                element: <LoansCalculator />,
            },
            {
                path: 'contactUs', // Parámetro de ruta. Accedes con useParams()
                element: <ContactUs />,
            },
        ],
    },

]);

export default router;