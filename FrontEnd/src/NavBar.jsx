
import './index.css';

import DehazeIcon from '@mui/icons-material/Dehaze';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { Link } from 'react-router';

const NavBar = ({ count, count1 }) => {

  const [display, setDisplay] = useState(false);

  const closeMenu = () => setDisplay(false);

  return (
    <>

      {/* NAVBAR */}

      <nav className="navbar">

        {/* LEFT - LOGO */}

        <div className="nav-left">

          <button
            className="menu-btn"
            onClick={() => setDisplay(true)}
          >
            <DehazeIcon />
          </button>

          <Link to="/" className="logo">
            GIFT<span>BAZAAR</span>
          </Link>

        </div>


        {/* CENTER - NAVIGATION */}

        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

        </div>


        {/* RIGHT - ICONS */}

        <div className="nav-icons">

          <Link to="/shop" className="nav-icon">
            <StorefrontIcon />
          </Link>


          <Link to="/wish" className="nav-icon">

            <FavoriteIcon />

            {count > 0 && (
              <span className="badge">
                {count}
              </span>
            )}

          </Link>


          <Link to="/cart" className="nav-icon">

            <ShoppingCartIcon />

            {count1 > 0 && (
              <span className="badge">
                {count1}
              </span>
            )}

          </Link>


          <Link to="/login" className="nav-icon">
            <AccountCircleIcon />
          </Link>

        </div>

      </nav>


      {/* SIDEBAR OVERLAY */}

      {display && (

        <div
          className="sidebar-overlay"
          onClick={closeMenu}
        >

          <aside
            className="sidebar"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>


            <h2 className="sidebar-logo">
              GIFT<span>BAZAAR</span>
            </h2>


            <ul>

              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop" onClick={closeMenu}>
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/wish" onClick={closeMenu}>
                  Wishlist ❤️
                </Link>
              </li>

              <li>
                <Link to="/cart" onClick={closeMenu}>
                  My Cart 🛒
                </Link>
              </li>

            </ul>

          </aside>

        </div>

      )}

    </>
  );

};

export default NavBar;

