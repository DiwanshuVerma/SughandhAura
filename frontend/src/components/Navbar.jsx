import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '/icon.svg'
import { useCart } from '../context/cart';

const NavLink = ({ to, children, onClick, isActive }) => (
    <button
        onClick={() => onClick(to)}
        className={`text-xl font-medium hover:text-[#b67fff] cursor-pointer ${isActive ? 'text-[#b67fff]' : ''}`}
    >
        {children}
    </button>
);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { cartValue } = useCart()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        if (isMenuOpen) setIsMenuOpen(false); // Close menu after navigation
    };

    const handleShopNow = () => {
        navigate('/'); // Navigate to the home page
        setTimeout(() => {
            const section = document.getElementById('cards-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the card section
            }
        }, 100); // Delay to ensure navigation is complete
    };


    return (
        <nav className="z-30 px-12 lg:px-24 flex justify-between items-center w-screen h-[13vh] sm:h-[12vh] bg-[#1f1f1f79] text-white backdrop-blur-[3.6px] border border-[rgba(28,27,27,0.08)] fixed top-0 left-0 right-0">

            <div className="logo-container relative text-2xl flex items-center">
                <img src={logo} alt="" className='w-12 cursor-pointer' onClick={() => handleNavigation('/')} />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-6 text-xl justify-center flex-1">
                <NavLink to="/" onClick={handleNavigation} isActive={location.pathname === '/'}>
                    Home
                </NavLink>
                <NavLink to="/gallery" onClick={handleNavigation} isActive={location.pathname === '/gallery'}>
                    Gallery
                </NavLink>
                <NavLink to="/products" onClick={handleNavigation} isActive={location.pathname === '/products'}>
                    Products
                </NavLink>
                <NavLink to="/reviews" onClick={handleNavigation} isActive={location.pathname === '/reviews'}>
                    Reviews
                </NavLink>
            </div>

            {/* Hamburger Menu */}
            <div className="block md:hidden text-3xl cursor-pointer order-2" onClick={toggleMenu} aria-expanded={isMenuOpen}>
                <i className="fas fa-bars"></i>
            </div>
            <button onClick={handleShopNow} className="p-2 text-[1.1rem] rounded bg-[#6A0DAD] hover:bg-[#9A4DFF] hidden md:block">
                Shop Now
            </button>

            {/* Cart icon */}
            <div className=' ml-4 h-10 w-10 flex items-end justify-center relative cursor-pointer'>
                <i className="fa-solid fa-cart-shopping fa-fade text-2xl" />
                <span className='p-1 text-lg bg-red-600 rounded-full h-8 w-8 flex justify-center items-center absolute -top-2 -right-3'>{cartValue}</span>
            </div>

            {/* Mobile Navigation Links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-6 text-xl absolute right-0 top-[10vh] bg-[#1f1f1f] py-5 px-8 w-[250px] transition-all duration-300 ease-in-out items-center`}>
                <NavLink to="/" onClick={handleNavigation} isActive={location.pathname === '/'}>
                    Home
                </NavLink>
                <NavLink to="/gallery" onClick={handleNavigation} isActive={location.pathname === '/gallery'}>
                    Gallery
                </NavLink>
                <NavLink to="/products" onClick={handleNavigation} isActive={location.pathname === '/products'}>
                    Products
                </NavLink>
                <NavLink to="/reviews" onClick={handleNavigation} isActive={location.pathname === '/reviews'}>
                    Reviews
                </NavLink>
                <button onClick={handleShopNow} className="p-2 text-[1.1rem] rounded bg-[#6A0DAD] hover:bg-[#9A4DFF] w-full text-center">
                    Shop Now
                </button>

            </div>
        </nav>
    );
};
