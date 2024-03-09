import {FC} from 'react';
import LinkWrap, {Props} from './LinkWrap'

const SmallLink: FC<Props> = (props) => {
  return (
    <LinkWrap {...props}>
      <div className='small-link'>
        {props.text}
      </div>
    </LinkWrap>
  );
};

export default SmallLink;