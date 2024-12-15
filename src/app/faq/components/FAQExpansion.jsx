'use client';

import React, { useState } from 'react';
import styles from './styles/FAQExpansion.module.scss';

export default function FAQExpansion({ categoryName, subCategoryName, question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.expansion_container}>
            <div className={styles.expansion_header} onClick={toggleOpen}>
                {/* 카테고리 */}
                <div className={styles.expansion_category}>
                    {categoryName} / {subCategoryName}

                </div>

                {/* 제목과 아이콘 */}
                <div className={styles.expansion_title_container}>
                    <h3 className={styles.expansion_title}>{question}</h3>
                    <img
                        src="/assets/icon_arrow.svg"
                        alt="Toggle"
                        className={`${styles.toggle_icon} ${isOpen ? styles.open : ''}`}
                    />
                </div>
            </div>

            {/* 답변 내용 */}
            <div className={`${styles.expansion_content} ${isOpen ? styles.open : ''}`}>
                <p dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
        </div>
    );
}