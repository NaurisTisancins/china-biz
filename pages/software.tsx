import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

const SoftwarePage: NextPageWithLayout = () => {
  return (
    <div className="home-page-container">
      Software development Past projects Contact us
    </div>
  );
};

SoftwarePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default SoftwarePage;
