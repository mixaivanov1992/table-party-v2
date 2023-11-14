import React from 'react';

interface Props{
    message: string,
}

const Error: React.FC<Props> = ({message}) => {
    console.info('Error');
    return <h1 className='global_error'>{message}</h1>;
};
  
export default Error;