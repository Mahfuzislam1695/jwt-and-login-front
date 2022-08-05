import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
//     const [items, setItems] = useState();

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//    setItems(items);
// }, []);




const user = localStorage.getItem("accessToken");

const Logout = (e) => {
    localStorage.clear();
    window.location="/";
    e.preventDefault();
}
    return (
        <nav className='header'>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            {user ? <button onClick={Logout}>logout</button>:<button>login</button>}
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;