import {FC} from 'react';
import cn from 'classnames';
import Image from 'next/image';
import logoImg from '/public/Frame.svg';
import logoText from '/public/Invemo.svg';

import './logo.css';
import { IWithClass } from '../../types';

const Logo: FC<IWithClass> = ({ className }) => {
  return (
    <div className={cn(className, 'logo')}>
      <Image src={logoImg} className='logo-image' alt="/"/>
      <Image src={logoText} className='logo-text' alt="Главная"/>
    </div>
  );
};

export default Logo;