import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';

const SessionProviders = ({children}: {children : React.ReactNode}) => {
    const { data: session } = useSession();
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default SessionProviders;