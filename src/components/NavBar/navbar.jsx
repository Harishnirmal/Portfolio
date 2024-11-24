import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const NavBar = () => {

    const [showMenu, setShowMenu]= useState(false);

  return (
    <nav className="NavBar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopmenu">
              <Link activeClass='active'to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem" >Home</Link>
              <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem" >About</Link>
              <Link activeClass='active'to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem" >Portfolio</Link>
              <Link activeClass='active'to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem" >Contact</Link>
        </div>
        <button className="desktopmenubtn" onClick={() => (
         document.getElementById('contacts').scrollIntoView({behavior:'smooth'})
        )}>
            <img src={contactImg} alt="" className="desktopmenuImg" />Contact ME
        </button>

        <img src={menu} alt="Logo" className='mobmenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navmenu" style={{display: showMenu?'flex':'none'}}>
              <Link activeClass='active'to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={()=>setShowMenu(false)}>Home</Link>
              <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={()=>setShowMenu(false)}>About</Link>
              <Link activeClass='active'to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItems" onClick={()=>setShowMenu(false)}>Portfolio</Link>
              <Link activeClass='active'to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItems" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar;