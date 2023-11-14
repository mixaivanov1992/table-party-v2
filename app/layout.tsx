'use client';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { setupStore } from 'store/index';
import styles from '@css/Layout.module.css';
// import SessionProviders from 'components/SessionProviders/SessionProviders';
import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children}: {children: React.ReactNode}) {
    const store = setupStore();
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
            </head>
            <body className={inter.className}>
                {/* <SessionProviders> */}
                <Provider store={store}>
                    <SnackbarProvider
                        preventDuplicate
                        maxSnack={1}
                        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                    >
                        <div className={styles.container}>
                            {children}
                        </div>
                    </SnackbarProvider>
                </Provider>
                {/* </SessionProviders> */}
            </body>
        </html>
    );
}
