'use client';
import {FC, ReactNode, useState} from 'react';
import Image from 'next/image';
import arrow from '/public/arrow-down.svg';
import cn from 'classnames';
import './expand.css';
import { IWithClass } from '../../types';

interface Props extends IWithClass{
  children: ReactNode
}

const Expand: FC<Props> = (props) => {
  const [opened, setOpened] = useState(false);
  const className = cn(
    'expand', 
    props.className , 
    opened ? 'opened' : ''
  );


  return (
    <div className={className} >
      {props.children}
      <button className='expand-btn' onClick={() => setOpened((prev => !prev))}>
        <Image src={arrow} alt='' className='expand-btn__arrow'/>
      </button>
      <div className="expand_overlay"></div>
    </div>
  );
};

export default Expand;