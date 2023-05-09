import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';
import HeroTitleSection from '@/components/home-page-components/HeroTitleSection';
import ServicesSection from '@/components/home-page-components/ServicesSection';

const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="home-page-container">
      <HeroTitleSection />
      <ServicesSection />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
