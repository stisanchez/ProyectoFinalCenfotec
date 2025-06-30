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
            </main>

            <footer>
                <p>&copy; 2025 Banco Digital. Todos los derechos reservados.</p>
            </footer>
            
        </div>
    )
}
