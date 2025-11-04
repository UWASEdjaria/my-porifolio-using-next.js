import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Djaria Portfolio',
  description: 'Frontend Developer | UI/UX Designer Portfolio',
  keywords: ['Frontend', 'UI/UX', 'Developer', 'Portfolio', 'React', 'Next.js'],
  author: 'Uwase Djaria',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
