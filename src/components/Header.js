import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
/* eslint-disable*/
const Header = () => {
  const headerStyle = {
    backgroundColor: '#e49504',
    width: '100%',
    margin: '0px auto',
    padding: ' 1rem 0',
    display: 'flex',
    justifyContent: 'space-around',
  };
  const navItem = {
    borderLeft: ' 2px solid #111',
  };
  return (
    <header style={headerStyle}>
      <Link to="/" className="logo">
        Math Magicians
      </Link>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
          }}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li style={navItem} className="nav-item">
            <Link to="/calculator" className="nav-link">
              Calculator
            </Link>
          </li>
          <li style={navItem} className="nav-item">
            <Link to="/quote" className="nav-link">
              Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
