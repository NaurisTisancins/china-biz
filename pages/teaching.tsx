import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import AdultTrainingSection from '@/components/teaching-page-components/AdultTrainingSection';
import PreUniTeachingSection from '@/components/teaching-page-components/PreUniTeachingSection';
import ExecutiveCourses from '@/components/teaching-page-components/ExecutiveCourses';

const TeachingPage: NextPageWithLayout = () => {
  return (
    <main className="teaching-page-container">
      <AdultTrainingSection />
      <PreUniTeachingSection />
      <ExecutiveCourses />
    </main>
  );
};

TeachingPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default TeachingPage;
