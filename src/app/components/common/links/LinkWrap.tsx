import React, { ReactNode } from 'react';
import cn from 'classnames';

import './links.css';
import { ILink } from '../../../types';

export interface Props extends ILink {
  className?: string
  children?: ReactNode
}

const LinkWrap: React.FC<Props> = (
  { text, className='', href, children }: Props
) => {
  return (
    <a href={href} className={className}>
      {children || <span>{text}</span>}
    </a>
  );
};

export default LinkWrap;