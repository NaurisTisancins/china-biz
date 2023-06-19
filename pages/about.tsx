import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import AboutThalesians from '@/components/about-page-components/AboutThalesians';
import Quote from '@/components/about-page-components/Quote';
import KeyPeopleSection from '@/components/about-page-components/KeyPeopleSection';
import ClientsSection from '@/components/about-page-components/ClientsSection';

const AboutPage: NextPageWithLayout = () => {
  return (
    <main className="about-page-container">
      <h1 className="primary-title">About Thalesians</h1>
      <AboutThalesians />
      <Quote />
      <KeyPeopleSection />
      <ClientsSection />
    </main>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;
