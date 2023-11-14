'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCompassDrafting, faDiceD20, faEyeSlash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    console.info('Header');
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const onClickSearch = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            // history.push(path + search);
        }
    };
    
    return (
        <div className={styles.container}>
            {isSearch ?
                <>
                    <div className={styles.search}>
                        <input
                            type="search"
                            onChange={(e) => { setSearch(e.currentTarget.value); }}
                            onKeyPress={onClickSearch}
                            placeholder="Поиск правил"
                            value={search}
                        />
                    </div>
                    <div className={styles.icon} data-text="Скрыть" onClick={() => setIsSearch(false)}>
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </div>
                </>
                :
                <>
                    <div className={styles.icon} data-text="Поиск" onClick={() => setIsSearch(true)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className={styles.icon} data-text="Конструктор">
                        <FontAwesomeIcon icon={faCompassDrafting} />
                    </div>
                    <div className={styles.icon} data-text="Правила">
                        <FontAwesomeIcon icon={faDiceD20} />
                    </div>
                    <div className={styles.icon} data-text="Войти">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                </>
            }
        </div>
    );
};
  
export default Header;