'use client';

import { useEffect, useState } from 'react';
import './styles/globals.scss'; // 전역 스타일
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from "@/components/common/ScrollToTop";

export default function RootLayout({ children }) {
    const [mockingReady, setMockingReady] = useState(false);

    useEffect(() => {
        async function enableMocking() {
            if (process.env.NODE_ENV === 'development') {
                const { worker } = await import('@/mocks/browser'); // Mock Service Worker import
                await worker.start({
                    serviceWorker: {
                        url: '/mockServiceWorker.js',
                    },
                });
            }
            setMockingReady(true); // Mocking이 완료되면 상태 업데이트
        }
        enableMocking();
    }, []);

    if (!mockingReady) {
        // Mocking 준비가 완료되지 않은 경우 로딩 화면 표시
        return (
            <html lang="en">
            <body>
            <div></div>
            </body>
            </html>
        );
    }

    return (
        <html lang="en">
        <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <ScrollToTop />
        </div>
        </body>
        </html>
    );
}