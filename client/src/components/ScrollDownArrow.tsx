// ScrollDownArrow.tsx

import React from 'react';
import styles from '../styles/ScrollDownArrow.module.css';

const ScrollDownArrow: React.FC = () => {
    return (
        <div className={styles.arrowContainer}>
            <svg className={styles.arrows}>
                <path className={`${styles.arrowPath} ${styles.arrow1}`} d="M0 0 L30 32 L60 0" />
                <path className={`${styles.arrowPath} ${styles.arrow2}`} d="M0 20 L30 52 L60 20" />
                <path className={`${styles.arrowPath} ${styles.arrow3}`} d="M0 40 L30 72 L60 40" />
            </svg>
        </div>
    );
};

export default ScrollDownArrow;

