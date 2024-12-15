// app/Layout.jsx
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import './globals.scss';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}