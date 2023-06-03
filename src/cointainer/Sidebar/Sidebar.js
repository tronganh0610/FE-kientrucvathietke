import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>

        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <div class="dropdown">
      <div className='menu'>
        <img className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm6xN2esEXj4PCzOCJui2kuVOPkbkX0O5A4r5NtsG8iNYytQYqsxcoTTDYGjYbS9wjB0&usqp=CAU" />
        <h1 class='username'>Username</h1>
        <div class="dropdown__select">
        <i class="fa fa-caret-down dropdown__caret"></i>
        </div>
        
      </div>
      <ul class="dropdown__list">
        
        <li class="dropdown__item">
          <span class="dropdown__text">View profile</span>
          <i class="fa fa-user dropdown__icon"></i>
        </li>
       
        <li class="dropdown__item">
          <span class="dropdown__text">Logout</span>
          <i class="fa fa-circle dropdown__icon"></i>
        </li>
      </ul>
    </div>

          
        </div>
        
      </IconContext.Provider>
    </>
  );
}

export default SideBar;