import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from '../../images/LogoBD.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../../styles/navbar.css'
import '../../styles/index.css'

export default function LayoutGeneral() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMenu = () => {
        setClick(false);
    }

    return (
        <div className='contenedorGeneral'>
            <div className="navbar">
                <Link className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={click ? ("nav-menu active") : ("nav-menu")}>
                    <li className='nav-item'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')} onClick={closeMenu}>Inicio</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')} onClick={closeMenu}>Acerca De</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')} onClick={closeMenu}>Productos</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/loansCalculator" className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')} onClick={closeMenu}>Calculadora Préstamos</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contactUs" className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')} onClick={closeMenu}>Contactenos</NavLink>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
                </div>
            </div>

            <main>
                <Outlet />
                Aqui van el componente hijo
            </main>

            <footer>
                <p>&copy; 2025 Banco Digital. Todos los derechos reservados.</p>
            </footer>
            {/* <hr />
            <div className='contenedorGeneral'>
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



                <main style={{
                    padding: '20px',
                    flexGrow: 1,
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    boxSizing: 'border-box', 
                    width: '100%',
                }}>
                    <Outlet />
                    Aqui van el componente hijo
                </main>

                <footer style={{ backgroundColor: '#f0f0f0', padding: '15px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
                    <p>&copy; 2025 Mi SPA React. Todos los derechos reservados.</p>
                </footer>

            </div> */}
        </div>
    )
}
