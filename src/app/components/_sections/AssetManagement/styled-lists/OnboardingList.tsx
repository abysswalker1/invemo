import {FC} from 'react';
import first from '/public/onboarding-1.svg';
import second from '/public/onboarding-2.svg';
import third from '/public/onboarding-3.svg';
import fourth from '/public/onboarding-4.svg';
import StyledList from '../../../common/styled-list/StyledList';

const OnboardingList: FC = () => {
  const items = [
    {
      image: first,
      firstString: 'Strategy allocation - select a', 
      secondString: ' strategy suitable for your risk profile'
    },
    {
      image: second,
      firstString: 'Assets exposure - choose ', 
      secondString: 'digital assets in your portfolio'
    },
    {
      image: third,
      firstString: 'Leverage level - adjustable risk-reward', 
      secondString: 'according to your risk appetite'
    },
    {
      image: fourth,
      firstString: 'Profit reinvestment - increasing or', 
      secondString: 'consistent working capital'
    },
  ]
  return (
    <StyledList items={items} className='onboarding-list'/>
  );
};

export default OnboardingList;