import React from 'react';
import LinkWrap, {Props} from './LinkWrap'

const RedButtonLink: React.FC<Props> = ({...props}) => {
  return (
    <LinkWrap {...props}>
      <div className='btn red-button-link'>
        {props.text}
      </div>
    </LinkWrap>
  );
};

export default RedButtonLink;