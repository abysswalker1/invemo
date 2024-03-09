import {FC} from 'react';
import Header from "./Header";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import { getLinks } from './mainNavLinks';
import BurgerMenuButton from '../burder-menu-button/BurgerMenuButton';

const MainHeader: FC = () => {
  const links = getLinks();

  return (
    <Header>
      <Logo />
      <Nav links={links} className='header-navigation'/>  
      <BurgerMenuButton />
    </Header>
  );
};

export default MainHeader;