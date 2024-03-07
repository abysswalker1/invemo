import { ReactNode, FC } from 'react';

import './header.css';

interface Props {
  children: ReactNode
}

const Header: FC<Props> = (props) => {
  return (
    <header>
      <div className="container">
        {props.children}
      </div>
    </header>
  );
};

export default Header;