import {FC} from 'react';
import './partners.css';
import Section from '../../ui/section/Section';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import first from '/public/copper.png' 
import second from '/public/bdo.png' 
import third from '/public/vqf.svg' 
import fourth from '/public/crystal.png' 
import fifth from '/public/Logo_Gentwo_transparent.png' 
import sixth from '/public/logo_ispgroup.svg'

interface PartnersItemProps {
  image: string | StaticImageData
}

const Partnersitem: FC<PartnersItemProps> = ({ image }) => {
  return (
    <div className="partners-item">
      <Image src={image} alt=''/>
    </div>
  )
}

const Partners: FC = () => {
  const images = [first, second, third, fourth, fifth, sixth];
  return (
    <Section title='Partners & Providers' id='partners section'>
      <div className="partners">
        {images.map(image => {
          return <Partnersitem image={image}/>
        })}
      </div>
    </Section>
  );
};

export default Partners;