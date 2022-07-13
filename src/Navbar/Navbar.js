import React, { useState } from 'react';
import { MenuList } from './MenuList';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return(
        <li key={index}>
            <NavLink exact to={url} activeClassName="active">
                {title}</NavLink>
        </li>
    )
  });
  const handleClick =() =>{
    setClicked(!clicked);
  }

  return (
    <nav>
        <div className='logo'>
            Nzube<font>Chi</font>
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={ clicked ? 'fas fa-times fa-lg': 'fas fa-bars fa-lg'}></i>
        </div>
        <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        {menuList}
        </ul>
    </nav>
  )
}

export default Navbar