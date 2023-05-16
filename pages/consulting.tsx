import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';
import ConsultingIntroSection from '@/components/consulting-page-components/ConsultingIntroSection';
import ConsultingAreasSection from '@/components/consulting-page-components/ConsultingAreasSection';
import ContactUsSection from '@/components/common-components/ContactUsSection';

const inter = Inter({ subsets: ['latin'] });

const ConsultingPage: NextPageWithLayout = () => {
  return (
    <main className="consulting-page-container">
      <ConsultingIntroSection />
      <ConsultingAreasSection />
      <ContactUsSection />
    </main>
  );
};

ConsultingPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ConsultingPage;
