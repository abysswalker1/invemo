import {FC} from 'react';
import { IWithClass } from '../../types';
import cn from 'classnames';
import Image from 'next/image';
import LinkWrap from '../links/LinkWrap';
import in_logo from "/public/invemo_in.svg";
import medium_logo from "/public/invemo_medium.svg";
import SmallLink from '../links/SmallLink';
import './socials.css';

const Socials: FC<IWithClass> = (props) => {
  return (
    <div className={cn('socials', props.className)}>
      <SmallLink text="info@invemo.ch" href="mailto:info@invemo.ch" className='socials-email'/>
      <LinkWrap href="#">
        <Image src={in_logo} alt='' />
      </LinkWrap>
      <LinkWrap href="#">
        <Image src={medium_logo} alt='' />
      </LinkWrap>
    </div>
  );
};

export default Socials;