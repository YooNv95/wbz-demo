// layout.jsx
import React from 'react';
import styles from './layout.module.scss';

export default function FAQLayout({ children }) {
    return (
        <div className={styles.faq_container}>
            <div className={styles.faq_header}>
                <h1>자주 묻는 질문</h1>
                <p>궁금하신 내용을 빠르게 찾아보세요.</p>
            </div>
            <main>{children}</main>
        </div>
    );
}