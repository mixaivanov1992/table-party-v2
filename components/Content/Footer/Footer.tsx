'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    console.info('Footer');
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <span>Table</span>
                    <span>Party</span>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.projectAssistance}>
                    <div>Помощь проекту</div>
                    <div>VISA</div>
                    <div>4400 4301 7703 2700</div>
                    <div>МИР</div>
                    <div>5336 6902 8653 9822</div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    {/* {accessiblePages.map((accessiblePage) => {
                            const {
                                pageRoute, pageAlias,
                            } = accessiblePage;

                            return (
                                <Link key={uuidv4()} className={styles[pageAlias]} to={pageRoute}>{Localization[pageAlias]}</Link>
                            );
                        })} */}
                </div>
                <p className={styles.copyright}>
                    &copy;
                    {` ${new Date().getFullYear()} table-party.site`}
                </p>
            </div>
        </footer>
    );
};
  
export default Footer;