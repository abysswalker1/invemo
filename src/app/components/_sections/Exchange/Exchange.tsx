import {FC} from 'react';
import Section from '../../ui/section/Section';
import './exchange.css';
import { IListItem } from '../../../types';
import first from '/public/exchange1.svg';
import second from '/public/exchange2.svg';
import third from '/public/exchange3.svg';
import fourth from '/public/exchange4.svg';
import StyledList from '../../ui/styled-list/StyledList';
import topImage from '/public/exchange-top-image.jpg';
import bottomImage from '/public/exchange-bottom-image.svg';
import Image from 'next/image';

const Exchange: FC = () => {
  const items: IListItem[] = [
    {image: first, firstString: 'Best prices & fees'},
    {image: second, firstString: 'Deep liquidity &', secondString: 'Large order execution'},
    {image: third, firstString: 'Non-custodial', className: 'small-list-icon'},
    {image: fourth, firstString: 'SWIFT & SEPA transfers'},
  ]
  return (
    <Section title="Exchange" id="exchange-section">
      <div className="exchange">
        <div className="exchange-info">
          <p className='paragraph'>Access institutional-grade exchange services and benefit from best execution and deep liquidity.</p>
          <StyledList items={items} />
        </div>
        <div className="exchange-images">
          <Image src={topImage} alt=''/>
          <Image src={bottomImage} alt=''/>
        </div>
      </div>
    </Section>
  );
};

export default Exchange;