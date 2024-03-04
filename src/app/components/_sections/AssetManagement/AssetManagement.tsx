import React, {FC} from 'react';
import Section from '../../common/section/Section';
import Image from 'next/image';
import assetImage from '/public/asset-image.svg'
import firstGraph from '/public/asset-graph-1.svg';
import secondGraph from '/public/asset-graph-2.svg';
import thirdGraph from '/public/asset-graph-3.svg';

import './assetManagement.css';

const AssetManagement: FC = () => {
  return (
    <Section title="Asset Management">
      <div className="asset">
        <div className='asset-info'>
          <p className='asset-info__subtitle'>
            Profit from the digital asset market volatility through<br/>
            traditional investment vehicle without the challenges<br/>
            of buying, storing and managing digital assets.<br/>
          </p>
          <h3>Institutional-grade algoritmic <br/> trading strategies</h3>

          <Image src={firstGraph} className='asset-info__graph' alt=''/>
          <p>Arbitrage: low-risk. Inter &<br/>intermarket spread trading of BTC & ETH</p>

          <Image src={secondGraph} className='asset-info__graph' alt=''/>
          <p>Market making: middle-risk. Volatility trading<br/>of large-cap altcoins versus stablecoins</p>

          <Image src={thirdGraph} className='asset-info__graph' alt=''/>
          <p>Countertrend: high-risk. Buying<br/>low and selling high of BTC & ETH</p>
        </div>

        <div className="asset-image">
          <Image src={assetImage} alt=''/>
        </div>
      </div>
    </Section>
  );
};

export default AssetManagement;