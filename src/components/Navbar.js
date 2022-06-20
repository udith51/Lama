import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="language">EN</div>
                <div className="searchBox">
                    <input type="text" placeholder="Search" />
                    <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                </div>
            </div>
            <div className="middle">
                <h1 className='logo'>LAMA.</h1>
            </div>
            <div className="right">
                <div className="menuItems">Sign In</div>
                <div className="menuItems">Register</div>
                <div className="menuItems">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </div>
            </div>
        </div>
    )
}