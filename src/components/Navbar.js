import React, {useState} from 'react';
import './Navbar.css';

function Navbar(){
    const [active, setActive] = useState('Home');

    const navItems = ['Home', 'AI Impact Challenge', 'FAQ', 'Articel', 'Referral Program'];
    
    return (
        <nav className="navbar">
            <ul className="nav-links">
                {navItems.map((item) => (
                    <li
                    key={item}
                    className={active === item ? 'active' : ''}
                    onClick = {() => setActive(item)}
                    > 
                    {item}
                    {item === 'Referal Program' && <span className="badge">Baru</span>}
                    </li>
                ))}
            </ul>
            <button className="btn-daftar">Daftar Sekarang</button>
        </nav>
    )
}

export default Navbar;