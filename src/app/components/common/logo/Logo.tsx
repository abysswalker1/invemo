import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import logoImg from '/public/Frame.svg';
import logoText from '/public/Invemo.svg';

import './logo.css';

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className='' }) => {
  return (
    <div className={cn(className, 'logo')}>
      <Image src={logoImg} className='logo-image' alt="/"/>
      <Image src={logoText} className='logo-text' alt="Главная"/>
    </div>
  );
};

export default Logo;