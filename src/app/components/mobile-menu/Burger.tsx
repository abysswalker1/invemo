'use client';
import {FC} from 'react';
import Hamburger from 'hamburger-react';
import './mobile-menu.css'

const Burger: FC = () => {
  return (
    <div className="burger-btn">
      <Hamburger />
    </div>
  );
};

export default Burger;