import {FC} from 'react';
import Logo from '../logo/Logo';
import {getData} from './data';
import SmallLink from '../links/SmallLink';
import { ILink } from '../../types';
import './footer.css';
import Socials from '../socials/Socials';

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
      <Socials className='footer-socials'/>
      <SmallLink text="info@invemo.ch" href="mailto:info@invemo.ch" className='footer-socials__email_mobile'/>
    </footer>
  );
};

export default Footer;