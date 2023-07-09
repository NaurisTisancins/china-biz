import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import AboutThalesians from '@/components/about-page-components/AboutThalesians';
import Quote from '@/components/about-page-components/Quote';
import KeyPeopleSection from '@/components/about-page-components/KeyPeopleSection';
import ClientsSection from '@/components/about-page-components/ClientsSection';
import SeparatorLine from '@/components/generic/SeparatorLine';

const AboutPage: NextPageWithLayout = () => {
  return (
    <main className="about-page-container">
      <h1 className="primary-title">About Thalesians</h1>
      <AboutThalesians />
      <SeparatorLine />
      <Quote
        quote="Quote引言： Thales是约公元前624年－546年
        生活在前苏格拉底时期的希腊数学家， 许多中学生都熟悉他的几何定理。 在The
        Thalesians泰勒斯人 我们也分享他的许多价值观，例如他的著名格言：
        “一个快乐的人被定义为一个身体健康的，灵魂富足的并随时可以接受教育的人“"
      />
      <SeparatorLine />
      <KeyPeopleSection />
      <SeparatorLine />

      <ClientsSection />
    </main>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;
