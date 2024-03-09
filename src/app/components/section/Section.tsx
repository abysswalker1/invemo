import React, {ReactNode, FC} from 'react';
import cn from 'classnames';
import './section.css';
import { IWithClass } from '../../types';

interface Props extends IWithClass {
  title: string
  children: ReactNode
  id: string
}

const Section: FC<Props> = (props) => {

  return (
    <section className={ cn(props.className) } id={props.id}>
      <h2 className='section-title'>
        {props.title}
      </h2>

      {props.children}
    </section>
  );
};

export default Section;