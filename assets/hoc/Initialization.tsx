'use client';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useErrorHandler } from '@hooks/useErrorHandler';
//import { useMeMutation } from 'services/User';
//import { userSlice } from 'store/reducers/UserSlice';
import Error from '@components/Error/Error';
//import Loader from '@shared/Loader/Loader';
import React, { useEffect, useState } from 'react';

interface Props{
    children: React.ReactNode,
    loading: JSX.Element
}

const Initialization: React.FC<Props> = ({children, loading}) => {
    console.info('Initialization');
    // const [me] = useMeMutation();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const {setUser} = userSlice.actions;
    // const dispatch = useAppDispatch();
    const errorHandler = useErrorHandler();

    useEffect(() => {
        (async() => {
            try{
                // const {status, name, email} = await me(null).unwrap();
                // dispatch(setUser({isAuthorized: status, name, email}));
                setIsLoading(true);
            }catch(err){
                setError(errorHandler(err));
            }
        })();
    }, []);

    if(error) return <Error message={error}/>;
    return isLoading ? <>{children}</> : <>{loading}</>;
};

export default Initialization;
