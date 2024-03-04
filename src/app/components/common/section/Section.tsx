import React, {ReactNode, FC} from 'react';
import cn from 'classnames';

import './section.css';

type Props = {
  title: string
  className?: string
  children: ReactNode
}

const Section: FC<Props> = (props) => {

  return (
    <section className={ cn('section', props.className) }>
      <h2 className='section-title'>
        {props.title}
      </h2>

      {props.children}
    </section>
  );
};

export default Section;