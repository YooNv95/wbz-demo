'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles/FAQTabs.module.scss';

export default function FAQTabs({ tabs, selectedTabKey, onTabChange }) {
    return (
        <div className={styles.tabs}>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => onTabChange(tab.key)}
                    className={`${styles.tab} ${
                        selectedTabKey === tab.key ? styles.active : ''
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}