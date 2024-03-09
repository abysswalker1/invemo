import React from 'react';
import './mobile-menu.css';
import Socials from '../socials/Socials';
import Nav from '../nav/Nav';

const MobileMenu = () => {
  const links = [
    {text: 'DeFi Vault', href: '#'},
    {text: 'Asset Menagement', href: '#asset-management'},
    {text: 'Exchange', href: '#exchange'},
    {text: 'Parthners & Providers', href: '#partners'},
    {text: 'Contact', href: '#contact'},
  ]  
  return (
    <div className='mobile-menu'>
      <Nav links={links} className='mobile-menu__navigation'/>
      <Socials className='mobile-menu__socials'/>
    </div>
  );
};

export default MobileMenu;