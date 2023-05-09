import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className="about-page-container">
      <div>Hello From About Page</div>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;
