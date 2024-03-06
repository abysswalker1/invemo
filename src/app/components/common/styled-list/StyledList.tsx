import React, {FC} from 'react';
import { IWithClass, IListItem } from '../../../types';
import cn from 'classnames';
import './styled-list.css';
import Image from 'next/image';

interface Props extends IWithClass {
  items: IListItem[]
}

const StyledList: FC<Props> = (props) => {
  return (
    <ul className={ cn('styled-list', props.className)} >
      {props.items.map((item, index)=> {
        return (
          <li className={item.className} key={`${props.className}-${index}`} >
            <Image src={item.image} alt='/' className='styled-list__icon'/>
            <p>{item.firstString}<br/>{item.secondString}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default StyledList;