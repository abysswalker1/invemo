import {FC} from 'react';
import Logo from '../ui/logo/Logo';
import {getData} from './data';
import SmallLink from '../ui/links/SmallLink';
import { ILink } from '../../types';
import './footer.css';
import Image from 'next/image';
import LinkWrap from '../ui/links/LinkWrap';
import in_logo from "/public/invemo_in.svg";
import medium_logo from "/public/invemo_medium.svg";

type Data = {
  pageLinks: ILink[],
  modalLinks: ILink[]
}

const Footer: FC = () => {
  const {pageLinks, modalLinks} : Data = getData();

  return (
    <footer>
      <Logo className='footer-logo'/>
      <div className="footer-address">Invemo Capital AG, Blegistrasse 13 6340 Baar, Switzerland</div>
      <div className="footer-links">
        {pageLinks.map(link => ( 
          <SmallLink {...link} className='footer-links__link' />
        ))}
      </div>
      <div className="footer-links">
        {modalLinks.map(link => ( 
          <SmallLink {...link} className='footer-links__link footer-modal-link'/>
        ))}
      </div>
      <div className="footer-socials">
        <SmallLink text="info@invemo.ch" href="mailto:info@invemo.ch" className='footer-socials__email'/>
        <LinkWrap href="#">
          <Image src={in_logo} alt='' />
        </LinkWrap>
        <LinkWrap href="#">
          <Image src={medium_logo} alt='' />
        </LinkWrap>
      </div>
      <SmallLink text="info@invemo.ch" href="mailto:info@invemo.ch" className='footer-socials__email_mobile'/>
    </footer>
  );
};

export default Footer;