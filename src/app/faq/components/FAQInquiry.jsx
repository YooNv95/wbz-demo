import React from 'react';
import styles from './styles/FAQInquiry.module.scss';

export default function FAQInquiry() {
    return (
        <div className={styles.serviceInquiry}>
            <h2 className={styles.title}>서비스 문의</h2>
            <div className={styles.cardContainer}>
                {/* 상품제안서 다운로드 */}
                <a
                    className={styles.card}
                    href="/assets/media/proposal.pdf"
                    download="위블비즈 상품제안서"
                >
                    <img
                        src="/assets/icon_download.svg"
                        alt="상품제안서 다운로드"
                        className={styles.icon}
                    />
                    <span className={styles.text}>상품제안서 다운로드</span>
                </a>

                {/* 상담문의 등록하기 */}
                <a className={styles.card} href="/counsel">
                    <img
                        src="/assets/icon_write.svg"
                        alt="상담문의 등록하기"
                        className={styles.icon}
                    />
                    <span className={styles.text}>상담문의 등록하기</span>
                </a>

                {/* 카톡으로 문의하기 */}
                <a
                    className={styles.card}
                    href="https://pf.kakao.com/_xfLxjdb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/icon_talk.svg"
                        alt="카톡으로 문의하기"
                        className={styles.icon}
                    />
                    <span className={styles.text}>
                        카톡으로 문의하기 <em className={styles.subText}>ID: Wible Biz(위블 비즈)</em>
                    </span>
                </a>
            </div>
        </div>
    );
}