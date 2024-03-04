import React, { ReactNode } from 'react';

import './header.css';

type Props =  {
  children: ReactNode
}

const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <div className="container">
        {props.children}
      </div>
    </header>
  );
};

export default Header;