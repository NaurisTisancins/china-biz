import { Inter } from 'next/font/google';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPageWithLayout = () => {
  return <div>Hello from Home</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
