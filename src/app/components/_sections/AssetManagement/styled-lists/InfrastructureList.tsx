import {FC} from 'react';
import StyledList from '../../../ui/styled-list/StyledList';
import first from '/public/infr1.svg';
import second from '/public/infr2.svg';
import third from '/public/infr3.svg';
import fourth from '/public/infr4.svg';
import fifth from '/public/infr5.svg';

const InfrastructureList: FC = () => {
  const items = [
    {
      image: first, 
      firstString: 'Connectivity - established connection',
      secondString: 'to multiple exchanges',
    },
    {
      image: second,
      firstString: 'Low latency – quick execution',
      secondString: ' complex algorithms'
    },
    {
      image: third,
      firstString: 'Scalability - ability to process',
      secondString: 'thousands of orders per second',
    },
    {
      image: fourth,
      firstString: 'Security - regular penetration testing and multi-',
      secondString: 'level user access',
      className: 'infrastructure-list__no-br'
    },
    {
      image: fifth,
      firstString: 'Risk management & reporting – client position',
      secondString: 'monitoring &  performance reporting',
      className: 'infrastructure-list__no-br'
    },
  ]

  return (
    <StyledList items={items} className='infrastructure-list'/>
  );
};

export default InfrastructureList;