import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function LayoutGeneral() {
    return (
        <div className="contendorGeneral">
            <header style={{ backgroundColor: '#333', padding: '15px', color: 'white' }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' }}>
                        BancaDigital
                    </Link>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
                        <li>
                            <NavLink
                                to="/"
                                // Aquí usamos las clases de CSS que definimos en index.css
                                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
                            >
                                Acerca De
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/loansCalculator"
                                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
                            >
                                Calculadora Préstamos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
                            >
                                Contactenos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>


            {/* ¡ESTE MAIN ES CLAVE PARA EL CONTENIDO PRINCIPAL! */}
            <main style={{
                padding: '20px',
                flexGrow: 1, /* Permite que el contenido principal ocupe el espacio restante */
                maxWidth: '1200px', /* Limita el ancho máximo */
                margin: '0 auto', /* Centra el contenido */
                boxSizing: 'border-box', /* Asegura el padding */
                width: '100%', /* Ocupa el 100% del ancho disponible */
            }}>
                <Outlet />
                Aqui van el componente hijo
            </main>

            <footer style={{ backgroundColor: '#f0f0f0', padding: '15px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
                <p>&copy; 2025 Mi SPA React. Todos los derechos reservados.</p>
            </footer>

        </div>
    )
}
