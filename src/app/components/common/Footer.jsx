import React from 'react';
import styles from '@/components/common/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* 로고 및 저작권 섹션 */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src="/logo_kia.svg" alt="KIA Logo" className={styles.logo} />
                    <p>© 2023 KIA CORP. All Rights Reserved.</p>
                </div>

                {/* 개인정보 처리방침 및 이용약관 */}
                <div className={styles.right}>
                    <ul>
                        <li><a href="/privacy">개인정보 처리방침</a></li>
                        <li><a href="/terms">이용약관</a></li>
                    </ul>
                    <ul>
                        <div className={styles.info}>
                            <span>서울특별시 서초구 헌릉로 12</span>
                            <span>| 기아(주)</span>
                            <span>| 대표: 송호성, 최준영</span>
                            <span>| 사업자등록번호: 119-81-02316</span>
                            <span>| 통신판매업신고: 2006-07935</span>
                            <span>| 고객센터: 1833-4964</span>
                            <span>| 제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a></span>
                        </div>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

