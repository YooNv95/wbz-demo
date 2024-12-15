import React, { useState, useEffect } from 'react';
import styles from './styles/FAQSubTabs.module.scss';

export default function FAQSubTabs({ categories, onCategoryChange, selectedCategory }) {
    const [localSelectedCategory, setLocalSelectedCategory] = useState(selectedCategory || '전체');

    // 부모 상태와 로컬 상태 동기화
    useEffect(() => {
        if (selectedCategory !== localSelectedCategory) {
            setLocalSelectedCategory(selectedCategory);
        }
    }, [selectedCategory]);

    const handleTabClick = (tab) => {
        // 현재 선택된 탭과 다른 탭 클릭 시 동작
        if (tab !== localSelectedCategory) {
            setLocalSelectedCategory(tab); // 로컬 상태 업데이트
            if (onCategoryChange) {
                onCategoryChange(tab); // 부모 상태 업데이트
            }
        }
    };

    const tabs = ['전체', ...categories.map((cat) => cat.name)];

    return (
        <div className={styles.subtabs_container}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`${styles.subtab} ${tab === localSelectedCategory ? styles.active : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}