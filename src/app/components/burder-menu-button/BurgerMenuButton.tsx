'use client';
import {FC, useState} from 'react';
import {createPortal} from 'react-dom';
import Hamburger from 'hamburger-react';
import MobileMenu from '../mobile-menu/MobileMenu';
import './mobile-menu.css'

const BurgerMenuButton: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="burger-btn" onClick={() => setOpened(prev => !prev)}>
      <Hamburger/>
      {opened && createPortal(<MobileMenu />, document.body)}
    </div>
  );
};

export default BurgerMenuButton;