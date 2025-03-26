import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '다온',
  description: '디자인 회사 다온의 공식 홈페이지',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
