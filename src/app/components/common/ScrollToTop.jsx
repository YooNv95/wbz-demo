'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 이벤트 감지
    useEffect(() => {
        const handleScroll = () => {
            // 스크롤이 100px 이상일 때 버튼 표시
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 맨 위로 이동
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 부드럽게 이동
        });
    };

    return (
        <button
            className={styles.scroll_top}
            style={{
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
            }}
            onClick={scrollToTop}
            aria-label="Scroll to Top"
        >
            <img
                src="/assets/icon_top.svg"
                alt="Scroll to Top"
                className={styles.icon}
            />
        </button>
    );
}