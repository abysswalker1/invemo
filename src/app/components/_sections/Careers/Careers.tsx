import {FC} from 'react';
import Section from '../../ui/section/Section';
import Expand from '../../expand/Expand';
import './careers.css';
import RedButtonLink from '../../ui/links/RedButtonLink';
import {getData} from './data';

type CareersList = {
  title: string
  items: string[]
}

const CareersList: FC<CareersList> = (props) => {
  return (
    <>
      <p className='subtitle'>{props.title}</p>
      <ul className='careers-expand__list'>
        {props.items.map(item => (
          <li><p>{item}</p></li>
        ))}
      </ul>
    </>
  );
};

const Careers: FC = () => {
  const data = getData();

  return (
    <Section title='Careers' id='careers'>
      <div className="careers">
        <Expand className='careers-expand'>
          <h3>Administration & business development manager</h3>
          <CareersList {...data.administration[0]}/>
          <CareersList {...data.administration[1]}/>
          <RedButtonLink text='Contact us' href='#contact' className='careers-expand__link'/>
        </Expand>
        <Expand className='careers-expand'>
          <h3>C++/C# Developer</h3>
          <CareersList {...data.developer[0]}/>
          <CareersList {...data.developer[1]}/>
          <RedButtonLink text='Contact us' href='#contact' className='careers-expand__link'/>
        </Expand>
      </div>
    </Section>
  );
};

export default Careers;