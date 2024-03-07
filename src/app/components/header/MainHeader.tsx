import {FC} from 'react';
import Header from "./Header";
import Logo from "../ui/logo/Logo";
import Nav from "./nav/Nav";

const MainHeader: FC = () => {
  const mainLinks = [
    {text: 'Asset Menagement', href: '#'},
    {text: 'Exchange', href: '#'},
    {text: 'Parthners & Providers', href: '#'},
    {text: 'Contact', href: '#'},
    {text: 'DeFi Vault', href: '#'},
  ]

  return (
    <Header>
      <Logo />
      <Nav links={mainLinks}/>  
    </Header>
  );
};

export default MainHeader;