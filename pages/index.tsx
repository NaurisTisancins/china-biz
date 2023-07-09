import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';
import HeroTitleSection from '@/components/home-page-components/HeroTitleSection';
import ServicesSection from '@/components/home-page-components/ServicesSection';
import SelectedClientsSection from '@/components/home-page-components/SelectedClientsSection';
import Quote from '@/components/about-page-components/Quote';
import SeparatorLine from '@/components/generic/SeparatorLine';

const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="home-page-container">
      <HeroTitleSection />
      <ServicesSection />
      <SelectedClientsSection />
      <SeparatorLine />
      <Quote
        quote="“人工智能（Artificial
        Intelligence）作为新一代技术发展的催化剂，推动技术进步，优化各行业运营效率，处理复杂难题，革新行业模式，提升医疗标准，完善决策流程，成为塑造我们社会和经济格局不可或缺的工具。“
      "
      />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
