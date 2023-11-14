'use client';

import React from 'react';
import styles from './Content.module.css';
import Footer from './Footer/Footer';

interface Props{
    children: React.ReactNode,
}

const Content: React.FC<Props> = ({children}) => {
    console.info('Content');
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    );
};
  
export default Content;