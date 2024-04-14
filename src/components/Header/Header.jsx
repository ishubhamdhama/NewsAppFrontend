import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={menuOpen ? 'true' : 'false'}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Logo */}
                        <div className="flex flex-shrink-1 items-start justify-start font-mono headerParent">
                            <h2 className=' text-[2rem] text-white font-bold'><Link to="/">NEWSHUB</Link></h2>
                        </div>

                        {/* Desktop and tablet menu items */}
                        <div className="hidden sm:flex sm:ml-6 sm:items-center sm:space-x-4 md:flex md:ml-0 md:space-x-2 ">
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Home</Link>
                            <Link to="/search" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Search</Link>
                            <Link to="/business" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Business</Link>
                            <Link to="/sports" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Sports</Link>
                            <Link to="/entertainment" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Entertainment</Link>
                            <Link to="/innovation" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>Innovation</Link>
                            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMenu}>About</Link>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {menuOpen && (
                        <div className="sm:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* Mobile menu items */}
                                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Home</Link>
                                <Link to="/search" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Search</Link>
                                <Link to="/business" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Business</Link>
                                <Link to="/sports" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Sports</Link>
                                <Link to="/entertainment" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Entertainment</Link>
                                <Link to="/innovation" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>Innovation</Link>
                                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>About</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Header;
