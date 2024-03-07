import {FC} from 'react';
import Section from '../../ui/section/Section';
import Image from 'next/image';
import assetImage from '/public/asset-image.svg'
import firstGraph from '/public/asset-graph-1.svg';
import secondGraph from '/public/asset-graph-2.svg';
import thirdGraph from '/public/asset-graph-3.svg';
import codeImage from '/public/code.png'
import './assetManagement.css';
import MovingImage from './../../moving-image/MovingImage';
import InfrastructureList from './styled-lists/InfrastructureList';
import onboardinImage from '/public/onboarding-image.png';
import OnboardingList from './styled-lists/OnboardingList';
import RedButtonLink from '../../ui/links/RedButtonLink';
import StructuredNoteTable from './selection-tables/StructuredNoteTable';
import ManagedAccountTable from './selection-tables/ManagedAccountTable';

const AssetManagement: FC = () => {

  return (
    <Section title="Asset Management" id='asset-management-section'>
      <div className="asset">

        <div className='asset-strategies asset_section'>
          <div className="asset-strategies__info">
          <p className='asset-strategies__subtitle'>
            Profit from the digital asset market volatility through<br/>
            traditional investment vehicle without the challenges<br/>
            of buying, storing and managing digital assets.<br/>
          </p>
          <h3>Institutional-grade algoritmic <br/> trading strategies</h3>

          <Image src={firstGraph} className='asset-strategies__graph' alt=''/>
          <p className='paragraph'>Arbitrage: low-risk. Inter &<br/>intermarket spread trading of BTC & ETH</p>

          <Image src={secondGraph} className='asset-strategies__graph' alt=''/>
          <p className='paragraph'>Market making: middle-risk. Volatility trading<br/>of large-cap altcoins versus stablecoins</p>

          <Image src={thirdGraph} className='asset-strategies__graph' alt=''/>
          <p>Countertrend: high-risk. Buying<br/>low and selling high of BTC & ETH</p>
          </div>

          <div className="asset-strategies__image">
            <Image src={assetImage} alt="" />
          </div>
        </div>

        <div className="infrastructure asset_section">
          <MovingImage className="asset-code" image={codeImage} />
          <div className="infrastructure-info">
            <h3>Cutting edge IT infrastructure</h3>
            <p className='paragraph'>State of the art trading software developed by our in-house development team enables the execution of the most sophisticated algorithmic trading strategies across multiple exchanges. </p>
            <div className="asset-infrastructure__feature">
              <p className="subtitle">Sofware features include</p>
            </div>
            <InfrastructureList />
          </div>
        </div>

        <div className="asset-onboarding asset_section">
          <div className="onboarding-info">
            <h3>Personal & professional client setup & onboarding</h3>
            <OnboardingList />
          </div>
          <div className="onboarding-image">
            <Image src={onboardinImage}  alt='' />
          </div>
        </div>

        <div className="selection">
          <h3>Selection of investment vehicles</h3>
          <div className="selection_main">
            <StructuredNoteTable />
            <ManagedAccountTable />
          </div>
          <RedButtonLink href='/' text="Contact us" className='selection-link'/>
        </div>
      </div>
    </Section>
  );
};

export default AssetManagement;