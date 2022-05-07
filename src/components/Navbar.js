import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <span className="language">EN</span>
                <div className="search-box">
                    <div className="input">Input</div>
                    <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                </div>

            </div>
            <div className="middle">
                <div className="logo">LAMA</div>
            </div>
            <div className="right">
                <span className="menu">Sign In</span>
                <span className="menu">Register</span>
                <span className="menu">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCart />
                    </Badge>
                </span>
            </div>


        </div>
    );
}

export default Navbar;