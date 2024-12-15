'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/components/common/Header.module.scss';

export default function Header() {
    const [activeTab, setActiveTab] = useState('서비스 소개');
    const [isMenuOpen, setMenuOpen] = useState(false);

    //메뉴
    const tabs = [
        { name: '서비스 소개', href: '/guide' },
        { name: '자주 묻는 질문', href: '/faq' },
        { name: '새소식', href: '/news' },
        { name: '상담문의', href: '/counsel' },
    ];

    const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
    const pathname = usePathname();

    const rootStyles = getComputedStyle(document.documentElement);
    const tabletBreakpoint = parseInt(rootStyles.getPropertyValue('--breakpoint-sm'), 10);

    //현재 탭
    useEffect(() => {
        const activeTab = tabs.find((tab) => pathname.startsWith(tab.href))?.name;
        if (activeTab) {
            setActiveTab(activeTab);
        }
    }, [pathname]);

    // 브라우저 탭 제목 업데이트
    useEffect(() => {
        document.title = `${activeTab} | ${siteName}`;
    }, [activeTab]);

    //탭 클릭
    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // 탭 상태 업데이트
        setMenuOpen(false); // 모바일 메뉴 닫기
    };

    //토글 이벤트
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    //토글 닫기
    const closeMenu = () => {
        setMenuOpen(false);
    };


    useEffect(() => {
        // 화면 크기 변경 감지
        const handleResize = () => {
            if (window.innerWidth > tabletBreakpoint) {
                setMenuOpen(false); // PC 화면으로 전환 시 메뉴 닫기
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.svg" alt="Wible Biz" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    {tabs.map((tab) => (
                        <li
                            key={tab.name}
                            className={activeTab === tab.name ? styles.active : ''} // active 클래스 추가
                        >
                            <Link href={tab.href} onClick={() => handleTabClick(tab.name)}>
                                {tab.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* 햄버거 버튼 */}
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* 모바일 메뉴 */}
            <nav
                className={`${styles.mobile_nav} ${
                    isMenuOpen ? styles.navOpen : ''
                }`}
            >
                <ul>
                    {tabs.map((tab) => (
                        <li
                            key={tab.name}
                            className={activeTab === tab.name ? styles.active : ''}
                        >
                            <Link href={tab.href} onClick={() => handleTabClick(tab.name)}>
                                {tab.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

