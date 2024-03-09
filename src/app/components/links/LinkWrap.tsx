import { ReactNode, FC } from 'react';
import cn from 'classnames';
import './links.css';
import { ILink, IWithClass } from '../../types';

export interface Props extends ILink, IWithClass {
  children?: ReactNode
}

const LinkWrap: FC<Props> = (props) => {
  return (
    <a href={props.href} className={props.className}>
      {props.children || <span>{props.text}</span>}
    </a>
  );
};

export default LinkWrap;