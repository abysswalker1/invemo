import {FC} from 'react';
import SmallLink from '../../ui/links/SmallLink';
import { ILink } from '../../../types';
import Burger from '../../mobile-menu/Burger';

import './nav.css';

interface Props {
  links: ILink[]
}

const Nav: FC<Props> = ({ links }) => {
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