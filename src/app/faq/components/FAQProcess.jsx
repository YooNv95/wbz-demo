import React from 'react';
import styles from './styles/FAQProcess.module.scss';

export default function FAQProcess() {
    return (
        <div className={styles.processGuide}>
            <h2 className={styles.title}>이용 프로세스 안내</h2>
            <div className={styles.stepsContainer}>
                {/* Step 1 */}
                <div className={styles.step}>
                    <img
                        src="/assets/icon_process1.svg"
                        alt="문의 등록"
                        className={styles.stepIcon}
                    />
                    <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>1. 문의 등록</h3>
                        <p className={styles.stepDescription}>
                            상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
                        </p>
                    </div>
                </div>
                <img src="/assets/icon_step_arrow.svg" alt="다음 단계" className={styles.arrow} />

                {/* Step 2 */}
                <div className={styles.step}>
                    <img
                        src="/assets/icon_process2.svg"
                        alt="관리자 설정"
                        className={styles.stepIcon}
                    />
                    <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>2. 관리자 설정</h3>
                        <p className={styles.stepDescription}>
                            관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
                        </p>
                    </div>
                </div>
                <img src="/assets/icon_step_arrow.svg" alt="다음 단계" className={styles.arrow} />

                {/* Step 3 */}
                <div className={styles.step}>
                    <img
                        src="/assets/icon_process3.svg"
                        alt="임직원 가입"
                        className={styles.stepIcon}
                    />
                    <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>3. 임직원 가입</h3>
                        <p className={styles.stepDescription}>
                            사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
                        </p>
                    </div>
                </div>
                <img src="/assets/icon_step_arrow.svg" alt="다음 단계" className={styles.arrow} />

                {/* Step 4 */}
                <div className={styles.step}>
                    <img
                        src="/assets/icon_process4.svg"
                        alt="서비스 이용"
                        className={styles.stepIcon}
                    />
                    <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>4. 서비스 이용</h3>
                        <p className={styles.stepDescription}>
                            사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}