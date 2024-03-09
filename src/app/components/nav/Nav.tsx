import {FC} from 'react';
import SmallLink from '../links/SmallLink';
import { ILink, IWithClass } from '../../types';
import cn from 'classnames';

interface Props extends IWithClass {
  links: ILink[]
}

const Nav: FC<Props> = ({ links, className }) => {
  return (
    <nav className={cn('navigation', className)}>
      {links.map((link, index) => (
        <SmallLink 
          text = {link.text}
          href= {link.href} 
          key={'header-nav-' + index}
        />
      ))}
    </nav>
  );
};

export default Nav;