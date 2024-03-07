import {FC} from 'react';
import MainHeader from '../../header/MainHeader';
import RedButtonLink from '../../ui/links/RedButtonLink';
import Bg from '/public/hero.jpg';
import Image from 'next/image';

import './hero.css';

const Hero: FC = () => {
  return (
    <div className='hero'>
      <div className="hero_content">
        <MainHeader />

        <div className="hero-grid container">
          <p className='hero-grid__title'>Invest in digital assets like Forbes 100 ultra-high net worth individuals with a Swiss asset manager</p>

          <div className="hero-grid__quote">
            <p>«I don't know a family office that</p>
            <p>doesn't have a bit of it now» Raoul Pal</p>
          </div>

          <div className="hero-links">
            <RedButtonLink className='hero-links__item' text="Send Inquiry" href="#" />
            <RedButtonLink className='hero-links__item' text="Learn more" href="#" />
          </div>
        </div>
      </div>
      <Image src={Bg} fill={true} alt='' className='hero_bg' />
    </div>
  );
};

export default Hero;