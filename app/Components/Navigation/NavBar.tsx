
import { useState } from 'react';
import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="py-2 w-full">
            <div className="flex justify-between items-center p-3 border-2 border-gray-200 rounded-full mx-[2%]">
                <h1 className="px-3 text-xl">Logo</h1>
                {/* Hamburger menu for mobile */}
                <div className="flex md:hidden">
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4">
                    <NavLink className="text-purple-600" to="/">Features</NavLink>
                    <NavLink className="" to="/etc">How it Works</NavLink>
                    <NavLink className="" to="/etc">Integrations</NavLink>
                    <NavLink className="" to="/etc">Pricing</NavLink>
                    <NavLink className="" to="/etc">Support</NavLink>
                </div>
                <div className="hidden md:block">
                    <button className="custom-button p-3 text-white font-bold rounded-full">Get Started</button>
                </div>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-white border-2 border-gray-200 rounded-xl mx-4 mt-2 py-4 space-y-3 shadow-lg z-50">
                    <NavLink className="text-purple-600" to="/" onClick={() => setMenuOpen(false)}>Features</NavLink>
                    <NavLink className="" to="/etc" onClick={() => setMenuOpen(false)}>How it Works</NavLink>
                    <NavLink className="" to="/etc" onClick={() => setMenuOpen(false)}>Integrations</NavLink>
                    <NavLink className="" to="/etc" onClick={() => setMenuOpen(false)}>Pricing</NavLink>
                    <NavLink className="" to="/etc" onClick={() => setMenuOpen(false)}>Support</NavLink>
                    <button className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#3D58EA] via-[#22499C] to-[#8A36EA]">
          Get Started
        </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;