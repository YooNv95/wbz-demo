import React from 'react';
import styles from './styles/FAQAppDownload.module.scss';

export default function FAQAppDownload() {
    return (
        <div className={styles.appDownloadContainer}>
            <h2 className={styles.title}>위블 비즈 App 지금 만나보세요!</h2>
            <div className={styles.buttons}>
                <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    <img
                        src="/assets/media/logo_googleplay.svg"
                        alt="Google Play"
                        className={styles.logo}
                    />
                    Google Play
                </a>
                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    <img
                        src="/assets/media/logo_appstore.svg"
                        alt="App Store"
                        className={styles.logo}
                    />
                    App Store
                </a>
            </div>
        </div>
    );
}