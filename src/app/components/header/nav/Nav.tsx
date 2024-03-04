import React from 'react';
import SmallLink from '../../common/links/SmallLink';
import { ILink } from '../../../types';
import Burger from '../../mobile-menu/Burger';

import './nav.css';

type Props = {
  links: ILink[]
}

const Nav: React.FC<Props> = ({ links }) => {
  return (
    <div className="header-navigation">
      <nav>
        {links.map((link, index) => (
          <SmallLink 
            text = {link.text}
            href= {link.href} 
            key={'header-nav-' + index}
          />
        ))}
        
      </nav>
      <Burger />
    </div>
  );
};

export default Nav;